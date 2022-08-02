
if ($Env:Debug -eq $true) {
    $AssetId = [UniversalDashboard.Services.AssetService]::Instance.RegisterAsset("http://localhost:10000/map.index.bundle.js")
    [UniversalDashboard.Services.AssetService]::Instance.RegisterAsset("http://localhost:10000/layers.png") | Out-Null
    [UniversalDashboard.Services.AssetService]::Instance.RegisterAsset("http://localhost:10000/marker-shadow.png") | Out-Null
    [UniversalDashboard.Services.AssetService]::Instance.RegisterAsset("http://localhost:10000/marker-icon.png") | Out-Null
    [UniversalDashboard.Services.AssetService]::Instance.RegisterAsset("http://localhost:10000/marker-icon-2x.png") | Out-Null
} else {
    $IndexJs = Get-ChildItem "$PSScriptRoot\index.*.bundle.js"
    $JsFiles = Get-ChildItem "$PSScriptRoot\*.bundle.js"
    $Maps = Get-ChildItem "$PSScriptRoot\*.map"
    $Pngs = Get-ChildItem "$PSScriptRoot\*.png"

    $AssetId = [UniversalDashboard.Services.AssetService]::Instance.RegisterAsset($IndexJs.FullName)
    
    foreach($item in $JsFiles)
    {
        [UniversalDashboard.Services.AssetService]::Instance.RegisterAsset($item.FullName) | Out-Null
    }

    foreach($item in $Maps)
    {
        [UniversalDashboard.Services.AssetService]::Instance.RegisterAsset($item.FullName) | Out-Null
    }

    $Pngs = Get-ChildItem "$PSScriptRoot\*.png"
    foreach($item in $Pngs)
    {
        [UniversalDashboard.Services.AssetService]::Instance.RegisterAsset($item.FullName) | Out-Null
    }
}
function New-UDMapBaseLayer {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(Mandatory)]
        [string]$Name,
        [Parameter(Mandatory)]
        [ScriptBlock]$Content,
        [Parameter()]
        [Switch]$Checked
    )

    @{
        type = "map-base-layer"
        isPlugin = $true
        assetId = $AssetId
        id = $Id
        name = $Name
        content = & $Content
        checked = $Checked.IsPresent
    }
}
function New-UDMapMarkerClusterLayer {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [Hashtable[]]$Markers,
        [Parameter()]
        [int]$MinimumClusterSize = 2,
        [Parameter()]
        [int]$GridSize = 60
    )

    @{
        type = "map-cluster-layer"
        isPlugin = $true
        assetId = $assetId 

        id = $id 
        markers = $Markers
        minClusterSize = $MinimumClusterSize
        gridSize = $GridSize
    }
}
function New-UDMapFeatureGroup 
{
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [Hashtable]$Popup,
        [Parameter(Mandatory)]
        [ScriptBlock]$Content
    )

    End {
        @{
            type = 'map-feature-group'
            id = $id 
            isPlugin = $true
            assetId = $AssetId
            content = & $Content 
            popup = $Popup
        }
    }
}
function ConvertFrom-GeoJson {
    param(
        [Parameter(Mandatory, ValueFromPipeline)]
        [PSCustomObject[]]$GeoJson,
        [Parameter()]
        [PSCustomObject[]]$Icons
    )

    Process {
        $Json = $GeoJson 

        $Json | ForEach-Object {
            if ($_.type -eq 'FeatureCollection') {
                $features = foreach($Feature in $_.features)
                {
                    $Feature | ConvertFrom-GeoJson -Icons $Icons
                }

                New-UDMapOverlay -Name $_.properties.name -Content {
                    New-UDMapFeatureGroup -Content { $features }
                } -Checked
            }

            if ($_.type -eq 'feature') {
                $Geometry = $_.geometry | ConvertFrom-GeoJson -Icons $Icons
                
                if ($_.properties.DisplayText) {
                    $Geometry.Popup = New-UDMapPopup -Content { New-UDHtml $_.properties.DisplayText }
                }

                if ($_.style.color -and $Geometry.type -ne "map-marker") {
                    $Geometry.FillColor = $_.style.color
                    $Geometry.Color = $_.style.color

                    if ($_.style.weight) {
                        $Geometry.Weight = $_.style.weight
                    }
                }

                if ($_.style.color -and $Geometry.type -eq "map-marker") {

                    $iconName = $_.style.color
                    $Icon = $Icons | Where-Object {
                        $_.IconName -eq $iconName
                    }

                    if ($null -ne $Icon) {
                        $Geometry.Icon = New-UDMapIcon -Url "http://emaps.papertransport.com/e_img/$($Icon.IconFileName)" -Width $Icon.IconWidth -Height $Icon.IconHeight -AnchorX $Icon.IconAnchorX -AnchorY $Icon.IconHeight -PopupAnchorX $Icon.IconPopupX -PopupAnchorY $Icon.IconPopupY
                    }
                }

                $Geometry
            }

            if ($_.type -eq 'polygon') {
                $Coordinates = @()
                $_.coordinates[0] | ForEach-Object {
                    $temp = $_[0]
                    $_[0] = $_[1]
                    $_[1] = $temp

                    $Coordinates += ,$_
                }

                New-UDMapVectorLayer -Polygon -Positions $Coordinates -FillOpacity .5
            }

            if ($_.type -eq 'point') {
                $Coordinates = $_.coordinates

                New-UDMapMarker -Latitude $coordinates[1] -Longitude $coordinates[0] -Zindex $_.style.zIndexOffset
            }

            if ($_.type -eq 'linestring') {
                $Coordinates = $_.coordinates

                New-UDMapMarker -Latitude $coordinates[1] -Longitude $coordinates[0] -Zindex $_.style.zIndexOffset
            }

            if ($_.type -eq 'MultiLineString') {
                $Coordinates = @()
                foreach($array in $_.coordinates) {
                    foreach($arrayInArray in $array) {
                        $temp = $arrayInArray[0]
                        $arrayInArray[0] = $arrayInArray[1]
                        $arrayInArray[1] = $temp
    
                        $Coordinates += ,$arrayInArray
                    }
                }

                New-UDMapVectorLayer -Polyline -Positions $Coordinates
            }
        }
    }
}
function New-UDMapHeatmapLayer {
    param(
        [Parameter(Mandatory)]
        $Points,
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [double]$MaxIntensity,
        [Parameter()]
        [double]$Radius,
        [Parameter()]
        [int]$MaxZoom,
        [Parameter()]
        [double]$MinOpacity,
        [Parameter()]
        [int]$Blur,
        [Parameter()]
        [Hashtable]$Gradient
    )

    $Options = @{
        type = 'map-heatmap-layer'
        isPlugin = $true
        assetId = $AssetId
    }

    foreach($boundParameter in $PSCmdlet.MyInvocation.BoundParameters.GetEnumerator()) {
        $Options[[char]::ToLowerInvariant($boundParameter.Key[0]) + $boundParameter.Key.Substring(1)] = $boundParameter.Value
    }

    $Options
}
function New-UDMapIcon {
    param(
        [Parameter(Mandatory)]
        [string]$Url,
        [Parameter()]
        [int]$Height,
        [Parameter()]
        [int]$Width,
        [Parameter()]
        [int]$AnchorX,
        [Parameter()]
        [int]$AnchorY,
        [Parameter()]
        [int]$PopupAnchorX,
        [Parameter()]
        [int]$PopupAnchorY
    )

    $Options = @{
    }

    foreach($boundParameter in $PSCmdlet.MyInvocation.BoundParameters.GetEnumerator()) {
        $Options[[char]::ToLowerInvariant($boundParameter.Key[0]) + $boundParameter.Key.Substring(1)] = $boundParameter.Value
    }

    $Options
}
function New-UDMapLayerControl {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [ValidateSet("topright", "topleft", "bottomright", "bottomleft")]
        [string]$Position = "topright",
        [Parameter()]
        [ScriptBlock]$Content
    )

    @{
        type = 'map-layer-control'
        isPlugin = $true
        assetId = $AssetId
        id = $Id
        content = & $Content
        position = $Position
    }
}
function New-UDMap {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [float]$Longitude,
        [Parameter()]
        [float]$Latitude,
        [Parameter()]
        [int]$Zoom,
        [Parameter()]
        [string]$Height = '500px',
        [Parameter()]
        [string]$Width = '100%',
        [Parameter(Mandatory)]
        [object]$Endpoint,
        [ValidateSet("topright", "topleft", "bottomright", "bottomleft")]
        [string]$ZoomControlPosition = "topright",
        [ValidateSet("topright", "topleft", "bottomright", "bottomleft", "hide")]
        [string]$ScaleControlPosition = "bottomleft",
        [Parameter()]
        [Switch]$Animate,
        [Parameter()]
        [int]$MaxZoom = 18
    )

    End {

        if ($Endpoint -is [scriptblock]) {
            $Endpoint = New-UDEndpoint -Endpoint $Endpoint -Id $Id
        }
        elseif ($Endpoint -isnot [UniversalDashboard.Models.Endpoint]) {
            throw "Endpoint must be a script block or UDEndpoint"
        }

        @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-map"
            id = $Id

            longitude = $Longitude
            latitude = $Latitude
            zoom = $Zoom
            height = $Height
            width = $Width
            zoomControlPosition = $ZoomControlPosition
            animate = $Animate.IsPresent
            scaleControlPosition = $ScaleControlPosition
            maxZoom = $MaxZoom
        }
    }
}
function New-UDMapMarker {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(ParameterSetName = "LatLng", Mandatory)]
        [float]$Longitude,
        [Parameter(ParameterSetName = "LatLng", Mandatory)]
        [float]$Latitude,
        [Parameter()]
        [string]$Attribution,
        [Parameter()]
        [int]$Opacity,
        [Parameter()]
        [int]$ZIndex,
        [Parameter()]
        [Hashtable]$Popup,
        [Parameter()]
        [Hashtable]$Icon,
        [Parameter(ParameterSetName = "GeoJSON", Mandatory)]
        [string]$GeoJSON
    )

    if ($PSCmdlet.ParameterSetName -eq 'GeoJSON') {
        $Json = $GeoJSON | ConvertFrom-Json
        $Coordinates = $Json.Geometry.Coordinates
        $Latitude = $Coordinates[1]
        $Longitude = $Coordinates[0]
    }

    @{
        type = "map-marker"
        isPlugin = $true
        assetId = $AssetId

        id = $id 
        longitude = $Longitude
        latitude = $Latitude
        attribution = $Attribution
        opacity = $Opacity
        zIndex = $ZIndex
        popup = $Popup 
        icon = $Icon
    }
}
function New-UDMapOverlay {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(Mandatory)]
        [string]$Name,
        [Parameter(Mandatory)]
        [ScriptBlock]$Content,
        [Parameter()]
        [Switch]$Checked
    )

    @{
        type = 'map-overlay'
        isPlugin = $true
        assetId = $AssetId

        id = $id
        name = $Name 
        content = & $Content
        checked = $Checked.IsPresent
    }
}
function New-UDMapPopup {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [ScriptBlock]$Content,
        [Parameter()]
        [float]$Longitude,
        [Parameter()]
        [float]$Latitude,
        [Parameter()]
        [int]$MaxWidth,
        [Parameter()]
        [int]$MinWidth
    )

    $Options = @{
        type = "map-popup"
        isPlugin = $true
        assetId = $AssetId

        id = $id
        content = & $Content

        maxWidth = $MaxWidth
        minWidth = $MinWidth
    }

    if ($PSCmdlet.MyInvocation.BoundParameters.ContainsKey("Longitude")) {
        $Options["longitude"] = $Longitude
    }

    if ($PSCmdlet.MyInvocation.BoundParameters.ContainsKey("Latitude")) {
        $Options["latitude"] = $Latitude
    }

    $Options
}
function New-UDMapRasterLayer {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(ParameterSetName = "Generic")]
        [string]$TileServer = 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
        [Parameter(ParameterSetName = "Bing", Mandatory)]
        [string]$ApiKey,
        [Parameter(ParameterSetName = "Bing")]
        [ValidateSet("Aerial", "AerialWithLabels", "AerialWithLabelsOnDemand", "CanvasDark", "CanvasLight", "CanvasGray", "Road")]
        [string]$Type = "Aerial",
        [Parameter(ParameterSetName = "Bing", Mandatory)]
        [Switch]$Bing,
        [Parameter()]
        [string]$Attribution,
        [Parameter()]
        [int]$Opacity,
        [Parameter()]
        [int]$ZIndex,
        [Parameter()]
        [string]$Name
    )

    @{
        type = "map-raster-layer"
        isPlugin = $true
        assetId = $AssetId

        id = $id
        tileServer = $TileServer
        apiKey = $ApiKey
        attribution = $Attribution
        opacity = $Opactiy
        zIndex = $ZIndex
        name = $Name
        bing = $Bing.IsPresent
        mapType = $Type 
    }
}
function New-UDMapVectorLayer {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$Color = 'black',
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$FillColor = 'black',
        [Parameter()]
        [double]$FillOpacity = 0.5,
        [Parameter()]
        [int]$Weight = 3,
        [Parameter()]
        [double]$Opacity = 1.0,
        [Parameter(ParameterSetName = 'Circle', Mandatory)]
        [Switch]$Circle,
        [Parameter(ParameterSetName = 'Circle', Mandatory)]
        [double]$Latitude,
        [Parameter(ParameterSetName = 'Circle', Mandatory)]
        [double]$Longitude,
        [Parameter(ParameterSetName = 'Circle', Mandatory)]
        [int]$Radius,
        [Parameter(ParameterSetName = 'Polyline', Mandatory)]
        [Switch]$Polyline,
        [Parameter(ParameterSetName = 'Polygon', Mandatory)]
        [Switch]$Polygon,
        [Parameter(ParameterSetName = 'Polyline', Mandatory)]        
        [Parameter(ParameterSetName = 'Polygon', Mandatory)]        
        [object]$Positions,
        [Parameter(ParameterSetName = 'Rectangle', Mandatory)]
        [Switch]$Rectangle,
        [Parameter(ParameterSetName = 'Rectangle', Mandatory)]
        [double]$LatitudeTopLeft,
        [Parameter(ParameterSetName = 'Rectangle', Mandatory)]
        [double]$LongitudeTopLeft,
        [Parameter(ParameterSetName = 'Rectangle', Mandatory)]
        [double]$LatitudeBottomRight,
        [Parameter(ParameterSetName = 'Rectangle', Mandatory)]
        [double]$LongitudeBottomRight,
        [Parameter(ParameterSetName = 'Circle')]
        [object]$Popup,
        [Parameter(ParameterSetName = 'GeoJSON', Mandatory)]
        [string]$GeoJSON
    )

    if ($PSCmdlet.ParameterSetName -eq 'GeoJSON') {
        $Json = $GeoJSON | ConvertFrom-Json
        if ($Json.Geometry.Type -eq 'multilinestring') 
        {
            $Coordinates = @()
            foreach($array in $json.geometry.coordinates) {
                foreach($arrayInArray in $array) {
                    $temp = $arrayInArray[0]
                    $arrayInArray[0] = $arrayInArray[1]
                    $arrayInArray[1] = $temp
                }
                $Coordinates += ,$array
            }

            $Positions = $Coordinates
            $Polyline = [Switch]::Present
        }

        if ($Json.Geometry.Type -eq 'linestring') 
        {
            $Coordinates = @()
            $json.geometry.coordinates | ForEach-Object {
                $temp = $_[0]
                $_[0] = $_[1]
                $_[1] = $temp
                $Coordinates += ,$_
            }
            $Positions = $Coordinates
            $Polyline = [Switch]::Present
        }

        if ($Json.Geometry.Type -eq 'polygon') 
        {
            $Coordinates = @()
            $json.geometry.coordinates[0] | ForEach-Object {
                $temp = $_[0]
                $_[0] = $_[1]
                $_[1] = $temp
                $Coordinates += ,$_
            }
            $Positions = $Coordinates
            $Polygon = [Switch]::Present
        }
    }

    @{
        type = "map-vector-layer"
        isPlugin = $true
        assetId = $AssetId
        id = $Id

        color = $Color.HtmlColor
        fillColor = $FillColor.HtmlColor
        fillOpacity = $FillOpacity
        weight = $Weight
        opacity = $Opacity
        circle = $Circle.IsPresent
        latitude = $Latitude
        longitude = $Longitude
        radius = $Radius
        polyline = $Polyline.IsPresent
        polygon = $Polygon.IsPresent
        positions = $Positions
        rectangle = $Rectangle.IsPresent
        latitudeTopLeft = $LatitudeTopLeft
        longitudeTopLeft = $LongitudeTopLeft
        latitudeBottomRight = $LatitudeBottomRight
        longitudeBottomRight = $LongitudeBottomRight
        popup = $Popup
    }
}

