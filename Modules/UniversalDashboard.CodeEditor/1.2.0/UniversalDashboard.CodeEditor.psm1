$IndexJs = Get-ChildItem "$PSScriptRoot\index.*.bundle.js"
$JsFiles = Get-ChildItem "$PSScriptRoot\*.js"
$Maps = Get-ChildItem "$PSScriptRoot\*.map"
$Pngs = Get-ChildItem "$PSScriptRoot\*.png"

$Script:MonacoAssetId = [UniversalDashboard.Services.AssetService]::Instance.RegisterAsset($IndexJs.FullName)

foreach ($item in $JsFiles) {
    [UniversalDashboard.Services.AssetService]::Instance.RegisterAsset($item.FullName) | Out-Null
}

foreach ($item in $Maps) {
    [UniversalDashboard.Services.AssetService]::Instance.RegisterAsset($item.FullName) | Out-Null
}

$Pngs = Get-ChildItem "$PSScriptRoot\*.png"
foreach ($item in $Pngs) {
    [UniversalDashboard.Services.AssetService]::Instance.RegisterAsset($item.FullName) | Out-Null
}


function script:New-UDCodeEditor {
    <#
    .SYNOPSIS
    Creates a new Monaco code editor control.
    
    .DESCRIPTION
    Creates a new Monaco code editor control.
    
    .PARAMETER Id
    The ID of this editor
    
    .PARAMETER Language
    The language to use for syntax highlighting.
    
    .PARAMETER Height
    The height of the editor.
    
    .PARAMETER Width
    The width of the editor.
    
    .PARAMETER HideCodeLens
    Hides code lens within th editor.
    
    .PARAMETER DisableCodeFolding
    Disables code folding.
    
    .PARAMETER FormatOnPaste
    Formats on paste.
    
    .PARAMETER GlyphMargin
    Seconds the size of the glyph margin
    
    .PARAMETER DisableLineNumbers
    Disables line numbers
    
    .PARAMETER DisableLinks
    Disables automatically highlighting links.
    
    .PARAMETER DisableBracketMatching
    Disables bracket matching. 
    
    .PARAMETER MouseWheelScrollSensitivity
    Sets the mouse wheel scroll sensitivity.
    
    .PARAMETER MouseWheelZoom
    Enables Ctrl+Scroll zooming. 
    
    .PARAMETER ReadOnly
    Sets the editor to readonly.
    
    .PARAMETER RenderControlCharacters
    Enables rendering of control characters.
    
    .PARAMETER ShowFoldingControls
    Controls how to show the folding controls. 
    
    .PARAMETER SmoothScrolling
    Enables smooth scrolling.
    
    .PARAMETER Theme
    Selects the theme. The default is the 'vs' theme. 
    
    .PARAMETER Code
    The code to show in the editor. 
    
    .EXAMPLE
    New-UDCodeEditor -Code 'Get-Process' -Theme 'vs-dark' -Language 'powershell' -Readonly 

    Creates a readonly code editor with PowerShell script. 
    #>
    
    [CmdletBinding(DefaultParameterSetName = "Standard")]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [ValidateSet('apex', 'azcli', 'bat', 'clojure', 'coffee', 'cpp', 'csharp', 'csp', 'css', 'dockerfile', 'fsharp', 'go', 'handlebars', 'html', 'ini', 'java', 'javascript', 'json', 'less', 'lua', 'markdown', 'msdax', 'mysql', 'objective', 'perl', 'pgsql', 'php', 'postiats', 'powerquery', 'powershell', 'pug', 'python', 'r', 'razor', 'redis', 'redshift', 'ruby', 'rust', 'sb', 'scheme', 'scss', 'shell', 'solidity', 'sql', 'st', 'swift', 'typescript', 'vb', 'xml', 'yaml')]
        [string]$Language,
        [Parameter()]
        [string]$Height,
        [Parameter()]
        [string]$Width,
        [Parameter(ParameterSetName = 'Standard')]
        [Switch]$HideCodeLens,
        [Parameter(ParameterSetName = 'Standard')]
        [Switch]$DisableCodeFolding,
        [Parameter(ParameterSetName = 'Standard')]
        [Switch]$FormatOnPaste,
        [Parameter(ParameterSetName = 'Standard')]
        [Switch]$GlyphMargin,
        [Parameter(ParameterSetName = 'Standard')]
        [Switch]$DisableLineNumbers,
        [Parameter(ParameterSetName = 'Standard')]
        [Switch]$DisableLinks,
        [Parameter(ParameterSetName = 'Standard')]
        [Switch]$DisableBracketMatching,
        [Parameter(ParameterSetName = 'Standard')]
        [int]$MouseWheelScrollSensitivity = 1,
        [Parameter(ParameterSetName = 'Standard')]
        [Switch]$MouseWheelZoom,
        [Parameter(ParameterSetName = 'Standard')]
        [Switch]$ReadOnly,
        [Parameter(ParameterSetName = 'Standard')]
        [Switch]$RenderControlCharacters,
        [Parameter(ParameterSetName = 'Standard')]
        [ValidateSet("always", "mouseover")]
        [string]$ShowFoldingControls = "mouseover",
        [Parameter(ParameterSetName = 'Standard')]
        [Switch]$SmoothScrolling,
        [Parameter(ParameterSetName = 'Standard')]
        [ValidateSet("vs", "vs-dark", "hc-black")]
        [string]$Theme = 'vs',
        [Parameter()]
        [string]$Code,
        [Parameter()]
        [string]$Original,
        [Parameter(ParameterSetName = 'Standard')]
        [Switch]$Autosize,
        [Parameter(ParameterSetName = 'Options')]
        [Hashtable]$Options = @{},
        [Parameter()]
        [Switch]$CanSave,
        [Parameter()]
        [String]$Extension = 'txt'
    )

    End {

        # if ($Endpoint -is [scriptblock]) {
        #     $Endpoint = New-UDEndpoint -Endpoint $Endpoint -Id $Id
        # }
        # elseif ($Endpoint -isnot [UniversalDashboard.Models.Endpoint]) {
        #     throw "Endpoint must be a script block or UDEndpoint"
        # }

        if ($PSCmdlet.ParameterSetName -eq 'Options') {
            $Options["assetId"] = $MonacoAssetId
            $Options["isPlugin"] = $true 
            $Options["type"] = "ud-monaco"
            $Options["id"] = $Id 
            $Options["height"] = $Height 
            $Options["width"] = $Width 
            $Options["language"] = $Language 
            $Options["code"] = $code 
            $Options["original"] = $original 

            return $Options
        }

        @{
            assetId                     = $MonacoAssetId 
            isPlugin                    = $true 
            type                        = "ud-monaco"
            id                          = $Id

            height                      = $Height
            width                       = $Width
            language                    = $Language 
            codeLens                    = -not $HideCodeLens.IsPresent
            folding                     = -not $DisableCodeFolding.IsPresent
            formatOnPaste               = $FormatOnPaste.IsPresent
            glyphMargin                 = $GlyphMargin.IsPresent
            lineNumbers                 = if ($DisableLineNumbers.IsPresent) { "off" } else { "on" }
            links                       = -not $DisableLinks.IsPresent
            matchBrackets               = -not $DisableBracketMatching.IsPresent
            mouseWheelScrollSensitivity = $MouseWheelScrollSensitivity
            mouseWheelZoom              = $MouseWheelZoom.IsPresent
            readOnly                    = $ReadOnly.IsPresent
            renderControlCharacters     = $RenderControlCharacters.IsPresent
            showFoldingControls         = $ShowFoldingControls
            smoothScrolling             = $SmoothScrolling.IsPresent
            theme                       = $Theme
            code                        = $Code
            original                    = $Original
            autosize                    = $Autosize.IsPresent
            canSave                     = $CanSave.IsPresent
            extension                   = $Extension
        }
    }
}
# SIG # Begin signature block
# MIInGgYJKoZIhvcNAQcCoIInCzCCJwcCAQExCzAJBgUrDgMCGgUAMGkGCisGAQQB
# gjcCAQSgWzBZMDQGCisGAQQBgjcCAR4wJgIDAQAABBAfzDtgWUsITrck0sYpfvNR
# AgEAAgEAAgEAAgEAAgEAMCEwCQYFKw4DAhoFAAQUa/KD/brvNDC9awVKctFyiYdh
# 7sCggiDCMIIFsTCCBJmgAwIBAgIQASQK+x44C4oW8UtxnfTTwDANBgkqhkiG9w0B
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
# FgQUk0SIMDvo2oAIKE00qrZkQRdWIicwDQYJKoZIhvcNAQEBBQAEggGAJKAoW2td
# uU9o1zH/zxO2BvTiyBe0mR1+MFjjZokAZI0UdqDZOnh2vgYqHB9AvP6ofsWjpAMq
# pBm41oQhJvtjEkgjurJyZi6FCv3sTDmXx5Dn//eoK6n3skJfUb1JEyivlbh/USez
# Vdto2DFP4i20IE30HB2vby4dmJTRlnh4z05pa5dmo9xykRP/3POrndB8w+qitXkT
# 84BMNNZALSer7aFM+5DR5PKDncPcM7KYc3nbr8uIy8DHVPDONTsqiLk+5tp+FvBE
# lnwHpjThvcpNFxbaJWu6pr+zq2le5NRT4eEqtpp/khteKlGCgb/srqJjh+RDQ88c
# S7obwTcPqMzJt87zFD9mZ6VtQfk3Ks3iYmkA5wETpmWCciE1swJxQgctIOq35NS8
# L6IkV6a4WjwTrQKXgiZuJSA1XK8XDH6sNF/b7WelYnHOGNuxkjIQxGBJjmlQPilz
# vzDr76CR0MjLG7ZS4jD2zq3D1UOhyiVWBO8Ls0Lp11rGc220GCvJfVeMoYIDIDCC
# AxwGCSqGSIb3DQEJBjGCAw0wggMJAgEBMHcwYzELMAkGA1UEBhMCVVMxFzAVBgNV
# BAoTDkRpZ2lDZXJ0LCBJbmMuMTswOQYDVQQDEzJEaWdpQ2VydCBUcnVzdGVkIEc0
# IFJTQTQwOTYgU0hBMjU2IFRpbWVTdGFtcGluZyBDQQIQCnpKiJ7JmUKQBmM4TYaX
# nTANBglghkgBZQMEAgEFAKBpMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJ
# KoZIhvcNAQkFMQ8XDTIyMDYxNjE5MjcxMFowLwYJKoZIhvcNAQkEMSIEIKGtEFU9
# /5LgsywguMWuJOZwtR/g5+0qkjGorfMv44M6MA0GCSqGSIb3DQEBAQUABIICALJ6
# X6FwVRrK9jELGzgU2R5//m/Xms5KOo3GEt9azMCHiWLdIvzXYGOXMHiV/QDxwOHZ
# iTyV+y5FLkYcnISVMJYE1C/+LNQNNWbWbCZ3nEPLG9Jf3LgZZYZkiqAEgcJAoz/9
# /HmohbLsnAc3cMBQybYK2k2XJKuA+0Fh7jMqNr8g+rfZnQqBjRhXeBe4Kh12xhfn
# 5Vq/VUCcR/z/op8y8Tox4+23xU67NgUh8vI9EkxetZlSx3FUU0T7pJNNt0YgDfDM
# 9ZI9HJrx9GS6URNx44M9WDyh1i6+f3FXqm4q0g6xhiRqaH+zAm6zu3Z+K4lTAJ06
# MKGBjCLmz4Y0nFC1JmuCc6M3t/UxGHsrnlXyX/FoS+RkzG3k4P0DUhdg3vEjrRBA
# USaMQU1OUx+NaWe0xyllV2zP8x+EqxNrjsKEn5TYveB/FlLkc23eNuhnnsFS32VL
# +gNKs8rZK1hFRhR8xKOGYhE0x7oktiiLWXY9JM26Ekx+0Lqlb8yC0sXstMBdYvZN
# rs5wojhdx7UNw2JUFRibwm0EYB/IdhWOlbIjstr4HBeRczikJzJkOBU7QYjivV55
# WH3LfhFramrj3jODl8m6bhkloXFp1QrFvYYdNH6za6rV9ztoYY0IbQEFTvVnesOG
# khTizJWludPmRvrCMBjmrB3wm3RwHZkBdHz03EnB
# SIG # End signature block
