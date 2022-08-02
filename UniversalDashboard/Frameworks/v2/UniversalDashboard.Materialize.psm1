$TAType = [psobject].Assembly.GetType('System.Management.Automation.TypeAccelerators')
$TAtype::Add('DashboardColor', 'UniversalDashboard.Models.DashboardColor')
$TAtype::Add('Endpoint', 'UniversalDashboard.Models.Endpoint')
$TAtype::Add('FontAwesomeIcons', 'UniversalDashboard.Models.FontAwesomeIcons')
$TAtype::Add('Element', 'UniversalDashboard.Models.Basics.Element')

function Find-Object {
    param(
        [Parameter(ValueFromPipeline=$true, Mandatory)]
        $InputObject,
        [Parameter(Mandatory)]
        $FilterText
	)

        Process {
            $results = $InputObject.psobject.Properties | Where { $InputObject.($_.Name) -match $FilterText }

            if ($results.length -gt 0) {
                $InputObject
            }

        }
}

function Set-UDSessionData {
	param(
		[Parameter(Mandatory = $true)]
		[String]$Key,
		[Parameter(Mandatory = $true)]
		[String]$Value
	)

	if ($Session -eq $null) {
		Write-Error "Session variable is not available"
	} else {
		$bytes = [System.Text.Encoding]::UTF8.GetBytes($Value)
		$Session.Set($Key, $bytes)
	}
}

function Get-UDSessionData {
	param(
		[Parameter(Mandatory = $true)]
		[String]$Key
	)

	if ($Session -eq $null) {
		Write-Error "Session variable is not available"
	} else {
		$bytes = $null
		if ($Session.TryGetValue($Key, [ref]$bytes)) {
			[System.Text.Encoding]::UTF8.GetString($bytes)
		}
	}
}
function Write-UDLog {
	param(
		[Parameter(Mandatory = $true, Position = 0)]
		[String]$Message,
		[Parameter()]
		[ValidateSet("Debug", "Info", "Warning", "Error")]
		[String]$Level = "Info",
		[Parameter()]
		[String]$LoggerName = "Endpoint"
	)

	switch ($Level) {
		"Debug" { Write-Debug $Message }
		"Info" { Write-Information $Message }
		"Warning" { Write-Warning $Message }
		"Error" { Write-Error $Message }
	}
}

function Out-UDMonitorData {
	[CmdletBinding()]
    param(
	[Parameter(ValueFromPipeline = $true)]
	$Data)

	Begin {
		New-Variable -Name Items -Value @()
	}

	Process {
		$Items += $Data
	}

	End {
		$Timestamp = [DateTime]::UtcNow
		$dataSets = @()
		foreach($item in $Items) {
			$dataSets += @{
				x = $Timestamp
				y = $item
			}
		}
		$dataSets | ConvertTo-Json
	}
}

function Out-UDChartData {
	[CmdletBinding()]
    param(
		[Parameter(ValueFromPipeline = $true)]
		$Data,
		[Parameter()]
		[string]$DataProperty,
		[Parameter()]
		[string]$LabelProperty,
		[Parameter()]
		[string]$DatasetLabel = "",
		[Parameter()]
		[Hashtable[]]$Dataset,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$BackgroundColor = @("#808978FF"),
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$BorderColor = @("#FF8978FF"),
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$HoverBackgroundColor = @("#807B210C"),
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$HoverBorderColor = @("#FF7B210C"),
		[Parameter()]
		[int[]]$BorderWidth
	)

    Begin {
        New-Variable -Name Items -Value @()
    }

	Process {
		$Items += $Data
	}

	End {
		$datasets = @()

		if ($Dataset -ne $null) {
			Foreach($datasetDef in $Dataset) {
				$datasetDef.data = @($Items | ForEach-Object { $_.($datasetDef.DataProperty) })
				$datasets += $datasetDef
			}
		}
		else {
			$datasets +=
				@{
					label = $DatasetLabel
					backgroundColor = $BackgroundColor.HtmlColor
					borderColor = $BorderColor.HtmlColor
					hoverBackgroundColor = $HoverBackgroundColor.HtmlColor
					hoverBorderColor = $HoverBorderColor.HtmlColor
					borderWidth = $BorderWidth
					data = @($Items | ForEach-Object { $_.$DataProperty })
				}
		}

	    @{
			labels = @($Items | ForEach-Object { $_.$LabelProperty })
			datasets = $datasets
		} | ConvertTo-Json -Depth 10
	}
}

function New-UDChartDataset {
	[CmdletBinding()]
	param(
		[string]$DataProperty,
		[string]$Label,
		[UniversalDashboard.Models.DashboardColor[]]$BackgroundColor = @("#807B210C"),
		[UniversalDashboard.Models.DashboardColor[]]$BorderColor = @("#FF7B210C"),
		[int]$BorderWidth,
		[UniversalDashboard.Models.DashboardColor[]]$HoverBackgroundColor = @("#807B210C"),
		[UniversalDashboard.Models.DashboardColor[]]$HoverBorderColor = @("#FF7B210C"),
		[int]$HoverBorderWidth,
		[string]$XAxisId,
		[string]$YAxisId,
		[Hashtable]$AdditionalOptions
	)

	Begin {
		$datasetOptions = @{
			data = @()
			DataProperty = $DataProperty
			label = $Label
			backgroundColor = $BackgroundColor.HtmlColor
			borderColor = $BorderColor.HtmlColor
			borderWidth = $BorderWidth
			hoverBackgroundColor = $HoverBackgroundColor.HtmlColor
			hoverBorderColor = $HoverBorderColor.HtmlColor
			hoverBorderWidth = $HoverBorderWidth
			xAxisId = $XAxisId
			yAxisId = $YAxisId
		}

		if ($AdditionalOptions) {
			$AdditionalOptions.GetEnumerator() | ForEach-Object {
				$datasetOptions.($_.Key) = $_.Value
			}
		}

		$datasetOptions
	}
}

function Out-UDGridData {
	[CmdletBinding()]
    param(
		[Parameter(ValueFromPipeline = $true)]
		$Data,
		[int]$TotalItems = 0,
		[Parameter()]
		[int]$Depth = 10
	)

    Begin {
        New-Variable -Name Items -Value @()
    }

	Process {
		$Items += $Data
	}

	End {
		if ($TotalItems -eq 0 -and $Items.Length -ne 0) {
			$TotalItems = $Items.Length
		}

	    @{
			data = $Items
			recordsTotal = $TotalItems
			recordsFiltered = $Items.Length
			draw = $drawId
		} | ConvertTo-JsonEx -Depth $Depth
	}
}

function Out-UDTableData {
	[CmdletBinding()]
    param(
		[Parameter(Mandatory = $true, ValueFromPipeline = $true)]
		$Data,
		[Parameter(Mandatory = $true)]
		[string[]]$Property,
		[Parameter()]
	    [string]$DateTimeFormat = "lll"
	)

	Process {
		New-UDElement -Tag 'tr' -Content {
			foreach($itemProperty in $Property) {
				New-UDElement -Tag 'td' -Content {
					if ($Data.$itemProperty -is [System.DateTime]) {
						$DateTimeComponent = New-Object -TypeName UniversalDashboard.Models.DateTimeComponent
						$DateTimeComponent.DateTimeFormat = $DateTimeFormat
						$DateTimeComponent.Value = $Data.$itemProperty.ToString("O")
						$DateTimeComponent
					}
					else
					{
						try 
						{
							$Data.$itemProperty
						}
						catch 
						{
							""
						}
					}
				}
			}
		}
	}
}

#region Charting

function New-UDChartLayoutOptions {
	param(
		[Parameter(Mandatory = $true, ParameterSetName = "Size")]
		[int]$Padding,
		[Parameter(Mandatory = $true, ParameterSetName = "Object")]
		[int]$PaddingLeft,
		[Parameter(Mandatory = $true, ParameterSetName = "Object")]
		[int]$PaddingRight,
		[Parameter(Mandatory = $true, ParameterSetName = "Object")]
		[int]$PaddingTop,
		[Parameter(Mandatory = $true, ParameterSetName = "Object")]
		[int]$PaddingBottom
	)

	if ($PSCmdlet.ParameterSetName -eq "Size") {
		$obj = [PSCustomObject]@{
			left = $PaddingSize
			right = $PaddingSize
			bottom = $PaddingSize
			top = $PaddingSize
		}
	} else {
		$obj = [PSCustomObject]@{
			left = $PaddingLeft
			right = $PaddingRight
			bottom = $PaddingBottom
			top = $PaddingTop
		}
	}

	$obj.psobject.TypeNames.Insert(0,"UDLayoutOptions")
	$obj
}

function New-UDChartLegendOptions {
	param(
		[Parameter()]
		[Switch]$Hide,
		[Parameter()]
		[ValidateSet("top", "bottom", "left", "right")]
		[string]$Position = "top",
		[Parameter()]
		[bool]$FullWidth = $true,
		[Parameter()]
		[Switch]$Reverse,
		[Parameter()]
		[int]$LabelBoxWidth = 40,
		[Parameter()]
		[int]$LabelFontSize = 12,
		[Parameter()]
		[ValidateSet("normal", "bold", "italic")]
		[string]$LabelFontStyle = 'normal',
		[Parameter()]
		[string]$LabelFontFamily = 'Helvetica Neue',
		[Parameter()]
		[int]$LabelPadding = 10,
		[Parameter()]
		[bool]$LabelUsePointStyle
	)

	$obj = @{}

	if ($PSBoundParameters.ContainsKey("Hide")) {
		$obj["display"] = $false
	}

	if ($PSBoundParameters.ContainsKey("Position")) {
		$obj["position"] = $Position
	}

	if ($PSBoundParameters.ContainsKey("FullWidth")) {
		$obj["fullWidth"] = $FullWidth
	}

	if ($PSBoundParameters.ContainsKey("Reverse")) {
		$obj["reverse"] = $Reverse
	}

    $labelOptions = $PSBoundParameters | Where-Object {$_.Keys -match "Label*"}
    if ($labelOptions.Count -gt 0) {
		$obj["labels"] = @{}

		if ($PSBoundParameters.ContainsKey("LabelBoxWidth")) {
			$obj["labels"]["boxWidth"] = $LabelBoxWidth
		}

		if ($PSBoundParameters.ContainsKey("LabelFontSize")) {
			$obj["labels"]["fontSize"] = $LabelFontSize
		}

		if ($PSBoundParameters.ContainsKey("LabelFontStyle")) {
			$obj["labels"]["fontStyle"] = $LabelFontStyle
		}

		if ($PSBoundParameters.ContainsKey("LabelFontFamily")) {
			$obj["labels"]["fontFamily"] = $LabelFontFamily
		}

		if ($PSBoundParameters.ContainsKey("LabelPadding")) {
			$obj["labels"]["padding"] = $LabelPadding
		}

		if ($PSBoundParameters.ContainsKey("LabelUsePointStyle")) {
			$obj["labels"]["usePointStyle"] = $LabelUsePointStyle
		}
	}

	$obj.psobject.TypeNames.Insert(0,"UDLegendOptions")

	$obj
}

function New-UDChartTitleOptions {
	param(
		[Parameter()]
		[Switch]$Display,
		[Parameter()]
		[ValidateSet("top", "bottom", "left", "right")]
		[string]$Position = "top",
		[Parameter()]
		[int]$FontSize = 12,
		[Parameter()]
		[ValidateSet("normal", "bold", "italic")]
		[string]$FontStyle = 'bold',
		[Parameter()]
		[string]$FontFamily = 'Helvetica Neue',
		[Parameter()]
		[int]$Padding = 10,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor]$FontColor = "#666",
		[Parameter()]
		[float]$LineHeight = 1.2,
		[Parameter()]
		[string]$Text
	)

	$obj = @{}
	foreach($parameter in $PSBoundParameters.GetEnumerator())
	{
		$propertyName = [Char]::ToLowerInvariant($parameter.Key[0]) + $parameter.Key.Substring(1)

		if ($parameter.Value -is [UniversalDashboard.Models.DashboardColor]) {
			$obj[$propertyName] = $parameter.Value.HtmlColor
		} else {
			$obj[$propertyName] = $parameter.Value
		}
	}

	$obj.psobject.TypeNames.Insert(0,"UDTitleOptions")

	$obj
}

function New-UDChartTooltipOptions {
	param(
		[Parameter()]
		[Switch]$Disabled,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor]$BackgroundColor = 'rgba(0,0,0,0.8)',

		[Parameter()]
		[string]$TitleFontFamily = 'Helvetica Neue',
		[Parameter()]
		[int]$TitleFontSize = 12,
		[Parameter()]
		[ValidateSet("normal", "bold", "italic")]
		[string]$TitleFontStyle = 'bold',
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor]$TitleFontColor = "#fff",
		[Parameter()]
		[int]$TitleSpacing = 2,
		[Parameter()]
		[int]$TitleMarginBottom = 6,

		[Parameter()]
		[string]$BodyFontFamily = 'Helvetica Neue',
		[Parameter()]
		[int]$BodyFontSize = 12,
		[Parameter()]
		[ValidateSet("normal", "bold", "italic")]
		[string]$BodyFontStyle = 'bold',
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor]$BodyFontColor = "#fff",
		[Parameter()]
		[int]$BodySpacing = 2,

		[Parameter()]
		[string]$FooterFontFamily = 'Helvetica Neue',
		[Parameter()]
		[int]$FooterFontSize = 12,
		[Parameter()]
		[ValidateSet("normal", "bold", "italic")]
		[string]$FooterFontStyle = 'bold',
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor]$FooterFontColor = "#fff",
		[Parameter()]
		[int]$FooterSpacing = 2,
		[Parameter()]
		[int]$FooterMarginTop = 6,

		[Parameter()]
		[int]$xPadding = 6,
		[Parameter()]
		[int]$yPadding = 6,
		[Parameter()]
		[int]$CaretPadding = 2,
		[Parameter()]
		[int]$CaretSize = 5,
		[Parameter()]
		[int]$CornerRadius = 6,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor]$MultiKeyBackground = "#fff",
		[Parameter()]
		[bool]$DisplayColors = $true,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor]$BorderColor = 'rgba(0,0,0,0)',
		[Parameter()]
		[int]$BorderWidth = 0
	)

	$obj = @{}

	foreach($parameter in $PSBoundParameters.GetEnumerator())
	{
		$propertyName = [Char]::ToLowerInvariant($parameter.Key[0]) + $parameter.Key.Substring(1)

		if ($parameter.Value -is [UniversalDashboard.Models.DashboardColor]) {
			$obj[$propertyName] = $parameter.Value.HtmlColor
		} else {
			$obj[$propertyName] = $parameter.Value
		}
	}

	$obj.psobject.TypeNames.Insert(0,"UDTooltipOptions")

	$obj
}