# SIG # Begin signature block
# MIInGgYJKoZIhvcNAQcCoIInCzCCJwcCAQExCzAJBgUrDgMCGgUAMGkGCisGAQQB
# gjcCAQSgWzBZMDQGCisGAQQBgjcCAR4wJgIDAQAABBAfzDtgWUsITrck0sYpfvNR
# AgEAAgEAAgEAAgEAAgEAMCEwCQYFKw4DAhoFAAQUd08baFJwlSBwQQnux6vSEsXc
# kDyggiDCMIIFsTCCBJmgAwIBAgIQASQK+x44C4oW8UtxnfTTwDANBgkqhkiG9w0B
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
# FgQUnRko0W5bUYyudVdNpO4ZSz+av4gwDQYJKoZIhvcNAQEBBQAEggGAJ4pVO2zn
# vAnjgaWZYxOz51yf84uJT/jGPP6aCZ7LFZ7FaUfYTdJRkVyO/jZuKb9FNNQo8H35
# Ud5d0S+yRxHMsqhS50kl+dVWA0TeMb7uR9HAfif52Wb1mjileNWWfrZYM8aY/ntm
# AJgQ10PN2pXnC4ppmJ7/9vO9yYs6m5+9B/Uj+14lcsnXV16OvnHuCaBLoa1+OOqR
# hnM8a7KCuaaDtEXKA8oGyGGhoouEqbBOvVOJH3pp2NF6AMZ52d/TQwAQUmoz/Pxn
# tX7U3rugMaTXB5DQgUDBSDC+STidK/+7jsq1n0pysjgETAQ8q8jXbW57BxDo22O0
# GoO6WzLJdyZRN8msJKUK8I3WBu8eYJ8Bc3UHW4W/akKdF91HXW0Ew8vKjgHuywB8
# m0BQHy0ViIRJzWb66x5e26ZjhaxBLy8s+WBIr1EK0s+RzCPBaYB4vGy54HIWOrBp
# pIbU9Vn81cEL1E5XpBVpYMclWG7pIfx3tLM6a5Q35D9EkXeA/RRUt2GkoYIDIDCC
# AxwGCSqGSIb3DQEJBjGCAw0wggMJAgEBMHcwYzELMAkGA1UEBhMCVVMxFzAVBgNV
# BAoTDkRpZ2lDZXJ0LCBJbmMuMTswOQYDVQQDEzJEaWdpQ2VydCBUcnVzdGVkIEc0
# IFJTQTQwOTYgU0hBMjU2IFRpbWVTdGFtcGluZyBDQQIQCnpKiJ7JmUKQBmM4TYaX
# nTANBglghkgBZQMEAgEFAKBpMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJ
# KoZIhvcNAQkFMQ8XDTIyMDYxNjE5MjcxMFowLwYJKoZIhvcNAQkEMSIEIF2TsYsX
# dEzk6mkArg+fWOCkgwV4tlF+ioNnsyF6T3VNMA0GCSqGSIb3DQEBAQUABIICAArh
# NwgSkFMuO5A9HOGHXZKduQN5UnXlaDnIxjLMgRJ5Eq8dGdsRP83E9x5wGm5YcvDB
# sUE4yZ4UFSne57XACFxKr79x4jcswvaFGt2Bc7aYNV6I68ZqddJO/E5jI0Py4Xlj
# 63HG7jWqQ4Fa1MnAOiDpWU1Vlro9Z+oiPrt+D5ei0xKt1Z07kojLuS+pKMpB60XN
# GA51pdIQe6sIezEt4cm+t27pGKlvaLSfX/1ImA4UX7L2otk1Ga6X7AovpxnW8of3
# OUN0B57F8mTqvnBqKeT1huk6DTQQs3lxtomjsytW4c3JftH8z0Dd+aF9Pmh0jNt7
# tsQsYE9G9bSiOXgJ4GyuMK8/FmjRv7CoZPZg324WXVPyXdDcwm3kua07X3J+/5Mn
# 6dn0c7DWHIywHVagfJD1TLEtPix5ZsM5ubC3Jlu20WWOHETW9ufsEtOflHDcq9Tv
# Zl4sup33FqpIJvFsK8ScaLWXKKkVAh2QOKoXyr3NogU9sfl7+/BVG3Ax4budzVQW
# vZBv9xyP9T2Z9agfmp9FzihzeUBCnn6MrILIoEl01fV4zPlS01GjFfxQOyzVHoVw
# ekcr1ysgtgpG7UcndJA89yUZtnuM70EDUh58YwQ+fW6wuzeHXcnbBoShYfAGxQfw
# o6C7WfxYGQkZy2Po2bzz2HXMpABn85ce++xmKksm
# SIG # End signature block
