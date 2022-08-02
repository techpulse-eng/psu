<#
[UniversalAutomation.AssemblyResolver]::Bind()
function Resolve-Variable {
    [CmdletBinding()]
    param($Name)

    $PSCmdlet.GetVariableValue($Name)
}
#>

function Start-PSUServer {
    [CmdletBinding()]
    param(
        [Parameter()]
        [string]$ExecutablePath,
        [Parameter()]
        [string]$ListenAddress,
        [Parameter()]
        [int]$Port, 
        [Parameter()]
        [ScriptBlock]$Configuration
    )

    if ([UniversalAutomation.RemoteCommand]::Configuration) {
        & $Configuration
        return
    }

    if (-not $PSBoundParameters.ContainsKey("ExecutablePath")) {
        $ExecutablePath = "Universal.Server"
        if ($PSVersionTable.PSEdition -eq 'Desktop' -or $IsWindows) {
            $ExecutablePath = "Universal.Server.exe"
        }
    }

    $Command = Get-Command $ExecutablePath -ErrorAction SilentlyContinue
    if ($null -eq $Command) {
        $ExecutablePath = Join-Path $PSScriptRoot $ExecutablePath
        $Command = Get-Command $ExecutablePath -ErrorAction SilentlyContinue
        if ($null -eq $Command) {
            throw 'Unable to locate the Universal Server executable. You can use Install-PSUServer the server for your platform. Use the -AddToPath parameter to add the installation directory the the PATH.'
        }
    }

    if ($PSVersionTable.PSEdition -ne 'Desktop' -and -not $IsWindows) {
        try {
            chmod +x $ExecutablePath
        }
        catch {
            Write-Warning "Failed to set executable flag. You may have to run 'chmod +x' yourself on $ExecutablePath. $_"
        }
    }

    if ($ListenAddress) {
        $Env:Kestrel__Endpoints__HTTP__Url = $ListenAddress
    }
    elseif ($PSBoundParameters.ContainsKey("Port")) {
        $Env:Kestrel__Endpoints__HTTP__Url = "http://*:$port"
    }

    if ($Configuration) {
        $scriptName = (Get-PSCallStack | Select-Object -Last 1).ScriptName
        if (-not $scriptName) {
            $scriptName = (Get-PSCallStack | Select-Object -Last 1 -Skip 1).ScriptName
        }
        $Env:Data__ConfigurationScript = $scriptName
    }

    $Process = Start-Process -FilePath $ExecutablePath -PassThru

    $Process
}