function New-UDLineChartOptions {
	param(
		[Parameter()]
		[PSTypeName('UDLayoutOptions')]$LayoutOptions,
		[Parameter()]
		[PSTypeName('UDLegendOptions')]$LegendOptions,
		[Parameter()]
		[PSTypeName('UDTitleOptions')]$TitleOptions,
		[Parameter()]
		[PSTypeName('UDTooltipOptions')]$TooltipOptions,
		[Parameter()]
		[PSTypeName('UDChartAxis')]$xAxes,
		[Parameter()]
		[PSTypeName('UDChartAxis')]$yAxes,
		[Parameter()]
		[bool]$ShowLines,
		[Parameter()]
		[bool]$SpanGaps
	)

	$obj = @{}

	if ($PSBoundParameters.ContainsKey("LayoutOptions")) {
		$obj["layout"] = $LayoutOptions
	}

	if ($PSBoundParameters.ContainsKey("LegendOptions")) {
		$obj["legend"] = $LegendOptions
	}

	if ($PSBoundParameters.ContainsKey("TitleOptions")) {
		$obj["title"] = $TitleOptions
	}

	if ($PSBoundParameters.ContainsKey("TooltipOptions")) {
		$obj["tooltips"] = $TooltipOptions
	}

	if ($PSBoundParameters.ContainsKey("ShowLines")) {
		$obj["showLines"] = $ShowLines
	}

	if ($PSBoundParameters.ContainsKey("SpanGaps")) {
		$obj["spanGaps"] = $SpanGaps
	}

	$ticks = @{}

	if ($PSBoundParameters.ContainsKey("xAxes")) {
		$ticks["xAxes"] = @($xAxes)
	}

	if ($PSBoundParameters.ContainsKey("yAxes")) {
		$ticks["yAxes"] = @($yAxes)
	}

	if ($ticks.Count -gt 0) {
		$obj["scales"] = $ticks
	}

	$obj.psobject.TypeNames.Insert(0,"UDLineChartOptions")

	$obj
}

function New-UDBarChartOptions {
	param(
		[Parameter()]
		[PSTypeName('UDLayoutOptions')]$LayoutOptions,
		[Parameter()]
		[PSTypeName('UDLegendOptions')]$LegendOptions,
		[Parameter()]
		[PSTypeName('UDTitleOptions')]$TitleOptions,
		[Parameter()]
		[PSTypeName('UDTooltipOptions')]$TooltipOptions,
		[Parameter()]
		[PSTypeName('UDChartAxis')]$xAxes,
		[Parameter()]
		[PSTypeName('UDChartAxis')]$yAxes,
		[Parameter()]
		[float]$BarPercentage,
		[Parameter()]
		[float]$CategoryPercentage,
		[Parameter()]
		[int]$BarThickness,
		[Parameter()]
		[int]$MaxBarThickness
	)

	$obj = @{}

	if ($PSBoundParameters.ContainsKey("LayoutOptions")) {
		$obj["layout"] = $LayoutOptions
	}

	if ($PSBoundParameters.ContainsKey("LegendOptions")) {
		$obj["legend"] = $LegendOptions
	}

	if ($PSBoundParameters.ContainsKey("TitleOptions")) {
		$obj["title"] = $TitleOptions
	}

	if ($PSBoundParameters.ContainsKey("TooltipOptions")) {
		$obj["tooltips"] = $TooltipOptions
	}

	if ($PSBoundParameters.ContainsKey("Circumference")) {
		$obj["circumference"] = $Circumference
	}

	if ($PSBoundParameters.ContainsKey("Rotation")) {
		$obj["rotation"] = $Rotation
	}

	$ticks = @{}

	if ($PSBoundParameters.ContainsKey("xAxes")) {
		$ticks["xAxes"] = @($xAxes)
	}

	if ($PSBoundParameters.ContainsKey("yAxes")) {
		$ticks["yAxes"] = @($yAxes)
	}

	if ($ticks.Count -gt 0) {
		$obj["scales"] = $ticks
	}

	if ($PSBoundParameters.ContainsKey("BarPercentage")) {
		$obj["barPercentage"] = $BarPercentage
	}

	if ($PSBoundParameters.ContainsKey("CategoryPercentage")) {
		$obj["categoryPercentage"] = $CategoryPercentage
	}

	if ($PSBoundParameters.ContainsKey("BarThickness")) {
		$obj["barThickness"] = $BarThickness
	}

	if ($PSBoundParameters.ContainsKey("MaxBarThickness")) {
		$obj["maxBarThickness"] = $MaxBarThickness
	}

	$obj.psobject.TypeNames.Insert(0,"UDBarChartOptions")

	$obj
}

function New-UDDoughnutChartOptions {
	param(
		[Parameter()]
		[PSTypeName('UDLayoutOptions')]$LayoutOptions,
		[Parameter()]
		[PSTypeName('UDLegendOptions')]$LegendOptions,
		[Parameter()]
		[PSTypeName('UDTitleOptions')]$TitleOptions,
		[Parameter()]
		[PSTypeName('UDTooltipOptions')]$TooltipOptions,
		[Parameter()]
		[PSTypeName('UDChartAxis')]$xAxes,
		[Parameter()]
		[PSTypeName('UDChartAxis')]$yAxes,
		[Parameter()]
		[int]$CutoutPercentage,
		[Parameter()]
		[float]$Rotation,
		[Parameter()]
		[float]$Circumference,
		[Parameter()]
		[bool]$AnimateRotate,
		[Parameter()]
		[bool]$AnimateScale
	)

	$obj = @{}

	if ($PSBoundParameters.ContainsKey("LayoutOptions")) {
		$obj["layout"] = $LayoutOptions
	}

	if ($PSBoundParameters.ContainsKey("LegendOptions")) {
		$obj["legend"] = $LegendOptions
	}

	if ($PSBoundParameters.ContainsKey("TitleOptions")) {
		$obj["title"] = $TitleOptions
	}

	if ($PSBoundParameters.ContainsKey("TooltipOptions")) {
		$obj["tooltips"] = $TooltipOptions
	}

	if ($PSBoundParameters.ContainsKey("Circumference")) {
		$obj["circumference"] = $Circumference
	}

	if ($PSBoundParameters.ContainsKey("Rotation")) {
		$obj["rotation"] = $Rotation
	}

	$ticks = @{}

	if ($PSBoundParameters.ContainsKey("xAxes")) {
		$ticks["xAxes"] = @($xAxes)
	}

	if ($PSBoundParameters.ContainsKey("yAxes")) {
		$ticks["yAxes"] = @($yAxes)
	}

	if ($ticks.Count -gt 0) {
		$obj["scales"] = $ticks
	}

	$animation = @{}

	if ($PSBoundParameters.ContainsKey("AnimateRotate")) {
		$animation["animateRotate"] = $AnimateRotate
	}

	if ($PSBoundParameters.ContainsKey("AnimateScale")) {
		$animation["animateScale"] = $AnimateScale
	}

	if ($animation.Count -gt 0) {
		$obj["animation"] = $animation
	}

	$obj.psobject.TypeNames.Insert(0,"UDDoughnutChartOptions")

	$obj
}

function New-UDPolarChartOptions {
	param(
		[Parameter()]
		[PSTypeName('UDLayoutOptions')]$LayoutOptions,
		[Parameter()]
		[PSTypeName('UDLegendOptions')]$LegendOptions,
		[Parameter()]
		[PSTypeName('UDTitleOptions')]$TitleOptions,
		[Parameter()]
		[PSTypeName('UDTooltipOptions')]$TooltipOptions,
		[Parameter()]
		[PSTypeName('UDChartAxis')]$xAxes,
		[Parameter()]
		[PSTypeName('UDChartAxis')]$yAxes,
		[Parameter()]
		[float]$StartAngle,
		[Parameter()]
		[bool]$AnimateRotate,
		[Parameter()]
		[bool]$AnimateScale
	)


	$obj = @{}

	if ($PSBoundParameters.ContainsKey("LayoutOptions")) {
		$obj["layout"] = $LayoutOptions
	}

	if ($PSBoundParameters.ContainsKey("LegendOptions")) {
		$obj["legend"] = $LegendOptions
	}

	if ($PSBoundParameters.ContainsKey("TitleOptions")) {
		$obj["title"] = $TitleOptions
	}

	if ($PSBoundParameters.ContainsKey("TooltipOptions")) {
		$obj["tooltips"] = $TooltipOptions
	}

	$ticks = @{}

	if ($PSBoundParameters.ContainsKey("xAxes")) {
		$ticks["xAxes"] = @($xAxes)
	}

	if ($PSBoundParameters.ContainsKey("yAxes")) {
		$ticks["yAxes"] = @($yAxes)
	}

	if ($ticks.Count -gt 0) {
		$obj["scales"] = $ticks
	}

	if ($PSBoundParameters.ContainsKey("StartAngle")) {
		$obj["startAngle"] = $StartAngle
	}

	$animation = @{}

	if ($PSBoundParameters.ContainsKey("AnimateRotate")) {
		$animation["animateRotate"] = $AnimateRotate
	}

	if ($PSBoundParameters.ContainsKey("AnimateScale")) {
		$animation["animateScale"] = $AnimateScale
	}

	if ($animation.Count -gt 0) {
		$obj["animation"] = $animation
	}

	$obj.psobject.TypeNames.Insert(0,"UDPolarChartOptions")

	$obj
}

function New-UDLinearChartAxis {
	param(
		[Parameter()]
		[ValidateSet("left", "right", "top", "bottom")]
		[string]$Position,
		[Parameter()]
		[bool]$Offset,
		[Parameter()]
		[string]$Id,
		[Parameter()]
		[bool]$BeginAtZero,
		[Parameter()]
		[int]$Minimum,
		[Parameter()]
		[int]$Maximum,
		[Parameter()]
		[int]$MaxTickLimit = 11,
		[Parameter()]
		[int]$StepSize,
		[Parameter()]
		[int]$SuggestedMaximum,
		[Parameter()]
		[int]$SuggestedMinimum
	)

	$obj = @{
		type = "linear"
	}

	if ($PSBoundParameters.ContainsKey("Position")) {
		$obj["position"] = $Position
	}

	if ($PSBoundParameters.ContainsKey("Offset")) {
		$obj["offset"] = $Offset
	}

	if ($PSBoundParameters.ContainsKey("Id")) {
		$obj["id"] = $Id
	}

	if ($PSBoundParameters.ContainsKey("Position")) {
		$obj["position"] = $Position
	}

	$ticks = @{}

	if ($PSBoundParameters.ContainsKey("BeginAtZero")) {
		$ticks["beginAtZero"] = $BeginAtZero
	}

	if ($PSBoundParameters.ContainsKey("Minimum")) {
		$ticks["min"] = $Minimum
	}

	if ($PSBoundParameters.ContainsKey("Maximum")) {
		$ticks["max"] = $Maximum
	}

	if ($PSBoundParameters.ContainsKey("MaxTickLimit")) {
		$ticks["maxTickLimit"] = $MaxTickLimit
	}

	if ($PSBoundParameters.ContainsKey("StepSize")) {
		$ticks["stepSize"] = $StepSize
	}

	if ($PSBoundParameters.ContainsKey("SuggestedMaximum")) {
		$ticks["suggestedMax"] = $SuggestedMaximum
	}

	if ($PSBoundParameters.ContainsKey("SuggestedMinimum")) {
		$ticks["suggestedMin"] = $SuggestedMinimum
	}

	if ($ticks.Keys.Count -gt 0) {
		$obj["ticks"] = $ticks
	}

	$obj.psobject.TypeNames.Insert(0,"UDChartAxis")

	$obj
}

function New-UDCategoryChartAxis {
	param(
		[Parameter()]
		[ValidateSet("left", "right", "top", "bottom")]
		[string]$Position,
		[Parameter()]
		[bool]$Offset,
		[Parameter()]
		[string]$Id,
		[Parameter()]
		[string[]]$Labels,
		[Parameter()]
		[int]$Minimum,
		[Parameter()]
		[int]$Maximum
	)

	$obj = @{
		type = "category"
	}

	if ($PSBoundParameters.ContainsKey("Position")) {
		$obj["position"] = $Position
	}

	if ($PSBoundParameters.ContainsKey("Offset")) {
		$obj["offset"] = $Offset
	}

	if ($PSBoundParameters.ContainsKey("Id")) {
		$obj["id"] = $Id
	}

	if ($PSBoundParameters.ContainsKey("Position")) {
		$obj["position"] = $Position
	}

	$ticks = @{}

	if ($PSBoundParameters.ContainsKey("Labels")) {
		$ticks["labels"] = $Labels
	}

	if ($PSBoundParameters.ContainsKey("Maximum")) {
		$ticks["max"] = $Maximum
	}

	if ($PSBoundParameters.ContainsKey("Minimum")) {
		$ticks["min"] = $Minimum
	}

	if ($ticks.Keys.Count -gt 0) {
		$obj["ticks"] = $ticks
	}

	$obj.psobject.TypeNames.Insert(0,"UDChartAxis")

	$obj
}

function New-UDLogarithmicChartAxis {
	param(
		[Parameter()]
		[ValidateSet("left", "right", "top", "bottom")]
		[string]$Position,
		[Parameter()]
		[bool]$Offset,
		[Parameter()]
		[string]$Id,
		[Parameter()]
		[int]$Minimum,
		[Parameter()]
		[int]$Maximum
	)

	$obj = @{
		type = "logarithmic"
	}

	if ($PSBoundParameters.ContainsKey("Position")) {
		$obj["position"] = $Position
	}

	if ($PSBoundParameters.ContainsKey("Offset")) {
		$obj["offset"] = $Offset
	}

	if ($PSBoundParameters.ContainsKey("Id")) {
		$obj["id"] = $Id
	}

	if ($PSBoundParameters.ContainsKey("Position")) {
		$obj["position"] = $Position
	}

	$ticks = @{}

	if ($PSBoundParameters.ContainsKey("Maximum")) {
		$ticks["max"] = $Maximum
	}

	if ($PSBoundParameters.ContainsKey("Minimum")) {
		$ticks["min"] = $Minimum
	}

	if ($ticks.Keys.Count -gt 0) {
		$obj["ticks"] = $ticks
	}

	$obj.psobject.TypeNames.Insert(0,"UDChartAxis")

	$obj
}

function New-UDChartOptions {
	param(
		[Parameter()]
		[PSTypeName('UDLayoutOptions')]$LayoutOptions,
		[Parameter()]
		[PSTypeName('UDLegendOptions')]$LegendOptions,
		[Parameter()]
		[PSTypeName('UDTitleOptions')]$TitleOptions,
		[Parameter()]
		[PSTypeName('UDTooltipOptions')]$TooltipOptions,
		[Parameter()]
		[PSTypeName('UDChartAxis')]$xAxes,
		[Parameter()]
		[PSTypeName('UDChartAxis')]$yAxes
	)

	$obj = @{}

	if ($PSBoundParameters.ContainsKey("LayoutOptions")) {
		$obj["layout"] = $LayoutOptions
	}

	if ($PSBoundParameters.ContainsKey("LegendOptions")) {
		$obj["legend"] = $LegendOptions
	}

	if ($PSBoundParameters.ContainsKey("TitleOptions")) {
		$obj["title"] = $TitleOptions
	}

	if ($PSBoundParameters.ContainsKey("TooltipOptions")) {
		$obj["tooltips"] = $TooltipOptions
	}

	$ticks = @{}

	if ($PSBoundParameters.ContainsKey("xAxes")) {
		$ticks["xAxes"] = @($xAxes)
	}

	if ($PSBoundParameters.ContainsKey("yAxes")) {
		$ticks["yAxes"] = @($yAxes)
	}

	if ($ticks.Count -gt 0) {
		$obj["scales"] = $ticks
	}

	$obj
}

function New-UDLineChartDataset {
	param(
		[Parameter()]
		[string]$DataProperty,
		[Parameter()]
		[string]$Label,
		[Parameter()]
		[string]$xAxisId,
		[Parameter()]
		[string]$yAxisId,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$BackgroundColor = @("#807B210C"),
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$BorderColor = @("#FF7B210C"),
		[Parameter()]
		[int]$BorderWidth,
		[Parameter()]
		[ValidateSet("butt", "round", "square")]
		[string]$BorderCapStyle,
		[Parameter()]
		[ValidateSet("bevel", "round", "miter")]
		[string]$BorderJoinStyle,
		[Parameter()]
		$Fill,
		[Parameter()]
		[int]$LineTension,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$PointBackgroundColor,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$PointBorderColor,
		[Parameter()]
		[int[]]$PointBorderWidth,
		[Parameter()]
		[int[]]$PointRadius,
		[Parameter()]
		[ValidateSet("circle", "cross", "crossRot", "dash", "line", "rect", "rectRounded", "rectRot", "star", "triangle")]
		[string[]]$PointStyle,
		[Parameter()]
		[int[]]$PointHitRadius,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$PointHoverBackgroundColor,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$PointHoverBorderColor,
		[Parameter()]
		[int[]]$PointHoverBorderWidth,
		[Parameter()]
		[int[]]$PointHoverRadius,
		[Parameter()]
		[bool]$ShowLine,
		[Parameter()]
		[bool]$SpanGaps,
		[Parameter()]
		[bool]$SteppedLine
	)

	$obj = @{
		data = @()
	}

	foreach($parameter in $PSBoundParameters.GetEnumerator())
	{
		$propertyName = [Char]::ToLowerInvariant($parameter.Key[0]) + $parameter.Key.Substring(1)

		if ($parameter.Value -is [UniversalDashboard.Models.DashboardColor[]]) {
			$obj[$propertyName] = $parameter.Value.HtmlColor
		} else {
			$obj[$propertyName] = $parameter.Value
		}
	}

	$obj.psobject.TypeNames.Insert(0,"UDLineChartDataset")

	$obj
}

function New-UDBarChartDataset {
	param(
		[Parameter()]
		[string]$DataProperty,
		[Parameter()]
		[string]$Label,
		[Parameter()]
		[string]$xAxisId,
		[Parameter()]
		[string]$yAxisId,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$BackgroundColor = @("#807B210C"),
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$BorderColor = @("#FF7B210C"),
		[Parameter()]
		[int]$BorderWidth,
		[Parameter()]
		[ValidateSet("bottom", "left", "top", "right")]
		[string]$BorderSkipped,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$HoverBackgroundColor,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$HoverBorderColor,
		[Parameter()]
		[int[]]$HoverBorderWidth
	)

	$obj = @{
		data = @()
	}

	foreach($parameter in $PSBoundParameters.GetEnumerator())
	{
		$propertyName = [Char]::ToLowerInvariant($parameter.Key[0]) + $parameter.Key.Substring(1)

		if ($parameter.Value -is [UniversalDashboard.Models.DashboardColor[]]) {
			$obj[$propertyName] = $parameter.Value.HtmlColor
		} else {
			$obj[$propertyName] = $parameter.Value
		}
	}

	$obj.psobject.TypeNames.Insert(0,"UDBarChartDataset")

	$obj
}

function New-UDRadarChartDataset {
	param(
		[Parameter()]
		[string]$DataProperty,
		[Parameter()]
		[string]$Label,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$BackgroundColor = @("#807B210C"),
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$BorderColor = @("#FF7B210C"),
		[Parameter()]
		[int]$BorderWidth,
		[Parameter()]
		[ValidateSet("butt", "round", "square")]
		[string]$BorderCapStyle,
		[Parameter()]
		[ValidateSet("bevel", "round", "miter")]
		[string]$BorderJoinStyle,
		[Parameter()]
		$Fill,
		[Parameter()]
		[int]$LineTension,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$PointBackgroundColor,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$PointBorderColor,
		[Parameter()]
		[int[]]$PointBorderWidth,
		[Parameter()]
		[int[]]$PointRadius,
		[Parameter()]
		[ValidateSet("circle", "cross", "crossRot", "dash", "line", "rect", "rectRounded", "rectRot", "star", "triangle")]
		[string[]]$PointStyle,
		[Parameter()]
		[int[]]$PointHitRadius,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$PointHoverBackgroundColor,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$PointHoverBorderColor,
		[Parameter()]
		[int[]]$PointHoverBorderWidth,
		[Parameter()]
		[int[]]$PointHoverRadius
	)

	$obj = @{
		data = @()
	}

	foreach($parameter in $PSBoundParameters.GetEnumerator())
	{
		$propertyName = [Char]::ToLowerInvariant($parameter.Key[0]) + $parameter.Key.Substring(1)

		if ($parameter.Value -is [UniversalDashboard.Models.DashboardColor[]]) {
			$obj[$propertyName] = $parameter.Value.HtmlColor
		} else {
			$obj[$propertyName] = $parameter.Value
		}
	}

	$obj.psobject.TypeNames.Insert(0,"UDRadarChartDataset")

	$obj
}

function New-UDDoughnutChartDataset {
	param(
		[Parameter()]
		[string]$DataProperty,
		[Parameter()]
		[string]$Label,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$BackgroundColor = @("#807B210C"),
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$BorderColor = @("#FF7B210C"),
		[Parameter()]
		[int]$BorderWidth,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$HoverBackgroundColor,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$HoverBorderColor,
		[Parameter()]
		[int[]]$HoverBorderWidth
	)

	$obj = @{
		data = @()
	}

	foreach($parameter in $PSBoundParameters.GetEnumerator())
	{
		$propertyName = [Char]::ToLowerInvariant($parameter.Key[0]) + $parameter.Key.Substring(1)

		if ($parameter.Value -is [UniversalDashboard.Models.DashboardColor[]]) {
			$obj[$propertyName] = $parameter.Value.HtmlColor
		} else {
			$obj[$propertyName] = $parameter.Value
		}
	}

	$obj.psobject.TypeNames.Insert(0,"UDDonutChartDataset")

	$obj
}

function New-UDPolarChartDataset {
	param(
		[Parameter()]
		[string]$DataProperty,
		[Parameter()]
		[string]$Label,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$BackgroundColor = @("#807B210C"),
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$BorderColor = @("#FF7B210C"),
		[Parameter()]
		[int]$BorderWidth,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$HoverBackgroundColor,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor[]]$HoverBorderColor,
		[Parameter()]
		[int[]]$HoverBorderWidth
	)

	$obj = @{
		data = @()
	}

	foreach($parameter in $PSBoundParameters.GetEnumerator())
	{
		$propertyName = [Char]::ToLowerInvariant($parameter.Key[0]) + $parameter.Key.Substring(1)

		if ($parameter.Value -is [UniversalDashboard.Models.DashboardColor[]]) {
			$obj[$propertyName] = $parameter.Value.HtmlColor
		} else {
			$obj[$propertyName] = $parameter.Value
		}
	}

	$obj.psobject.TypeNames.Insert(0,"UDPolarChartDataset")

	$obj
}


#endregion

function Update-UDDashboard {
	param(
		[Parameter(Mandatory = $true)]
		$Url,
		[Parameter(Mandatory = $true)]
		$UpdateToken,
		[Parameter(ParameterSetName = "Content", Mandatory = $true)]
		[ScriptBlock]$Content,
		[Parameter(ParameterSetName = "FilePath", Mandatory = $true)]
		[string]$FilePath,
		[Parameter()]
		[Switch]$AllowTLs10
	)

	Process {

		if (-not $AllowTls10)
		{
			[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
		}
		
		if ($PSCmdlet.ParameterSetName -eq "Content") {
			$Body = $Content.ToString()
		}

		if ($PSCmdlet.ParameterSetName -eq "FilePath") {
			$Body = Get-Content $FilePath -Raw
		}

		Invoke-RestMethod -Uri "$Url/api/internal/dashboard" -Headers @{ "x-ud-update-token" = $UpdateToken } -Body $Body -Method Post
	}
}

function Set-UDCacheData {
	param(
		[Parameter(Mandatory = $true)]
		[String]$Key,
		[Parameter(Mandatory = $true)]
		$Value
	)

	if ($MemoryCache -eq $null) {
		throw "MemoryCache is not defined."
	}

	[Microsoft.Extensions.Caching.Memory.CacheExtensions]::Set($MemoryCache, $Key, $Value)
}

function Get-UDCacheData {
	param(
		[Parameter(Mandatory = $true)]
		[String]$Key
	)

	if ($MemoryCache -eq $null) {
		throw "MemoryCache is not defined."
	}

	[Microsoft.Extensions.Caching.Memory.CacheExtensions]::Get($MemoryCache, $Key)
}

class ValidationErrorMessage : Attribute {
    ValidationErrorMessage([string]$Message) {
        $this.Message = $Message
    }
    [string]$Message
}

function New-UDButton {
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter()]
        $Text,
        [Parameter()]
        [object]$OnClick,
        [Parameter()]
        [Switch]$Floating,
        [Parameter()]
        [Switch]$Flat,
        [Parameter()]
        [UniversalDashboard.Models.FontAwesomeIcons]$Icon,
        [Parameter()]
        [ValidateSet('left', 'right')]
        [String]$IconAlignment = 'left',
        [Parameter()] 
        [UniversalDashboard.Models.DashboardColor]$BackgroundColor,
        [Parameter()] 
        [UniversalDashboard.Models.DashboardColor]$FontColor,
        [Parameter()]
        [Switch]$Disabled,
        [Parameter()]
        [Hashtable]$Style,
        [Parameter()]
        [string]
        $Height,
        [Parameter()]
        [string]
        $Width
    )

    if ($null -ne $OnClick) {
        if ($OnClick -is [scriptblock]) {
            $OnClick = New-UDEndpoint -Endpoint $OnClick -Id $Id
        }
        elseif ($OnClick -isnot [UniversalDashboard.Models.Endpoint]) {
            throw "OnClick must be a script block or UDEndpoint"
        }
    }

    if ((!($Style.BackgroundColor)) -and ($BackgroundColor)) {
        $Style += @{"backgroundColor" = $BackgroundColor.HtmlColor}
    }
    if ((!($Style.Color)) -and ($FontColor)) {
        $Style += @{Color = $FontColor.HtmlColor}
    }
    if ((!($Style.Width)) -and ($Width)) {
        #check if the width is numerical, to append with "px" or if it is string, and not to be appended
        if ($Width -match "^[\d\.]+$") {
            $Style += @{Width = "$($Width)px"}
        }
        else {
            $Style += @{Width = $Width}
        }
    }
    if ((!($Style.Heigth)) -and ($Height)) {
        #check if the width is numerical, to append with "px" or if it is string, and not to be appended
        if ($Height -match "^[\d\.]+$") {
            $Style += @{Height = "$($Height)px"}
        }
        else {
            $Style += @{Height = $Height}
        }
    }

    if ($PSBoundParameters.ContainsKey("Icon")) {
        $IconName = [UniversalDashboard.Models.FontAwesomeIconsExtensions]::GetIconName($Icon)
    }

    @{
        type = 'ud-button'
        isPlugin = $true 

        id = $id 
        onClick = $OnClick.Name
        icon = $IconName
        disabled = $Disabled.IsPresent
        flat = $Flat.IsPresent 
        floating = $Floating.IsPresent
        iconAlignment = $IconAlignment
        text = $Text 
        backgroundColor = $BackgroundColor.HtmlColor 
        fontColor = $FontColor.HtmlColor
        style = $Style
    }
}

function New-UDCard {
    [CmdletBinding(DefaultParameterSetName = 'text')]
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter()]
        [String]$Title,
        [Parameter()]
        [ValidateSet('left', 'center', 'right')]
        [String]$TitleAlignment = 'left',
        [Parameter(ParameterSetName = 'content')]
        [ScriptBlock]$Content,
        [Parameter(ParameterSetName = 'endpoint')]
        [object]$Endpoint,
        [Parameter()]
        [Parameter(ParameterSetName = 'text')]
        [string]$Text,
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$BackgroundColor,
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$FontColor,
        [Parameter()]
        [Hashtable[]]$Links,
        [Parameter()]
        [UniversalDashboard.Models.Basics.Element]$Image,
        [Parameter()]
        [ScriptBlock]$Reveal,
        [Parameter()]
        [String]$RevealTitle,
        [Parameter()]
        [ValidateSet('small', 'medium', 'large')]
        [String]$Size,
        [Parameter()]
        [String]$Language,
        [Parameter()]
        [ValidateSet('left', 'center', 'right')]
        [String]$TextAlignment = 'left',
        [Parameter()]
        [ValidateSet('Small', 'Medium', 'Large')]
        [String]$TextSize = 'Small',
        [Parameter()]
        [UniversalDashboard.Models.FontAwesomeIcons]$Watermark,
        [Parameter()]
        [Switch]$Horizontal
    )

    $activatorClass = ''
    if ($Reveal -ne $null) {
        $activatorClass = 'activator'
    }

    $sizeClass = ''
    if ($PSBoundParameters.ContainsKey('Size')) {
        $sizeClass = $Size
    }

    $cardClass = "card $sizeClass ud-card"
    if ($Horizontal) {
        $cardClass = "card $sizeClass horizontal ud-card"
    }

    $colors = @{
        backgroundColor = $BackgroundColor.HtmlColor
        color = $FontColor.HtmlColor
    }
     
    New-UDElement -Tag "div" -Id $Id -Attributes @{ className = $cardClass; style = $colors } -Content {
        if ($Image -ne $null) {
            New-UDElement -Tag 'div' -Attributes @{ className = "card-image waves-effect waves-block waves-light" } -Content {
                $Image
            }
        }

        New-UDElement -Tag "div" -Attributes @{ className = 'card-content' } -Content {
            New-UDElement -Tag 'span' -Attributes  @{ className = "card-title $TitleAlignment-align $activatorClass" } -Content { 
                $Title 

                if ($Reveal -ne $null) {
                    New-UDElement -Tag 'i' -Attributes @{ className = 'fa fa-ellipsis-v right'}
                }
            }

            if ($PSBoundParameters.Keys.Contains("Watermark")) {

                $IconName = [UniversalDashboard.Models.FontAwesomeIconsExtensions]::GetIconName($Watermark)

                @{
                    type = "icon"
                    icon = $IconName
                    style = @{ 
                        opacity = 0.05
                        float= 'left'
                        marginLeft = '70px'
                        fontSize = '6em'
                        position = 'absolute'
                        top = '20px'
                        color = $FontColor.HtmlColor
                    }
                }
            }

            $ParameterSet = $PSCmdlet.ParameterSetName 
            if ($ParameterSet -eq 'endpoint') {
                New-UDElement -Tag "div" -Attributes @{ className = "$TextAlignment-align" } -Endpoint $Endpoint
            } else {
                New-UDElement -Tag "div" -Attributes @{ className = "$TextAlignment-align" } -Content {
                    $TextContent = {
                        if ($ParameterSet -eq 'content') {
                            $Content.Invoke()
                        } elseif ($ParameterSet -eq 'text') {
                            $Text -split "`r`n" | ForEach-Object {
                                $_
                                New-UDElement -Tag "br"
                            }
                        } 
                    }
    
                    switch($TextSize) {
                        "Small" { $TextContent.Invoke() }
                        "Medium" { New-UDElement -Tag 'h5' -Content {$TextContent.Invoke()}}
                        "Large" { New-UDElement -Tag 'h3' -Content {$TextContent.Invoke()} }
                    }
                }
            }
        }

        if ($Links -ne $null) {
            New-UDElement -Tag 'div' -Attributes @{ className = 'card-action' } -Content {
                $Links
            }
        }

        if ($Reveal -ne $null) {
            New-UDElement -Tag 'div' -Attributes @{ className = 'card-reveal' } -Content {
                New-UDElement -Tag 'span' -Attributes @{ className = 'card-title' } -Content { 
                    $Title 
                    New-UDElement -Tag 'i' -Attributes @{ className = 'fa fa-times right'}
                }
                $Reveal.Invoke()
            }
        }
    }
}