function Install-PSUServer {
    <#
    .SYNOPSIS
    Install the PowerShell Universal server.
    
    .DESCRIPTION
    Install the PowerShell Universal server. This is a convenience function that will install the server for your platform. On Windows, it will install the 
    server as a Windows service. On Linux, it will install the server as a systemd service. On Mac, it will install the server as a launchd service.
    
    .PARAMETER Path
    The path to store the PowerShell Universal binaries. If not specified, the default installation path will be used.
    
    .PARAMETER AddToPath
    Whether to add the path to the PATH environment variable.
    
    .PARAMETER Version
    The version of PowerShell Universal to install.
    
    .PARAMETER LatestVersion
    Install the most recent version. 
    
    .EXAMPLE
    Install-PSUServer
    #>
    [CmdletBinding(DefaultParameterSetName = "Version")]
    param(
        [Parameter()]
        [string]$Path,
        [Parameter(ParameterSetName = "Version")]
        [string]$Version = (Get-Module Universal).Version,
        [Parameter(ParameterSetName = "Latest")]
        [Switch]$LatestVersion,
        [Parameter()]
        [Switch]$AddToPath,
        [Parameter()]
        [string]$IISWebsite,
        [Parameter()]
        [string]$IISAppPool = "PowerShellUniversal",
        [Parameter()]
        [int]$IISPort
    )

    if ($IISWebsite -and ($IsLinux -or $IsMacOS)) {
        throw "IISWebsite is only supported on Windows."
    }

    if ($IISWebsite) {
        Import-Module WebAdministration -ErrorAction Stop
    }

    if ($AddToPath) {
        Write-Warning "-AddToPath is obsolete and will be removed in the next major version."
    }

    if ($platform -eq 'win7-x64' -and -not ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
        throw 'You must be an administrator to install the Universal Server. Please run the command as an administrator.'
    }

    $platform = "win7-x64";
    $folder = 'CommonApplicationData'
    if ($PSVersionTable.PSEdition -eq 'Core') {
        if ($IsLinux) {
            $platform = "linux-x64"
        }
        elseif ($IsMacOS) {
            $folder = 'ApplicationData'
            $platform = "osx-x64"
        }
    }

    if (-not $Path -and -not $IISWebsite) {
        $ProgramData = [System.Environment]::GetFolderPath($folder)
        $Path = [System.IO.Path]::Combine($ProgramData, "PowerShellUniversal", "Server")
    }

    if (-not $Path -and $IISWebsite) {
        $Path = "C:\inetpub\wwwroot\PowerShellUniversal"
        New-Item $Path -ItemType Directory | Out-Null
    }

    Write-Verbose "Installing server to $Path"

    if ($LatestVersion) {
        $Version = (Invoke-WebRequest https://imsreleases.blob.core.windows.net/universal/production/version.txt).Content
    }

    Write-Verbose "Downloading version $Version"

    $Temp = [System.IO.Path]::GetTempPath()
    $Zip = (Join-Path $Temp "Universal.$Version.$platform.zip")

    Remove-Item $Zip -Force -ErrorAction SilentlyContinue
    Invoke-WebRequest "https://imsreleases.blob.core.windows.net/universal/production/$version/Universal.$platform.$Version.zip" -OutFile $Zip

    Write-Verbose "Download complete. Unzipping to $Path"

    Expand-Archive -Path $Zip -DestinationPath $Path -Force
    Remove-Item $Zip -Force

    if (($PSVersionTable.PSEdition -eq 'Desktop' -or $IsWindows) -and -not $IISWebsite) {
        Write-Verbose "Creating and starting PowerShellUniversal service"
        New-Service -Name 'PowerShellUniversal' -DisplayName 'PowerShell Universal' -Description 'PowerShell Universal Server' -BinaryPathName "$Path\Universal.Server.exe --service" -StartupType Automatic | Out-Null
        Get-ChildItem $Path -Recurse | Unblock-File
        Start-Service -Name 'PowerShellUniversal'
        Write-Host -ForegroundColor Green 'PowerShell Universal is running on port 5000. View the admin console by visiting http://localhost:5000'
    }

    if ($IISWebsite) {
        New-WebAppPool -Name $IISAppPool | Out-Null
        New-Website -Name $IISWebsite -Port $IISPort -PhysicalPath $Path -ApplicationPool $IISAppPool | Out-Null
        Start-Website -Name $IISWebsite
    }

    if ($IsMacOS -or $IsLinux) {
        $ServerPath = Join-Path $Path "Universal.Server"
        /bin/chmod +x $ServerPath
    }

    if ($IsLinux) {
        Write-Verbose "Creating and starting PowerShellUniversal service"
        touch /etc/systemd/system/PowerShellUniversal.service
        chmod 664 /etc/systemd/system/PowerShellUniversal.service
        "[Unit]
        Description=PowerShell Universal
        
        [Service]
        ExecStart=$Path/Universal.Server
        
        [Install]
        WantedBy=multi-user.target" | Out-File /etc/systemd/system/PowerShellUniversal.service

        systemctl daemon-reload
        systemctl start PowerShellUniversal
        systemctl enable PowerShellUniversal
    }
    
    if ($PSVersionTable.PSEdition -eq 'Desktop' -or $IsWindows) {
        $PathSeparator = ";" 
        Write-Verbose "Adding $Path to %PATH% variable for the $Scope scope"
        $envPath = [Environment]::GetEnvironmentVariable('PATH', 'Machine')
        $newpath = $envPath + $PathSeparator + $Path
        [Environment]::SetEnvironmentVariable("PATH", $newpath, 'Machine')
    }
    else {
        Write-Verbose "Adding $Path to `$PATH variable"
        $PathSeparator = ":"
        $envPath = [Environment]::GetEnvironmentVariable('PATH')
        $newpath = $envPath + $PathSeparator + $Path
        [Environment]::SetEnvironmentVariable("PATH", $newpath)
    }
    
    $Env:PATH += $PathSeparator + $Path
    
}

function Update-PSUServer {
    <#
    .SYNOPSIS
    Update the PowerShell Universal server.
    
    .DESCRIPTION
    Update the PowerShell Universal server. This is a convenience function that will update the server for your platform. 
    
    .PARAMETER Path
    The path for the PowerShell Universal binaries. If not specified, the path will attempt to be resolved.
    
    .PARAMETER Version
    The version to upgrade to. 
    
    .PARAMETER LatestVersion
    Upgrade to the latest version. 
    
    .EXAMPLE
    Update-PSUServer
    #>
    [CmdletBinding(DefaultParameterSetName = "Version")]
    param(
        [Parameter()]
        [string]$Path,
        [Parameter(ParameterSetName = "Version")]
        [string]$Version = (Get-Module Universal).Version,
        [Parameter(ParameterSetName = "Latest")]
        [Switch]$LatestVersion,
        [Parameter()]
        [string]$IISWebsite
    )

    if ($platform -eq 'win7-x64' -and -not ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
        throw 'You must be an administrator to update the Universal Server. Please run the command as an administrator.'
    }

    if ($IISWebsite -and ($IsLinux -or $IsMacOS)) {
        throw "IISWebsite is only supported on Windows."
    }

    if ($IISWebsite) {
        Import-Module WebAdministration -ErrorAction Stop
    }

    $platform = "win7-x64";
    if ($PSVersionTable.PSEdition -eq 'Core') {
        if ($IsLinux) {
            $platform = "linux-x64"
        }
        elseif ($IsMacOS) {
            $platform = "osx-x64"
        }
    }

    if (-not $Path -and -not $IISWebsite) {
        if ($PSVersionTable.PSEdition -eq 'Desktop' -or $IsWindows) {
            $ServerPath = Get-Command "Universal.Server.exe" -ErrorAction SilentlyContinue
        }
        else {
            $ServerPath = Get-Command "Universal.Server" -ErrorAction SilentlyContinue
        }

        if (-not $ServerPath) {
            throw "Unable to locate existing PowerShell Universal installation. Use the -Path parameter to specify the folder of the previous installation."
        }

        $Path = [System.IO.Path]::GetDirectoryName($ServerPath.Source)
    }

    if (-not $Path -and $IISWebsite) {
        $Path = (Get-Website -Name $IISWebsite).PhysicalPath
    }

    Write-Verbose "Upgrading server installed at $Path"

    if ($LatestVersion) {
        $Version = (Invoke-WebRequest https://imsreleases.blob.core.windows.net/universal/production/version.txt).Content
    }

    Write-Verbose "Downloading version $Version"

    $Temp = [System.IO.Path]::GetTempPath()
    $Zip = (Join-Path $Temp "Universal.$Version.$platform.zip")
    Remove-Item $Zip -Force -ErrorAction SilentlyContinue

    if (($PSVersionTable.PSEdition -eq 'Desktop' -or $IsWindows) -and -not $IISWebsite) {
        Write-Verbose "Stopped PowerShellUniversal service"
        Stop-Service -Name 'PowerShellUniversal'
    }

    if ($IISWebsite) {
        $AppPool = (Get-Website -Name $IISWebsite).ApplicationPool
        Stop-Website -Name $IISWebsite
        Stop-WebAppPool -Name $AppPool
    }

    if ($IsLinux) {
        Write-Verbose "Stopped PowerShellUniversal service"
        systemctl stop PowerShellUniversal
        systemctl disable PowerShellUniversal
    }

    Remove-Item $Path -Force -Recurse
    Invoke-WebRequest "https://imsreleases.blob.core.windows.net/universal/production/$version/Universal.$platform.$Version.zip" -OutFile $Zip

    Write-Verbose "Download complete. Extracting to $Path"

    Expand-Archive -Path $Zip -DestinationPath $Path -Force
    Remove-Item $Zip -Force

    if (($PSVersionTable.PSEdition -eq 'Desktop' -or $IsWindows) -and -not $IISWebsite) {
        Get-ChildItem $Path -Recurse | Unblock-File
        Start-Service -Name 'PowerShellUniversal'
        Write-Verbose "Started PowerShellUniversal service"
    }

    if ($IISWebsite) {
        Get-ChildItem $Path -Recurse | Unblock-File
        Start-Website -Name $IISWebsite
    }

    if ($IsMacOS -or $IsLinux) {
        $ServerPath = Join-Path $Path "Universal.Server"
        /bin/chmod +x $ServerPath
    }

    if ($IsLinux) {
        Write-Verbose "Started PowerShellUniversal service"
        systemctl start PowerShellUniversal
        systemctl enable PowerShellUniversal
    }
}

function Remove-PSUServer {
    <#
    .SYNOPSIS
    Removes the PowerShell Universal server.
    
    .DESCRIPTION
    Removes the PowerShell Universal server. This is a convenience function that will remove the server for your platform.
    
    .PARAMETER Path
    The path to the PowerShell Universal binaries. If not specified, the path will attempt to be resolved.
    
    .EXAMPLE
    Remove-PSUServer
    #>
    [CmdletBinding(DefaultParameterSetName = "Version")]
    param(
        [Parameter()]
        [string]$Path,
        [Parameter()]
        [string]$IISWebsite
    )

    if (($PSVersionTable.PSEdition -eq 'Desktop' -or $IsWindows) -and -not ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
        throw 'You must be an administrator to remove the Universal Server. Please run the command as an administrator.'
    }

    if ($IISWebsite -and ($IsLinux -or $IsMacOS)) {
        throw "IISWebsite is only supported on Windows."
    }

    if ($IISWebsite) {
        Import-Module WebAdministration -ErrorAction Stop
    }

    if (-not $Path -and -not $IISWebsite) {
        if ($PSVersionTable.PSEdition -eq 'Desktop' -or $IsWindows) {
            $ServerPath = Get-Command "Universal.Server.exe" -ErrorAction SilentlyContinue
        }
        else {
            $ServerPath = Get-Command "Universal.Server" -ErrorAction SilentlyContinue
        }

        if (-not $ServerPath) {
            throw "Unable to locate existing PowerShell Universal installation. Use the -Path parameter to specify the folder of the previous installation."
        }

        $Path = [System.IO.Path]::GetDirectoryName($ServerPath.Source)
    }

    if (($PSVersionTable.PSEdition -eq 'Desktop' -or $IsWindows) -and -not $IISWebsite) {
        Write-Verbose "Stopped PowerShellUniversal service"
        Stop-Service -Name 'PowerShellUniversal'
        sc.exe delete "PowerShellUniversal" | Out-Null
    }

    if ($IISWebsite) {
        $Path = (Get-Website -Name $IISWebsite).PhysicalPath
        $AppPool = (Get-Website -Name $IISWebsite).ApplicationPool
        Stop-Website -Name $IISWebsite
        Remove-Website -Name $IISWebsite
        Remove-WebAppPool $AppPool
    }

    if ($IsLinux) {
        Write-Verbose "Stopped PowerShellUniversal service"
        systemctl stop PowerShellUniversal
        systemctl disable PowerShellUniversal
        Remove-Item /etc/systemd/system/PowerShellUniversal.service -Force 
        systemctl daemon-reload
    }

    Write-Verbose "Removing application files"
    Remove-Item $Path -Force -Recurse
}
# SIG # Begin signature block
# MIInGgYJKoZIhvcNAQcCoIInCzCCJwcCAQExCzAJBgUrDgMCGgUAMGkGCisGAQQB
# gjcCAQSgWzBZMDQGCisGAQQBgjcCAR4wJgIDAQAABBAfzDtgWUsITrck0sYpfvNR
# AgEAAgEAAgEAAgEAAgEAMCEwCQYFKw4DAhoFAAQUjxuwJOlMDYH1T55Tj7u3xFS9
# wkCggiDCMIIFsTCCBJmgAwIBAgIQASQK+x44C4oW8UtxnfTTwDANBgkqhkiG9w0B
# AQwFADBlMQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYD
# VQQLExB3d3cuZGlnaWNlcnQuY29tMSQwIgYDVQQDExtEaWdpQ2VydCBBc3N1cmVk
# IElEIFJvb3QgQ0EwHhcNMjIwNjA5MDAwMDAwWhcNMzExMTA5MjM1OTU5WjBiMQsw
# CQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3d3cu
# ZGlnaWNlcnQuY29tMSEwHwYDVQQDExhEaWdpQ2VydCBUcnVzdGVkIFJvb3QgRzQw
# ggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQC/5pBzaN675F1KPDAiMGkz
# 7MKnJS7JIT3yithZwuEppz1Yq3aaza57G4QNxDAf8xukOBbrVsaXbR2rsnnyyhHS
# 5F/WBTxSD1Ifxp4VpX6+n6lXFllVcq9ok3DCsrp1mWpzMpTREEQQLt+C8weE5nQ7
# bXHiLQwb7iDVySAdYyktzuxeTsiT+CFhmzTrBcZe7FsavOvJz82sNEBfsXpm7nfI
# SKhmV1efVFiODCu3T6cw2Vbuyntd463JT17lNecxy9qTXtyOj4DatpGYQJB5w3jH
# trHEtWoYOAMQjdjUN6QuBX2I9YI+EJFwq1WCQTLX2wRzKm6RAXwhTNS8rhsDdV14
# Ztk6MUSaM0C/CNdaSaTC5qmgZ92kJ7yhTzm1EVgX9yRcRo9k98FpiHaYdj1ZXUJ2
# h4mXaXpI8OCiEhtmmnTK3kse5w5jrubU75KSOp493ADkRSWJtppEGSt+wJS00mFt
# 6zPZxd9LBADMfRyVw4/3IbKyEbe7f/LVjHAsQWCqsWMYRJUadmJ+9oCw++hkpjPR
# iQfhvbfmQ6QYuKZ3AeEPlAwhHbJUKSWJbOUOUlFHdL4mrLZBdd56rF+NP8m800ER
# ElvlEFDrMcXKchYiCd98THU/Y+whX8QgUWtvsauGi0/C1kVfnSD8oR7FwI+isX4K
# Jpn15GkvmB0t9dmpsh3lGwIDAQABo4IBXjCCAVowDwYDVR0TAQH/BAUwAwEB/zAd
# BgNVHQ4EFgQU7NfjgtJxXWRM3y5nP+e6mK4cD08wHwYDVR0jBBgwFoAUReuir/SS
# y4IxLVGLp6chnfNtyA8wDgYDVR0PAQH/BAQDAgGGMBMGA1UdJQQMMAoGCCsGAQUF
# BwMIMHkGCCsGAQUFBwEBBG0wazAkBggrBgEFBQcwAYYYaHR0cDovL29jc3AuZGln
# aWNlcnQuY29tMEMGCCsGAQUFBzAChjdodHRwOi8vY2FjZXJ0cy5kaWdpY2VydC5j
# b20vRGlnaUNlcnRBc3N1cmVkSURSb290Q0EuY3J0MEUGA1UdHwQ+MDwwOqA4oDaG
# NGh0dHA6Ly9jcmwzLmRpZ2ljZXJ0LmNvbS9EaWdpQ2VydEFzc3VyZWRJRFJvb3RD
# QS5jcmwwIAYDVR0gBBkwFzAIBgZngQwBBAIwCwYJYIZIAYb9bAcBMA0GCSqGSIb3
# DQEBDAUAA4IBAQCaFgKlAe+B+w20WLJ4ragjGdlzN9pgnlHXy/gvQLmjH3xATjM+
# kDzniQF1hehiex1W4HG63l7GN7x5XGIATfhJelFNBjLzxdIAKicg6okuFTngLD74
# dXwsgkFhNQ8j0O01ldKIlSlDy+CmWBB8U46fRckgNxTA7Rm6fnc50lSWx6YR3zQz
# 9nVSQkscnY2W1ZVsRxIUJF8mQfoaRr3esOWRRwOsGAjLy9tmiX8rnGW/vjdOvi3z
# nUrDzMxHXsiVla3Ry7sqBiD5P3LqNutFcpJ6KXsUAzz7TdZIcXoQEYoIdM1sGwRc
# 0oqVA3ZRUFPWLvdKRsOuECxxTLCHtic3RGBEMIIGrjCCBJagAwIBAgIQBzY3tyRU
# fNhHrP0oZipeWzANBgkqhkiG9w0BAQsFADBiMQswCQYDVQQGEwJVUzEVMBMGA1UE
# ChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3d3cuZGlnaWNlcnQuY29tMSEwHwYD
# VQQDExhEaWdpQ2VydCBUcnVzdGVkIFJvb3QgRzQwHhcNMjIwMzIzMDAwMDAwWhcN
# MzcwMzIyMjM1OTU5WjBjMQswCQYDVQQGEwJVUzEXMBUGA1UEChMORGlnaUNlcnQs
# IEluYy4xOzA5BgNVBAMTMkRpZ2lDZXJ0IFRydXN0ZWQgRzQgUlNBNDA5NiBTSEEy
# NTYgVGltZVN0YW1waW5nIENBMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKC
# AgEAxoY1BkmzwT1ySVFVxyUDxPKRN6mXUaHW0oPRnkyibaCwzIP5WvYRoUQVQl+k
# iPNo+n3znIkLf50fng8zH1ATCyZzlm34V6gCff1DtITaEfFzsbPuK4CEiiIY3+va
# PcQXf6sZKz5C3GeO6lE98NZW1OcoLevTsbV15x8GZY2UKdPZ7Gnf2ZCHRgB720RB
# idx8ald68Dd5n12sy+iEZLRS8nZH92GDGd1ftFQLIWhuNyG7QKxfst5Kfc71ORJn
# 7w6lY2zkpsUdzTYNXNXmG6jBZHRAp8ByxbpOH7G1WE15/tePc5OsLDnipUjW8LAx
# E6lXKZYnLvWHpo9OdhVVJnCYJn+gGkcgQ+NDY4B7dW4nJZCYOjgRs/b2nuY7W+yB
# 3iIU2YIqx5K/oN7jPqJz+ucfWmyU8lKVEStYdEAoq3NDzt9KoRxrOMUp88qqlnNC
# aJ+2RrOdOqPVA+C/8KI8ykLcGEh/FDTP0kyr75s9/g64ZCr6dSgkQe1CvwWcZklS
# UPRR8zZJTYsg0ixXNXkrqPNFYLwjjVj33GHek/45wPmyMKVM1+mYSlg+0wOI/rOP
# 015LdhJRk8mMDDtbiiKowSYI+RQQEgN9XyO7ZONj4KbhPvbCdLI/Hgl27KtdRnXi
# YKNYCQEoAA6EVO7O6V3IXjASvUaetdN2udIOa5kM0jO0zbECAwEAAaOCAV0wggFZ
# MBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFLoW2W1NhS9zKXaaL3WMaiCP
# nshvMB8GA1UdIwQYMBaAFOzX44LScV1kTN8uZz/nupiuHA9PMA4GA1UdDwEB/wQE
# AwIBhjATBgNVHSUEDDAKBggrBgEFBQcDCDB3BggrBgEFBQcBAQRrMGkwJAYIKwYB
# BQUHMAGGGGh0dHA6Ly9vY3NwLmRpZ2ljZXJ0LmNvbTBBBggrBgEFBQcwAoY1aHR0
# cDovL2NhY2VydHMuZGlnaWNlcnQuY29tL0RpZ2lDZXJ0VHJ1c3RlZFJvb3RHNC5j
# cnQwQwYDVR0fBDwwOjA4oDagNIYyaHR0cDovL2NybDMuZGlnaWNlcnQuY29tL0Rp
# Z2lDZXJ0VHJ1c3RlZFJvb3RHNC5jcmwwIAYDVR0gBBkwFzAIBgZngQwBBAIwCwYJ
# YIZIAYb9bAcBMA0GCSqGSIb3DQEBCwUAA4ICAQB9WY7Ak7ZvmKlEIgF+ZtbYIULh
# sBguEE0TzzBTzr8Y+8dQXeJLKftwig2qKWn8acHPHQfpPmDI2AvlXFvXbYf6hCAl
# NDFnzbYSlm/EUExiHQwIgqgWvalWzxVzjQEiJc6VaT9Hd/tydBTX/6tPiix6q4XN
# Q1/tYLaqT5Fmniye4Iqs5f2MvGQmh2ySvZ180HAKfO+ovHVPulr3qRCyXen/KFSJ
# 8NWKcXZl2szwcqMj+sAngkSumScbqyQeJsG33irr9p6xeZmBo1aGqwpFyd/EjaDn
# mPv7pp1yr8THwcFqcdnGE4AJxLafzYeHJLtPo0m5d2aR8XKc6UsCUqc3fpNTrDsd
# CEkPlM05et3/JWOZJyw9P2un8WbDQc1PtkCbISFA0LcTJM3cHXg65J6t5TRxktcm
# a+Q4c6umAU+9Pzt4rUyt+8SVe+0KXzM5h0F4ejjpnOHdI/0dKNPH+ejxmF/7K9h+
# 8kaddSweJywm228Vex4Ziza4k9Tm8heZWcpw8De/mADfIBZPJ/tgZxahZrrdVcA6
# KYawmKAr7ZVBtzrVFZgxtGIJDwq9gdkT/r+k0fNX2bwE+oLeMt8EifAAzV3C+dAj
# fwAL5HYCJtnwZXZCpimHCUcr5n8apIUP/JiW9lVUKx+A+sDyDivl1vupL0QVSucT
# Dh3bNzgaoSv27dZ8/DCCBrAwggSYoAMCAQICEAitQLJg0pxMn17Nqb2TrtkwDQYJ
# KoZIhvcNAQEMBQAwYjELMAkGA1UEBhMCVVMxFTATBgNVBAoTDERpZ2lDZXJ0IElu
# YzEZMBcGA1UECxMQd3d3LmRpZ2ljZXJ0LmNvbTEhMB8GA1UEAxMYRGlnaUNlcnQg
# VHJ1c3RlZCBSb290IEc0MB4XDTIxMDQyOTAwMDAwMFoXDTM2MDQyODIzNTk1OVow
# aTELMAkGA1UEBhMCVVMxFzAVBgNVBAoTDkRpZ2lDZXJ0LCBJbmMuMUEwPwYDVQQD
# EzhEaWdpQ2VydCBUcnVzdGVkIEc0IENvZGUgU2lnbmluZyBSU0E0MDk2IFNIQTM4
# NCAyMDIxIENBMTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBANW0L0LQ
# KK14t13VOVkbsYhC9TOM6z2Bl3DFu8SFJjCfpI5o2Fz16zQkB+FLT9N4Q/QX1x7a
# +dLVZxpSTw6hV/yImcGRzIEDPk1wJGSzjeIIfTR9TIBXEmtDmpnyxTsf8u/LR1oT
# pkyzASAl8xDTi7L7CPCK4J0JwGWn+piASTWHPVEZ6JAheEUuoZ8s4RjCGszF7pNJ
# cEIyj/vG6hzzZWiRok1MghFIUmjeEL0UV13oGBNlxX+yT4UsSKRWhDXW+S6cqgAV
# 0Tf+GgaUwnzI6hsy5srC9KejAw50pa85tqtgEuPo1rn3MeHcreQYoNjBI0dHs6EP
# bqOrbZgGgxu3amct0r1EGpIQgY+wOwnXx5syWsL/amBUi0nBk+3htFzgb+sm+YzV
# svk4EObqzpH1vtP7b5NhNFy8k0UogzYqZihfsHPOiyYlBrKD1Fz2FRlM7WLgXjPy
# 6OjsCqewAyuRsjZ5vvetCB51pmXMu+NIUPN3kRr+21CiRshhWJj1fAIWPIMorTmG
# 7NS3DVPQ+EfmdTCN7DCTdhSmW0tddGFNPxKRdt6/WMtyEClB8NXFbSZ2aBFBE1ia
# 3CYrAfSJTVnbeM+BSj5AR1/JgVBzhRAjIVlgimRUwcwhGug4GXxmHM14OEUwmU//
# Y09Mu6oNCFNBfFg9R7P6tuyMMgkCzGw8DFYRAgMBAAGjggFZMIIBVTASBgNVHRMB
# Af8ECDAGAQH/AgEAMB0GA1UdDgQWBBRoN+Drtjv4XxGG+/5hewiIZfROQjAfBgNV
# HSMEGDAWgBTs1+OC0nFdZEzfLmc/57qYrhwPTzAOBgNVHQ8BAf8EBAMCAYYwEwYD
# VR0lBAwwCgYIKwYBBQUHAwMwdwYIKwYBBQUHAQEEazBpMCQGCCsGAQUFBzABhhho
# dHRwOi8vb2NzcC5kaWdpY2VydC5jb20wQQYIKwYBBQUHMAKGNWh0dHA6Ly9jYWNl
# cnRzLmRpZ2ljZXJ0LmNvbS9EaWdpQ2VydFRydXN0ZWRSb290RzQuY3J0MEMGA1Ud
# HwQ8MDowOKA2oDSGMmh0dHA6Ly9jcmwzLmRpZ2ljZXJ0LmNvbS9EaWdpQ2VydFRy
# dXN0ZWRSb290RzQuY3JsMBwGA1UdIAQVMBMwBwYFZ4EMAQMwCAYGZ4EMAQQBMA0G
# CSqGSIb3DQEBDAUAA4ICAQA6I0Q9jQh27o+8OpnTVuACGqX4SDTzLLbmdGb3lHKx
# AMqvbDAnExKekESfS/2eo3wm1Te8Ol1IbZXVP0n0J7sWgUVQ/Zy9toXgdn43ccsi
# 91qqkM/1k2rj6yDR1VB5iJqKisG2vaFIGH7c2IAaERkYzWGZgVb2yeN258TkG19D
# +D6U/3Y5PZ7Umc9K3SjrXyahlVhI1Rr+1yc//ZDRdobdHLBgXPMNqO7giaG9OeE4
# Ttpuuzad++UhU1rDyulq8aI+20O4M8hPOBSSmfXdzlRt2V0CFB9AM3wD4pWywiF1
# c1LLRtjENByipUuNzW92NyyFPxrOJukYvpAHsEN/lYgggnDwzMrv/Sk1XB+JOFX3
# N4qLCaHLC+kxGv8uGVw5ceG+nKcKBtYmZ7eS5k5f3nqsSc8upHSSrds8pJyGH+PB
# VhsrI/+PteqIe3Br5qC6/To/RabE6BaRUotBwEiES5ZNq0RA443wFSjO7fEYVgcq
# LxDEDAhkPDOPriiMPMuPiAsNvzv0zh57ju+168u38HcT5ucoP6wSrqUvImxB+YJc
# FWbMbA7KxYbD9iYzDAdLoNMHAmpqQDBISzSoUSC7rRuFCOJZDW3KBVAr6kocnqX9
# oKcfBnTn8tZSkP2vhUgh+Vc7tJwD7YZF9LRhbr9o4iZghurIr6n+lB3nYxs6hlZ4
# TjCCBsYwggSuoAMCAQICEAp6SoieyZlCkAZjOE2Gl50wDQYJKoZIhvcNAQELBQAw
# YzELMAkGA1UEBhMCVVMxFzAVBgNVBAoTDkRpZ2lDZXJ0LCBJbmMuMTswOQYDVQQD
# EzJEaWdpQ2VydCBUcnVzdGVkIEc0IFJTQTQwOTYgU0hBMjU2IFRpbWVTdGFtcGlu
# ZyBDQTAeFw0yMjAzMjkwMDAwMDBaFw0zMzAzMTQyMzU5NTlaMEwxCzAJBgNVBAYT
# AlVTMRcwFQYDVQQKEw5EaWdpQ2VydCwgSW5jLjEkMCIGA1UEAxMbRGlnaUNlcnQg
# VGltZXN0YW1wIDIwMjIgLSAyMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKC
# AgEAuSqWI6ZcvF/WSfAVghj0M+7MXGzj4CUu0jHkPECu+6vE43hdflw26vUljUOj
# ges4Y/k8iGnePNIwUQ0xB7pGbumjS0joiUF/DbLW+YTxmD4LvwqEEnFsoWImAdPO
# w2z9rDt+3Cocqb0wxhbY2rzrsvGD0Z/NCcW5QWpFQiNBWvhg02UsPn5evZan8Pyx
# 9PQoz0J5HzvHkwdoaOVENFJfD1De1FksRHTAMkcZW+KYLo/Qyj//xmfPPJOVToTp
# dhiYmREUxSsMoDPbTSSF6IKU4S8D7n+FAsmG4dUYFLcERfPgOL2ivXpxmOwV5/0u
# 7NKbAIqsHY07gGj+0FmYJs7g7a5/KC7CnuALS8gI0TK7g/ojPNn/0oy790Mj3+fD
# WgVifnAs5SuyPWPqyK6BIGtDich+X7Aa3Rm9n3RBCq+5jgnTdKEvsFR2wZBPlOyG
# Yf/bES+SAzDOMLeLD11Es0MdI1DNkdcvnfv8zbHBp8QOxO9APhk6AtQxqWmgSfl1
# 4ZvoaORqDI/r5LEhe4ZnWH5/H+gr5BSyFtaBocraMJBr7m91wLA2JrIIO/+9vn9s
# Exjfxm2keUmti39hhwVo99Rw40KV6J67m0uy4rZBPeevpxooya1hsKBBGBlO7Ueb
# YZXtPgthWuo+epiSUc0/yUTngIspQnL3ebLdhOon7v59emsCAwEAAaOCAYswggGH
# MA4GA1UdDwEB/wQEAwIHgDAMBgNVHRMBAf8EAjAAMBYGA1UdJQEB/wQMMAoGCCsG
# AQUFBwMIMCAGA1UdIAQZMBcwCAYGZ4EMAQQCMAsGCWCGSAGG/WwHATAfBgNVHSME
# GDAWgBS6FtltTYUvcyl2mi91jGogj57IbzAdBgNVHQ4EFgQUjWS3iSH+VlhEhGGn
# 6m8cNo/drw0wWgYDVR0fBFMwUTBPoE2gS4ZJaHR0cDovL2NybDMuZGlnaWNlcnQu
# Y29tL0RpZ2lDZXJ0VHJ1c3RlZEc0UlNBNDA5NlNIQTI1NlRpbWVTdGFtcGluZ0NB
# LmNybDCBkAYIKwYBBQUHAQEEgYMwgYAwJAYIKwYBBQUHMAGGGGh0dHA6Ly9vY3Nw
# LmRpZ2ljZXJ0LmNvbTBYBggrBgEFBQcwAoZMaHR0cDovL2NhY2VydHMuZGlnaWNl
# cnQuY29tL0RpZ2lDZXJ0VHJ1c3RlZEc0UlNBNDA5NlNIQTI1NlRpbWVTdGFtcGlu
# Z0NBLmNydDANBgkqhkiG9w0BAQsFAAOCAgEADS0jdKbR9fjqS5k/AeT2DOSvFp3Z
# s4yXgimcQ28BLas4tXARv4QZiz9d5YZPvpM63io5WjlO2IRZpbwbmKrobO/RSGkZ
# OFvPiTkdcHDZTt8jImzV3/ZZy6HC6kx2yqHcoSuWuJtVqRprfdH1AglPgtalc4jE
# mIDf7kmVt7PMxafuDuHvHjiKn+8RyTFKWLbfOHzL+lz35FO/bgp8ftfemNUpZYkP
# opzAZfQBImXH6l50pls1klB89Bemh2RPPkaJFmMga8vye9A140pwSKm25x1gvQQi
# FSVwBnKpRDtpRxHT7unHoD5PELkwNuTzqmkJqIt+ZKJllBH7bjLx9bs4rc3AkxHV
# MnhKSzcqTPNc3LaFwLtwMFV41pj+VG1/calIGnjdRncuG3rAM4r4SiiMEqhzzy35
# 0yPynhngDZQooOvbGlGglYKOKGukzp123qlzqkhqWUOuX+r4DwZCnd8GaJb+KqB0
# W2Nm3mssuHiqTXBt8CzxBxV+NbTmtQyimaXXFWs1DoXW4CzM4AwkuHxSCx6ZfO/I
# yMWMWGmvqz3hz8x9Fa4Uv4px38qXsdhH6hyF4EVOEhwUKVjMb9N/y77BDkpvIJyu
# 2XMyWQjnLZKhGhH+MpimXSuX4IvTnMxttQ2uR2M4RxdbbxPaahBuH0m3RFu0CAqH
# WlkEdhGhp3cCExwwggbZMIIEwaADAgECAhAHcarK1/GqyNy0oknpmrjpMA0GCSqG
# SIb3DQEBCwUAMGkxCzAJBgNVBAYTAlVTMRcwFQYDVQQKEw5EaWdpQ2VydCwgSW5j
# LjFBMD8GA1UEAxM4RGlnaUNlcnQgVHJ1c3RlZCBHNCBDb2RlIFNpZ25pbmcgUlNB
# NDA5NiBTSEEzODQgMjAyMSBDQTEwHhcNMjIwNDA2MDAwMDAwWhcNMjMwNDEzMjM1
# OTU5WjBeMQswCQYDVQQGEwJVUzEOMAwGA1UECBMFSWRhaG8xDzANBgNVBAcTBkhh
# aWxleTEWMBQGA1UEChMNQWRhbSBEcmlzY29sbDEWMBQGA1UEAxMNQWRhbSBEcmlz
# Y29sbDCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAKNie6ciLM7D+zS9
# jVjCp8hAHSRcFaIpqS4h+i20H2TIq88asFcZqO19s0g+m6NztcPBk3oMLH1LfGuN
# uooMwl42sMvJZoVHd0wxUE2N/NOS26Cb3AduIs+A9vxzXbg1RlI2emR7522KsHcK
# G/JAH29j5RMNSxEH7LiEWriiVP27O/TCU9yl3EeR/j1pVX3ovBOfJW+QPIczfuEW
# PW0CMUJNrwGfjhA5WOZRr+ce004s5scxtWuUPvXnsrqDNAhhjsPt7cjUBemTTove
# eTDdnaZ7418afo3dNDmx/tdQ4Lo/wc8zo5+v5wXMtatNFZ46AoF0rCby7XdA1CH0
# m/yAsPSQX7fGl7Q1uie0brs9wxez/V97iWU/4m0EUFAjLDfZxbRBNUWlNfw/lqtn
# PAJS+4h5vymcn4qf6iSBpTZ4Ez8TGyCxsltROdmV7rj6fo4xUmU+rbFQ28D+Pd1C
# JkSujxlBCyg+yS9aGiULBx66LkMreoZWB2PDILhAALBIuUBFkQIDAQABo4ICBjCC
# AgIwHwYDVR0jBBgwFoAUaDfg67Y7+F8Rhvv+YXsIiGX0TkIwHQYDVR0OBBYEFOLm
# Dx5h8lKoN5Ux+MHME17PXh6FMA4GA1UdDwEB/wQEAwIHgDATBgNVHSUEDDAKBggr
# BgEFBQcDAzCBtQYDVR0fBIGtMIGqMFOgUaBPhk1odHRwOi8vY3JsMy5kaWdpY2Vy
# dC5jb20vRGlnaUNlcnRUcnVzdGVkRzRDb2RlU2lnbmluZ1JTQTQwOTZTSEEzODQy
# MDIxQ0ExLmNybDBToFGgT4ZNaHR0cDovL2NybDQuZGlnaWNlcnQuY29tL0RpZ2lD
# ZXJ0VHJ1c3RlZEc0Q29kZVNpZ25pbmdSU0E0MDk2U0hBMzg0MjAyMUNBMS5jcmww
# PgYDVR0gBDcwNTAzBgZngQwBBAEwKTAnBggrBgEFBQcCARYbaHR0cDovL3d3dy5k
# aWdpY2VydC5jb20vQ1BTMIGUBggrBgEFBQcBAQSBhzCBhDAkBggrBgEFBQcwAYYY
# aHR0cDovL29jc3AuZGlnaWNlcnQuY29tMFwGCCsGAQUFBzAChlBodHRwOi8vY2Fj
# ZXJ0cy5kaWdpY2VydC5jb20vRGlnaUNlcnRUcnVzdGVkRzRDb2RlU2lnbmluZ1JT
# QTQwOTZTSEEzODQyMDIxQ0ExLmNydDAMBgNVHRMBAf8EAjAAMA0GCSqGSIb3DQEB
# CwUAA4ICAQAvvEEW+VSFvkz4/Eu6aAyg3XciMO+aQaNcb9Y3SdOV1jtxmhwu/YmV
# vbvsNwLaTOp5NOw9JXZI/0xyzbU7Ryghqrn50Xbq4OiVrxrF/P0yHd0+Uch1AhLJ
# UBFqct93TaNo/wRLAzH10nfP4bylHOBfIdsTkb4MaoB3VhvpuABEAY9GzU/IipXT
# HvhLVpv5he/yqXOLlnNB1sVlt2of11mOadSAd+L+x/L3jUxkTfiwd2TnOu0MxlKL
# NMYDtw+/zvx8FwK0xyxQH/W28MkfT8I43qjSd7/TRdNsi35fZwQzXzTvp+N/fzSW
# d1ur4DMsZ5rHzMFJKSu5KUwcuMdsNisJmxglkzjjBYjTDJgxrRaoDptORZLbvHlW
# ZuypWZLgn0y7NnaBOCRoip6mbPHTnX/lDmWcB3s4XPycVB5GtXn1yBpaLeo9w8AX
# 375s/Dyo+E7ipZgDrFpHG+jqhls69sz5yCeB3I9rASQgqBoamKZHok30Y88W8BEi
# Xb/IcJyBX2VTJj9RpQzM0qAoybFaqmqZJDPd7Hq9ucu9NHKxNnGb1rYbn7Wq2UfD
# ssFwNzt4+hB/vDsZQtK4uU23uwkaqgwTVBX3y0K0urSdA4sUfD1C2bzulOgLqgbE
# ORNriCmyq/VqyjA0iaf4ZMCh5CtOh2HX/amk6KAhZzxkXmZz907F5jGCBcIwggW+
# AgEBMH0waTELMAkGA1UEBhMCVVMxFzAVBgNVBAoTDkRpZ2lDZXJ0LCBJbmMuMUEw
# PwYDVQQDEzhEaWdpQ2VydCBUcnVzdGVkIEc0IENvZGUgU2lnbmluZyBSU0E0MDk2
# IFNIQTM4NCAyMDIxIENBMQIQB3GqytfxqsjctKJJ6Zq46TAJBgUrDgMCGgUAoHgw
# GAYKKwYBBAGCNwIBDDEKMAigAoAAoQKAADAZBgkqhkiG9w0BCQMxDAYKKwYBBAGC
# NwIBBDAcBgorBgEEAYI3AgELMQ4wDAYKKwYBBAGCNwIBFTAjBgkqhkiG9w0BCQQx
# FgQUgj6+8FViXDiTtjBOLqKFP9gce7AwDQYJKoZIhvcNAQEBBQAEggGAbMRrf2S4
# +0o8bIE08/TogBNsotCy35l+i1BUxFSoD1Iq2CZQlPeC+FRasp+/poFa5b44CURo
# P1vlBdyteLI+vR86W2Krd5YQJc9jPiY9bIbFyn14wwWn0BKqhacMak5iXfqiifJG
# Dw0aBNqAsp/6D1u9Oynw2IHozAZhL4h5w07aoowfg/60D/Pkw5v3pY8drYqhU5QW
# b9I5ICbau5e6cj0jb1A4DMOG7QT3uVE/vkbaQ9kQvIkR2F3Ao8UXEnVug9GQ+2ay
# /ed3tnoJe3DkRNLalh7BMS17OWUNwToPwp6AEi5VehM0Q+/e0C7i+tyQCU6/1pbg
# f/iEr416MnjlJsBWKl7GMxIZMLfsyFpSsOg53Vcdl+afHLAWfI0BjEMvwE8ltruB
# ihui0PpW5cwG6TZ0/sdw472KJpB/35bEdd7DVQGoi1HmNHpYWfiaWUr5+KACzNK+
# q3UAAu6YVmkwBWtdbyydlAF6MrIQNZzCRBNFgIRwOWtqRJUfk31Cp7mBoYIDIDCC
# AxwGCSqGSIb3DQEJBjGCAw0wggMJAgEBMHcwYzELMAkGA1UEBhMCVVMxFzAVBgNV
# BAoTDkRpZ2lDZXJ0LCBJbmMuMTswOQYDVQQDEzJEaWdpQ2VydCBUcnVzdGVkIEc0
# IFJTQTQwOTYgU0hBMjU2IFRpbWVTdGFtcGluZyBDQQIQCnpKiJ7JmUKQBmM4TYaX
# nTANBglghkgBZQMEAgEFAKBpMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJ
# KoZIhvcNAQkFMQ8XDTIyMDYxNjE5MjcxMFowLwYJKoZIhvcNAQkEMSIEINquVo35
# NWUPf8bRbTDh7ttfjFpUyA6qxCx83Q3U0xCtMA0GCSqGSIb3DQEBAQUABIICACII
# oHLSjIKHceleHqnBKsFeRnacGLA7wO9sUOPZny/DVGZfxuLVA420Fm0lblBJ8898
# FHr69LMaT7Y9pYKHI+NavVp+qzO/KbjlyehvrrnwBmyeqXjrvAJKg0b5DtNGlYCI
# vhMZHO1D7MDywcAodCPjIkWyQ/3bsiMTZogzfZGuZ/DPi703Nbg9JqPSocqwoCB9
# R6Qwwmq8sqDu5avvFgpAOEWQhZPpSz2mxMUVOqFVMNTbS5jzth2KLeYqSxt8AF9D
# QkkxF3+8oTAIbuUkK3lC1cbBFjac6Akqas2/fVBNQZShtFmm2LDSWUdmsxf2CcZd
# 4OmdUcsmg7gFE9VKxcxacE0evaSvurVo7om0QcWGQ9TlgeqYFTGevgc+Jd6NYJ3D
# AyuAFw6WXBOapYFIMi6yJNOunCZ10Qf5Llhuf6T/GMiwZrOj9bfIjji4cMwDFfMz
# lCU4YRjxbfA53dCWHu1i6kpFDTHLfdLbz3rBong95T2LlyIneTOUEkG5vTilJj3U
# c+8jSVHzUn7/0TyjXx6e/3B35BTHP/bB1w7qV6INMq/MYYFzNBQ1/uPMNm531RH6
# 7b/UsC9cRHaHOtOPRAR6935YVjCjfpMk1qeTIgqJ7vdxdzc4ZdjXiYtEzggEJvjV
# 1MJUAFcMO4WIq0SpK541RPhHr9r/2QluQ4lv2i0S
# SIG # End signature block