function New-UDChart {
    param(
        [Parameter()]
        [string]$Id = [Guid]::NewGuid(),
        [Parameter()]
		[string[]]$Labels,
        [Parameter()]
        [ValidateSet('bar', 'line', 'area', 'doughnut', 'radar', 'pie', 'horizontalBar')]
		[string]$Type,
		[Parameter()]
		[string]$Title,
		[Parameter()]
		[Hashtable]$Options,
		[Parameter()]
		[string]$Width = "100%",
		[Parameter()]
		[string]$Height = "500px",
		[Parameter()]
		[DashboardColor]$BackgroundColor,
		[Parameter()]
		[DashboardColor]$FontColor,
		[Parameter()]
		[Hashtable[]]$Links,
		[Parameter()]
		[ScriptBlock]$FilterFields,
		[Parameter()]
        [Endpoint]$OnClick,
        [Parameter()]
        [Switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5,
        [Parameter(Mandatory)]
        [Endpoint]$Endpoint
    )

    $Endpoint.Register($Id, $PSCmdlet) | Out-Null

    @{
        type = 'ud-chart'
        id = $id 
        labels = $Labels
        title = $title 
        chartType = $Type.ToLower()
        options = $Options
        width = $Width 
        height = $Height 
        autoRefresh = $AutoRefresh.IsPresent
        refreshInterval = $RefreshInterval 
        backgroundColor = $BackgroundColor.HtmlColor 
        fontColor = $FontColor.HtmlColor
        links = $Links 
    }
}
function New-UDCheckbox {
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter()]
        $Label,
        [Parameter()]
        [Switch]$Checked,
        [Parameter()]
        [Switch]$FilledIn,
        [Parameter()]
        [Switch]$Disabled,
        [Parameter()]
        [object]$OnChange
    )

    if ($null -ne $OnChange) {
        if ($OnChange -is [scriptblock]) {
            $OnChange = New-UDEndpoint -Endpoint $OnChange -Id ($Id + "onChange")
        }
        elseif ($OnChange -isnot [UniversalDashboard.Models.Endpoint]) {
            throw "OnChange must be a script block or UDEndpoint"
        }
    }

    @{
        type = 'ud-checkbox'
        isPlugin = $true

        onChange = $OnChange.Name
        checked = $Checked.IsPresent
        filledIn = $FilledIn.IsPresent
        disabled = $Disabled.IsPresent
        id = $Id
        label = $Label
    }
}
function New-UDCollapsible {
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter(Mandatory = $true, Position = 0)]
        [ScriptBlock]$Items,
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$BackgroundColor = 'Transparent',
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$FontColor = 'Black',
        [Parameter()]
        [Switch]$Popout,
        [Parameter()]
        [ValidateSet("Expandable", "Accordion")]
        [String]$Type = 'Expandable'
    )

    @{
        type = 'ud-collapsible'
        isPlugin = $true
        assetId = $AssetId

        id = $id
        items = $Items.Invoke()
        backgroundColor = $BackgroundColor.HtmlColor
        color = $Color.HtmlColor
        popout = $Popout.IsPresent
        accordion = $Type -eq 'Accordion'
    }
}

function New-UDCollapsibleItem {
    [CmdletBinding(DefaultParameterSetName = "content")]
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter()]
		[String]$Title,
		[Parameter()]
	    [UniversalDashboard.Models.FontAwesomeIcons]$Icon,
		[Parameter(ParameterSetName = "content")]
        [ScriptBlock]$Content,
        [Parameter(ParameterSetName = "endpoint")]
        [object]$Endpoint,
        [Parameter(ParameterSetName = "endpoint")]
        [Switch]$AutoRefresh,
        [Parameter(ParameterSetName = "endpoint")]
		[int]$RefreshInterval = 5,
		[Parameter()]
        [Switch]$Active,
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$BackgroundColor = 'White',
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$FontColor = 'Black'
    )

    if ($PSCmdlet.ParameterSetName -eq 'Content') {
        $pContent = $Content.Invoke()
    }
    else {
        if ($null -ne $Endpoint) {
            if ($Endpoint -is [scriptblock]) {
                $Endpoint = New-UDEndpoint -Endpoint $Endpoint -Id $Id
            }
            elseif ($Endpoint -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "Endpoint must be a script block or UDEndpoint"
            }
        }
    }

    $iconName = $null
    if ($PSBoundParameters.ContainsKey("Icon")) {
        $iconName = [UniversalDashboard.Models.FontAwesomeIconsExtensions]::GetIconName($Icon)
    }

    @{
        id = $Id 
        title = $Title 
        content = $pContent 
        endpoint = $Endpoint.Name 
        autoRefresh = $AutoRefresh.IsPresent
        refreshInterval = $RefreshInterval
        active = $Active.IsPresent
        backgroundColor = $BackgroundColor.HtmlColor
        color = $FontColor.HtmlColor
        icon = $iconName
    }
}
function New-UDCollection {
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter()]
        [ScriptBlock]$Content,
        [Parameter()]
        [Switch]$LinkCollection,
        [Parameter()]
        [string]$Header
    )

    $collectionClass = "collection"
    if ($PSBoundParameters.ContainsKey("Header")) {
        $collectionClass += " with-header"
    }

    if ($LinkCollection) {
        New-UDElement -Tag "div" -Attributes @{
            className = $collectionClass
        } -Content $Content
    }
    else {
        New-UDElement -Tag "ul" -Attributes @{
            className = $collectionClass
        } -Content {
            if ($PSBoundParameters.ContainsKey("Header")) {
                New-UDElement -Tag 'li' -Attributes @{
                    className = 'collection-header'
                } -Content {
                    New-UDHeading -Size 4 -Text $Header
                }
            }

            $Content.Invoke()
        }
    }


}

function New-UDCollectionItem {
    [CmdletBinding(DefaultParameterSetName = 'content')]
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter()]
        [ScriptBlock]$Content,
        [Parameter(ParameterSetName = 'content')]
        [ScriptBlock]$SecondaryContent,
        [Parameter(ParameterSetName = 'link')]
        [String]$Url,
        [Switch]$Active
    )

    $className = "collection-item"
    if ($Active) {
        $className += " active"
    }

    if ($PSCmdlet.ParameterSetName -eq 'link') {
        New-UDElement -Tag "a" -Attributes @{
            href = $Url
            className = $className
        } -Content $Content
    } else {
        New-UDElement -Tag "li" -Attributes @{
            className = $className
        } -Content {
            if ($SecondaryContent -ne $null) {
                New-UDElement -Tag 'div' -Content {
                    $Content.Invoke()
                    New-UDElement -Tag 'span' -Attributes @{ className = 'secondary-content' } -Content $SecondaryContent
                }
            }
            else {
                $Content.Invoke()
            }
           
        }
    }
}

function New-UDColumn {
    [CmdletBinding(DefaultParameterSetName = 'content')]
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),

        [Parameter()]
        [Alias('Size')]
        [ValidateRange(1,12)]
        [int]$SmallSize = 12,
        [Parameter()]
        [ValidateRange(1,12)]
        [int]$LargeSize = 12,
        [Parameter()]
        [ValidateRange(1,12)]
        [int]$MediumSize = 12,

        [Parameter()]
        [ValidateRange(1,12)]
        [int]$SmallOffset = 1,
        [Parameter()]
        [ValidateRange(1,12)]
        [int]$MediumOffset = 1,
        [Parameter()]
        [ValidateRange(1,12)]
        [int]$LargeOffset = 1,

        [Parameter(ParameterSetName = 'content', Position = 1)]
        [ScriptBlock]$Content,

        [Parameter(ParameterSetName = "endpoint")]
        [object]$Endpoint,
        [Parameter(ParameterSetName = "endpoint")]
        [Switch]$AutoRefresh,
        [Parameter(ParameterSetName = "endpoint")]
        [int]$RefreshInterval = 5
    )

    $classes = "col"

    if ($PSBoundParameters.ContainsKey("SmallSize")) {
        $classes += " s$SmallSize"
    }

    if ($PSBoundParameters.ContainsKey("MediumSize")) {
        $classes += " m$MediumSize"
    }

    if ($PSBoundParameters.ContainsKey("LargeSize")) {
        $classes += " l$LargeSize"
    }

    if ($PSBoundParameters.ContainsKey("SmallOffset")) {
        $classes += " offset-s$SmallOffset"
    }

    if ($PSBoundParameters.ContainsKey("MediumOffset")) {
        $classes += " offset-m$MediumOffset"
    }

    if ($PSBoundParameters.ContainsKey("LargeOffset")) {
        $classes += " offset-l$LargeOffset"
    }

    if ($PSCmdlet.ParameterSetName -eq 'content') {
        New-UDElement -Id $Id -Tag 'div' -Attributes @{
            className = $classes
        } -Content $Content
    } else {
        New-UDElement -Id $id -Tag 'div' -Attributes @{
            className = $classes
        } -Endpoint $Endpoint -AutoRefresh:$AutoRefresh -RefreshInterval $RefreshInterval 
    }

    
}
function New-UDCounter {
    param(
        [Parameter()]
        [string]$Id = [Guid]::NewGuid(),
        [Parameter()]
		[string]$Title,
		[Parameter()]
		[string]$Format = "0,0",
		[Parameter()]
		[string]$Icon,
		[Parameter()]
		[DashboardColor]$BackgroundColor,
		[Parameter()]
		[DashboardColor]$FontColor,
	    [Parameter()]
        [Hashtable[]]$Links,
		[Parameter()]
		[string]$TextSize,
		[Parameter()]
		[string]$TextAlignment,
		[Parameter()]
        [Endpoint]$OnClick,
        [Parameter()]
        [Switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval,
        [Parameter()]
        [Endpoint]$Endpoint
    )

    @{
        type = "ud-counter"
        id = $id 
        title = $title 
        format = $format 
        icon = $icon 
        backgroundColor = $BackgroundColor.HtmlColor
        fontColor = $FontColor.HtmlColor
        links = $Links 
        textSize = $TextSize 
        textAlignment = $TextAlignment
        autoRefresh = $AutoRefresh.IsPresent
        refreshInterval = $RefreshInterval 
    }
}
function New-UDDashboard
{
    param(
        [Parameter()]
        [string]$Title = "PowerShell Universal Dashboard",
        [Parameter(ParameterSetName = "Content", Mandatory)]
        [ScriptBlock]$Content,
        [Parameter(ParameterSetName = "Pages", Mandatory)]
        [Hashtable[]]$Pages = @(),
        [Parameter()]
        [Hashtable[]]$NavbarLinks,
        [Parameter()]
        [Element]$NavBarLogo,
        [Parameter()]
        [DashboardColor]$NavBarColor,
        [Parameter()]
        [DashboardColor]$NavBarFontColor,
        [Parameter()]
        [Hashtable]$Footer,
        [Parameter()]
        [Hashtable]$Navigation,
        [Parameter()]
        [Hashtable]$Theme
    )    

    if (-not $Theme)
    {
        $Theme = Get-UDTheme -Name Default
    }

    if ($PSCmdlet.ParameterSetName -eq 'Content')
    {
        $Pages += New-UDPage -Name 'Home' -Content $Content
    }

    $Cache:Pages = $Pages

    foreach($page in $Pages) {
        New-UDEndpoint -Id "$($page.Name)" -Endpoint {
            $page
        } | Out-Null
    }

    @{
        title = $Title 
        pages = $Pages
        navbarLinks = $NavbarLinks
        footer = $Footer
        navigation = $Navigation
        theme = ConvertTo-UDThemeCss -Theme $Theme
        navBarLogo = $NavBarLogo
        navBarColor = $NavBarColor.HtmlColor
        navBarFontColor = $NavBarFontColor.HtmlColor
    }
}

function New-UDError {
    param(
        [Parameter(Mandatory)]
        [string]$Message,
        [Parameter()]
        [string]$Title
    )

    @{
        type = "error"
        isPlugin = $true 
        assetId = $AssetId 

        message = $Message
        title = $Title
    }
}
function Invoke-UDEvent {
    param(
        [Parameter(
            Mandatory = $true,
            ValueFromPipeline = $true,
            Position = 0
        )]
        [String]$Id,
        [Parameter(
            Mandatory = $true,
            Position = 1,
            ParameterSetName = "onClick"
        )]
        [ValidateSet("onClick")]
        [string]$event,
        [Parameter(
            Mandatory = $true,
            Position = 1,
            ParameterSetName = "Scheduled"
        )]
        [switch]$scheduled
    )

    Begin {

    }

    Process {
        if ($PSCmdlet.ParameterSetName -eq "onClick") {
            Invoke-UDJavaScript -javaScript "
                document.getElementById('$Id').click();
            "
        }
        elseif ($PSCmdlet.ParameterSetName -eq "Scheduled") {
            $dashboard = Get-UDDashboard
            $endpoint = $dashboard.DashboardService.EndpointService.ScheduledEndpoints | where-object Name -eq $Id

            if ($endpoint) {
                try {
                    $endpoint.ScriptBlock.Invoke() | Out-Null
                }
                catch {
                    throw ("Invoking endpoint $Id failed with: $($_.Exception.Message)")
                }
                
            }
            else {
                Write-UDLog "Attempting to trigger $Id failed, unable to locate endpoint."
            }
            
        }

    }

    End {

    }
}

function New-UDFab {
    param(
        [Parameter()]
        [string] $Id = ([Guid]::NewGuid()),
        [Parameter()]
        [ScriptBlock]$Content,
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$ButtonColor,
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$IconColor,
        [Parameter()]
        [UniversalDashboard.Models.FontAwesomeIcons]$Icon,
        [Parameter()]
        [ValidateSet("small", "large")]
        $Size = "large",
        [Parameter()]
        [Switch]$Horizontal,
        [Parameter()]
        [object]$onClick,
        [Parameter()]
        [ValidateSet("left", "right", "top", "bottom")]
        [string]$ExpandDirection = "top"
    )

    if ($Horizontal) {
        $ExpandDirection = "left"
    }

    $iconName = [UniversalDashboard.Models.FontAwesomeIconsExtensions]::GetIconName($Icon)

    if ($null -ne $OnClick) {
        if ($OnClick -is [scriptblock]) {
            $OnClick = New-UDEndpoint -Endpoint $OnClick -Id $Id
        }
        elseif ($OnClick -isnot [UniversalDashboard.Models.Endpoint]) {
            throw "OnClick must be a script block or UDEndpoint"
        }
    }

    $Children = @()
    if ($null -ne $Content)
    {
        $Children = & $Content
    }

    @{
        type = "ud-fab"
        assetId = $AssetId
        isPlugin = $true 

        id = $id
        content = $Children
        size = $Size.tolower()
        backgroundColor = $ButtonColor.HtmlColor
        color = $IconColor.HtmlColor
        expandDirection = $ExpandDirection
        icon = $iconName
        onClick = $OnClick.Name
    }
}
function New-UDFabButton {
    param(
        [Parameter()]
        [string] $Id = ([Guid]::NewGuid()),
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$ButtonColor,
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$IconColor,
        [Parameter()]
        [UniversalDashboard.Models.FontAwesomeIcons]$Icon,
        [Parameter()]
        [ValidateSet("Small", "Large")]
        $Size = "Large",
        [Parameter()]
        [object]$onClick
    )

    $iconName = [UniversalDashboard.Models.FontAwesomeIconsExtensions]::GetIconName($Icon)

    if ($null -ne $OnClick) {
        if ($OnClick -is [scriptblock]) {
            $OnClick = New-UDEndpoint -Endpoint $OnClick -Id $Id
        }
        elseif ($OnClick -isnot [UniversalDashboard.Models.Endpoint]) {
            throw "OnClick must be a script block or UDEndpoint"
        }
    }

    @{
        type = "udfabbutton"
        assetId = $AssetId
        isPlugin = $true 

        id = $id
        size = $Size.tolower()
        backgroundColor = $ButtonColor.HtmlColor
        color = $IconColor.HtmlColor
        icon = $iconName
        onClick = $OnClick.Name
    }
}
function New-UDFooter {
    param(
        [Parameter()]
		[Hashtable[]]$Links,
        [Parameter()]
        [string]$Copyright,
		[Parameter()]
		[DashboardColor]$BackgroundColor,
		[Parameter()]
		[DashboardColor]$FontColor
    )

    @{
        type = "ud-footer"
        isPlugin = $true 
        assetId = $AssetId
        
        links = $Links 
        copyright = $Copyright 
        backgroundColor = $BackgroundColor.HtmlColor 
        fontColor = $FontColor.HtmlColor
    }
}
function New-UDGrid {
    param(
        [Parameter()]
        [string]$Id = ([Guid]::NewGuid()),
        [Parameter()]
		[string]$Title,
		[Parameter()]
		[string[]]$Headers,
		[Parameter()]
		[string[]]$Properties,
		[Parameter()]
		[string]$DefaultSortColumn,
		[Parameter()]
		[Switch]$DefaultSortDescending,
	    [Parameter()]
	    [UniversalDashboard.Models.DashboardColor]$BackgroundColor,
	    [Parameter()]
	    [UniversalDashboard.Models.DashboardColor]$FontColor,
	    [Parameter()]
	    [Hashtable[]]$Links,
		[Parameter()]
		[Switch]$ServerSideProcessing,
		[Parameter()]
	    [string]$DateTimeFormat = "lll",
		[Parameter()]
		[int]$PageSize = 10,
		[Parameter()]
		[Switch]$NoPaging,
		[Parameter()]
        [string]$FilterText = "Filter",
        [Parameter()]
        [Switch]$NoFilter,
        [Parameter(Mandatory)]
        [Endpoint]$Endpoint,
        [Parameter()]
        [object[]]$ArgumentList,
        [Parameter()]
	    [Switch]$AutoRefresh,
	    [Parameter()]
        [int]$RefreshInterval = 5,
        [Parameter()]
        [Switch]$NoExport 
    )

    End {

        $Endpoint.Register($Id, $PSCmdlet)

        @{
            type = 'ud-grid'
            isPlugin = $true 
            assetId = $AssetId

            id = $id
            title = $Title
            headers = $Headers 
            properties = $Properties 
            defaultSortColumn = $DefaultSortColumn
            defaultSortDescending = $DefaultSortDescending.IsPresent
            backgroundColor = $BackgroundColor.HtmlColor
            fontColor = $FontColor.HtmlColor
            links = $Links
            serverSideProcessing = $ServerSideProcessing.IsPresent
            dateTimeFormat = $DateTimeFormat
            pageSize = $PageSize
            noPaging = $NoPaging.IsPresent
            filterText = $FilterText
            noFilter = $NoFilter.IsPresent
            autoRefresh = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
            noExport = $NoExport.IsPresent
        }
    }
}
function New-UDGridLayout {
    param(
        [Parameter()]
        [string]$Id = ([Guid]::NewGuid()).ToString(),
        [Parameter()]
        [int]$RowHeight = 30,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [string]$Layout = '[]',
        [Parameter()]
        [int]$LargeColumns = 12,
        [Parameter()]
        [int]$MediumColumns = 10,
        [Parameter()]
        [int]$SmallColumns = 6,
        [Parameter()]
        [int]$ExtraSmallColumns = 4,
        [Parameter()]
        [int]$ExtraExtraSmallColumns = 2,
        [Parameter()]
        [int]$LargeBreakpoint = 1200,
        [Parameter()]
        [int]$MediumBreakpoint = 996,
        [Parameter()]
        [int]$SmallBreakpoint = 768,
        [Parameter()]
        [int]$ExtraSmallBreakpoint = 480,
        [Parameter()]
        [int]$ExtraExtraSmallBreakpoint = 0,
        [Parameter()]
        [switch]$Draggable,
        [Parameter()]
        [switch]$Resizable,
        [Parameter()]
        [switch]$Persist
    )

    End {
        $Breakpoints = @{
            lg = $LargeBreakpoint
            md = $MediumBreakpoint
            sm = $SmallBreakpoint
            xs = $ExtraSmallBreakpoint
            xxs = $ExtraExtraSmallBreakpoint
        }

        $Columns  = @{
            lg = $LargeColumns
            md = $MediumColumns
            sm = $SmallColumns
            xs = $ExtraSmallColumns
            xxs = $ExtraExtraSmallColumns
        }

        @{
            type = "ud-grid-layout"
            isPlugin = $true
            id = $Id
            className = "layout"
            rowHeight = $RowHeight
            content = $Content.Invoke()
            layout = $Layout
            cols = $Columns
            breakpoints = $Breakpoints
            isDraggable = $Draggable.IsPresent
            isResizable = $Resizable.IsPresent
            persist = $Persist.IsPresent
        }
    }
}
function New-UDHeading {
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter(ParameterSetName = "Content")]
        [ScriptBlock]$Content,
        [Parameter(ParameterSetName = "Text")]
        [string]$Text,
        [Parameter()]
        [ValidateSet("1", "2", "3", "4", "5", "6")]
        $Size,
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$Color = 'black'
    )

    if ($PSCmdlet.ParameterSetName -eq "Text") {
        $Content = { $Text }
    }

    New-UDElement -Id $Id -Tag "h$size" -Content $Content -Attributes @{
        style = @{
            color = $Color.HtmlColor
        }
    }
}
function New-UDIcon {
    param(
        [Parameter()]
        [string]$Id = ([Guid]::NewGuid()).ToString(),
        [Parameter()]
        [UniversalDashboard.Models.FontAwesomeIcons]$Icon, 
        [Parameter()]
        [Switch]$FixedWidth,
        [Parameter()]
        [switch]$Inverse,
        [Parameter()]
        [int]$Rotation,
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [string]$Transform,
        [Parameter()]
        [ValidateSet("horizontal", 'vertical', 'both')]
        [string]$Flip,
        [Parameter()]
        [ValidateSet('right', 'left')]
        [string]$Pull,
        [Parameter()]
        [switch]$ListItem,
        [Parameter()]
        [switch]$Spin,
        [Parameter()]
        [switch]$Border,
        [Parameter()]
        [switch]$Pulse,
        [Parameter ()]
        [ValidateSet("xs", "sm", "lg", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x")]
        [string]$Size = "sm",
        [Parameter()]
        [Hashtable]$Style,
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [switch]$Regular,
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]
        $Color
    )

    End {

        $iconName = [UniversalDashboard.Models.FontAwesomeIconsExtensions]::GetIconName($Icon)

        $MUIcon = @{
            type       = "icon"
            id         = $id 
            size       = $Size
            fixedWidth = $FixedWidth
            color      = $Color.HtmlColor
            listItem   = $ListItem.IsPresent
            inverse    = $Inverse.IsPresent
            rotation   = $Rotation
            flip       = $Flip
            spin       = $Spin.IsPresent
            pulse      = $Pulse.IsPresent
            border     = $Border.IsPresent
            pull       = $Pull
            className  = $ClassName
            transform  = $Transform
            style      = $Style
            title      = $Title
            regular    = $Regular.IsPresent
            icon       = $iconName
        }

        $MUIcon.PSTypeNames.Insert(0, "UniversalDashboard.Icon") | Out-Null

        $MUIcon
    }
}
function New-UDIFrame {
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter()]
        $Uri
    )

    New-UDElement -Id $Id -Tag "iframe" -Attributes @{
        src = $Uri
    }
}
function New-UDImage {
    [CmdletBinding(DefaultParameterSetName = 'url')]
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter(ParameterSetName = 'url')]
        [String]$Url,
        [Parameter(ParameterSetName = 'path')]
        [String]$Path,
        [Parameter()]
        [int]$Height,
        [Parameter()]
        [int]$Width,
        [Parameter()]
        [Hashtable]$Attributes = @{}
    )

    switch ($PSCmdlet.ParameterSetName) {
        'path' {
            if (-not [String]::IsNullOrEmpty($Path)) {
                if (-not (Test-Path $Path)) {
                    throw "$Path does not exist."
                }
        
                $mimeType = 'data:image/png;base64, '
                if ($Path.EndsWith('jpg') -or $Path.EndsWith('jpeg')) {
                    $mimeType = 'data:image/jpg;base64, '
                }
        
                $base64String = [Convert]::ToBase64String([System.IO.File]::ReadAllBytes($Path))
        
                $Attributes.'src' = "$mimeType $base64String"
            }
        }
        'url' {
            $Attributes.'src' = $Url
        }
    }
    if ($PSBoundParameters.ContainsKey('Height')) {
        $Attributes.'height' = $Height
    }
    if ($PSBoundParameters.ContainsKey('Width')) {
        $Attributes.'width' = $Width
    }

    $Attributes["id"] = $Id

    New-UDElement -Tag 'img' -Attributes $Attributes
}

function New-UDImageCarousel {
	param(
		[Parameter()]
		[ScriptBlock]$Items,
		[Parameter()]
		[string]$Id = ([Guid]::NewGuid()).ToString(),
		[Parameter()]
		[alias("ShowIndicators")] 
		[switch]$Indicators,
		[Parameter()]
		[alias("FullWidth")]
		[switch]$FullScreen,
		[Parameter()]
		[alias("Speed")]
		[int]$Interval = 6000,
		[Parameter()]
		[int]$Duration = 500,
		[Parameter()]
		[int]$Height = 400
	)

	End {

		$Options = @{
			duration   = $Duration
			height     = $Height 
			interval   = $Interval
			indicators = $Indicators.IsPresent
		}

		@{
			type       = "image-carousel"
			isPlugin   = $true
			assetId    = $AssetId
			items      = $Items.Invoke()
			id         = $id 
			fullscreen = $FullScreen.IsPresent
			options    = $Options
		}
	}
}

function New-UDImageCarouselItem {
	param(
		[Parameter()]
		[hashtable]$Style,
		[Parameter()]
		[string]$Id = ([Guid]::NewGuid()).ToString(),
		[Parameter()]
		[alias("BackgroundImage")]
		[string]$ImageSource,
		[Parameter()]
		[string]$Url
	)

	End {
		@{			
			style       = $Style
			id          = $id
			url         = $Url
			imageSource = $ImageSource
		}
	}
}
function New-UDInput {
    param(

        [Parameter()]
        [string]$Id = [Guid]::NewGuid(),

		[Parameter()]
		[string]$Title,

		[Parameter()]
		[string]$SubmitText = "Submit",

		[Parameter()]
		[DashboardColor]$BackgroundColor,

		[Parameter()]
		[DashboardColor]$FontColor,

		[Parameter(Mandatory)]
		[ScriptBlock]$Endpoint,

		[Parameter()]
		[ScriptBlock]$Content,

        [Parameter()]
        [Switch]$Validate
    )

    $fields = @()
    if ($Content)
    {
        $fields = & $Content 
    }
    else 
    {
        $ParamBlock = $Endpoint.Ast.ParamBlock
        if ($null -ne $ParamBlock)
        {
            foreach($parameter in $ParamBlock.Parameters)
            {
                $field = @{
                    name = $parameter.Name.VariablePath.ToString()
                    value = ''
                    type = ''                    
                    dotNetType = ''
                }

                if ($parameter.StaticType -eq [bool] -or $parameter.StaticType -eq [Switch])
                {
                    $field.value = "false"
                    $field.type = 'checkbox'
                    $field.dotNetType = $parameter.StaticType.FullName
                }
                elseif ($parameter.StaticType.IsEnum)
                {
                    $field.Type = 'select'
                    $field.validOptions = [Enum]::GetNames($parameter.StaticType)
                    $field.dotNetType = $parameter.StaticType.FullName
                    $field.Value = [string]([Enum]::GetValues($parameter.StaticType) | Select-Object -First 1)
                }
                elseif ($Parameter.StaticType -eq [DateTime])
                {
                    $field.type = 'date';
                    $field.dotNetType = $parameter.StaticType.FullName
                }
                elseif ($Parameter.StaticType -eq [System.Security.SecureString])
                {
                    $field.type = 'password';
                    $field.dotNetType = $parameter.StaticType.FullName
                }
                elseif ($Parameter.StaticType -eq [string[]])
                {
                    $field.type = 'textarea';
                    $field.dotNetType = $parameter.StaticType.FullName
                }
                else 
                {
                    $field.Type = 'textbox'
                    $field.DotNetType = [string].FullName
                }

                $fields += $field
            }
        }
    }

    $CustomEndpoint = {
        function ConvertTo-Type {
            param(
                [string]$VariableName
            )

            $Value = Get-Variable -Name $VariableName -ValueOnly
            $Type = Get-Variable -Name "$($VariableName)_type" -ValueOnly

            if ($Type -eq 'checkbox')
            {
                [bool]$out = $false
                [bool]::TryParse($Value, [ref]$out) | Out-Null
                $Value = $out
            }
            elseif ($Type -eq 'date')
            {
                [DateTime]$out = [DateTime]::MinValue
                [DateTime]::TryParseExact($Value, "dd-MM-yyyy", $Host.CurrentCulture, 'none', [ref]$out)
                $Value = $out
            }

            $Value
        }

        function Invoke-PSUForm 
        {
            #content
        }

        $parameters = @{}

        #parameters

        Invoke-PSUForm @parameters
    }

    $parameterStr = ''
    foreach($field in $fields)
    {
         $parameterStr += "if (-not [String]::IsNullOrEmpty(`$$($field.Name))) { `$parameters['$($field.Name)'] = ConvertTo-Type -VariableName '$($field.Name)' $([Environment]::NewLine) }"
    }

    $Endpoint = [ScriptBlock]::Create($CustomEndpoint.ToString().Replace("#content", $Endpoint.ToString()).Replace("#parameters", $parameterStr))

    [Endpoint]$e = $Endpoint
    $e.Register($Id, $PSCmdlet)

    Write-Debug ($Endpoint.ToString())

    @{
        type = "ud-input"
        isPlugin = $true 
        assetId = $AssetId 

        title = $title 
        submitText = $SubmitText 
        backgroundColor = $BackgroundColor.HtmlColor
        fontColor = $FontColor.HtmlColor
        validate = $Validate.IsPresent
        fields = $fields
        id = $id
    }
}

function New-UDInputField {
    param(
        [Parameter(Mandatory)]
        [string]$Name,

        [Parameter()]
        [Switch]$Mandatory,

        [Parameter()]
        [object[]]$Values,

        [Parameter()]
        [object]$DefaultValue,

        [Parameter()]
        [string[]]$Placeholder,

        [Parameter()]
        [Switch]$Disabled,

        [Parameter()]
        [ValidateSet("textbox", "checkbox", "select", "radioButtons", "password", "textarea", "switch", "date", "file", "time", "binaryFile")]
        [string]$Type,

        [Parameter(ParameterSetName = "datetime")]
        [string]$OkText = "Ok",

        [Parameter(ParameterSetName = "datetime")]
        [string]$CancelText = "Cancel",

        [Parameter(ParameterSetName = "datetime")]
        [string]$ClearText = "Clear"
    )

    if ($Type -eq 'select' -and -not $DefaultValue -and $Values -and $Values.Length -gt 0)
    {
        $DefaultValue = $Values | Select-Object -First 1
    }

    $inputType = [string]
    if ($Type -eq 'checkbox')
    {
        $inputType = [bool]
    }

    if ($Type -eq 'date')
    {
        $inputType = [DateTime]
    }

    @{
        name = $Name 
        required = $Mandatory.IsPresent
        validOptions = $Values
        value = $DefaultValue
        placeholder = $Placeholder
        disabled = $Disabled.IsPresent
        type = $type
        okText = $OkText
        cancelText = $CancelText 
        clearText = $ClearText 
        dotNetType = $inputType.FullName
    }
}

function New-UDInputAction {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory, ParameterSetName = "toast")]
		[string]$Toast,

	    [Parameter(ParameterSetName = "toast")]
	    [int]$Duration = 1000,

	    [Parameter(Mandatory, ParameterSetName = "redirect")]
		[string]$RedirectUrl,

		[Parameter(Mandatory, ParameterSetName = "content")]
		[ScriptBlock]$Content,

		[Parameter()]
		[Switch]$ClearInput
    )

    if ($Toast)
    {
        @{
            type = "toast"
            text = $Toast 
            duration = $Duration 
            clearInput = $ClearInput.IsPresent
        }
    }
    elseif ($RedirectUrl)
    {
        @{
            type = "redirect"
            route = $RedirectUrl
        }
    }
    elseif ($Content)
    {
        $c = @()
        try 
        {
            $c = & $Content 
        }
        catch
        {
            $c = New-UDError -Message $_
        }

        @{
            type = "content"
            components = $c
        }
    }
    else 
    {
        @{
            type = "clear"
            clearInput = $true 
        }
    }
}
function New-UDLayout {
    param(
        [Parameter(Mandatory = $true)]
        [ValidateRange(1, 12)]
        [int]$Columns,
        [Parameter(Mandatory = $true)]
        [ScriptBlock]$Content
    )

    $Components = $Content.Invoke()

    if ($Columns -eq 1) 
    {
        $LargeColumnSize = 12
        $MediumColumnSize = 12
        $SmallColumnSize = 12
    }
    else 
    {
        $LargeColumnSize = 12 / $Columns
        $MediumColumnSize = 12 / ($Columns / 2)
        $SmallColumnSize = 12
    }

    $Offset = 0
    $ComponentCount = ($Components | Measure-Object).Count

    while ($Offset -lt $ComponentCount) {
        $ColumnObjects = $Components | Select-Object -Skip $Offset -First $Columns | ForEach-Object {
            New-UDColumn -SmallSize $SmallColumnSize -MediumSize $MediumColumnSize -LargeSize $LargeColumnSize -Content {
                $_
            }
        }

        New-UDRow -Columns {
            $ColumnObjects
        }
        
        $Offset += $Columns
    }
}
function New-UDLink {
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter()]
        [string]$Text, 
        [Parameter()]
        [string]$Url, 
        [Parameter()]
        [string]$Icon,
        [Parameter()]
        [switch]$OpenInNewWindow,
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$FontColor,
        [Parameter()]
        [object]$OnClick
    )

    End {

        if ($null -ne $OnClick) {
            if ($OnClick -is [scriptblock]) {
                $OnClick = New-UDEndpoint -Endpoint $OnClick -Id ($Id + "OnClick")
            }
            elseif ($OnClick -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnClick must be a script block or UDEndpoint"
            }
        }

        @{
            type = 'ud-link'
            isPlugin = $true 
            assetId = $AssetId

            id = $Id
            text = $Text 
            url = $Url 
            icon = $Icon 
            openInNewWindow = $OpenInNewWindow.IsPresent
            color = $FontColor.HtmlColor
            onClick = $OnClick.Name
        }
    }
}
function New-UDMonitor {
    param(
        [Parameter()]
        [string]$Id = [Guid]::NewGuid(),
        [Parameter()]
        [ValidateSet('bar', 'line', 'area', 'doughnut', 'radar', 'pie', 'horizontalBar')]
		[string]$Type = 'line',
		[Parameter(Mandatory)]
		[string]$Title,
		[Parameter()]
		[int]$DataPointHistory = 10,
		[Parameter()]
		[Hashtable]$Options,
		[Parameter()]
		[DashboardColor[]]$ChartBackgroundColor,
		[Parameter()]
		[DashboardColor[]]$ChartBorderColor,
		[Parameter()]
		[DashboardColor]$BackgroundColor,
		[Parameter()]
		[string]$Width,
		[Parameter()]
		[string]$Height = '500px',
		[Parameter()]
		[DashboardColor]$FontColor,
		[Parameter()]
		[int]$BorderWidth = 1,
		[Parameter()]
		[string[]]$Labels = @(),
		[Parameter()]
		[Hashtable[]]$Links,
		[Parameter()]
        [ScriptBlock]$FilterFields,
        [Parameter()]
        [Switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5,
        [Parameter(Mandatory)]
        [Endpoint]$Endpoint
    )

    $Endpoint.Register($Id, $PSCmdlet) | Out-Null

    if (-not $Labels)
    {
        $Labels = @($Title)
    }

    @{
        type = 'ud-monitor'
        id = $id 
        live = $true
        labels = $Labels
        title = $title 
        dataPointHistory = $DataPointHistory
        chartType = $Type.ToLower()
        options = $Options
        width = $Width 
        height = $Height 
        autoRefresh = $AutoRefresh
        refreshInterval = $RefreshInterval 
        backgroundColor = $BackgroundColor.HtmlColor 
        fontColor = $FontColor.HtmlColor
        links = $Links 
        chartBackgroundColor = if($chartBackgroundColor) { $chartBackgroundColor.HtmlColor } else { @() }
        chartBorderColor = if ($ChartBorderColor) { $ChartBorderColor.HtmlColor } else { @() }
    }
}
function New-UDPage 
{
    param(
        [Parameter()]
        [string]$Id = [Guid]::NewGuid(),
		[Parameter(Position = 0, Mandatory = $true)]
		[string]$Name,
	    [Parameter(Position = 1)]
		[string]$Icon, 
	    [Parameter(Position = 2, ParameterSetName = "content")]
		[ScriptBlock]$Content,
		[Parameter(Position = 5)]
		[string]$Url,
		[Parameter(Position = 3)]
		[Switch]$DefaultHomePage,
		[Parameter(Position = 4)]
        [string]$Title,
        [Parameter(Position = 2, ParameterSetName = "endpoint")]
        [Endpoint]$Endpoint,
        [Parameter()]
        [string]$Role
    )

    if ($Endpoint)
    {
        $Endpoint.Register($Id, $Role, $PSCmdlet)    
    }

    if (-not [string]::IsNullOrEmpty($Url) -and -not $Url.StartsWith("/"))
    {
        $Url = "/" + $Url
    }

    if ([string]::IsNullOrEmpty($Url) -and $null -ne $Name)
    {
        $Url = "/" + $Name.Replace(' ', '-');
    }

    [array]$c = @()
    if ($Content) { 
        try 
        {
            [array]$c = . $Content
        }
        catch 
        {
            [array]$c = New-UDError -Message $_ 
        }
    }

    @{
        name = $Name
        url = $Url
        id = $Id
        icon = $Icon
        defaultHomePage = $DefaultHomePage.IsPresent
        title = $Title
        content = $c
        dynamic = $Endpoint -ne $null
        role = $Role
    }
}
function New-UDParagraph {
    param(
        [Parameter(ParameterSetName = 'content')]
        [ScriptBlock]$Content,
        [Parameter(ParameterSetName = 'text')]
        [string]$Text,
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$Color = 'black'
    )

    if ($PSCmdlet.ParameterSetName -eq 'content') {
        New-UDElement -Tag 'p' -Content $Content -Attributes @{
            style = @{
                color = $Color.HtmlColor
            }
        }
    }
    else {
        New-UDElement -Tag 'p' -Content {
            $Text
        } -Attributes @{
            style = @{
                color = $Color.HtmlColor
            }
        }
    }
   
}
function New-UDPreloader {
    [CmdletBinding(DefaultParameterSetName = "indeterminate")]
    param(
        [Parameter(ParameterSetName = "determinate")]
        [ValidateRange(0, 100)]
        $PercentComplete,
        [Parameter(ParameterSetName = "determinate")]
        [Parameter(ParameterSetName = "indeterminate")]
        [UniversalDashboard.Models.DashboardColor]$BackgroundColor,
        [Parameter(ParameterSetName = "determinate")]
        [Parameter(ParameterSetName = "indeterminate")]
        [UniversalDashboard.Models.DashboardColor]$ProgressColor,
        [Parameter(ParameterSetName = 'circular')]
        [Switch]$Circular,
        [Parameter(ParameterSetName = 'circular')]
        [ValidateSet('blue', 'red', 'green')]
        [string]$Color,
        [Parameter(ParameterSetName = 'circular')]
        [ValidateSet('small', 'medium', 'large')]
        [string]$Size
        )

    if ($PSCmdlet.ParameterSetName -eq 'circular') {
        $sizeClass = ''
        switch ($Size) {
            "small" { $sizeClass = 'small' }
            "large" { $sizeClass = 'big' }
        }

        New-UDElement -Tag 'div' -Attributes @{className = "preloader-wrapper $sizeClass active"} -Content {
            New-UDElement -Tag 'div' -Attributes @{ className = "spinner-layer spinner-$color-only"} -Content {
                New-UDElement -Tag 'div' -Attributes @{ className = 'circle-clipper left'} -Content {
                    New-UDElement -Tag 'div' -Attributes @{ className ='circle' } 
                }
                New-UDElement -Tag 'div' -Attributes @{ className = 'gap-patch'} -Content {
                    New-UDElement -Tag 'div' -Attributes @{ className ='circle' } 
                }
                New-UDElement -Tag 'div' -Attributes @{ className = 'circle-clipper right'} -Content {
                    New-UDElement -Tag 'div' -Attributes @{ className ='circle' } 
                }
            }
        }
    }
    else 
    {
        $OutsideAttributes = @{
            className = "progress"
        }
    
        if ($PSBoundParameters.ContainsKey("BackgroundColor")) {
            $OutsideAttributes.style = @{
                backgroundColor = $BackgroundColor.HtmlColor
            }
        }
        
        New-UDElement -Tag "div" -Attributes $OutsideAttributes -Content {
            $Attributes = @{
                className = $PSCmdlet.ParameterSetName
            }
    
            if ($PSBoundParameters.ContainsKey("ProgressColor")) {
                $Attributes.style = @{
                    backgroundColor = $ProgressColor.HtmlColor
                }
            }
    
            if ($PSCmdlet.ParameterSetName -eq "determinate") {
                $Attributes["style"] = @{
                    width = "$($PercentComplete)%"
                }
            }
    
            New-UDElement -Tag "div" -Attributes $Attributes
        }
    }
    


}
function New-UDRadio {
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter()]
        [String]$Label,
        [Parameter()]
        [Switch]$WithGap,
        [Parameter()]
        [Switch]$Disabled,
        [Parameter()]
        [object]$OnChange,
        [Parameter()]
        [string]$Group,
        [Parameter()]
        [Switch]$Checked
    )

    $Attributes = @{
        type = "radio"
        onChange = $OnChange
        name = $Group
    }

    if ($Checked) {
        $Attributes.checked = 'checked'
    }

    if ($WithGap) {
        $Attributes.className = 'with-gap'
    }

    if ($Disabled) {
        $Attributes.disabled = $true
    }

    New-UDElement -Tag "p" -Content {
        New-UDElement -Tag 'label' -Content {
            New-UDElement -Id $Id -Tag "input" -Attributes $Attributes
            New-UDElement -Tag 'span' -Content { $label }
        }
    }
}
function New-UDRow {
    [CmdletBinding(DefaultParameterSetName = 'static')]
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter(ParameterSetName = "static", Position = 0)]
        [ScriptBlock]$Columns,
        [Parameter(ParameterSetName = "dynamic")]
        [object]$Endpoint,
        [Parameter(ParameterSetName = "dynamic")]
        [Switch]$AutoRefresh,
        [Parameter(ParameterSetName = "dynamic")]
        [int]$RefreshInterval = 5
    )

    if ($PSCmdlet.ParameterSetName -eq 'static') {
        New-UDElement -Tag 'div' -Attributes @{
            className = 'row'
        } -Content $Columns -Id $Id
    }
    else {
        New-UDElement -Tag 'div' -Attributes @{
            className = 'row'
        } -Endpoint $Endpoint -AutoRefresh:$AutoRefresh -RefreshInterval $RefreshInterval -Id $Id
    }
}
function New-UDSelect {
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter()]
        [ScriptBlock]$Option,
        [Parameter()]
        [Switch]$MultiSelect,
        [Parameter()]
        [String]$Label,
        [Parameter()]
        [Switch]$BrowserDefault,
        [Parameter()]
        [Switch]$Icons,
        [Parameter()]
        [object]$OnChange
    )

    if ($null -ne $OnChange) {
        if ($OnChange -is [scriptblock]) {
            $OnChange = New-UDEndpoint -Endpoint $OnChange -Id ($Id + "onChange")
        }
        elseif ($OnChange -isnot [UniversalDashboard.Models.Endpoint]) {
            throw "OnChange must be a script block or UDEndpoint"
        }
    }

    @{
        type = 'ud-select'
        isPlugin = $true 

        id = $id 
        options = $Option.Invoke()
        multiple = $MultiSelect.IsPresent
        label = $Label
        browserDefault = $BrowserDefault.IsPresent
        icons = $Icons.IsPresent
        onChange = $OnChange.Name
    }
}

function New-UDSelectGroup {
    param(
        [Parameter(Mandatory = $true)]
        [ScriptBlock]$Option,
        [Parameter(Mandatory = $true)]
        [String]$Name
    )

    @{
        type = 'ud-select-group'
        name = $Name 
        options = $Option.Invoke()
    }

}

function New-UDSelectOption {
    param(
        [Parameter(Mandatory = $true)]
        [String]$Name,
        [Parameter(Mandatory = $true)]
        [String]$Value,
        [Parameter()]
        [Switch]$Disabled,
        [Parameter()]
        [Switch]$Selected,
        [Parameter()]
        [String]$Icon
    )

    @{
        name = $Name 
        value = $Value 
        disabled = $Disabled.IsPresent
        selected = $Selected.IsPresent
        icon = $Icon
    }
}

function New-UDSideNav {
    param(
        [Parameter()]
        [string]$Id = [Guid]::NewGuid(),
        [Parameter(ParameterSetName = "Endpoint", Mandatory = $true)]
        [Endpoint]$Endpoint, 
        [Parameter(ParameterSetName = "Content", Mandatory = $true)]
        [ScriptBlock]$Content,
        [Parameter(ParameterSetName = "None", Mandatory = $true)]
        [Switch]$None,
        [Parameter()]
        [Switch]$Fixed,
        [Parameter()]
        [int]$Width = 300
    )

    [array]$c = @()
    if ($Content) { 
        try 
        {
            [array]$c = & $Content 
        }
        catch 
        {
            [array]$c = @(New-UDError -Message $_)
        }
    }

    if ($Endpoint) {
        $Endpoint.Register($Id, $PSCmdlet)
    }

    @{
        id = $id
        content = $c
        none = $None.IsPresent
        fixed = $Fixed.IsPresent
        width = $Width 
        type = 'side-nav'
        endpoint = $Endpoint
    }
}

function New-UDSideNavItem {
    param( 
        [Parameter()]
        [string]$Id = [Guid]::NewGuid(),

        [Parameter(ParameterSetName = "Divider")]
        [Switch]$Divider,

        [Parameter(ParameterSetName = "SubHeader")]
        [Switch]$SubHeader,

        [Parameter(ParameterSetName = "SubHeader")]
        [ScriptBlock]$Children,

        [Parameter(ParameterSetName = "Url")]
        [Alias("PageName")]
        [string]$Url,

        [Parameter()]
        [string]$Image,
        [Parameter()]
        [string]$Background,

        [Parameter(ParameterSetName = "SubHeader")]
        [Parameter(ParameterSetName = "Url")]
        [Parameter(ParameterSetName = "OnClick")]
        [string]$Text,

        [Parameter(ParameterSetName = "SubHeader")]
        [Parameter(ParameterSetName = "Url")]
        [Parameter(ParameterSetName = "OnClick")]
        [string]$Icon,

        [Parameter(ParameterSetName = "OnClick")]
        [Endpoint]$OnClick
    )

    [array]$c = @()
    if ($Children) { 
        try {
            [array]$c = & $Children;      
        }
        catch {
            [array]$c = @(New-UDError -Message $_)
        }
        
    }

    if ($OnClick) {
        $OnClick.Register($Id + "onClick", $PSCmdlet) | Out-Null
    }

    @{
        id = $Id
        divider = $Divider.IsPresent
        subHeader = $subHeader.IsPresent
        children = $c
        text = $Text
        image = $Image
        background = $Background
        url = $Url
        icon = $Icon 
        type = "side-nav-item"
        hasCallback = $null -ne $OnClick
    }
}
function New-UDSpan {
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter()]
        $Content
    )

    New-UDElement -Id $Id -Tag "span" -Content {
        $Content
    }
}
function New-UDSplitPane {
    param(
        [Parameter()]
        [string]$Id = ([Guid]::NewGuid()).ToString(),
        [Parameter(Mandatory)]
        [ScriptBlock]$Content,
        [Parameter()]
        [ValidateSet("vertical", "horizontal")]
        [string]$Direction = "vertical",
        [Parameter()]
        [int]$MinimumSize,
        [Parameter()]
        [int]$DefaultSize
    )

    $Children = & $Content

    if ($Children.Length -ne 2) {
        Write-Error "Split pane requires exactly two components in Content"
        return
    }

    $Options = @{
        content = $Children
        id = $Id
        split = $Direction.ToLower()
        type = "ud-splitpane"
    }

    if ($PSCmdlet.MyInvocation.BoundParameters.ContainsKey("MinimumSize")) {
        $Options["minSize"] = $MinimumSize
    }

    if ($PSCmdlet.MyInvocation.BoundParameters.ContainsKey("DefaultSize")) {
        $Options["defaultSize"] = $DefaultSize
    }

    $Options
}
function New-UDSwitch {
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter()]
        $OnText = "On",
        [Parameter()]
        $OffText = "Off",
        [Parameter()]
        [Switch]$Disabled,
        [Parameter()]
        [object]$OnChange,
        [Parameter()]
        [Switch]$On
    )

    $Attributes = @{ 
        type = "checkbox"
        onChange = $OnChange
    }

    if ($On) {
        $Attributes.checked = 'checked'
    }


    if ($Disabled) {
        $Attributes.disabled = $true
    }

    New-UDElement -Tag "div" -Content {
        New-UDElement -Tag "label" -Content {
            $OffText
            New-UDElement -Tag "input" -Attributes $Attributes -Id $Id
            New-UDElement -Tag "span" -Attributes @{className = "lever"}
            $OnText
        }
    } -Attributes @{
        className = "switch"
    }
}
function New-UDTable {
	param(
		[Parameter()]
	    [string]$Id = ([Guid]::NewGuid()),
		[Parameter()]
	    [string]$Title,
	    [Parameter(Mandatory = $true)]
	    [string[]]$Headers,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor]$BackgroundColor,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor]$FontColor,
		[Parameter()]
		[ValidateSet("bordered", "striped", "highlight", "centered", "responsive-table")]
		[string]$Style,
	    [Parameter()]
		[Hashtable[]] $Links,
		[Parameter(Mandatory = $true, ParameterSetName = 'endpoint')]
		[object]$Endpoint,
		[Parameter(ParameterSetName = 'endpoint')]
		[Switch]$AutoRefresh,
		[Parameter(ParameterSetName = 'endpoint')]
		[int]$RefreshInterval = 5,
		[Parameter()]
		[object[]]$ArgumentList,
		[Parameter(ParameterSetName = 'content')]
		[ScriptBlock]$Content
	)

	$Actions = $null
	if ($Links -ne $null) {
		$Actions = New-UDElement -Tag 'div' -Content {
			$Links
		} -Attributes @{
			className = 'card-action'
		}
	}

	New-UDElement -Tag "div" -Id $Id -Attributes @{
		className = 'card ud-table' 
		style = @{
			backgroundColor = $BackgroundColor.HtmlColor
			color = $FontColor.HtmlColor
		}
	} -Content {
		New-UDElement -Tag "div" -Attributes @{
			className = 'card-content'
		} -Content {
			New-UDElement -Tag 'span' -Content { $Title } -Attributes @{ className="card-title"}
			New-UDElement -Tag 'table' -Content {
				New-UDElement -Tag 'thead' -Content {
					New-UDElement -Tag 'tr' -Content {
						foreach($header in $Headers) {
							New-UDElement -Tag 'th' -Content { $header }
						}
					}
				}

				if ($Content -ne $null) {
					New-UDElement -Tag 'tbody' -Content $Content
				}
				else {
					New-UDElement -Tag 'tbody' -Endpoint $Endpoint -AutoRefresh:$AutoRefresh -RefreshInterval $RefreshInterval -ArgumentList $ArgumentList -Id "$Id-tbody"
				}

				
			} -Attributes @{ className = $Style }
		}
		$Actions
	}
}


function New-UDTabContainer {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
        [ScriptBlock]$Tabs,
        [Parameter()]
        [string]$Id = ([Guid]::NewGuid()).ToString(),
        [Parameter()]
        [Switch]$RenderOnActive
    )

    End {
        @{
            isPlugin        = $true
            assetId         = $AssetId
            type            = "tab-container"
            tabs            = $Tabs.Invoke()
            id              = $id
            renderOnClick   = $RenderOnActive.IsPresent
        }
    }
}

function New-UDTab {
    [CmdletBinding()]
    param(
        [Parameter()]
        [string]$Text,
        [Parameter(Mandatory)]
        [ScriptBlock]$Content,
        [Parameter()]
        [string]$Id = ([Guid]::NewGuid()).ToString(),
        [Parameter()]
        [Alias('IsEndpoint')]
        [switch]$Dynamic,
        [Parameter()]
        [object]$Icon,
        [Parameter()]
        [switch]$RefreshWhenActive,
        [Parameter()]
        [switch]$Stacked
    )

    End {

        if ($null -ne $Content) {
            if ($IsEndpoint) {
                $TabEndpoint = New-UDEndpoint -Id $Id -Endpoint $Content 
            }
        }

        @{
            isPlugin = $true
            assetId  = $AssetId
            type     = "tab"
            label     = $Text
            icon = $Icon
            content  = $Content.Invoke()
            id       = $Id
            stacked = $Stacked.IsPresent
            refreshWhenActive = $RefreshWhenActive.IsPresent
            dynamic = $Dynamic.IsPresent
        }
    }
}
function New-UDTextbox {
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter()]
        [string]$Label,
        [Parameter()]
        [string]$Placeholder,
        [Parameter()]
        $Value,
        [Parameter()]
        [ValidateSet('text', 'password', 'email')]
        [String]$Type = 'text',
        [Parameter()]
        [Switch]$Disabled,
        [Parameter()]
        [UniversalDashboard.Models.FontAwesomeIcons]$Icon,
        [Switch]$Autofocus
    )

    If ($Autofocus) {
        $Attributes = @{
            type        = $type
            value       = $Value
            placeholder = $Placeholder
            autofocus   = "true"
        }
    }
    else {
        $Attributes = @{
            type        = $type
            value       = $Value
            placeholder = $Placeholder
        }
    }
    

    if ($Disabled) {
        $Attributes.disabled = $true
    }

    $LabelClassName = ""

    if ($Value -Or $Placeholder) {

        $LabelClassName = "active"
    }

    New-UDElement -Tag "div" -Attributes @{ className = 'input-field' } -Content {

        if ($PSBoundParameters.ContainsKey('Icon')) {
            New-UDElement -Tag "i" -Attributes @{
                className = "fa fa-$($Icon.ToString().Replace('_', '-')) prefix"
            }
        }

        New-UDElement -Id $Id -Tag "input" -Attributes $Attributes

        if ($PSBoundParameters.ContainsKey('Label')) {
            New-UDElement -Tag "label" -Attributes @{                
                'for'     = $Id 
                className = $LabelClassName
            } -Content { $Label }
        }
    }
}

function New-UDTheme {
    param(
        [Parameter(Mandatory, Position = 1)]
		[string]$Name,
        [Parameter(Mandatory, Position = 2)]
		[Hashtable]$Definition,
		[Parameter(Position = 3)]
		[string]$Parent
    )

    @{
        name = $Name
        definition = $Definition
        parent = $Parent
    }
}

$Themes = @()

$ThemePath = "$PSScriptRoot/Themes"
if (-not (Test-Path $ThemePath))
{
    $ThemePath = "$PSScriptRoot/../Themes"
}

Get-ChildItem $ThemePath -File | ForEach-Object {
    $Themes += Invoke-Expression (Get-Content $_.FullName -Raw)
}

function Get-UDTheme {
    param(
        [Parameter(Position = 1)]
        [string]$Name
    )

    if($Name) {
        $Themes | Where-Object Name -eq $Name
    }
    else {
        $Themes
    }
    
}

$cssMap = @{}
$cssMap.Add("udcard", @(".ud-card"))
$cssMap.Add("udchart", @(".ud-chart"))
$cssMap.Add("udcollapsible", @(".ud-collapsible"))
$cssMap.Add("udcollapsibleitem", @(".ud-collapsible-item"))
$cssMap.Add("udcolumn", @(".ud-column"));
$cssMap.Add("udcounter", @(".ud-counter"));
$cssMap.Add("uddashboard", @(".ud-dashboard"));
$cssMap.Add("udfooter", @(".ud-footer"));
$cssMap.Add("udgrid", @(".ud-grid"));
$cssMap.Add("udimage", @(".ud-image"));
$cssMap.Add("udinput", @(".ud-input", ".datepicker-table td.is-today", ".datepicker-table td.is-selected", ".datepicker-date-display", ".datepicker-modal", ".datepicker-controls", ".datepicker-done", ".datepicker-cancel"));
$cssMap.Add("udlink", @(".ud-link"));
$cssMap.Add("udmonitor", @(".ud-monitor"));
$cssMap.Add("udnavbar", @(".ud-navbar"));
$cssMap.Add("udpagenavigation", @(".ud-page-navigation"));
$cssMap.Add("udrow", @(".ud-row"));
$cssMap.Add("udtable", @(".ud-table"));
$cssMap.Add("udtabs", @("nav.mdc-tab-bar", ".mdc-tab-bar"));
$cssMap.Add("udtab", @(".mdc-tab.mdc-tab__text-label"));
$cssMap.Add("udtabactive", @("button.mdc-tab--active.mdc-ripple-upgraded.mdc-ripple-upgraded--background-focused.mdc-tab--active.mdc-tab", "button.mdc-tab--active.mdc-ripple-upgraded.mdc-tab--active.mdc-tab > div.mdc-tab__content > span", "button.mdc-tab--active.mdc-ripple-upgraded.mdc-tab--active.mdc-tab"));
$cssMap.Add("udtabindicator", @(".mdc-tab-indicator--active .mdc-tab-indicator__content"));
$cssMap.Add("udtabicon", @(".mdc-tab.mdc-tab__icon"));
$cssMap.Add("udtabactiveicon", @("button.mdc-tab--active.mdc-ripple-upgraded.mdc-tab--active.mdc-tab > div.mdc-tab__content > i", ".mdc-tab .mdc-tab__icon"));
$cssMap.Add("udimagecarouselindicator", @(".slider .indicators .indicator-item", ".slider .indicators .indicator-item.active"));
$cssMap.Add("udimagecarouselindicatoractive", @(".slider .indicators .indicator-item.active"));
$cssMap.Add("backgroundcolor", @("background-color"));
$cssMap.Add("fontfamily", @("font-family"));
$cssMap.Add("fontcolor", @("color"));
$cssMap.Add("activefontcolor", @("color"));
$cssMap.Add("activebackgroundcolor", @("background-color"));
$cssMap.Add("indicatorcolor", @("border-color"));
$cssMap.Add("indicatorheight", @("border-top-width"));
$cssMap.Add("boxshadow", @("box-shadow"));
$cssMap.Add("height", @("height"));
$cssMap.Add("lineheight", @("line-height"))
$cssMap.Add("width", @("width"))

function ConvertTo-UDThemeCss {
    param(
        [Parameter(Mandatory)]
        [PSCustomObject]$Theme
    )

    $hashtable = $Theme.Definition
    $parentTheme = $Themes | Where-Object Name -eq $Theme.Parent
    
    if ($null -ne $parent)
    {
        $hashtable = Join-Hashtable -Child $hashtable -Parent $parentTheme.Definition
    }

    $stringBuilder = [System.Text.StringBuilder]::new()
    foreach($key in $hashtable.Keys)
    {
        $value = $hashtable[$key.ToLower()]

        if ($cssMap.ContainsKey($key.ToLower()))
        {
            $ids = $cssMap[$key.ToLower()]
            foreach ($id in $ids)
            {
                $stringBuilder.AppendLine($id + " {") > $null
                ConvertTo-UDCSSValue -Hashtable $value -StringBuilder $stringBuilder
                $stringBuilder.AppendLine("}")> $null
            }
        }
        else
        {
            $stringBuilder.AppendLine($key + " {")> $null
            ConvertTo-UDCSSValue -Hashtable $value -StringBuilder $stringBuilder
            $stringBuilder.AppendLine("}")> $null
        }
    }

    $stringBuilder.ToString()
}

function Join-HashTable
{
    param(
        [Parameter(Mandatory)]
        [Hashtable]$Child,
        [Parameter(Mandatory)]
        [Hashtable]$Parent
    )

    $mergedTable = @{}

    foreach ($key in $parent.Keys)
    {
        if ($child.ContainsKey($key))
        {
            $value = $child[$key]
            if ($value -is [string])
            {
                $mergedTable.Add($key, $value);
            }

            $parentHashtableValue = $parent[$key]
            if ($value -is [Hashtable] -and $parentHashtableValue -is [Hashtable])
            {
                
                $mergedTableValue = Join-Hashtable -Child $value -Parent $parent
                $mergedTable.Add($key, $mergedTableValue)
            }
        }
        else
        {
            $mergedTable.Add($key, $parent[$key])
        }
    }

    foreach ($key in $child.Keys)
    {
        if (-not $parent.ContainsKey($key))
        {
            mergedTable.Add($key, $child[$key])
        }
    }
}

function ConvertTo-UDCSSValue {
    param(
        [Parameter(Mandatory)]
        $Hashtable,
        [Parameter(Mandatory)]
        $stringBuilder
    )

    foreach ($section in $hashtable.Keys)
    {
        $identifier = $section
        $value = $hashtable[$identifier];

        if ($cssMap.ContainsKey($identifier.ToLower()))
        {
            $identifier = $cssMap[$identifier.ToLower()] | Select-Object -First 1
        }

        if ($value -is [string])
        {
            $stringBuilder.AppendLine("`t" + $identifier + " : " + $value + ";") > $null
            continue;
        }

        if ($value -is [Hashtable])
        {
            $stringBuilder.AppendLine($identifier + " {") > $null
            ConvertTo-UDCSSValue -Hashtable $value -StringBuilder $stringBuilder
            $stringBuilder.AppendLine("}") > $null
            continue;
        }
    }
}
function New-UDTooltip {
    param(
        [Parameter()]
        [string]$Id = [Guid]::NewGuid(),
        [Parameter()]
        [ValidateSet("top", "bottom", "left", "right")]
        [string]$Place = "top",
        [Parameter()]
        [ValidateSet("dark", "success", "warning", "error", "info", "light")]
        [string]$Type = "dark",
        [Parameter()]
        [ValidateSet("float", "solid")]
        [string]$Effect,
        [Parameter(Mandatory)]
        [ScriptBlock]$TooltipContent,
        [Parameter(Mandatory)]
        [ScriptBlock]$Content
    )

    @{
        type = "ud-tooltip"
        tooltipType = $Type
        effect = $Effect 
        place = $Place
        id = $Id
        tooltipContent = & $TooltipContent
        content = & $Content
    }
}
function New-UDTreeView {
    param(
        [Parameter()]
        [string]$Id = [Guid]::NewGuid(),
        [Parameter(Mandatory)]
        [Hashtable]$Node,
        [Parameter()]
        [object]$OnNodeClicked,
        [Parameter()]
        [DashboardColor]$BackgroundColor,
        [Parameter()]
        [DashboardColor]$FontColor = 'black',
        [Parameter()]
        [DashboardColor]$ActiveBackgroundColor = '0xDFE8E4',
        [Parameter()]
        [DashboardColor]$ToggleColor = 'black'
    )

    End {
        if ($null -ne $OnNodeClicked) {
            if ($OnNodeClicked -is [scriptblock]) {
                $OnNodeClicked = New-UDEndpoint -Endpoint $OnNodeClicked -Id $Id
            }
            elseif ($OnNodeClicked -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnNodeClicked must be a script block or UDEndpoint"
            }
        }

        
        @{
            assetId = $AssetId 
            isPlugin = $true 
            id = $Id 
            type = 'ud-treeview'

            node = $Node 
            hasCallback = $null -ne $OnNodeClicked
            backgroundColor = $BackgroundColor.HtmlColor
            fontColor = $FontColor.HtmlColor
            activeBackgroundColor = $ActiveBackgroundColor.HtmlColor
            toggleColor = $ToggleColor.HtmlColor
        }
    }
}

function New-UDTreeNode {
    param(
        [Parameter(Mandatory, Position = 1)]
		[string]$Name,
		[Parameter()]
		[string]$Id,
        [Parameter()]
		[ScriptBlock]$Children,
		[Parameter()]
        [UniversalDashboard.Models.FontAwesomeIcons]$Icon,
        [Parameter()]
        [UniversalDashboard.Models.FontAwesomeIcons]$ExpandedIcon
    )

    End {
        if ($PSBoundParameters.ContainsKey("Icon")) {
            $IconName = [UniversalDashboard.Models.FontAwesomeIconsExtensions]::GetIconName($Icon)
        }
        
        if ($PSBoundParameters.ContainsKey("ExpandedIcon")) {
            $ExpandedIconName = [UniversalDashboard.Models.FontAwesomeIconsExtensions]::GetIconName($ExpandedIcon)
        }

        $ChildrenArray = $null
        if ($PSBoundParameters.ContainsKey("Children"))
        {
            $ChildrenArray = & $Children
        }
        
        @{
            name = $Name 
            id = $Id 
            children = $ChildrenArray 
            icon = $IconName 
            expandedIcon = $ExpandedIconName
        }
    }
}
function Add-UDElement {
    param(
        [Parameter(Mandatory)]
		[string]$ParentId,
        [Parameter(Mandatory)]
		[ScriptBlock]$Content,
        [Parameter()]
        [Switch]$Broadcast
    )

    $NewContent = & $Content

    $Data = @{
        componentId = $ParentId
        elements = $NewContent
    }

    if ($Broadcast)
    {
        $DashboardHub.SendWebSocketMessage("addElement", $Data)
    }
    else 
    {
        $DashboardHub.SendWebSocketMessage($ConnectionId, "addElement", $Data)
    }    
}
function Clear-UDElement
{
    param(
        [Parameter(Mandatory)]
        [string]$Id,
        [Parameter()]
        [Switch]$Broadcast
    )

    if ($Broadcast)
    {
        $DashboardHub.SendWebSocketMessage("clearElement", $Id)
    }
    else 
    {
        $DashboardHub.SendWebSocketMessage($ConnectionId, "clearElement", $Id)
    }
}

function Get-UDElement 
{
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
		[string]$Id
    )

    $requestId = ''

    $requestId = [Guid]::NewGuid().ToString()

    $Data = @{
        requestId = $requestId 
        componentId = $Id
    }

    $DashboardHub.SendWebSocketMessage($ConnectionId, "requestState", $Data)
    $stateRequestService.Get($requestId)    
}

function Hide-UDModal 
{
    $DashboardHub.SendWebSocketMessage($ConnectionId, "closeModal", $null)
}
function Hide-UDToast
{
    param(
        [Parameter(Mandatory, Position = 0)]
        [string]$Id
    )

    $DashboardHub.SendWebSocketMessage($ConnectionId, "hideToast", $Id)
}

function Invoke-UDJavaScript
{
    param(
        [Parameter(Mandatory)]
		[string]$JavaScript
    )

    $DashboardHub.SendWebSocketMessage($ConnectionId, "invokejavascript", $JavaScript)
}
function Invoke-UDRedirect
{
    param(
        [Parameter(Mandatory)]
		[string]$Url,
        [Parameter()]
        [Switch]$OpenInNewWindow
    )

    $Data = @{
        url = $Url 
        openInNewWindow = $OpenInNewWindow.IsPresent
    }

    $DashboardHub.SendWebSocketMessage($ConnectionId, "redirect", $Data)
}
function Remove-UDElement
{
    param(
        [Parameter(Mandatory)]
        [string]$Id, 
        [Parameter()]
        [string]$ParentId,
        [Parameter()]
        [Switch]$Broadcast
    )

    $Data = @{
        componentId = $Id 
        parentId = $ParentId
    }

    if ($Broadcast)
    {
        $DashboardHub.SendWebSocketMessage("removeElement", $Data)
    }
    else 
    {
        $DashboardHub.SendWebSocketMessage($ConnectionId, "removeElement", $Data)
    }
}

function Select-UDElement 
{   
    param(
        [Parameter(Mandatory, ParameterSetName = "Normal")]
		[string]$Id,
        [Parameter(ParameterSetName = "Normal")]
        [Switch]$ScrollToElement
    )

    $Data = @{
        id = $Id 
        scrollToElement = $ScrollToElement
    }

    $DashboardHub.SendWebSocketMessage($ConnectionId, "select", $Data)
}
function Set-UDClipboard
{
    param(
        [Parameter(Mandatory)]
		[string]$Data,
        [Parameter()]
        [Switch]$ToastOnSuccess,
        [Parameter()]
        [Switch]$ToastOnError
    )

    $cpData = @{
        data = $Data 
        toastOnSuccess = $ToastOnSuccess.IsPresent
        toastOnError = $ToastOnError.IsPresent
    }

    $DashboardHub.SendWebSocketMessage($ConnectionId, "clipboard", $cpData)
}

function Set-UDElement
{
    param(
        [Parameter(Mandatory)]
		[string]$Id,
        [Parameter()]
        [Hashtable]$Attributes,
        [Parameter()]
        [ScriptBlock]$Content,
        [Parameter()]
        [Switch]$Broadcast
    )

    $c = @()
    if ($Content)
    {
        $c = . $Content
    }

    $Data = @{
        componentId = $Id 
        state = @{
            attributes = $Attributes
            content = $c
        }
    }

    if ($Broadcast)
    {
        $DashboardHub.SendWebSocketMessage("setState", $data)
    }
    else
    {
        $DashboardHub.SendWebSocketMessage($ConnectionId, "setState", $Data)
    }
}
function Show-UDModal
{
    param(
        [Parameter()]
        [Switch]$FullScreen,
        [Parameter()]
        [ScriptBlock]$Footer,
        [Parameter()]
        [ScriptBlock]$Header,
        [Parameter()]
        [ScriptBlock]$Content,
        [Parameter()]
        [Switch]$Persistent,
        [Parameter()]
        [Switch]$FullWidth,
        [Parameter()]
        [ValidateSet("xs", "sm", "md", "lg", "xl")]
        [string]$MaxWidth
    )

    $Modal = @{
        dismissible = -not $Persistent.IsPresent
        max = $MaxWidth
        fullWidth = $FullWidth.IsPresent
        fullScreen = $FullScreen.IsPresent
    }

    if ($null -ne $Footer)
    {
        $Modal['footer'] = & $Footer
    }

    if ($null -ne $Header)
    {
        $Modal['header'] = & $Header
    }

    if ($null -ne $Content)
    {
        $Modal['content'] = & $Content
    }

    $DashboardHub.SendWebSocketMessage($ConnectionId, "showModal", $modal)
}

function Show-UDToast 
{
    param(
        [Parameter(Mandatory, Position = 0)]
		[string]$Message,
        [Parameter()]
        [DashboardColor]$MessageColor,
        [Parameter()]
        [string]$MessageSize,
        [Parameter()]
        [int]$Duration = 1000,
        [Parameter()]
        [string]$Title, 
        [Parameter()]
        [DashboardColor]$TitleColor,
        [Parameter()]
        [string]$TitleSize,
        [Parameter()]
        [string]$Id = [Guid]::NewGuid(),
        [Parameter()]
        [DashboardColor]$BackgroundColor,
        [Parameter()]
        [ValidateSet("light", "dark")]
        [string]$Theme,
        [Parameter()]
        [FontAwesomeIcons]$Icon,
        [Parameter()]
        [DashboardColor]$IconColor,
        [Parameter()]
        [ValidateSet("bottomRight", "bottomLeft", "topRight", "topLeft", "topCenter", "bottomCenter", "center")]
        [string]$Position = "topRight",
        [Parameter()]
        [Switch]$HideCloseButton,
        [Parameter()]
        [Switch]$CloseOnClick,
        [Parameter()]
        [Switch]$CloseOnEscape,
        [Parameter()]
        [Switch]$ReplaceToast,
        [Parameter()]
        [Switch]$RightToLeft,
        [Parameter()]
        [Switch]$Balloon,
        [Parameter()]
        [Switch]$Overlay,
        [Parameter()]
        [Switch]$OverlayClose,
        [Parameter()]
        [DashboardColor]$OverlayColor,
        [Parameter()]
        [ValidateSet("bounceInLeft", "bounceInRight", "bounceInUp", "bounceInDown", "fadeIn", "fadeInDown", "fadeInUp", "fadeInLeft", "fadeInRight", "flipInX")]
        [string]$TransitionIn = "fadeInUp",
        [Parameter()]
        [ValidateSet("bounceInLeft", "bounceInRight", "bounceInUp", "bounceInDown", "fadeIn", "fadeInDown", "fadeInUp", "fadeInLeft", "fadeInRight", "flipInX")]
        [string]$TransitionOut = "fadeOut",
        [Parameter()]
        [Switch]$Broadcast
    )

    $options = @{
        close = -not $HideCloseButton.IsPresent
        id = $Id
        message = $Message
        messageColor = $MessageColor.HtmlColor
        messageSize = $MessageSize
        title = $Title
        titleColor = $TitleColor.HtmlColor
        titleSize = $TitleSize
        timeout = $Duration
        position = $Position
        backgroundColor = $BackgroundColor.HtmlColor
        theme = $Theme
        icon = if ($Icon -eq [FontAwesomeIcons]::None) { "" } else { [UniversalDashboard.Models.FontAwesomeIconsExtensions]::GetIconName($Icon) }
        iconColor = $IconColor.HtmlColor
        displayMode = if ($ReplaceToast.IsPresent) {2 } else { 0 }
        rtl = $RightToLeft.IsPresent
        balloon = $Balloon.IsPresent
        overlay = $Overlay.IsPresent
        overlayClose = $OverlayClose.IsPresent
        overlayColor = $OverlayColor.HtmlColor
        closeOnClick = $CloseOnClick.IsPresent
        closeOnEscape = $CloseOnEscape.IsPresent
        transitionIn = $TransitionIn
        transitionOut = $TransitionOut
    }

    if ($Broadcast)
    {
        $DashboardHub.SendWebSocketMessage("showToast", $options)
    }
    else 
    {
        $DashboardHub.SendWebSocketMessage($ConnectionId, "showToast", $options)
    }
}

function Sync-UDElement
{
    param(
        [Parameter(Mandatory, ValueFromPipeline)]
        [string[]]$Id,
        [Parameter()]
        [Switch]$Broadcast
    )

    Process 
    {
        foreach($i in $Id) 
        {
            if ($Broadcast)
            {
                $DashboardHub.SendWebSocketMessage("syncElement", $I)
            }
            else
            {
                $DashboardHub.SendWebSocketMessage($ConnectionId, "syncElement", $I)
            }
        } 
    }
}
