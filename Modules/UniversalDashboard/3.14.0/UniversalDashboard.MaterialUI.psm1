$TAType = [psobject].Assembly.GetType('System.Management.Automation.TypeAccelerators')
$TAtype::Add('DashboardColor', 'UniversalDashboard.Models.DashboardColor')
$TAtype::Add('Endpoint', 'UniversalDashboard.Models.Endpoint')
$TAtype::Add('FontAwesomeIcons', 'UniversalDashboard.Models.FontAwesomeIcons')

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

    End {
        # if ($PSCmdlet.ParameterSetName -eq 'dynamic')
        # {
        #     throw "dynamic parameterset not yet supported"
        # }

        New-UDGrid -Container -Content {
            & $Columns 
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
        [ValidateRange(1, 12)]
        [int]$SmallSize = 12,
        [Parameter()]
        [ValidateRange(1, 12)]
        [int]$LargeSize = 12,
        [Parameter()]
        [ValidateRange(1, 12)]
        [int]$MediumSize = 12,

        [Parameter(ParameterSetName = 'content', Position = 1)]
        [ScriptBlock]$Content,

        [Parameter(ParameterSetName = "endpoint")]
        [Endpoint]$Endpoint,
        [Parameter(ParameterSetName = "endpoint")]
        [Switch]$AutoRefresh,
        [Parameter(ParameterSetName = "endpoint")]
        [int]$RefreshInterval = 5
    )
    
    if ($PSCmdlet.ParameterSetName -eq 'content') {
        $GridContent = $Content
        New-UDGrid -Item -SmallSize $SmallSize -MediumSize $MediumSize -LargeSize $LargeSize -Content {
            & $GridContent 
        }
    }
    else {        
        New-UDGrid -Item -SmallSize $SmallSize -MediumSize $MediumSize -LargeSize $LargeSize -Content {
            New-UDDynamic -AutoRefresh:$AutoRefresh -AutoRefreshInterval $RefreshInterval -Content $Endpoint
        }
    }
}function New-UDAlert {
    <#
    .SYNOPSIS
    Creates an alert.
    
    .DESCRIPTION
    Creates an alert.
    
    .PARAMETER Id
    The ID of this component.
    
    .PARAMETER Severity
    The severity of this alert. 
    
    .PARAMETER Children
    Content of the alert.

    .PARAMETER Text
    Text for the body of the alert.
    
    .PARAMETER Title
    A title for this alert.
    #>
    param(
        [Parameter()]
        [string]$Id = [Guid]::NewGuid(),
        [Parameter()]
        [ValidateSet("success", "error", "warning", "info")]
        [string]$Severity = "success",
        [Parameter(ParameterSetName = "Content")]
        [Alias("Content")]
        [scriptblock]$Children,
        [Parameter(ParameterSetName = "Text")]
        [string]$Text,
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [string]$ClassName
    )

    if ($PSCmdlet.ParameterSetName -eq 'Text') {
        $Children = { $Text }
    }

    @{
        type      = "mu-alert"
        id        = $id 
        isPlugin  = $true 
        assetId   = $MUAssetId 

        severity  = $Severity.ToLower()
        children  = & $Children
        title     = $Title
        className = $ClassName
    }
}
function New-UDAppBar {
    <#
    .SYNOPSIS
    Creates an AppBar.
    
    .DESCRIPTION
    Creates an AppBar. This can be used to replace the built-in AppBar. 
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER Drawer
    A drawer that can be opened from this AppBar. Use New-UDDrawer to create a drawer to pass to this parameter. 
    
    .PARAMETER Children
    Children of this AppBar. The children of an AppBar are commonly text and buttons.
    
    .PARAMETER Position
    The position of this AppBar. A fixed position will override the default AppBar. 

    .PARAMETER Footer
    Positions the app bar at the bottom of the page to create a footer

    .PARAMETER DisableThemeToggle
    Removes the theme toggle switch from the app bar. 
    .PARAMETER Color
    The theme color to use for the app bar.
    
    .EXAMPLE
    Creates a new AppBar that is relative to other components.

    New-UDAppBar -Children { New-UDTypography -Text 'Hello' -Paragraph } -Position relative
    #>
    param(
        [Parameter()]
        [string]$Id = [Guid]::NewGuid(),
        [Parameter()]
        [Hashtable]$Drawer,
        [Parameter()]
        [Alias('Content')]
        [ScriptBlock]$Children,
        [Parameter()]
        [ValidateSet('absolute', 'fixed', 'relative', 'static', 'sticky')]
        [string]$Position = 'fixed',
        [Parameter()]
        [switch]$Footer,
        [Parameter()]
        [Switch]$DisableThemeToggle,
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [ValidateSet('default', 'inherit', 'primary', 'secondary', 'transparent')]
        [string]$Color = 'default'
    )

    @{
        id                 = $Id 
        type               = 'mu-appbar'
        assetId            = $MUAssetId 
        isPlugin           = $true 

        children           = & $Children
        drawer             = $Drawer
        position           = $Position
        footer             = $Footer.IsPresent
        disableThemeToggle = $DisableThemeToggle.IsPresent
        className          = $ClassName
        color              = $Color.ToLower()
    }
}
function New-UDAutocomplete {
    <#
    .SYNOPSIS
    Creates an autocomplete textbox.
    
    .DESCRIPTION
    Creates an autocomplete textbox. Autocomplete text boxes can be used to allow the user to select from a large list of static or dynamic items. Typing in the textbox will filter the list.
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER Label
    The label to show for the textbox.
    
    .PARAMETER Value
    The value of the textbox.
    
    .PARAMETER OnChange
    A script block that is invoked when the selection changes.
    
    .PARAMETER OnLoadOptions
    A script block that is called when the user starts typing in the text box. The $Body variable will contain the typed text. You should return a JSON array of values that are a result of what the user has typed. 
    
    .PARAMETER Options
    Static options to display in the selection drop down. When the user types, these options will be filtered. 

    .PARAMETER FullWidth
    Whether the component should take up the full width of its parent. 

    .PARAMETER Variant
    The variant of the text box. Valid values are: "filled", "outlined", "standard"

    .PARAMETER Multiple
    Whether multiple items can be selected. 

    .PARAMETER ClassName
    A CSS class to apply to the component.
    
    .EXAMPLE
    Creates a autocomplete with a static list of options. 

    New-UDAutocomplete -Id 'autoComplete' -Options @('Test', 'Test2', 'Test3', 'Test4') 
    
    .EXAMPLE
    Creates an autocomplete with a dynamically filtered set of options

    New-UDAutocomplete -Id 'autoCompleteDynamic' -OnLoadOptions { 
        @('Test', 'Test2', 'Test3', 'Test4') | Where-Object { $_ -match $Body } | ConvertTo-Json
    } 
    #>
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter()]
        [string]$Label,
        [Parameter()]
        [string]$Value,
        [Parameter()]
        [Endpoint]$OnChange, 
        [Parameter(Mandatory, ParameterSetName = "Dynamic")]
        [Endpoint]$OnLoadOptions,
        [Parameter(Mandatory, ParameterSetName = "Static")]
        [Array]$Options = @(),
        [Parameter()]
        [Switch]$FullWidth,
        [Parameter()]
        [ValidateSet("filled", "outlined", "standard")]
        [string]$Variant = "standard",
        [Parameter()]
        [Switch]$Multiple,
        [Parameter()]
        [string]$ClassName
    )

    if ($OnChange) {
        $OnChange.ContentType = 'text/plain';
        $OnChange.Register($Id + "onChange", $PSCmdlet)
    }

    if ($PSCmdlet.ParameterSetName -eq 'Dynamic') {
        if ($OnLoadOptions) {
            $OnLoadOptions.ContentType = 'text/plain';
            $OnLoadOptions.Register($Id + "onLoadOptions", $PSCmdlet)
        }
    }
    
    @{
        id            = $id 
        assetId       = $MUAssetId 
        isPlugin      = $true 
        type          = "mu-autocomplete"

        label         = $Label
        value         = $value 
        onChange      = $onChange 
        onLoadOptions = $OnLoadOptions
        options       = $Options
        fullWidth     = $FullWidth.IsPresent
        variant       = $Variant.ToLower()
        multiple      = $Multiple.IsPresent
        className     = $ClassName
    }
}

function New-UDAvatar {
    <#
    .SYNOPSIS
    Creates a new Avatar.
    
    .DESCRIPTION
    Creates a new Avatar. An avatar is typically an image of a user. 
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER Image
    The URL of an image to show in the avatar. 
    
    .PARAMETER Alt
    The alt text to assign to the avatar. 
    
    .PARAMETER ClassName
    Classes to assign to the avatar component.
    
    .PARAMETER Variant
    The variant type of the avatar.
    
    .EXAMPLE
    A small avatar using Alon's image.

    New-UDAvatar -Image 'https://avatars2.githubusercontent.com/u/34351424?s=460&v=4' -Alt 'alon gvili avatar' -Id 'avatarContent' -Variant small
    #>
    param(
        [Parameter ()][string]$Id = ([Guid]::NewGuid()).ToString(),
        [Parameter ()][string]$Image,
        [Parameter ()][string]$Alt,
        [Parameter ()][string]$ClassName,
        [Parameter ()][string]$Variant
    )
    End {
        $Avatar = @{
            type     = 'mu-avatar'
            isPlugin = $true
            assetId  = $MUAssetId

            id       = $Id
            image    = $Image
            alt      = $Alt
            variant = $Variant
            className = $ClassName
        }
        $Avatar.PSTypeNames.Insert(0, "UniversalDashboard.MaterialUI.Avatar") | Out-Null
        $Avatar
    }
}
function New-UDBackdrop {
    <#
    .SYNOPSIS
    Creates an overlay over the current page.
    
    .DESCRIPTION
    Creates an overlay over the current page.
    
    .PARAMETER Id
    The ID of this component
    
    .PARAMETER Color
    The color of the backdrop.
    
    .PARAMETER Children
    Child components to include in the backdrop.
    
    .PARAMETER Open
    Whether the backdrop is open.
    
    .PARAMETER OnClick
    A script block to invoke when the backdrop is clicked.
    #>
    param(
        [Parameter ()]
        [string]$Id = ([Guid]::NewGuid()).ToString(),
        [Parameter()]
        [DashboardColor]$Color = '#fff', 
        [Parameter(Mandatory)]
        [Alias("Content")]
        [ScriptBlock]$Children,
        [Parameter()]
        [Switch]$Open,
        [Parameter()]
        [Endpoint]$OnClick,
        [Parameter()]
        [string]$ClassName
    )

    if ($OnClick) {
        $OnClick.Register($Id, $PSCmdlet)
    }

    @{
        type      = 'mu-backdrop'
        isPlugin  = $true
        assetId   = $MUAssetId

        id        = $Id
        color     = $Color.HtmlColor 
        children  = & $Children
        open      = $Open.IsPresent
        onClick   = $OnClick
        className = $ClassName
    }
}
function New-UDButton {
    <#
    .SYNOPSIS
    Creates a new button.
    
    .DESCRIPTION
    Creates a new button. Buttons are used to allow the user to take action.
    
    .PARAMETER Text
    The text to show within the button.
    
    .PARAMETER Icon
    An icon to show within the button. Use New-UDIcon to create an icon for this parameter. 
    
    .PARAMETER Variant
    The variant type for this button. Valid values are: "text", "outlined", "contained"
    
    .PARAMETER IconAlignment
    How to align the icon within the button. Valid values are: "left", "right"
    
    .PARAMETER FullWidth
    Whether the button takes the full width of the it's container.
    
    .PARAMETER OnClick
    The action to take when the button is clicked. 
    
    .PARAMETER Size
    The size of the button. 
    
    .PARAMETER Style
    Styles to apply to the button. 
    
    .PARAMETER Href
    A URL that the user should be redirected to when clicking the button. 
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.

    .PARAMETER Color
    The color of the component. Valid values are: 'default', 'inherit', 'primary', 'secondary'

    .PARAMETER Disabled
    Whether the button is disabled. 

    .PARAMETER ClassName
    The CSS Class to apply to the button.
    
    .EXAMPLE
    Creates a button with the GitHub logo and redirects the user to GitHub when clicked. 

    $Icon = New-UDIcon -Icon 'github'
    New-UDButton -Text "Submit" -Id "btnClick" -Icon $Icon -OnClick {
        Invoke-UDRedirect https://github.com
    }

    .EXAMPLE 
    Creates a button with a blue background. 

    New-UDButton -Text "Submit" -Style @{ backgroundColor = "blue"}  -OnClick {
        Invoke-UDRedirect https://github.com
    }
    #>
    param
    (
        [Parameter (Position = 0)]
        [string]$Text,

        [Parameter (Position = 1)]
        [PSTypeName('UniversalDashboard.Icon')]$Icon,

        [Parameter (Position = 2)]
        [ValidateSet("text", "outlined", "contained")]
        [string]$Variant = "contained",

        [Parameter (Position = 3)]
        [ValidateSet("left", "right")]
        [string]$IconAlignment = "left",

        [Parameter (Position = 6)]
        [switch]$FullWidth,

        [Parameter (Position = 7)]
        [Endpoint]$OnClick,

        [Parameter (Position = 8)]
        [ValidateSet("small", "medium", "large")]
        [string]$Size,

        [Parameter (Position = 9)]
        [Hashtable]$Style,

        [Parameter (Position = 10)]
        [string]$Href,

        [Parameter()]
        [string]$Id = ([Guid]::NewGuid()).ToString(),

        [Parameter()]
        [ValidateSet('default', 'inherit', 'primary', 'secondary')]
        [string]$Color = "default",

        [Parameter()]
        [Switch]$Disabled,

        [Parameter()]
        [string]$ClassName

    )

    End {

        if ($OnClick) {
            $OnClick.Register($Id, $PSCmdlet)
        }

        @{
            # Mandatory properties to load as plugin.
            type          = 'mu-button'
            isPlugin      = $true
            assetId       = $MUAssetId

            # Command properties.
            id            = $Id
            text          = $Text
            variant       = $Variant
            onClick       = $OnClick
            iconAlignment = $IconAlignment
            disabled      = $Disabled.IsPresent
            icon          = $Icon
            fullWidth     = $FullWidth.IsPresent
            size          = $Size
            href          = $Href
            style         = $Style
            color         = $Color
            className     = $ClassName
        }

    }
}
function New-UDCard {
    <#
    .SYNOPSIS
    Creates a new card.
    
    .DESCRIPTION
    Creates a new card. Cards are used to display related content.
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER ClassName
    A CSS class to assign to this card. 
    
    .PARAMETER ShowToolBar
    Whether to show the toolbar for this card. 
    
    .PARAMETER ToolBar
    The toolbar for this card. Use New-UDCardToolbar to create a toolbar. 
    
    .PARAMETER Header
    The header for this card. The header typically contains a title for the card. Use New-UDCardHeader to create a header.
    
    .PARAMETER Body
    The body for this card. This is the main content for the card. Use New-UDCardHeader to create a body. 
    
    .PARAMETER Expand
    Th expand content for this card. Expand content is show when the user clicks the expansion button. Use New-UDCardExpand to create an expand.
    
    .PARAMETER Footer
    The footer for this card. Footer contents typically contain actions that are relavent to the card. Use New-UDCardFooter to create a footer. 
    
    .PARAMETER Style
    Styles to apply to the card. 
    
    .PARAMETER Elevation
    The amount of elevation to provide the card. The more elevation, the more it will appear the card is floating off the page. 
    
    .PARAMETER Title
    A title for the card. 
    
    .PARAMETER TitleAlignment
    The alignment for the title. 
    
    .PARAMETER Content
    The content of the card. 
    
    .PARAMETER Image
    An image to show in the card. 
    
    .EXAMPLE
    Shows a card with a title, image and content. 

    New-UDCard -Id 'SimpleCard' -Title "Alon" -Content { 
        "Content" 
    } -Image 'https://avatars2.githubusercontent.com/u/34351424?s=460&v=4'
    #>
    [CmdletBinding()]
    param(
        [Parameter()]
        [string]$Id = ([Guid]::NewGuid()).ToString(),

        [Parameter()]
        [string]$ClassName,

        [Parameter()]
        [switch]$ShowToolBar,
     
        [Parameter (ParameterSetName = "Advanced")]
        [PSTypeName('UniversalDashboard.MaterialUI.CardToolbar')]$ToolBar,

        [Parameter(ParameterSetName = "Advanced")]
        [PSTypeName('UniversalDashboard.MaterialUI.CardHeader')]$Header,

        [Parameter(ParameterSetName = "Advanced")]
        [PSTypeName('UniversalDashboard.MaterialUI.CardBody')]$Body,

        [Parameter(ParameterSetName = "Advanced")]
        [PSTypeName('UniversalDashboard.MaterialUI.CardExpand')]$Expand,

        [Parameter(ParameterSetName = "Advanced")]
        [PSTypeName('UniversalDashboard.MaterialUI.CardFooter')]$Footer,

        [Parameter(ParameterSetName = "Advanced")]
        [PSTypeName('UniversalDashboard.MaterialUI.CardMedia')]$Media,

        [Parameter()]
        [Hashtable]$Style,

        [Parameter()]
        [ValidateSet("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24")]
        [int]$Elevation,

        [Parameter(ParameterSetName = "Simple")]
        [Parameter(ParameterSetName = "Text")]
        [String]$Title,
        [Parameter(ParameterSetName = "Simple")]
        [Parameter(ParameterSetName = "Text")]
        [ValidateSet('left', 'center', 'right')]
        [String]$TitleAlignment = 'left',
        [Parameter(ParameterSetName = "Simple")]
        [ScriptBlock]$Content,
        [Parameter(ParameterSetName = "Simple")]
        [string]$Image,
        [Parameter(ParameterSetName = "Text")]
        [string]$Text
    )

    End {

        if ($PSCMdlet.ParameterSetName -eq 'Advanced') {
            # Card toolbar checks
            if ($null -ne $ToolBar) {
                if ($ToolBar.psobject.typenames -notcontains "UniversalDashboard.MaterialUI.CardToolbar") {
                    throw "ToolBar must be a UniversalDashboard.MaterialUI.CardToolbar object, please use New-UDCardToolBar command."
                }
            }

            # Card Media checks 
            if ($null -ne $Media) {
                if ($Media.psobject.typenames -notcontains "UniversalDashboard.MaterialUI.CardMedia") {
                    throw "Media must be a UniversalDashboard.MaterialUI.CardMedia object, please use New-UDCardMedia command."
                }
            }

            # Card header checks 
            if ($null -ne $Header) {
                if ($Header.psobject.typenames -notcontains "UniversalDashboard.MaterialUI.CardHeader") {
                    throw "Header must be a UniversalDashboard.MaterialUI.CardHeader object, please use New-UDCardHeader command."
                }
            }

            # Card Content checks 
            if ($null -ne $Content) {
                if ($Content.psobject.typenames -notcontains "UniversalDashboard.MaterialUI.CardBody") {
                    throw "Body must be a UniversalDashboard.MaterialUI.CardBody object, please use New-UDCardBody command."
                }
            }

            # Card Expand checks 
            if ($null -ne $Expand) {
                if ($Expand.psobject.typenames -notcontains "UniversalDashboard.MaterialUI.CardExpand") {
                    throw "Expand must be a UniversalDashboard.MaterialUI.CardExpand object, please use New-UDCardExpand command."
                }
            }

            # Card footer checks 
            if ($null -ne $Footer) {
                if ($Footer.psobject.typenames -notcontains "UniversalDashboard.MaterialUI.CardFooter") {
                    throw "Footer must be a UniversalDashboard.MaterialUI.CardFooter object, please use New-UDCardFooter command."
                }
            }
            
            $Parts = @{
                toolbar = $ToolBar
                header  = $Header
                body    = $Body
                expand  = $Expand
                footer  = $Footer
            }
            $Content = { $Parts }
        }
        else {
            $Header = New-UDCardHeader -Title $Title -TitleAlignment $TitleAlignment

            if ($Image) {
                $Media = New-UDCardMedia -Height 120 -Image $Image
            }

            if ($PSCmdlet.ParameterSetName -eq 'Text') {
                $Element = New-UDElement -Tag div -Content {
                    $Text -split "`r`n" | ForEach-Object {
                        $_
                        New-UDElement -Tag "br"
                    }
                }
                $Content = { $Element }
            }

            $Body = New-UDCardBody -Content $Content

            $Parts = @{
                toolbar = $ToolBar
                header  = $Header
                body    = $Body
                expand  = $Expand
                footer  = $Footer
            }
            $Content = { $Parts }
        }

        $Card = @{
            type        = "mu-card"
            isPlugin    = $true
            assetId     = $MUAssetId
            id          = $Id
            className   = $ClassName
            showToolBar = $ShowToolBar.IsPresent
            media       = $Media
            toolbar     = $ToolBar
            header      = $Header
            body        = $Body
            expand      = $Expand
            footer      = $Footer
            style       = $Style
            elevation   = $Elevation

        }

        $Card.PSTypeNames.Insert(0, "UniversalDashboard.MaterialUI.Card") | Out-Null
        $Card
    }
}


function New-UDCardToolbar {
    [CmdletBinding()]
    param(
        [Parameter()]
        [string]$Id = ([Guid]::NewGuid()).ToString(),

        [Parameter()]
        [string]$ClassName,

        [Parameter(Mandatory)]
        [scriptblock]$Content,

        [Parameter ()]
        [PSTypeName("UniversalDashboard.MaterialUI.Icon")]$Icon,
        
        [Parameter()]
        [object]$Title,


        [Parameter()]
        [Switch]$ShowButtons,

        [Parameter()]
        [Hashtable]$Style

    )
    End {

        $CardToolbar = @{
            type        = "mu-card-toolbar"
            isPlugin    = $true
            assetId     = $MUAssetId
            id          = $Id
            className   = $ClassName
            content     = & $Content
            title       = $Title
            style       = $Style
            icon        = $Icon
            showButtons = $ShowButtons.IsPresent
            # PSTypeName  = "UniversalDashboard.MaterialUI.CardToolbar"
        }
        $CardToolbar.PSTypeNames.Insert(0, "UniversalDashboard.MaterialUI.CardToolbar") | Out-Null
        $CardToolbar
    }
}
function New-UDCardHeader {
    [CmdletBinding()]
    param(
        [Parameter()]
        [string]$Id = ([Guid]::NewGuid()).ToString(),
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [string]$SubHeader,
        [Parameter()]
        [ValidateSet('inherit', 'left', 'justify', 'right', 'center')]
        [string]$TitleAlignment = 'inherit',
        [Parameter()]
        [ValidateSet('inherit', 'left', 'justify', 'right', 'center')]
        [string]$SubHeaderAlignment = 'inherit'

    )
    End {
        $Header = @{
            type               = "mu-card-header"
            isPlugin           = $true
            assetId            = $MUAssetId
            id                 = $Id
            title              = $Title
            subheader          = $SubHeader
            subHeaderAlignment = $SubHeaderAlignment
            titleAlignment     = $TitleAlignment.ToLower()

        }
        $Header.PSTypeNames.Insert(0, "UniversalDashboard.MaterialUI.CardHeader") | Out-Null
        $Header
    }
}


function New-UDCardBody {
    [CmdletBinding()]
    param(
        [Parameter()]
        [string]$Id = ([Guid]::NewGuid()).ToString(),

        [Parameter()]
        [string]$ClassName,

        [Parameter()]
        [scriptblock]$Content,

        [Parameter()]
        [Hashtable]$Style
    )
    End {

        $cContent = @{
            type      = "mu-card-body"
            isPlugin  = $true
            assetId   = $MUAssetId
            id        = $Id
            className = $ClassName
            content   = New-UDErrorBoundary -Content $Content
            style     = $Style
            # PSTypeName      = "UniversalDashboard.MaterialUI.CardContent"

        }
        $cContent.PSTypeNames.Insert(0, "UniversalDashboard.MaterialUI.CardBody") | Out-Null
        $cContent
    }
}


function New-UDCardExpand {
    [CmdletBinding()]
    param(
        [Parameter()]
        [string]$Id = ([Guid]::NewGuid()).ToString(),

        [Parameter()]
        [string]$ClassName,

        [Parameter()]
        [scriptblock]$Content,

        [Parameter()]
        [Hashtable]$Style
    )
    End {
        $Expand = @{
            type            = "mu-card-expand"
            isPlugin        = $true
            assetId         = $MUAssetId
            id              = $Id
            className       = $ClassName
            content         = New-UDErrorBoundary -Content $Content
            style           = $Style
            isEndpoint      = $isEndPoint.IsPresent
            refreshInterval = $RefreshInterval
            autoRefresh     = $AutoRefresh.IsPresent
            # PSTypeName      = "UniversalDashboard.MaterialUI.CardExpand"
        }
        $Expand.PSTypeNames.Insert(0, "UniversalDashboard.MaterialUI.CardExpand") | Out-Null
        $Expand
    }
}


function New-UDCardFooter {
    [CmdletBinding()]
    param(
        [Parameter()]
        [string]$Id = ([Guid]::NewGuid()).ToString(),

        [Parameter()]
        [string]$ClassName,

        [Parameter()]
        [scriptblock]$Content,

        [Parameter()]
        [Hashtable]$Style
    )
    End {
        $Footer = @{
            type            = "mu-card-footer"
            isPlugin        = $true
            assetId         = $MUAssetId
            id              = $Id
            className       = $ClassName
            content         = New-UDErrorBoundary -Content $Content
            style           = $Style
            isEndpoint      = $isEndPoint.IsPresent
            refreshInterval = $RefreshInterval
            autoRefresh     = $AutoRefresh.IsPresent
            # PSTypeName      = "UniversalDashboard.MaterialUI.CardFooter"
        }
        $Footer.PSTypeNames.Insert(0, "UniversalDashboard.MaterialUI.CardFooter") | Out-Null
        $Footer
    }
}
function New-UDCardMedia {
    [CmdletBinding()]
    [OutputType([Hashtable])]
    param(
        [Parameter()]
        [string]$Id = ([Guid]::NewGuid()).ToString(),

        [Parameter()]
        [ValidateSet("img", "video", "audio")]       
        [string]$Component = "img",

        [Parameter()]
        [string]$Alt,

        [Parameter()]
        [string]$Height,

        [Parameter (ParameterSetName = 'image')]
        [string]$Image,

        [Parameter()]
        [string]$Title,

        [Parameter(ParameterSetName = 'media')]
        [string]$Source

    )
    End {
        $CardMedia = @{
            type      = "mu-card-media"
            isPlugin  = $true
            assetId   = $MUAssetId
            id        = $Id
            component = $Component
            alt       = $Alt
            height    = $Height
            image     = $Image
            title     = $Title
            source    = $Source
            # PSTypeName = "UniversalDashboard.MaterialUI.CardMedia"
        }
        $CardMedia.PSTypeNames.Insert(0, "UniversalDashboard.MaterialUI.CardMedia") | Out-Null
        $CardMedia
    }
}
function New-UDCheckBox {
    <#
    .SYNOPSIS
    Creates a checkbox.

    .DESCRIPTION
    Creates a checkbox. Checkboxes can be used in forms or by themselves. 

    .PARAMETER Label
    The label to show next to the checkbox.

    .PARAMETER Icon
    The icon to show instead of the default icon. Use New-UDIcon to create an icon.

    .PARAMETER CheckedIcon
    The icon to show instead of the default checked icon. Use New-UDIcon to create an icon.

    .PARAMETER OnChange
    Called when the value of the checkbox changes. The $EventData variable will have the current value of the checkbox. 

    .PARAMETER Style
    A hashtable of styles to apply to the checkbox.  

    .PARAMETER Disabled
    Whether the checkbox is disabled.

    .PARAMETER Checked
    Whether the checkbox is checked. 

    .PARAMETER ClassName
    A CSS class to assign to the checkbox. 

    .PARAMETER LabelPlacement
    Where to place the label. Valid values are: "top","start","bottom","end"

    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.

    .PARAMETER Color
    The theme color to apply to this component

    .EXAMPLE

    Creates a checkbox with a custom icon and style. 

    $Icon = New-UDIcon -Icon angry -Size lg  -Id 'demo-checkbox-icon' -Regular
    $CheckedIcon = New-UDIcon -Icon angry -Size lg  -Id 'demo-checkbox-icon-checked' 
    New-UDCheckBox -Id 'btnCustomIcon' -Icon $Icon -CheckedIcon $CheckedIcon -OnChange {} -Style @{color = '#2196f3'}

    #>
    param
    (
        [Parameter (Position = 0)]
        [string]$Label,

        [Parameter (Position = 1)]
        [PSTypeName('UniversalDashboard.Icon')]$Icon,

        [Parameter (Position = 2)]
        [PSTypeName('UniversalDashboard.Icon')]$CheckedIcon,

        [Parameter (Position = 3)]
        [Endpoint]$OnChange,

        [Parameter (Position = 4)]
        [Hashtable]$Style,

        [Parameter (Position = 5)]
        [switch]$Disabled,

        [Parameter (Position = 6)]
        [bool]$Checked,

        [Parameter (Position = 7)]
        [string]$ClassName,

        [Parameter (Position = 7)]
        [ValidateSet("top", "start", "bottom", "end")]
        [string]$LabelPlacement,

        [Parameter(Position = 8)]
        [string]$Id = ([Guid]::NewGuid()).ToString(),

        [Parameter ()]
        [ValidateSet('default', 'primary', 'secondary')]
        [string]$Color = 'default'

    )

    End {

        if ($OnChange) {
            $OnChange.Register($Id + "onChange", $PSCmdlet)
        }

        @{
            # Mandatory properties to load as plugin.
            type           = 'mu-checkbox'
            isPlugin       = $true
            assetId        = $MUAssetId

            # Command properties.
            id             = $Id
            className      = $ClassName
            checked        = $Checked
            onChange       = $OnChange
            icon           = $Icon
            checkedIcon    = $CheckedIcon
            disabled       = $Disabled.IsPresent
            style          = $Style
            label          = $Label
            labelPlacement = $LabelPlacement
            color          = $Color.ToLower()
        }
    }
}
function New-UDChip {
    <#
    .SYNOPSIS
    Creates a new chip.
    
    .DESCRIPTION
    Creates a new chip. Chips can be used to display tags or little bits of data.
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER Label
    The label for the chip.
    
    .PARAMETER OnDelete
    A script block to call when the chip is deleted.
    
    .PARAMETER OnClick
    A script block to call when the chip is clicked.
    
    .PARAMETER Icon
    An icon to show within the chip.
    
    .PARAMETER Style
    CSS styles to apply to the chip.
    
    .PARAMETER Variant
    The theme variant to apply to the chip.
    
    .PARAMETER Avatar
    An avatar to show within the chip.
    
    .PARAMETER AvatarType
    The type of avatar to show in the chip.
    
    .EXAMPLE
    Creates a clickable chip with a custom style and icon.

    $Icon = New-UDIcon -Icon 'user' -Size sm -Style @{color = '#fff'}
    New-UDChip -Label "Demo User" -Id "chipIcon" -Icon $Icon -OnClick {Show-UDToast -Message 'test'} -Clickable -Style @{backgroundColor = '#00838f'}

    #>
    [CmdletBinding(DefaultParameterSetName = 'Icon')]
    param(
        [Parameter()]
        [string]$Id = ([Guid]::NewGuid()).ToString(),

        [Parameter(Position = 0)]
        [string]$Label,

        [Parameter(Position = 8)]
        [object]$OnDelete,

        [Parameter(Position = 7)]
        [object]$OnClick,

        [Parameter (Position = 1, ParameterSetName = "Icon")]
        [PSTypeName('UniversalDashboard.Icon')]$Icon,

        [Parameter(Position = 2)]
        [Hashtable]$Style,

        [Parameter(Position = 3)]
        [ValidateSet("outlined", "default")]
        [string]$Variant = "default",

        [Parameter(Position = 4, ParameterSetName = "Avatar")]
        [string]$Avatar,

        [Parameter(Position = 5, ParameterSetName = "Avatar" )]
        [ValidateSet("letter", "image")]
        [string]$AvatarType,

        [Parameter()]
        [string]$ClassName,

        [Parameter()]
        [ValidateSet("default", "primary", "secondary")]
        [string]$Color = 'default'
    )

    End {

        if ($null -ne $OnClick) {
            if ($OnClick -is [scriptblock]) {
                $OnClick = New-UDEndpoint -Endpoint $OnClick -Id ($Id + "onClick")
            }
            elseif ($OnClick -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnClick must be a script block or UDEndpoint"
            }
        }

        $Delete = $False
        if ($null -ne $OnDelete) {
            $Delete = $true
            if ($OnDelete -is [scriptblock]) {
                $OnDelete = New-UDEndpoint -Endpoint $OnDelete -Id ($Id + "onDelete")
            }
            elseif ($OnDelete -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnDelete must be a script block or UDEndpoint"
            }
        }

        @{
            #This needs to match what is in the register function call of chips.jsx
            type       = "mu-chip"
            #Eventually everything will be a plugin so we wont need this.
            isPlugin   = $true
            #This was set in the UniversalDashboard.MaterialUI.psm1 file
            assetId    = $MUAssetId

            id         = $Id
            label      = $Label
            icon       = $Icon 
            style      = $Style 
            variant    = $Variant 
            clickable  = $null -ne $OnClick
            onClick    = $OnClick
            delete     = $null -ne $OnDelete
            avatar     = $Avatar
            avatarType = $AvatarType
            className  = $ClassName
            color      = $Color.ToLower()
        }
    }
}
function New-UDContainer {
    <#
    .SYNOPSIS
    Creates a Material UI container. 
    
    .DESCRIPTION
    Creates a Material UI container. Containers pad the left and right side of the contained content to center it on larger resolution screens.
    
    .PARAMETER Id
    The ID of this component.
    
    .PARAMETER Children
    The child items to include within the container. 
    
    .EXAMPLE
    Creates a container with some text.

    New-UDContainer -Content {
        New-UDTypography -Text 'Nice'
    }
    #>
    param(
        [Parameter()]
        [string]$Id = ([Guid]::NewGuid()).ToString(),

        [Alias("Content")]
        [Parameter(Mandatory, Position = 0)]
        [ScriptBlock]$Children,

        [Parameter()]
        [string]$ClassName
    )

    Process {
        try {
            $c = New-UDErrorBoundary -Content $Children    
        }
        catch {
            $c = New-UDError -Message $_
        }
        

        @{
            isPlugin  = $true 
            id        = $id 
            assetId   = $MUAssetId
            type      = "mu-container"

            children  = $c
            className = $ClassName
        }
    }
}
function New-UDDashboard {
    <#
    .SYNOPSIS
    Creates a new dashboard.
    
    .DESCRIPTION
    Creates a new dashboard. This component is the root element for all dashboards. You can define content, pages, themes and more.
    
    .PARAMETER Title
    The title of the dashboard.
    
    .PARAMETER Content
    The content for this dashboard. When using content, it creates a dashboard with a single page.
    
    .PARAMETER Pages
    Pages for this dashboard. Use New-UDPage to define a page and pass an array of pages to this parameter. 
    
    .PARAMETER Theme
    The theme for this dashboard. You can define a theme with New-UDTheme. 
    
    .PARAMETER Scripts
    JavaScript files to run when this dashboard is loaded. These JavaScript files can be absolute and hosted in a third-party CDN or you can host them yourself with New-PSUPublishedFolder.
    
    .PARAMETER Stylesheets
    CSS files to run when this dashboard is loaded. These CSS files can be absolute and hosted in a third-party CDN or you can host them yourself with New-PSUPublishedFolder.
    
    .PARAMETER Logo
    A logo to display in the navigation bar. You can use New-PSUPublishedFolder to host this logo file.
    
    .PARAMETER DefaultTheme
    The default theme to show when the page is loaded. The default is to use the light theme. 

    .PARAMETER DisableThemeToggle
    Disables the toggle for the theme.

    .PARAMETER HeaderPosition
    Position of the header within the dashboard.
    
    .EXAMPLE
    Creates a new dashboard with a single page.

    New-UDDashboard -Title 'My Dashboard' -Content {
        New-UDTypography -Text 'Hello, world!'
    }

    .EXAMPLE
    Creates a new dashboard with multiple pages.

    $Pages = @(
        New-UDPage -Name 'HomePage' -Content {
            New-UDTypography -Text 'Home Page'
        }
        New-UDPage -Name 'Page2' -Content {
            New-UDTypography -Text 'Page2'
        }
    )

    New-UDDashboard -Title 'My Dashboard' -Pages $Pages
    
    #>
    param(
        [Parameter()]
        [string]$Title = "PowerShell Universal Dashboard",
        [Parameter(ParameterSetName = "Content", Mandatory)]
        [Endpoint]$Content,
        [Parameter(ParameterSetName = "Pages", Mandatory)]
        [Hashtable[]]$Pages = @(),
        [Parameter()]
        [Hashtable]$Theme = @{},
        [Parameter()]
        [string[]]$Scripts = @(),
        [Parameter()]
        [string[]]$Stylesheets = @(),
        [Parameter()]
        [string]$Logo,
        [Parameter()]
        [ValidateSet("Light", "Dark")]
        [string]$DefaultTheme = "Light",
        [Parameter()]
        [switch]$DisableThemeToggle,
        [ValidateSet('absolute', 'fixed', 'relative', 'static', 'sticky')]
        [Parameter()]
        [string]$HeaderPosition = 'static',
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$HeaderColor,
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$HeaderBackgroundColor,
        [Parameter()]
        [ValidateSet("Temporary", "Permanent")]
        [string]$NavigationLayout = 'Temporary',
        [Parameter()]
        [Hashtable[]]$Navigation,
        [Parameter()]
        [Switch]$HideUserName,
        [Parameter()]
        [Endpoint]$LoadNavigation,
        [Parameter()]
        [Endpoint]$HeaderContent,
        [Parameter()]
        [Endpoint]$PageNotFound,
        [Parameter()]
        [Endpoint]$NotAuthorized
    )    

    if ($HeaderContent) {
        $HeaderContent.Register("DashboardHeaderContent", $PSCmdlet);
    }

    if ($LoadNavigation) {
        $LoadNavigation.Register("DashboardLoadNavigation", $PSCmdlet);
    }

    if ($PageNotFound) {
        $PageNotFound.Register('PageNotFound', $Role, $PSCmdlet)
    }
    
    if ($NotAuthorized) {
        $NotAuthorized.Register('NotAuthorized', $Role, $PSCmdlet)
    }

    if ($PSCmdlet.ParameterSetName -eq 'Content') {
        $Parameters = @{
            Name                  = $Title
            Url                   = "Home"
            Content               = $Content
            Logo                  = $Logo
            HeaderPosition        = $HeaderPosition
            HeaderColor           = $HeaderColor
            HeaderBackgroundColor = $HeaderBackgroundColor
            NavigationLayout      = $NavigationLayout
            HideUserName          = $HideUserName
        }

        if ($HeaderContent) {
            $Parameters['HeaderContent'] = $HeaderContent
        }

        if ($Navigation) {
            $Parameters['Navigation'] = $Navigation
        }

        if ($LoadNavigation) {
            $Parameters['LoadNavigation'] = $LoadNavigation
        }

        $Pages += New-UDPage @Parameters
    }

    $Cache:Pages = $Pages

    @{
        title              = $Title 
        pages              = $Pages
        theme              = $Theme | ConvertTo-Json -Depth 10
        scripts            = $Scripts
        stylesheets        = $Stylesheets
        defaultTheme       = $DefaultTheme.ToLower()
        disableThemeToggle = $DisableThemeToggle.IsPresent
        navigation         = $Navigation
        navigationLayout   = $NavigationLayout
        headerContent      = $HeaderContent
        loadNavigation     = $LoadNavigation
        pageNotFound       = $PageNotFound
        notAuthorized      = $NotAuthorized
    }
}

function New-UDDatePicker {
    <#
    .SYNOPSIS
    Creates a new date picker.
    
    .DESCRIPTION
    Creates a new date picker. Date pickers can be used stand alone or within New-UDForm.
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER Label
    The label to show next to the date picker.
    
    .PARAMETER Variant
    The theme variant to apply to the date picker.
    
    .PARAMETER DisableToolbar
    Disables the date picker toolbar. 
    
    .PARAMETER OnChange
    A script block to call with the selected date. The $EventData variable will be the date selected. 
    
    .PARAMETER Format
    The format of the date when it is selected. 
    
    .PARAMETER Value
    The current value of the date picker. 

    .PARAMETER Locale
    Change the language of the date picker.
    
    .EXAMPLE
    Creates a new date picker with the default date value. 

    New-UDDatePicker -Id 'dateDateDefault' -Value '1-2-2020'
    #>
    param(
        [Parameter()]
        [string]$Id = [Guid]::NewGuid().ToString(),
        [Parameter()]
        [string]$Label,
        [Parameter()]
        [ValidateSet('inline', 'dialog', 'static')]
        [string]$Variant = 'inline',
        [Parameter()]
        [Switch]$DisableToolbar,
        [Parameter()]
        [Endpoint]$OnChange, 
        [Parameter()]
        [string]$Format = 'MM/dd/yyyy',
        [Parameter()]
        [DateTime]$Value = ([DateTime]::Now),
        [Parameter()]
        [ValidateSet("en", "de", 'ru', 'fr')]
        [string]$Locale = "en",
        [Parameter()]
        [string]$ClassName
    )

    if ($OnChange) {
        $OnChange.Register($Id, $PSCmdlet)
    }

    $Arguments = @{
        id        = $Id 
        type      = 'mu-datepicker'
        asset     = $MUAssetId
        isPlugin  = $true 

        onChange  = $OnChange 
        variant   = $Variant 
        format    = $Format 
        value     = $Value
        label     = $Label
        locale    = $Locale.ToLower()
        className = $ClassName
    }

    if ($PSBoundParameters.ContainsKey('Value')) {
        $Arguments['value'] = $Value
    }

    $Arguments
}
function New-UDDateTime {
    <#
    .SYNOPSIS
    This date and time component is used for formatting dates and times using the user's browser settings.
    
    .DESCRIPTION
    This date and time component is used for formatting dates and times using the user's browser settings. Since Universal Dashboard PowerShell scripts run within the server, the date and time settings of the user's system are not taken into account. This component formats date and time within the client's browser to take into account their locale and time zone.
    
    .PARAMETER Id
    The ID of this component.
    
    .PARAMETER InputObject
    The date and time object to format. 
    
    .PARAMETER Format
    The format of the date and time.  This component uses Day.JS. You can learn more about formatting options on their documentation: https://day.js.org/docs/en/display/format
    
    .PARAMETER LocalizedFormat
    The localized format for the date and time. Use this format if you would like to take the user's browser locale and time zone settings into account.
    
    .EXAMPLE
    Formats a date and time using the format 'DD/MM/YYYY'

    New-UDDateTime -InputObject (Get-Date) -Format 'DD/MM/YYYY'
    #>
    [CmdletBinding(DefaultParameterSetName = "LocalizedFormat")]
    param(
        [Parameter()]
        [string]$Id = [Guid]::NewGuid(),
        [Parameter(Mandatory, Position = 0)]
        [string]$InputObject,
        [Parameter(ParameterSetName = "Format")]
        [string]$Format = "DD/MM/YYYY",
        [Parameter(ParameterSetName = "LocalizedFormat")]
        [ValidateSet("LT", "LTS", "L", "LL", "LLL", "LLLL", "l", "ll", "lll", "llll")]
        [string]$LocalizedFormat = "LLL"
    )

    $f = $Format 
    if ($PSCmdlet.ParameterSetName -eq 'LocalizedFormat')
    {
        $f = $LocalizedFormat
    }

    @{
        type = 'mu-datetime'
        id = $Id 
        isPlugin = $true 
        assetId = $MUAssetId

        inputObject = $InputObject 
        format = $f
    }
}
function  Debug-PSUDashboard {
    <#
    .SYNOPSIS
    Provides a utility function for debugging scripts running PowerShell Universal Dashboard.
    
    .DESCRIPTION
    Provides a utility function for debugging scripts running PowerShell Universal Dashboard. This cmdlet integrates with the VS Code PowerShell Universal extension to automatically connect the debugger to endpoints running in UD. 
    
    .EXAMPLE
    Creates an element that invokes the Debug-PSUDashboard cmdlet.

    New-UDElement -Tag div -Endpoint {
        Debug-PSUDashboard
    }
    #>
    [CmdletBinding()]
    param()

    $DebugPreference = 'continue'

    $Runspace = ([runspace]::DefaultRunspace).id

    Show-UDModal -Header {
        New-UDTypography -Text 'Debug Dashboard' -Variant h4
    } -Content {
        Write-Debug "IN DEBUG MODE: Enter-PSHostProcess -Id $PID then Debug-Runspace -Id $Runspace"
        New-UDTypography -Text "You can run the following PowerShell commands in any PowerShell host to debug this dashboard."
        New-UDElement -Tag 'pre' -Content {
            "Enter-PSHostProcess -Id $PID`r`nDebug-Runspace -Id $Runspace"
        }
    } -Footer {
        New-UDLink -Children {
            New-UDButton -Text 'Debug with VS Code' 
        } -Url "vscode://ironmansoftware.powershell-universal/debug?PID=$PID&RS=$Runspace" 
        New-UDLink -Children {
            New-UDButton -Text 'Debug with VS Code Insiders' 
        } -Url "vscode-insiders://ironmansoftware.powershell-universal/debug?PID=$PID&RS=$Runspace" 
        New-UDButton -Text 'Close' -OnClick { Hide-UDModal }
    }

    Wait-Debugger 
}
function New-UDDrawer {
    <#
    .SYNOPSIS
    Creates a new drawer.
    
    .DESCRIPTION
    Creates a new drawer. A drawer is a navigational component that is typically used for navigating between pages. It can be used with New-UDAppBar to provide a custom nav bar. 
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER Children
    Navgiation controls to show within the drawer. Use New-UDList and New-UDListItem to generate links within the drawer. 

    .PARAMETER Variant
    The type of drawer. Valid values include "persistent", "permanent", "temporary"

    .PARAMETER Anchor
    Where to anchor the drawer. Valid values incldue "left", "right", "top", "bottom"
    
    .EXAMPLE
    Creates a custom navbar using New-UDDrawer

    $Drawer = New-UDDrawer -Id 'drawer' -Children {
        New-UDList -Content {
            New-UDListItem -Id 'lstHome' -Label 'Home' -OnClick { 
                Set-TestData 'Home'
                } -Content {
                    New-UDListItem -Id 'lstNested' -Label 'Nested' -OnClick {
                    Set-TestData 'Nested'
                    }
                } 
        }
    }

    New-UDElement -Tag 'main' -Content {
        New-UDAppBar -Children { New-UDTypography -Text 'Hello' -Paragraph } -Position relative -Drawer $Drawer
    }
    #>
    param(
        [Parameter()]
        [string]$Id = [Guid]::NewGuid(),
        [Parameter()]
        [Alias("Content")]
        [ScriptBlock]$Children,
        [ValidateSet("persistent", "permanent", "temporary")]
        [string]$Variant = "temporary",
        [ValidateSet("left", "right", "top", "bottom")]
        [string]$Anchor = "left",
        [Parameter()]
        [string]$ClassName
    )

    try {
        $c = & $Children
    }
    catch {
        $c = New-UDError -Message $_
    }

    @{
        type      = 'mu-drawer'
        id        = $Id 
        isPlugin  = $true 
        assetId   = $MUAssetId
        children  = $c
        variant   = $Variant.ToLower()
        anchor    = $Anchor.ToLower()
        className = $ClassName
    }
}
function New-UDDynamic
{
    <#
    .SYNOPSIS
    Defines a new dynamic region in a dashboard.
    
    .DESCRIPTION
    Defines a new dynamic region in a dashboard. Dynamic regions are used for loading data when the page is loaded or for loading data dynamically through user interaction or auto-reloading. 
    
    .PARAMETER Id
    The ID of this component.
    
    .PARAMETER ArgumentList
    Arguments to pass to this dynamic endpoint. 
    
    .PARAMETER Content
    The content of this dynamic region.
    
    .PARAMETER AutoRefresh
    Whether this dynamic region should refresh on an interval.
    
    .PARAMETER AutoRefreshInterval
    The amount of seconds between refreshes for this dynamic region.
    
    .PARAMETER LoadingComponent
    A component to display while this dynamic region is loading.
    
    .EXAMPLE
    A simple dynamic region that executes when the user loads the page.

    New-UDDynamic -Content {
        New-UDTypography -Text (Get-Date)
    }

    .EXAMPLE
    A dynamic region that refreshes every 3 seconds

    New-UDDynamic -Content {
        New-UDTypography -Text (Get-Date)
    } -AutoRefresh -AutoRefreshInterval 3

    .EXAMPLE
    A dynamic region that is updated when a button is clicked.

    New-UDDynamic -Content {
        New-UDTypography -Text (Get-Date)
    } -Id 'dynamic'

    New-UDButton -Text 'Refresh' -OnClick {
        Sync-UDElement -Id 'dynamic'
    }
    #>
    param(
        [Parameter()]
        [string]$Id = [Guid]::NewGuid(),
        [Parameter()]
        [object[]]$ArgumentList,
        [Parameter(Position = 0, Mandatory)]
        [Endpoint]$Content,
        [Parameter()]
        [Switch]$AutoRefresh,
        [Parameter()]
        [int]$AutoRefreshInterval = 10,
        [Parameter()]
        [ScriptBlock]$LoadingComponent
    )

    $Content.ArgumentList = $ArgumentList
    $Content.Register($Id, $PSCmdlet)

    $LC = $null
    if ($LoadingComponent)
    {
        $LC = New-UDErrorBoundary -Content $LoadingComponent
    }

    @{
        id = $Id 
        autoRefresh = $AutoRefresh.IsPresent
        autoRefreshInterval = $AutoRefreshInterval
        type = "dynamic"
        isPlugin = $true 
        loadingComponent = $LC
    }
}
function New-UDError {
    <#
    .SYNOPSIS
    Creates a new error card.
    
    .DESCRIPTION
    Creates a new error card.
    
    .PARAMETER Message
    The message to display. 
    
    .PARAMETER Title
    A title for the card.
    
    .EXAMPLE
    Displays the error 'Invalid data' on the page.

    New-UDError -Message 'Invalid data'
    #>
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

        errorRecords = @(@{message= $Message})
        title = $Title
    }
}
function New-UDErrorBoundary {
    <#
    .SYNOPSIS
    Defines a new error boundary around a section of code.
    
    .DESCRIPTION
    Defines a new error boundary around a section of code. Error boundaries are used to trap errors and display them on the page.  
    
    .PARAMETER Content
    The content to trap in an error boundary.
    
    .EXAMPLE
    Defines an error boundary that traps the exception that is thrown and displays it on the page.

    New-UDErrorBoundary -Content {
        throw 'This is an error'
    }
    #>
    param(
        [Parameter(Mandatory)]
        [ScriptBlock]$Content
    )

    try 
    {
        & $Content 
    }
    catch
    {
        New-UDError -Message $_
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
        [string]$event
    )

    Begin {

    }

    Process {
        if ($PSCmdlet.ParameterSetName -eq "onClick") {
            Invoke-UDJavaScript -javaScript "
                document.getElementById('$Id').click();
            "
        }
    }

    End {

    }
}

function New-UDExpansionPanelGroup {
    <#
    .SYNOPSIS
    Creates a group of expansion panels. 
    
    .DESCRIPTION
    Creates a group of expansion panels. Use New-UDExpansionPanel to create children for a group. 
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER Children
    Expansion panels to include in this group. 
    
    .PARAMETER Popout
    Creates a popout style expansion panel group.
    
    .PARAMETER Type
    The type of expansion panel group.
    
    .EXAMPLE
    
    Creates an expansion panel group. 

    New-UDExpansionPanelGroup -Items {
        New-UDExpansionPanel -Title "Hello" -Id 'expTitle' -Content {}

        New-UDExpansionPanel -Title "Hello" -Id 'expContent' -Content {
            New-UDElement -Tag 'div' -id 'expContentDiv' -Content { "Hello" }
        }

        New-UDExpansionPanel -Title "Hello" -Id 'expEndpoint' -Endpoint {
            New-UDElement -Tag 'div' -id 'expEndpointDiv' -Content { "Hello" }
        }
    }
    #>
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter(Mandatory = $true, Position = 0)]
        [Alias("Content")]
        [ScriptBlock]$Children,
        [Parameter()]
        [Switch]$Popout,
        [Parameter()]
        [ValidateSet("Expandable", "Accordion")]
        [String]$Type = 'Expandable',
        [Parameter()]
        [string]$ClassName
    )
    
    $c = New-UDErrorBoundary -Content $Children

    @{
        type      = 'mu-expansion-panel-group'
        isPlugin  = $true
        assetId   = $AssetId

        id        = $id
        children  = $c
        popout    = $Popout.IsPresent
        accordion = $Type -eq 'Accordion'
        className = $ClassName
    }
}

function New-UDExpansionPanel {
    <#
    .SYNOPSIS
    Creates an expansion panel.
    
    .DESCRIPTION
    Creates an expansion panel. An expansion panel can hide content that isn't necessary to view when a page is loaded. 
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER Title
    The title show within the header of the expansion panel. 
    
    .PARAMETER Icon
    An icon to show within the header of the expansion panel. 
    
    .PARAMETER Children
    Children components to put within the expansion panel. 
    
    .PARAMETER Active
    Whether the expansion panel is currently active (open).
    
    .EXAMPLE

    Creates an expansion panel with some content.
    
    New-UDExpansionPanel -Title "Hello" -Id 'expContent' -Content {
        New-UDElement -Tag 'div' -id 'expContentDiv' -Content { "Hello" }
    }
    #>
    [CmdletBinding()]
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter()]
        [String]$Title,
        [Parameter()]
        $Icon,
        [Parameter()]
        [Alias("Content")]
        [ScriptBlock]$Children,
        [Parameter()]
        [Switch]$Active,
        [Parameter()]
        [string]$ClassName
    )

    $iconName = $Icon
    if ($PSBoundParameters.ContainsKey("Icon")) {
        if ($Icon -is [string]) {
            $iconName = [UniversalDashboard.Models.FontAwesomeIconsExtensions]::GetIconName($Icon)
        }
    }

    @{
        id        = $Id 
        title     = $Title 
        children  = & $Children
        active    = $Active.IsPresent
        icon      = $iconName
        className = $ClassName

    }
}
function New-UDFloatingActionButton {
    <#
    .SYNOPSIS
    Creates a new floating action button. 
    
    .DESCRIPTION
    Creates a new floating action button. Floating action buttons are good for actions that make sense for an entire page. They can be pinned to the bottom of a page. 
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER Icon
    The icon to put within the floating action button. 
    
    .PARAMETER Size
    The size of the button. 
    
    .PARAMETER OnClick
    A script block to execute when the floating action button is clicked. 

    .PARAMETER Color
    The theme color to apply to the button.
    
    .EXAMPLE
    Creates a floating action button with a user icon and shows a toast when clicked. 

    New-UDFloatingActionButton -Icon user -OnClick {
        Show-UDToast -Message 'Hello'
    }

    #>
    param(
        [Parameter()]
        [string] $Id = ([Guid]::NewGuid()),
        [Parameter()]
        [PSTypeName('UniversalDashboard.Icon')]$Icon,
        [Parameter()]
        [ValidateSet("small", "medium", "large")]
        $Size = "large",
        [Parameter()]
        [object]$OnClick,
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [ValidateSet('default', 'primary', 'secondary')]
        [string]$Color,
        [Parameter()]
        [ValidateSet('Relative', 'BottomLeft', 'BottomRight')]
        [string]$Position = 'Relative'
    )

    if ($null -ne $OnClick) {
        if ($OnClick -is [scriptblock]) {
            $OnClick = New-UDEndpoint -Endpoint $OnClick -Id $Id
        }
        elseif ($OnClick -isnot [UniversalDashboard.Models.Endpoint]) {
            throw "OnClick must be a script block or UDEndpoint"
        }
    }

    @{
        type            = "mu-fab"
        assetId         = $AssetId
        isPlugin        = $true 

        id              = $id
        size            = $Size.tolower()
        backgroundColor = $ButtonColor.HtmlColor
        color           = $IconColor.HtmlColor
        icon            = $icon
        onClick         = $OnClick.Name
        className       = $ClassName
        themeColor      = $Color.ToLower()
        position        = $Position.ToLower()
    }
}
function New-UDForm {
    <#
    .SYNOPSIS
    Creates a new form. 
    
    .DESCRIPTION
    Creates a new form. Forms can contain any set of input controls. Each of the controls will report its value back up to the form when the submit button is clicked. 
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER Children
    Controls that make up this form. This can be any combination of controls. Input controls will report their state to the form. 
    
    .PARAMETER OnSubmit
    A script block that is execute when the form is submitted. You can return controls from this script block and the form will be replaced by the script block. The $EventData variable will contain a hashtable of all the input fields and their values. 
    
    .PARAMETER OnValidate
    A script block that validates the form. Return the result of a call to New-UDFormValidationResult.

    .PARAMETER OnProcessing
    A script block that is called when the form begins processing. The return value of this script block should be a component that displays a loading dialog. The script block will receive the current form data.

    .PARAMETER OnCancel
    A script block that is called when a form is cancelled. Useful for closing forms in modals.

    .PARAMETER SubmitText
    Text to show within the submit button

    .PARAMETER CancelText
    Text to show within the cancel button.

    .PARAMETER ButtonVariant
    Type of button to display.

    
    .EXAMPLE
    Creates a form that contains many input controls and displays the $eventdata hashtable as a toast. 

    New-UDForm -Id 'defaultForm' -Content {
        New-UDTextbox -Id 'txtNameDefault' -Value 'Name'
        New-UDTextbox -Id 'txtLastNameDefault' -Value 'LastName'
        New-UDCheckbox -Id 'chkYesDefault' -Label YesOrNo -Checked $true

        New-UDSelect -Label '1-3' -Id 'selectDefault' -Option {
            New-UDSelectOption -Name "OneDefault" -Value 1
            New-UDSelectOption -Name "TwoDefault" -Value 2
            New-UDSelectOption -Name "ThreeDefault" -Value 3
        } -DefaultValue '1'

        New-UDSwitch -Id 'switchYesDefault' -Checked $true

        New-UDDatePicker -Id 'dateDateDefault' -Value '1-2-2020'

        New-UDTimePicker -Id 'timePickerDefault' -Value '10:30 AM'

        New-UDRadioGroup -Label 'group' -Id 'simpleRadioDefault' -Children {
            New-UDRadio -Value 'Adam' -Label 'Adam'  -Id 'adamDefault'
            New-UDRadio -Value 'Alon' -Label 'Alon' -Id 'alonDefault'
            New-UDRadio -Value 'Lee' -Label 'Lee' -Id 'leeDefault'
        } -Value 'Adam'
    } -OnSubmit {
        Show-UDToast -Message $Body
    }
    #>
    param(
        [Parameter()]
        [string]$Id = [Guid]::NewGuid().ToString(),
        [Parameter(Mandatory)]
        [ALias("Content")]
        [ScriptBlock]$Children,
        [Parameter(Mandatory)]
        [Endpoint]$OnSubmit,
        [Parameter()]
        [Endpoint]$OnValidate,
        [Parameter()]
        [ScriptBlock]$OnProcessing,
        [Parameter()]
        [Endpoint]$OnCancel,
        [Parameter()]
        [string]$SubmitText = 'Submit',
        [Parameter()]
        [string]$CancelText = 'Cancel',
        [ValidateSet('text', 'contained', 'outlined')]
        [string]$ButtonVariant = 'text',
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [switch]$DisableSubmitOnEnter
    )

    if ($null -ne $OnValidate) {
        $OnValidate.Register($id + "validate", $PSCmdlet) 
    }

    $LoadingComponent = $null 
    if ($null -ne $OnProcessing) {
        $LoadingComponent = New-UDErrorBoundary -Content $OnProcessing
    }

    if ($OnCancel) {
        $OnCancel.Register($id + 'cancel', $PSCmdlet)
    }

    $OnSubmit.Register($id, $PSCmdlet)

    try {
        $c = New-UDErrorBoundary -Content $Children 
    }
    catch {
        $c = New-UDError -Message $_
    }

    @{
        id                   = $Id 
        assetId              = $MUAssetId 
        isPlugin             = $true 
        type                 = "mu-form"

        onSubmit             = $OnSubmit 
        onValidate           = $OnValidate
        loadingComponent     = $LoadingComponent
        children             = $c
        onCancel             = $OnCancel
        cancelText           = $CancelText
        submitText           = $SubmitText
        buttonVariant        = $ButtonVariant 
        className            = $ClassName
        disableSubmitOnEnter = $DisableSubmitOnEnter.IsPresent
    }
}

New-Alias -Name 'New-UDFormValidationResult' -Value 'New-UDValidationResult'

function New-UDValidationResult {
    <#
    .SYNOPSIS
    Creates a new validation result. 
    
    .DESCRIPTION
    Creates a new validation result. This cmdlet should return its value from the OnValidate script block parameter on New-UDForm or New-UDStepper. 
    
    .PARAMETER Valid
    Whether the status is considered valid. 
    
    .PARAMETER ValidationError
    An error to display if the is not valid. 

    .PARAMETER Context
    Update the context based on validation. This is only used for New-UDStepper.

    .PARAMETER DisablePrevious
    Disables the previous button. This is only used for New-UDStepper.

    .PARAMETER ActiveStep
    Sets the active step. This is only used for New-UDStepper.

    #>
    param(
        [Parameter()]
        [Switch]$Valid,
        [Parameter()]
        [string]$ValidationError = "Form is invalid.",
        [Parameter()]
        [HashTable]$Context,
        [Parameter()]
        [Switch]$DisablePrevious,
        [Parameter()]
        [int]$ActiveStep = -1
    )

    @{
        valid           = $Valid.IsPresent
        validationError = $ValidationError
        context         = $Context 
        disablePrevious = $DisablePrevious.IsPresent
        activeStep      = $ActiveStep
    }
}

function Test-UDForm {
    <#
    .SYNOPSIS
    Invokes validation for a form.
    
    .DESCRIPTION
    Invokes validation for a form.
    
    .PARAMETER Id
    Id of the form to invoke validation for.
    
    .EXAMPLE
    New-UDButton -Text 'Validate' -OnClick {
        Test-UDForm -Id 'myForm'
    }
    #>
    param(
        [Parameter(Mandatory)]
        [string]$Id
    )

    $DashboardHub.SendWebSocketMessage($ConnectionId, "testForm", $Id)
}

function Invoke-UDForm {
    <#
    .SYNOPSIS
    Invokes a form.
    
    .DESCRIPTION
    Invokes a form and optionally validates it. 
    
    .PARAMETER Id
    The ID of the form to invoke.
    
    .PARAMETER Validate
    Whether to run form validation.
    
    .EXAMPLE
    Invoke-UDForm -Id "MyForm" -Validate
    #>
    param(
        [Parameter(Mandatory)]
        [string]$Id,
        [Parameter()]
        [Switch]$Validate
    )

    $Data = @{
        method   = "invokeForm"
        id       = $Id 
        validate = $Validate.IsPresent
    }

    $DashboardHub.SendWebSocketMessage($ConnectionId, "invokeMethod", $Data)
}
function New-UDGrid {
    <#
    .SYNOPSIS
    Creates a grid to layout components.
    
    .DESCRIPTION
    Creates a grid to layout components. The grid is a 24-point grid system that can adapt based on the size of the screen that is showing the controls. 
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER ExtraSmallSize
    The size (1-24) for extra small devices.
    
    .PARAMETER SmallSize
    The size (1-24) for small devices.
    
    .PARAMETER MediumSize
    The size (1-24) for medium devices.
    
    .PARAMETER LargeSize
    The size (1-24) for large devices.
    
    .PARAMETER ExtraLargeSize
    The size (1-24) for extra large devices.
    
    .PARAMETER Container
    Whether this is a container. A container can be best described as a row. 
    
    .PARAMETER Spacing
    Spacing between the items. 
    
    .PARAMETER Item
    Whether this is an item in a container. 
    
    .PARAMETER Children
    Components included in this grid item. 
    
    .EXAMPLE
    An example
    
    .NOTES
    General notes
    #>
    param(
        [Parameter()]
        [string]$Id = [Guid]::NewGuid().ToString(),
        [Alias("Size")]
        [ValidateRange(1, 12)]
        [Parameter(ParameterSetName = "Item")]
        [int]$ExtraSmallSize,
        [Parameter(ParameterSetName = "Item")]
        [ValidateRange(1, 12)]
        [int]$SmallSize,
        [Parameter(ParameterSetName = "Item")]
        [ValidateRange(1, 12)]
        [int]$MediumSize,
        [Parameter(ParameterSetName = "Item")]
        [ValidateRange(1, 12)]
        [int]$LargeSize,
        [Parameter(ParameterSetName = "Item")]
        [ValidateRange(1, 12)]
        [int]$ExtraLargeSize,
        [Parameter(ParameterSetName = "Container")]
        [Switch]$Container,
        [Parameter(ParameterSetName = "Container")]
        [ValidateRange(0, 10)]
        [int]$Spacing,
        [Parameter(ParameterSetName = "Item")]
        [Switch]$Item,
        [Parameter()]
        [Alias("Content")]
        [ScriptBlock]$Children,
        [Parameter()]
        [string]$ClassName
    )

    End {
        $c = New-UDErrorBoundary -Content $Children

        @{
            id        = $Id 
            isPlugin  = $true 
            type      = "mu-grid"
            assetId   = $MUAssetId

            xs        = $ExtraSmallSize
            sm        = $SmallSize
            md        = $MediumSize
            lg        = $LargeSize
            xl        = $ExtraLargeSize
            spacing   = $Spacing

            container = $Container.IsPresent
            item      = $Item.IsPresent

            children  = $c

            className = $ClassName
        }
    }
}
function New-UDGridLayout {
    param(
        [Parameter()]
        [string]$Id = ([Guid]::NewGuid()).ToString(),
        [Parameter()]
        [int]$RowHeight = 30,
        [Parameter(Mandatory)]
        [scriptblock]$Content,
        [Parameter()]
        [string]$Layout,
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
        [switch]$Persist,
        [Parameter()]
        [switch]$Design
    )

    End {
        $Breakpoints = @{
            lg  = $LargeBreakpoint
            md  = $MediumBreakpoint
            sm  = $SmallBreakpoint
            xs  = $ExtraSmallBreakpoint
            xxs = $ExtraExtraSmallBreakpoint
        }

        $Columns = @{
            lg  = $LargeColumns
            md  = $MediumColumns
            sm  = $SmallColumns
            xs  = $ExtraSmallColumns
            xxs = $ExtraExtraSmallColumns
        }

        @{
            type        = "ud-grid-layout"
            isPlugin    = $true
            id          = $Id
            assetId     = $MUAssetId
            className   = "layout"
            rowHeight   = $RowHeight
            children    = & $Content
            layout      = $Layout
            cols        = $Columns
            breakpoints = $Breakpoints
            isDraggable = $Draggable.IsPresent
            isResizable = $Resizable.IsPresent
            persist     = $Persist.IsPresent
            design      = $Design.IsPresent
        }
    }
}
function New-UDHeading {
    <#
    .SYNOPSIS
    Defines a new heading
    
    .DESCRIPTION
    Defines a new heading. This generates a new H tag. 
    
    .PARAMETER Id
    The ID of this component.
    
    .PARAMETER Content
    The content of the heading.
    
    .PARAMETER Text
    The text of the heading.
    
    .PARAMETER Size
    This size of this heading. This can be 1,2,3,4,5 or 6. 
    
    .PARAMETER Color
    The text color.
    
    .EXAMPLE
    A heading

    New-UDHeading -Text 'Heading 1' -Size 1 -Color Blue
    #>
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
        [UniversalDashboard.Models.DashboardColor]$Color = 'black',
        [Parameter()]
        [string]$ClassName
    )

    if ($PSCmdlet.ParameterSetName -eq "Text") {
        $Content = { $Text }
    }

    New-UDElement -Id $Id -Tag "h$size" -Content $Content -Attributes @{
        className = $className
        style     = @{
            color = $Color.HtmlColor
        }
    }
}
function New-UDHidden {
    param(
        [Parameter()]
        [string]$Id = [Guid]::NewGuid(),
        [Parameter(ParameterSetName = 'Down')]
        [ValidateSet('xs', 'sm', 'md', 'lg', 'xl')]
        [string]$Down,
        [Parameter(ParameterSetName = 'Up')]
        [ValidateSet('xs', 'sm', 'md', 'lg', 'xl')]
        [string]$Up,
        [Parameter(ParameterSetName = 'Only')]
        [ValidateSet('xs', 'sm', 'md', 'lg', 'xl')]
        [string[]]$Only,
        [Parameter()]
        [ScriptBlock]$Content
    )

    $Component = @{
        type = 'mu-hidden'
        id = $Id
        isPlugin = $true 

        children = & $Content
    }

    if ($PSCmdlet.ParameterSetName -eq 'Only')
    {
        $Component['only'] = $Only 
    }

    if ($PSCmdlet.ParameterSetName -eq 'Down')
    {
        $Component["$($Down.ToLower())Down"] = $true 
    }

    if ($PSCmdlet.ParameterSetName -eq 'Up')
    {
        $Component["$($Up.ToLower())Up"] = $true 
    }

    $Component 
} 
$Script:FontAwesomeSolid = Get-Content -Path (Join-Path $PSScriptRoot 'fontawesome.solid.txt')
$Script:FontAwesomeRegular = Get-Content -Path (Join-Path $PSScriptRoot 'fontawesome.regular.txt')
$Script:FontAwesomeBrands = Get-Content -Path (Join-Path $PSScriptRoot 'fontawesome.brands.txt')

function New-UDIcon {
    <#
    .SYNOPSIS
    Creates a new icon.
    
    .DESCRIPTION
    Creates a new icon.
    
    .PARAMETER Id
    The ID of this component.
    
    .PARAMETER Icon
    The Icon to display. This is a FontAwesome 5 icon name. 
    
    .PARAMETER FixedWidth
    Whether to use a fixed with. 
    
    .PARAMETER Inverse
    Whether to invert the colors of the icon.
    
    .PARAMETER Rotation
    The amount of degrees to rotate the icon.
    
    .PARAMETER ClassName
    Custom CSS class names to apply to the icon.
    
    .PARAMETER Transform
    A CSS transform to apply to the icon.
    
    .PARAMETER Flip
    Whether to flip the icon.
    
    .PARAMETER Pull
    Whether to flip the icon.
    
    .PARAMETER ListItem
    
    
    .PARAMETER Spin
    Whether the icon should spin.
    
    .PARAMETER Border
    Defines the border for this icon.
    
    .PARAMETER Pulse
    Whether this icon should publse. 
    
    .PARAMETER Size
    The size of the icon.
    
    .PARAMETER Style
    A CSS style to apply to the icon.
    
    .PARAMETER Title
    
    
    .PARAMETER Regular
    
    
    .PARAMETER Color
    The color of this icon.
    
    .EXAMPLE
    Displays a user icon.

    New-UDIcon -Icon User
    #>
    param(
        [Parameter()]
        [string]$Id = ([Guid]::NewGuid()).ToString(),
        [Parameter()]
        [string]$Icon, 
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
        [ValidateSet("xs", "sm", "lg", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x")]
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
        if ($Icon.Contains('_')) {
            $iconName = [UniversalDashboard.Models.FontAwesomeIconsExtensions]::GetIconName($Icon)
        }
        else {
            if ($Regular) {
                $IconName = $Script:FontAwesomeRegular.Where({ $_ -eq $Icon })
            }
            else {
                $IconName = $Script:FontAwesomeSolid.Where({ $_ -eq $Icon })
                if (-not $IconName) {
                    $IconName = $Script:FontAwesomeBrands.Where({ $_ -eq $Icon })
                }
            }
        }

        if (-not $IconName) {
            throw "Unknown icon $Icon"
        }

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

$scriptBlock = {
    param($commandName, $parameterName, $wordToComplete, $commandAst, $fakeBoundParameters)

    if ($fakeBoundParameters.ContainsKey('Regular')) {
        $Script:FontAwesomeRegular | Where-Object {
            $_ -like "$wordToComplete*"
        }
    }
    else {
        $Script:FontAwesomeSolid | Where-Object {
            $_ -like "$wordToComplete*"
        } 
        $Script:FontAwesomeBrands | Where-Object {
            $_ -like "$wordToComplete*"
        } 
    }   
}

Register-ArgumentCompleter -CommandName New-UDIcon -ParameterName Icon -ScriptBlock $scriptBlock
function New-UDIconButton {
    <#
    .SYNOPSIS
    Creates a button with an icon.
    
    .DESCRIPTION
    Creates a button with an icon.
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER Icon
    The icon to display within the button. 
    
    .PARAMETER OnClick
    A script block to execute when the button is clicked. 
    
    .PARAMETER Disabled
    Whether the button is disabled. 
    
    .PARAMETER Href
    A link to navigate to when the button is clicked.
    
    .PARAMETER Style
    The CSS sytle to apply to the icon. 
    
    .EXAMPLE
    Creates an icon button with a user icon with a custom style.

    New-UDIconButton -Icon (New-UDIcon -Icon user -Size sm -Style @{color = '#000'})  -Id 'iconButtonContent' 
    #>
    param(
        [Parameter()]
        [string]$Id = ([Guid]::NewGuid()).ToString(),
        [Parameter ()]
        [PSTypeName('UniversalDashboard.Icon')]$Icon,
        [Parameter ()]
        [object] $OnClick, 
        [Parameter ()]
        [Switch] $Disabled, 
        [Parameter ()]
        [string] $Href, 
        [Parameter ()]
        [Hashtable] $Style,
        [Parameter()]
        [string]$ClassName


    )

    End {
        if ($null -ne $OnClick) {
            if ($OnClick -is [scriptblock]) {
                $OnClick = New-UDEndpoint -Endpoint $OnClick -Id ($Id + "onClick")
            }
            elseif ($OnClick -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnClick must be a script block or UDEndpoint"
            }
        }

        @{
            type      = 'mu-icon-button'
            isPlugin  = $true
            assetId   = $MUAssetId
            id        = $Id
            disabled  = $Disabled.IsPresent
            style     = $Style
            onClick   = $OnClick
            icon      = $Icon
            href      = $Href
            className = $ClassName
        }
    }
}
function New-UDIFrame {
    <#
    .SYNOPSIS
    An HTML IFrame component.
    
    .DESCRIPTION
    An HTML IFrame component. 
    
    .PARAMETER Id
    The ID of this component.
    
    .PARAMETER Uri
    The URI for the iframe. 
    
    .EXAMPLE
    Defines an IFrame for Google.

    New-UDIFrame -Uri https://www.google.com
    #>
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
    <#
    .SYNOPSIS
    An image component.
    
    .DESCRIPTION
    An image component.
    
    .PARAMETER Id
    The ID of this component.
    
    .PARAMETER Url
    The URL to the image. 
    
    .PARAMETER Path
    The path to a local image.
    
    .PARAMETER Height
    The height in pixels.
    
    .PARAMETER Width
    The width in pixels.
    
    .PARAMETER Attributes
    Additional attributes to apply to the img tag.
    
    .EXAMPLE
    Displays an image. 

    New-UDImage -Url 'https://ironmansoftware.com/logo.png'
    #>
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
        [Hashtable]$Attributes = @{},
        [Parameter()]
        [string]$ClassName
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
    if ($PSBoundParameters.ContainsKey('ClassName')) {
        $Attributes.'className' = $ClassName
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

function New-UDLayout {
    <#
    .SYNOPSIS
    Create a layout based on the number of components within the layout.
    
    .DESCRIPTION
    Create a layout based on the number of components within the layout. The component wraps New-UDRow and New-UDColumn to automatically layout components in the content.
    
    .PARAMETER Columns
    The number of columns in this layout.
    
    .PARAMETER Content
    The content for this layout. 
    
    .EXAMPLE
    New-UDLayout -Columns 2 -Content {
        New-UDTypography "Row 1, Col 1"
        New-UDTypography "Row 1, Col 2"
        New-UDTypography "Row 2, Col 1"
        New-UDTypography "Row 2, Col 2"
    }
    #>
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
    <#
    .SYNOPSIS
    Short description
    
    .DESCRIPTION
    Long description
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER Url
    The URL of the link.
    
    .PARAMETER Underline
    Whether to underline the link.
    
    .PARAMETER Style
    A custom style to apply to the link. 
    
    .PARAMETER Variant
    The theme variant to apply to the link. 
    
    .PARAMETER ClassName
    The CSS class to apply to the link.
    
    .PARAMETER OpenInNewWindow
    Opens the link in a new window. 
    
    .PARAMETER Children
    The components to link. 
    
    .PARAMETER Text
    Text to include in the link.
    
    .PARAMETER OnClick
    A script block to invoke when clicked.

    .EXAMPLE
    An example
    
    .NOTES
    General notes
    #>
    param(
        [Parameter()]
        [string]$Id = ([Guid]::NewGuid()).ToString(),
        [Parameter()]
        [string]$url,
        [Parameter()]
        [ValidateSet('none','hover','always')]
        [string]$Underline = "none",
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [ValidateSet('h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline', 'srOnly', 'inherit')]
        [string]$Variant,
        [Parameter ()]
        [string]$ClassName,
        [Parameter()]
        [switch]$OpenInNewWindow,
        [Parameter(ParameterSetName = 'content')]
        [Alias("Content")]
        [scriptblock]$Children,
        [Parameter(ParameterSetName = 'text')]
        [string]$Text,
        [Parameter()]
        [Endpoint]$OnClick
    )
    End {
        if ($OnClick)
        {
            $OnClick.Register($Id, $PSCmdlet)
        }

        if($null -ne $Children)
        {
            $Object = & $Children
        }
        else
        {
            $Object = $null
        }

        @{
            type            = 'mu-link'
            isPlugin        = $true
            assetId         = $MUAssetId

            id              = $Id
            url             = $url
            underline       = $underline
            style           = $style
            variant         = $variant
            className       = $ClassName
            openInNewWindow = $openInNewWindow.IsPresent
            content         = $Object
            text            = $text
            onClick         = $OnClick
        }
    }
}
function New-UDList {
    <#
    .SYNOPSIS
    Creates a list. 
    
    .DESCRIPTION
    Creates a list. Use New-UDListItem to add new items to the list. Lists are good for links in UDDrawers.
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER Children
    The items in the list.
    
    .PARAMETER SubHeader
    Text to show within the sub header. 
    
    .EXAMPLE
    Creates a new list with two items and nested list items.

    New-UDList -Id 'listContent' -Content {

        New-UDListItem -Id 'listContentItem' -AvatarType Avatar -Source 'https://pbs.twimg.com/profile_images/1065243723217416193/tg3XGcVR_400x400.jpg' -Label 'Adam Driscoll' -Content {

            New-UDListItem -Id 'list-item-security' -Label 'username and passwords'
            New-UDListItem -Id 'list-item-api' -Label 'api keys'

        } 
    }
    #>
    param(
        [Parameter ()]
        [string]$Id = ([Guid]::NewGuid()).ToString(),
        [Parameter ()]
        [Alias("Content")]
        [scriptblock]$Children,
        [Parameter ()]
        [string]$SubHeader,
        [Parameter()]
        [string]$ClassName
    )
    End {
        try {
            $c = & $Children
        }
        catch {
            $c = New-UDError -Message $_
        }

        @{
            type      = 'mu-list'
            isPlugin  = $true
            assetId   = $MUAssetId

            id        = $Id
            children  = $c
            subHeader = $SubHeader
            style     = $Style
            className = $ClassName
        }
    }
}

function New-UDListItem {
    <#
    .SYNOPSIS
    Creates a new list item.
    
    .DESCRIPTION
    Creates a new list item. List items are used with New-UDList. 
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER AvatarType
    The type of avatar to show within the list item. 
    
    .PARAMETER OnClick
    A script block to execute when the list item is clicked. 
    
    .PARAMETER Label
    The label to show within the list item. 
    
    .PARAMETER Children
    Nested list items to show underneath this list item. 
    
    .PARAMETER SubTitle
    The subtitle to show within the list item. 
    
    .PARAMETER Icon
    The icon to show within the list item. 
    
    .PARAMETER Source
    Parameter description
    
    .PARAMETER SecondaryAction
    The secondary action to issue with this list item. 
    
    .EXAMPLE
    Creates a new list with two items and nested list items.

    New-UDList -Id 'listContent' -Content {

        New-UDListItem -Id 'listContentItem' -AvatarType Avatar -Source 'https://pbs.twimg.com/profile_images/1065243723217416193/tg3XGcVR_400x400.jpg' -Label 'Adam Driscoll' -Content {

            New-UDListItem -Id 'list-item-security' -Label 'username and passwords'
            New-UDListItem -Id 'list-item-api' -Label 'api keys'

        } 
    }
    #>
    [CmdletBinding()]
    param(
        [Parameter ()]
        [string]$Id = ([Guid]::NewGuid()).ToString(),
        [Parameter ()]
        [ValidateSet("Icon", "Avatar")][string]$AvatarType = 'Icon',
        [Parameter ()]
        [Endpoint]$OnClick, 
        [Parameter ()]
        [string]$Label, 
        [Parameter ()]
        [Alias("Content")]
        [scriptblock]$Children, 
        [Parameter ()]
        [string]$SubTitle,
        [Parameter ()]
        $Icon,
        [Parameter ()]
        [string]$Source,
        [Parameter ()]
        [scriptblock]$SecondaryAction,
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [Switch]$Open,
        [Parameter()]
        [Switch]$Nested
    )
    begin {}
    Process {}
    End {
        if ($OnClick) {
            $OnClick.Register($Id, $PSCmdlet)
        }

        if ($null -ne $Children) {
            try {
                $CardContent = & $Children    
            }
            catch {
                $CardContent = New-UDError -Message $_
            }
            
        }
        else {
            $CardContent = $null
        }

        if ($null -ne $SecondaryAction) {
            $Action = $SecondaryAction.Invoke()
        }
        else {
            $Action = $null
        }
        
        @{
            type            = 'mu-list-item'
            isPlugin        = $true
            assetId         = $MUAssetId

            id              = $Id
            subTitle        = $SubTitle
            label           = $Label
            onClick         = $OnClick
            children        = $CardContent
            secondaryAction = $Action
            icon            = $Icon
            source          = $Source
            avatarType      = $AvatarType
            labelStyle      = $LabelStyle
            style           = $Style
            className       = $ClassName
            open            = $Open.IsPresent
            nested          = $Nested.IsPresent
        }
    }
}
function New-UDMenu {
    <#
    .SYNOPSIS
    Creates a pop up menu.
    
    .DESCRIPTION
    Creates a pop up menu.
    
    .PARAMETER Id
    The ID of this component.
    
    .PARAMETER Text
    The text to display in the button that opens this menu.
    
    .PARAMETER OnChange
    An event handler to call when the user selects an item from the menu. $EventData will include the selected item. 
    
    .PARAMETER Children
    The items to display in the menu.
    
    .PARAMETER ClassName
    The class name of the menu.
    
    .PARAMETER Variant
    The button variant for the menu.
    
    .EXAMPLE
    New-UDMenu -Text 'Click Me' -OnChange {
        Show-UDToast $EventData
    } -Children {
        New-UDMenuItem -Text 'Test'
        New-UDMenuItem -Text 'Test2'
        New-UDMenuItem -Text 'Test3'
    }

    Creates a simple menu.
    #>
    param(
        [Parameter()]
        [string]$Id = [Guid]::NewGuid(),
        [Parameter(Mandatory)]
        [string]$Text,
        [Parameter()]
        [Endpoint]$OnChange,
        [Parameter(Mandatory)]
        [Alias('Items')]
        [Alias('Content')]
        [ScriptBlock]$Children,
        [Parameter]
        [string]$ClassName,
        [ValidateSet("text", "outlined", "contained")]
        [string]$Variant = "contained",
        [Parameter()]
        [Hashtable]$Icon
    )

    if ($OnChange) {
        $OnChange.Register($Id, $PSCmdlet)
    }

    @{
        assetId   = $MUAssetId 
        id        = $Id 
        isPlugin  = $true 
        type      = 'mu-menu'

        text      = $Text
        onChange  = $OnChange
        children  = & $Children
        className = $ClassName
        icon      = $Icon
        variant   = $Variant.ToLower()
    }
}

function New-UDMenuItem {
    <#
    .SYNOPSIS
    Creates a menu item.
    
    .DESCRIPTION
    Creates a menu item.
    
    .PARAMETER Text
    The text to display in the menu item. 
    
    .PARAMETER Value
    The value of the menu item. If not specified, the text will be used.
    
    .EXAMPLE
    New-UDMenu -Text 'Click Me' -OnChange {
        Show-UDToast $EventData
    } -Children {
        New-UDMenuItem -Text 'Test'
        New-UDMenuItem -Text 'Test2'
        New-UDMenuItem -Text 'Test3'
    }

    Creates a simple menu.
    #>
    param(
        [Parameter(Mandatory)]
        [string]$Text,
        [Parameter()]
        [string]$Value,
        [Parameter()]
        [Hashtable]$Icon
    )

    @{
        text  = $Text 
        value = if ($Value) { $Value } else { $Text }
        icon  = $Icon
    }
}
function New-UDPage {
    <#
    .SYNOPSIS
    Defines a new page.
    
    .DESCRIPTION
    Defines a new page. Dashboards can contain multiple pages that each contain different components.
    
    .PARAMETER Name
    The name of the page. 
    
    .PARAMETER Content
    The content of the page.
    
    .PARAMETER Url
    The URL for the page.
    
    .PARAMETER DefaultHomePage
    Whether this page is the default home page. Only one page can be the default home page.
    
    .PARAMETER Title
    The title of the page.
    
    .PARAMETER Blank
    Whether to define a blank page. Blank pages won't have a navigation bar.
    
    .PARAMETER Id
    The ID of this component.
    
    .PARAMETER OnLoading
    A component to return while this page is loading.
    
    .PARAMETER Role
    The role of the user that is allowed to access this page.
    
    .PARAMETER NavigationLayout
    How the navigation is layed out on the page.
    
    .PARAMETER Navigation
    Custom navigation to show for this page. You can use New-UDList and New-UDListItem to define custom navigation links.
    
    .PARAMETER Logo
    The logo to display on this page.
    
    .PARAMETER LoadNavigation
    An endpoint that is called when loading the navigation for the page.

    .PARAMETER HeaderPosition
    Position of the header within the dashboard.

    .PARAMETER HeaderContent 
    Content of the header.
    
    .EXAMPLE
    Creates a basic page.

    New-UDPage -Name 'Test' -Content {
        New-UDTypography -Text 'Page'
    }
    #>
    [CmdletBinding(DefaultParameterSetName = "Simple")]
    param(
        [Parameter(Position = 0, Mandatory)]
        [string]$Name,
        [Parameter(Position = 2, Mandatory)]
        [Alias("Endpoint")]
        [Endpoint]$Content,
        [Parameter(Position = 0)]
        [string]$Url,
        [Parameter(Position = 3)]
        [Switch]$DefaultHomePage,
        [Parameter(Position = 4)]
        [string]$Title,
        [Parameter(ParameterSetName = 'Advanced')]
        [Switch]$Blank,
        [Parameter()]
        [string]$Id = [Guid]::NewGuid(),
        [Parameter()]
        [ScriptBlock]$OnLoading,
        [Parameter()]
        [string[]]$Role,
        [Parameter(ParameterSetName = 'Simple')]
        [Parameter(ParameterSetName = 'DynamicNav')]
        [ValidateSet("Temporary", "Permanent")]
        [string]$NavigationLayout = 'Temporary',
        [Parameter(ParameterSetName = 'Simple')]
        [Hashtable[]]$Navigation,
        [Parameter(ParameterSetName = "Simple")]
        [Parameter(ParameterSetName = 'DynamicNav')]
        [string]$Logo,
        [Parameter(ParameterSetName = 'DynamicNav')]
        [Endpoint]$LoadNavigation,
        [ValidateSet('absolute', 'fixed', 'relative', 'static', 'sticky')]
        [Parameter()]
        [string]$HeaderPosition = 'static',
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$HeaderColor,
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$HeaderBackgroundColor,
        [Parameter(ParameterSetName = "Simple")]
        [Parameter(ParameterSetName = 'DynamicNav')]
        [Endpoint]$HeaderContent,
        [Parameter()]
        [Switch]$HideUserName,
        [Parameter()]
        [Hashtable]$Icon
    )

    $Content.Register($Id, $Role, $PSCmdlet)

    if (-not [string]::IsNullOrEmpty($Url) -and -not $Url.StartsWith("/")) {
        $Url = "/" + $Url
    }

    if ([string]::IsNullOrEmpty($Url) -and $null -ne $Name) {
        $Url = "/" + $Name.Replace(' ', '-');
    }

    if ($OnLoading) {
        $LoadingContent = New-UDErrorBoundary -Content $OnLoading
    }

    if ($LoadNavigation) {
        $LoadNavigation.Register('nav' + $Id, $Role, $PSCmdlet)
    }

    if ($HeaderContent) {
        $HeaderContent.Register('headerContent' + $Id, $Role, $PSCmdlet)
    }

    
    @{
        name                  = $Name
        url                   = $Url
        id                    = $Id
        defaultHomePage       = $DefaultHomePage.IsPresent
        title                 = $Title
        blank                 = $Blank.IsPresent
        loading               = $LoadingContent
        content               = $Content 
        navLayout             = $NavigationLayout.ToLower()
        navigation            = $navigation
        role                  = $Role
        logo                  = $Logo
        loadNavigation        = $LoadNavigation
        headerPosition        = $HeaderPosition.ToLower()
        headerColor           = $HeaderColor.HtmlColor
        headerBackgroundColor = $HeaderBackgroundColor.HtmlColor
        headerContent         = $HeaderContent
        hideUserName          = $HideUserName.IsPresent
        icon                  = $Icon
    }
}
function New-UDPaper {
    <#
    .SYNOPSIS
    Creates a paper. 
    
    .DESCRIPTION
    Creates a paper. Paper is used to highlight content within a page. 
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER Children
    The content of this paper element. 
    
    .PARAMETER Width
    The width of this paper.
    
    .PARAMETER Height
    The height of this paper.
    
    .PARAMETER Square
    Whether this paper is square.
    
    .PARAMETER Style
    The CSS style to apply to this paper.
    
    .PARAMETER Elevation
    The elevation of this paper. 
    
    .EXAMPLE
    Creates paper with a heading, custom style and an elevation of 4. 

    New-UDPaper -Children {
        New-UDHeading -Text "hi" -Id 'hi'
    } -Style @{
        backgroundColor = '#90caf9'
    } -Id 'paperElevation' -Elevation 4
    
    .NOTES
    General notes
    #>
    param(
        [Parameter()][string]$Id = ([Guid]::NewGuid()).ToString(),
        [Parameter()][Alias("Content")][ScriptBlock]$Children,
        [Parameter()][string]$Width = '500',
        [Parameter()][string]$Height = '500',
        [Parameter()][Switch]$Square,
        [Parameter()][Hashtable]$Style,
        [Parameter()][int]$Elevation,
        [Parameter()]
        [string]$ClassName
    )

    End {
        $c = New-UDErrorBoundary -Content $Children
        
        @{
            type      = 'mu-paper'
            isPlugin  = $true
            assetId   = $MUAssetId
            
            id        = $Id
            width     = $Width 
            children  = $c
            height    = $Height
            square    = $Square.IsPresent
            style     = $Style
            elevation = $Elevation
            className = $ClassName
        }
    }
}
function New-UDParagraph {
    <#
    .SYNOPSIS
    A paragraph. 
    
    .DESCRIPTION
    A paragraph. Used to define a P HTML tag. 
    
    .PARAMETER Content
    The content of the paragraph.
    
    .PARAMETER Text
    The text of the paragraph.
    
    .PARAMETER Color
    The font color of the paragraph.
    
    .EXAMPLE
    A simple paragraph.

    New-UDParagraph -Text 'Hello, world!'
    #>
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
function New-UDProgress {
    <#
    .SYNOPSIS
    Creates a progress dialog.
    
    .DESCRIPTION
    Creates a progress dialog. Progress dialogs can show both determinate and indeterminate progress. They can also be circular or linear. 
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER PercentComplete
    The percent complete for the progress.
    
    .PARAMETER BackgroundColor
    The background color.
    
    .PARAMETER ProgressColor
    The progress bar color. 
    
    .PARAMETER Circular
    Whether the progress is circular. 
    
    .PARAMETER Size
    The size of the progress.
    
    .EXAMPLE
    Creates a progress bar at 75%.

    New-UDProgress -PercentComplete 75
    #>
    [CmdletBinding(DefaultParameterSetName = "indeterminate")]
    param(
        [Parameter()]
        [string]$Id = [Guid]::NewGuid().ToString(),
        [Parameter(ParameterSetName = "determinate")]
        [ValidateRange(0, 100)]
        $PercentComplete,
        [Parameter(ParameterSetName = "indeterminate")]
        [Parameter(ParameterSetName = "determinate")]
        [UniversalDashboard.Models.DashboardColor]$BackgroundColor,
        [Parameter()]
        [Alias("Color")]
        [UniversalDashboard.Models.DashboardColor]$ProgressColor,
        [Parameter(ParameterSetName = 'circular')]
        [Switch]$Circular,
        [Parameter(ParameterSetName = 'circular')]
        [ValidateSet('small', 'medium', 'large')]
        [string]$Size
        )

        End {
            @{
                id = $Id
                assetId = $MUAssetId 
                isPlugin = $true 
                type = "mu-progress"
          
                variant = $PSCmdlet.ParameterSetName
                percentComplete = $PercentComplete
                backgroundColor = $BackgroundColor.HtmlColor
                progressColor = $ProgressColor.HtmlColor
                circular = $Circular.IsPresent
                color = $Color
                size = $Size
            }          
        }


}
function New-UDRadioGroup {
    <#
    .SYNOPSIS
    Creates a group of radio buttons.
    
    .DESCRIPTION
    Creates a group of radio buttons. Within a group, only a single radio will be able to be selected.
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER Label
    The label to show for this radio group. 
    
    .PARAMETER Children
    The radio buttons to include within this group. 
    
    .PARAMETER OnChange
    A script block to call when the radio group selection changes. The $EventData variable will include the value of the radio that is selected. 
    
    .PARAMETER Value
    The selected value for this radio group.
    
    .EXAMPLE
    Creates a radio group that shows a toast message when a radio is selected. 

    New-UDRadioGroup -Label 'group' -Id 'onChangeRadio' -Children {
        New-UDRadio -Value 'Adam' -Label 'Adam'  -Id 'adamOnChange'
        New-UDRadio -Value 'Alon' -Label 'Alon' -Id 'alonOnChange'
        New-UDRadio -Value 'Lee' -Label 'Lee' -Id 'leeOnChange'
    } -OnChange { 
        Show-UDToast $EventData 
    }
    #>
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter()]
        [String]$Label,
        [Parameter()]
        [Alias("Content")]
        [ScriptBlock]$Children,
        [Parameter()]
        [Endpoint]$OnChange,
        [Parameter()]
        [string]$Value,
        [Parameter()]
        [string]$ClassName
    )

    if ($OnChange) {
        $OnChange.Register($Id, $PSCmdlet)
    }

    @{
        assetId   = $MUAssetId 
        id        = $Id 
        isPlugin  = $true 
        type      = 'mu-radiogroup'

        onChange  = $OnChange 
        value     = $Value 
        label     = $Label 
        children  = & $Children
        className = $ClassName
    }
}

function New-UDRadio {
    <#
    .SYNOPSIS
    Creates a radio. 
    
    .DESCRIPTION
    Creates a radio. Radios should be included within a New-UDRadioGroup.
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER Label
    The label to show next to the radio.
    
    .PARAMETER Disabled
    Whether the radio is disabled. 
    
    .PARAMETER Value
    The value of the radio. 
    
    .PARAMETER LabelPlacement
    The position to place the label in relation to the radio. 
    
    .PARAMETER Color
    The theme color to apply to this radio

    .EXAMPLE
    Creates a radio group that shows a toast message when a radio is selected. 

    New-UDRadioGroup -Label 'group' -Id 'onChangeRadio' -Children {
        New-UDRadio -Value 'Adam' -Label 'Adam'  -Id 'adamOnChange'
        New-UDRadio -Value 'Alon' -Label 'Alon' -Id 'alonOnChange'
        New-UDRadio -Value 'Lee' -Label 'Lee' -Id 'leeOnChange'
    } -OnChange { 
        Show-UDToast $EventData 
    }
    #>
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter()]
        [String]$Label,
        [Parameter()]
        [Switch]$Disabled,
        [Parameter()]
        [string]$Value,
        [Parameter()]
        [ValidateSet('start', 'end')]
        [string]$LabelPlacement = 'end',
        [Parameter ()]
        [ValidateSet('default', 'primary', 'secondary')]
        [string]$Color = 'default'
    )

    @{
        assetId        = $MUAssetId 
        id             = $Id 
        isPlugin       = $true 
        type           = 'mu-radio'

        label          = $Label 
        disabled       = $Disabled.IsPresent 
        value          = $value 
        labelPlacement = $LabelPlacement
        color          = $Color.ToLower()
    }
}
function New-UDSelect {
    <#
    .SYNOPSIS
    Creates a new select.
    
    .DESCRIPTION
    Creates a new select. Selects can have multiple options and option groups. Selects can also be multi-select. 
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER Option
    Options to include in this select. This can be either New-UDSelectOption or New-UDSelectGroup.
    
    .PARAMETER Label
    The label to show with the select. 
    
    .PARAMETER OnChange
    A script block that is executed when the script changes. $EventData will be an array of the selected values. 
    
    .PARAMETER DefaultValue
    The default selected value.
    
    .PARAMETER Disabled
    Whether this select is disabled. 
    
    .PARAMETER Multiple
    Whether you can select multiple values. 

    .PARAMETER FullWidth
    Stretch the select to the full width of the parent component.
    
    .EXAMPLE
    Creates a new select with 3 options and shows a toast when one is selected. 

    New-UDSelect -Label '1-3' -Id 'select' -Option {
        New-UDSelectOption -Name "One" -Value 1
        New-UDSelectOption -Name "Two" -Value 2
        New-UDSelectOption -Name "Three" -Value 3
    } -DefaultValue 2 -OnChange { 
        Show-UDToast -Mesage $EventData 
    }
    #>
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter()]
        [ScriptBlock]$Option,
        [Parameter()]
        [String]$Label,
        [Parameter()]
        [Endpoint]$OnChange,
        [Parameter()]
        $DefaultValue,
        [Parameter()]
        [Switch]$Disabled,
        [Parameter()]
        [Switch]$Multiple,
        [Parameter()]
        [string]$MaxWidth,
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [switch]$FullWidth
    )

    if ($OnChange) {
        $OnChange.Register($Id + "onChange", $PSCmdlet)
    }

    @{
        type         = 'mu-select'
        assetId      = $MUAssetId
        isPlugin     = $true 

        id           = $id 
        options      = $Option.Invoke()
        label        = $Label
        onChange     = $OnChange
        defaultValue = $DefaultValue
        disabled     = $Disabled.IsPresent
        multiple     = $Multiple.IsPresent
        maxWidth     = $MaxWidth
        className    = $ClassName
        fullWidth    = $FullWidth.IsPresent
    }
}

function New-UDSelectGroup {
    <#
    .SYNOPSIS
    Creates a new select group.
    
    .DESCRIPTION
    Creates a new select group. This cmdlet is to be used with New-UDSelect. Pass the result of this cmdlet to the -Option parameter to create a new select group. 
    
    .PARAMETER Option
    Options to include in this group.
    
    .PARAMETER Name
    The name of the group. This will be displayed in the select. 
    
    .EXAMPLE
    Creates a new select with two select groups. 

    New-UDSelect -Id 'selectGrouped' -Option {
        New-UDSelectGroup -Name "Category 1" -Option {
            New-UDSelectOption -Name "One" -Value 1
            New-UDSelectOption -Name "Two" -Value 2
            New-UDSelectOption -Name "Three" -Value 3
        }
        New-UDSelectGroup -Name "Category 2" -Option {
            New-UDSelectOption -Name "Four" -Value 4
            New-UDSelectOption -Name "Five" -Value 5
            New-UDSelectOption -Name "Six" -Value 6
        }
    } -DefaultValue 2 -OnChange { Show-UDToast -Message $EventData }
    
    #>
    param(
        [Parameter(Mandatory = $true)]
        [ScriptBlock]$Option,
        [Parameter(Mandatory = $true)]
        [String]$Name
    )

    @{
        type    = 'mu-select-group'
        name    = $Name 
        options = $Option.Invoke()
    }

}

function New-UDSelectOption {
    <#
    .SYNOPSIS
    Creates a new select option.
    
    .DESCRIPTION
    Creates a new select option. This cmdlet is to be used with New-UDSelect. Pass the result of this cmdlet to the -Option parameter to create a new select group.
    
    .PARAMETER Name
    The name of the select option. This will be shown in the select. 
    
    .PARAMETER Value
    Thevalue of the select option. This will be passed back to New-UDForm -OnSubmit or the $EventData for -OnChange on New-UDSelect. 
    
    .EXAMPLE
    Creates a new select with three options. 

    New-UDSelect -Label '1-3' -Id 'select' -Option {
        New-UDSelectOption -Name "One" -Value 1
        New-UDSelectOption -Name "Two" -Value 2
        New-UDSelectOption -Name "Three" -Value 3
    } -DefaultValue 2 -OnChange { 
        $EventData = $Body | ConvertFrom-Json
        Set-TestData $EventData 
    }

    #>
    param(
        [Parameter(Mandatory = $true)]
        [String]$Name,
        [Parameter(Mandatory = $true)]
        [String]$Value
    )

    @{
        type  = 'mu-select-option'
        name  = $Name 
        value = $Value 
    }
}

function New-UDSkeleton {
    <#
    .SYNOPSIS
    Creates a loading skeleton
    
    .DESCRIPTION
    Creates a loading skeleton
    
    .PARAMETER Id
    The ID of this component.
    
    .PARAMETER Variant
    The type of skeleton to display. Valid values are "text", "rect", "circle"
    
    .PARAMETER Height
    The static height of the skeleton.
    
    .PARAMETER Width
    The static width of the skeleton.
    
    .PARAMETER Animation
    The type of animation to use for the skeleton. Valid values are: "wave", "disabled", "pulsate"
    #>
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter()]
        [ValidateSet("text", "rect", "circle")]
        [string]$Variant = 'text',
        [Parameter()]
        [int]$Height,
        [Parameter()]
        [int]$Width,
        [Parameter()]
        [ValidateSet("wave", "disabled", "pulsate")]
        [string]$Animation = "pulsate",
        [Parameter()]
        [string]$ClassName
    )

    @{
        type      = "mu-skeleton"
        id        = $Id 
        isPlugin  = $true
        assetId   = $MUAssetId

        variant   = $Variant.ToLower()
        height    = $Height
        width     = $Width 
        animation = $Animation.ToLower()
        className = $ClassName
    }
}
function New-UDSlider {
    <#
    .SYNOPSIS
    A slider component.
    
    .DESCRIPTION
    A slider component. Sliders can be used to define values within a range or selecting a range of values. You can use this component with New-UDForm.
    
    .PARAMETER Id
    The ID of this component.
    
    .PARAMETER Value
    The value of the slider.
    
    .PARAMETER Minimum
    The minimum value of the slider.
    
    .PARAMETER Maximum
    The maximum value of the slider.
    
    .PARAMETER Disabled
    Whether the slider is disabled.
    
    .PARAMETER Marks
    Whether to display marks on the slider.
    
    .PARAMETER OnChange
    A script block that is invoked when the slider value changes. You can access the slider value within the script block by referencing the $EventData variable.
    
    .PARAMETER Orientation
    The orientation of the slider.
    
    .PARAMETER Step
    Step size of the slider. 
    
    .PARAMETER ValueLabelDisplay
    Whether to display value labels.
    
    .EXAMPLE
    An example

    New-UDSlider 
    
    .NOTES
    General notes
    #>
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter()]
        [int[]]$Value = 0, 
        [Parameter()]
        [int]$Minimum = 0, 
        [Parameter()]
        [int]$Maximum = 100,
        [Parameter()]
        [Switch]$Disabled, 
        [Parameter()]
        [Switch]$Marks, 
        [Parameter()]
        [Endpoint]$OnChange,
        [Parameter()]
        [ValidateSet('horizontal', 'vertical')]
        [string]$Orientation = 'horizontal',
        [Parameter()]
        [int]$Step = 1,
        [Parameter()]
        [ValidateSet('on', 'auto', 'off')]
        [string]$ValueLabelDisplay = 'auto',
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [ValidateSet("primary", 'secondary')]
        [string]$Color = 'primary'
    )

    if ($OnChange) {
        $OnChange.Register($Id, $PSCmdlet)
    }

    if (-not $PSCmdlet.MyInvocation.BoundParameters.ContainsKey("Value")) {
        $Value = $Minimum
    }

    if ($Value -lt $Minimum) {
        throw "Value cannot be less than minimum"
    }

    if ($Value -gt $Maximum) {
        throw "Value cannot be more than maximum"
    }

    $Val = $Value 
    if ($Value.Length -eq 1) {
        $Val = $Value | Select-Object -First 1
    }

    @{
        type              = 'mu-slider'
        isPlugin          = $true 
        assetId           = $MUAssetId 
        id                = $Id 

        value             = $val 
        min               = $Minimum
        max               = $Maximum
        disabled          = $Disabled.IsPresent
        marks             = $Marks.IsPresent
        onChange          = $OnChange 
        orientation       = $Orientation 
        step              = $Step
        valueLabelDisplay = $ValueLabelDisplay
        className         = $ClassName
        color             = $Color.ToLower()
    }
}
function New-UDSpan {
    <#
    .SYNOPSIS
    A span component.
    
    .DESCRIPTION
    A span component. Defines a span HTML tag.
    
    .PARAMETER Id
    The ID of this component.
    
    .PARAMETER Content
    The content of the span.
    
    .EXAMPLE
    An example

    New-UDSpan -Content {
        New-UDTypography -Text 'Text'
    }
    #>
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

    try {
        $Children = & $Content
    }
    catch {
        $Children = New-UDError -Message $_
    }

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
function New-UDStepper {
    <#
    .SYNOPSIS
    Creates a new stepper component.
    
    .DESCRIPTION
    Creates a new stepper component. Steppers can be used as multi-step forms or to display information in a stepped manner.
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER ActiveStep
    Sets the active step. This should be the index of the step. 
    
    .PARAMETER Children
    The steps for this stepper. Use New-UDStep to create new steps. 
    
    .PARAMETER NonLinear
    Allows the user to progress to steps out of order. 
    
    .PARAMETER AlternativeLabel
    Places the step label under the step number. 
    
    .PARAMETER OnFinish
    A script block that is executed when the stepper is finished. 

    .PARAMETER Orientation
    Sets the orientation of the stepper.

    .PARAMETER NextButtonText
    The text to display in the next button.

    .PARAMETER BackButtonText
    The text to display in the back button.

    .PARAMETER FinsihButtonText
    The text to display in the finish button.
    
    .EXAMPLE
    Creates a stepper that reports the stepper context with each step. 

    New-UDStepper -Id 'stepper' -Steps {
        New-UDStep -OnLoad {
            New-UDElement -tag 'div' -Content { "Step 1" }
            New-UDTextbox -Id 'txtStep1' 
        } -Label "Step 1"
        New-UDStep -OnLoad {
            New-UDElement -tag 'div' -Content { "Step 2" }
            New-UDElement -tag 'div' -Content { "Previous data: $Body" }
            New-UDTextbox -Id 'txtStep2' 
        } -Label "Step 2"
        New-UDStep -OnLoad {
            New-UDElement -tag 'div' -Content { "Step 3" }
            New-UDElement -tag 'div' -Content { "Previous data: $Body" }
            New-UDTextbox -Id 'txtStep3' 
        } -Label "Step 3"
    } -OnFinish {
        New-UDTypography -Text 'Nice! You did it!' -Variant h3
        New-UDElement -Tag 'div' -Id 'result' -Content {$Body}
    }

    #>
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter()]
        [int]$ActiveStep = 0,
        [Alias("Steps")]
        [Parameter(Mandatory)]
        [ScriptBlock]$Children,
        [Parameter()]
        [Switch]$NonLinear,
        [Parameter()]
        [Switch]$AlternativeLabel,
        [Parameter(Mandatory)]
        [Endpoint]$OnFinish,
        # [Parameter()]
        # [Endpoint]$OnCompleteStep,
        [Parameter()]
        [Endpoint]$OnValidateStep,
        [Parameter()]
        [ValidateSet("vertical", "horizontal")]
        [string]$Orientation = "horizontal",
        [Parameter()]
        [string]$NextButtonText = "Next",
        [Parameter()]
        [string]$BackButtonText = "Back",
        [Parameter()]
        [string]$FinishButtonText = "Finish",
        [Parameter()]
        [string]$ClassName
    )

    $OnFinish.Register($Id + "onFinish", $PSCmdlet)

    if ($OnCompleteStep) {
        $OnCompleteStep.Register($Id + "onComplete", $PSCmdlet)
    }

    if ($OnValidateStep) {
        $OnValidateStep.Register($Id + "onValidate", $PSCmdlet)
    }

    $c = New-UDErrorBoundary -Content $Children

    @{
        id               = $id 
        isPlugin         = $true 
        type             = 'mu-stepper'
        assetId          = $MUAssetId 

        children         = $c
        nonLinear        = $NonLinear.IsPresent 
        alternativeLabel = $AlternativeLabel.IsPresent
        onFinish         = $OnFinish
        activeStep       = $ActiveStep
        onValidateStep   = $OnValidateStep 
        onCompleteStep   = $OnCompleteStep
        orientation      = $Orientation.ToLower()
        nextButtonText   = $NextButtonText
        finishButtonText = $FinishButtonText
        backButtonText   = $BackButtonText
        className        = $ClassName
    }
}

function New-UDStep {
    <#
    .SYNOPSIS
    Creates a new step for a stepper. 
    
    .DESCRIPTION
    Creates a new step for a stepper. Add to the Children (alias Steps) parameter for New-UDStepper. 
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER OnLoad
    The script block that is executed when the step is loaded. The script block will receive the $Body parameter which contains JSON for the current state of the stepper. If you are using form controls, their data will be availalble in the $Body.Context property. 
    
    .PARAMETER Label
    A label for this step. 
    
    .PARAMETER Optional
    Whether this step is optional.
    
    .EXAMPLE
    Creates a stepper that reports the stepper context with each step. 

    New-UDStepper -Id 'stepper' -Steps {
        New-UDStep -OnLoad {
            New-UDElement -tag 'div' -Content { "Step 1" }
            New-UDTextbox -Id 'txtStep1' 
        } -Label "Step 1"
        New-UDStep -OnLoad {
            New-UDElement -tag 'div' -Content { "Step 2" }
            New-UDElement -tag 'div' -Content { "Previous data: $Body" }
            New-UDTextbox -Id 'txtStep2' 
        } -Label "Step 2"
        New-UDStep -OnLoad {
            New-UDElement -tag 'div' -Content { "Step 3" }
            New-UDElement -tag 'div' -Content { "Previous data: $Body" }
            New-UDTextbox -Id 'txtStep3' 
        } -Label "Step 3"
    } -OnFinish {
        New-UDTypography -Text 'Nice! You did it!' -Variant h3
        New-UDElement -Tag 'div' -Id 'result' -Content {$Body}
    }
    
    #>
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Alias("Content")]
        [Parameter(Mandatory)]
        [Endpoint]$OnLoad,
        [Parameter()]
        [string]$Label,
        [Parameter()]
        [Switch]$Optional
    )

    $OnLoad.Register($Id + "onLoad", $PSCmdlet)

    @{
        id       = $id 
        isPlugin = $true 
        type     = 'mu-stepper-step'
        assetId  = $MUAssetId 

        onLoad   = $OnLoad
        label    = $Label
        optional = $Optional.IsPresent 
    }
}


function New-UDSwitch {
    <#
    .SYNOPSIS
    Creates a new switch. 
    
    .DESCRIPTION
    Creates a new switch. A switch behaves like a checkbox but looks a little different. 
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER Disabled
    Whether this switch is disabled. 
    
    .PARAMETER OnChange
    A script block that is called when this switch changes. The $EventData variable will contain the checked value ($true\$false). 
    
    .PARAMETER Checked
    Whether this switch is checked. 

    .PARAMETER Color
    The theme color to apply to this switch.

    .PARAMETER Label
    The label to display next to the switch

    .PARAMETER CheckedLabel
    The label to display for when the switch is checked

    .PARAMETER UncheckedLabel
    The label to display for when the switch is unchecked
    
    .EXAMPLE
    Creates a switch that shows a toast when changed. 
    
    New-UDSwitch -Id 'switchOnChange' -OnChange { 
        Show-UDToast -Message $EventData
    }
    #>
    param(
        [Parameter()]
        [String]$Id = ([Guid]::NewGuid()),
        [Parameter()]
        [Switch]$Disabled,
        [Parameter()]
        [Endpoint]$OnChange,
        [Parameter()]
        [bool]$Checked,
        [Parameter()]
        [string]$ClassName,
        [Parameter ()]
        [ValidateSet('default', 'primary', 'secondary')]
        [string]$Color = 'default',
        [Parameter()]
        [string]$Label,
        [Parameter()]
        [string]$CheckedLabel,
        [Parameter()]
        [string]$UncheckedLabel
    )

    if ($OnChange) {
        $OnChange.Register($Id, $PSCmdlet)
    }

    @{
        type           = 'mu-switch'
        id             = $Id 
        assetId        = $MUAssetId 
        isPlugin       = $true 

        disabled       = $Disabled.IsPresent 
        checked        = $Checked 
        onChange       = $onChange
        className      = $ClassName
        color          = $Color.ToLower()
        label          = $Label
        checkedLabel   = $CheckedLabel
        uncheckedLabel = $UncheckedLabel
    }
}
function ConvertTo-FlatObject {
    param(
        [Parameter(ValueFromPipeline = $true)]
        $InputObject
    )

    Process {
        $OutputObject = @{ }

        if ($null -eq $InputObject) {
            return
        }

        if ($InputObject -is [Hashtable]) {
            foreach ($key in $InputObject.Keys) {
                if ($key -and $key.StartsWith('rendered')) { 
                    $OutputObject[$key] = $InputObject[$key]
                }
                else {
                    $Value = $InputObject[$key]
                    if ($Value -is [DateTime]) {
                        $OutputObject[$key] = $Value
                    }
                    else {
                        $OutputObject[$key] = if ($null -ne $Value) { $Value.ToString() } else { "" } 
                    }
                    
                } 
            }
            [PSCustomObject]$OutputObject
        }
        else {
            $InputObject | Get-Member -MemberType Properties | ForEach-Object {
                if ($_.Name -and $_.Name.StartsWith('rendered')) { 
                    $OutputObject[$_.Name] = $InputObject."$($_.Name)"
                }
                else {
                    $Value = $InputObject."$($_.Name)"
                    if ($Value -is [DateTime]) {
                        $OutputObject[$_.Name] = $Value
                    }
                    else {
                        $OutputObject[$_.Name] = if ($null -ne $Value) { $Value.ToString() } else { "" } 
                    }
                } 
            }
            [PSCustomObject]$OutputObject
        }
    }
}

function New-UDTable {
    <#
    .SYNOPSIS
    Creates a table. 
    
    .DESCRIPTION
    Creates a table. Tables are used to show both static and dynamic data. You can define columns and data to show within the table. The columns can be used to render custom components based on row data. You can also enable paging, filtering, sorting and even server-side processing.
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER Title
    The title to show at the top of the table's card. 
    
    .PARAMETER Data
    The data to put into the table. 
    
    .PARAMETER LoadData
    When using dynamic tables, this script block is called. The $Body parameter will contain a hashtable the following options: 
 
    filters: @()
    orderBy: string
    orderDirection: string
    page: int
    pageSize: int
    properties: @()
    search: string
    totalCount: int

    You can use these values to perform server-side processing, like SQL queries, to improve the performance of large grids. 

    After processing the data with these values, output the data via Out-UDTableData.  
            
    .PARAMETER Columns
    Defines the columns to show within the table. Use New-UDTableColumn to define these columns. If this parameter isn't specified, the properties of the data that you pass in will become the columns.
    
    .PARAMETER Sort
    Whether sorting is enabled in the table. 
    
    .PARAMETER Filter
    Whether filtering is enabled in the table. 
    
    .PARAMETER Search
    Whether search is enabled in the table. 
    
    .PARAMETER Export
    Whether exporting is enabled within the table. 

    .PARAMETER Icon
    Sets an icon next to the title. Use New-UDIcon to create the icon.

    .PARAMETER OnRowSelection
    A script block to call when a row is selected. $EventData will contain the selected rows. 

    .PARAMETER ShowSort
    Whether to show sort controls on columns

    .PARAMETER ShowFilter
    Whether to show filter controls on columns

    .PARAMETER ShowSearch
    Whether to show full table search

    .PARAMETER Dense
    Reduces the white-space used within the table. 

    .PARAMETER StickyHeader
    Makes the header sticky.

    .PARAMETER PageSize
    The default page size. 

    .PARAMETER PageSizeOptions
    An array of available page size options. 

    .PARAMETER ShowSelection
    Whether to allow selection within the table. 

    .PARAMETER ShowPagination
    Whether to show pagination controls.

    .PARAMETER Size
    The size of the table. Defaults to medium. Valid values are medium and small.

    .PARAMETER TextOption
    Customizations to standard text within the table. Use New-UDTextOption to create the text options.

    .PARAMETER ExportOption
    An array of export options. 

    .PARAMETER OnExport
    A script block used to customize how the export is performed.

    .PARAMETER DisablePageSizeAll 
    Removes the All option from page size options.

    .PARAMETER DefaultSortDirection
    The default sort direction.

    .PARAMETER HideToggleAllRowsSelected
    Hides the toggle all rows selected button.

    .PARAMETER DisableMultiSelect
    Disables multi-select.

    .PARAMETER DisableSortRemove
    Removes the sort option for unsorted columns. Columns will always be ascending or descending. 

    .PARAMETER ClassName
    A CSS class to apply to the table.

    .PARAMETER PaginationLocation
    Where to show the pagination controls. Valid values are top, bottom, or both. Defaults to bottom.
    
    .EXAMPLE
    Creates a static table whether the columns of the table are the properties of the data specified. 

    $Data = @(
        @{Dessert = 'Frozen yoghurt'; Calories = 159; Fat = 6.0; Carbs = 24; Protein = 4.0}
        @{Dessert = 'Ice cream sandwich'; Calories = 159; Fat = 6.0; Carbs = 24; Protein = 4.0}
        @{Dessert = 'Eclair'; Calories = 159; Fat = 6.0; Carbs = 24; Protein = 4.0}
        @{Dessert = 'Cupcake'; Calories = 159; Fat = 6.0; Carbs = 24; Protein = 4.0}
        @{Dessert = 'Gingerbread'; Calories = 159; Fat = 6.0; Carbs = 24; Protein = 4.0}
    ) 

    New-UDTable -Id 'defaultTable' -Data $Data

    .EXAMPLE 
    Creates a table where there are custom columns defined for that table. 

     $Columns = @(
        New-UDTableColumn -Property Dessert -Title "A Dessert"
        New-UDTableColumn -Property Calories -Title Calories 
        New-UDTableColumn -Property Fat -Title Fat 
        New-UDTableColumn -Property Carbs -Title Carbs 
        New-UDTableColumn -Property Protein -Title Protein 
    )

    New-UDTable -Id 'customColumnsTable' -Data $Data -Columns $Columns

    .EXAMPLE
    Creates a table where the table has custom rendering for one of the columns and an export button. 

    $Columns = @(
        New-UDTableColumn -Property Dessert -Title Dessert -Render { 
            $Item = $Body | ConvertFrom-Json 
            New-UDButton -Id "btn$($Item.Dessert)" -Text "Click for Dessert!" -OnClick { Show-UDToast -Message $Item.Dessert } 
        }
        New-UDTableColumn -Property Calories -Title Calories 
        New-UDTableColumn -Property Fat -Title Fat 
        New-UDTableColumn -Property Carbs -Title Carbs 
        New-UDTableColumn -Property Protein -Title Protein 
    )

    New-UDTable -Id 'customColumnsTableRender' -Data $Data -Columns $Columns -Sort -Export

    .EXAMPLE
    Creates a table within a New-UDDynamic that refreshes automatically on an interval. 

    New-UDDynamic -Content {
        $DynamicData = @(
            @{Dessert = 'Frozen yoghurt'; Calories = (Get-Random); Fat = 6.0; Carbs = 24; Protein = 4.0}
            @{Dessert = 'Ice cream sandwich'; Calories = (Get-Random); Fat = 6.0; Carbs = 24; Protein = 4.0}
            @{Dessert = 'Eclair'; Calories = (Get-Random); Fat = 6.0; Carbs = 24; Protein = 4.0}
            @{Dessert = 'Cupcake'; Calories = (Get-Random); Fat = 6.0; Carbs = 24; Protein = 4.0}
            @{Dessert = 'Gingerbread'; Calories = (Get-Random); Fat = 6.0; Carbs = 24; Protein = 4.0}
        ) 

        New-UDTable -Id 'dynamicTable' -Data $DynamicData
    } -AutoRefresh -AutoRefreshInterval 2

    .EXAMPLE
    Creates a table that uses the LoadData script block to load data dynamically. 
    
    New-UDTable -Id 'loadDataTable' -Columns $Columns -LoadData {
    $Query = $Body | ConvertFrom-Json

    @(
        @{Dessert = 'Frozen yoghurt'; Calories = (Get-Random); Fat = 6.0; Carbs = 24; Protein = 4.0}
        @{Dessert = 'Ice cream sandwich'; Calories = (Get-Random); Fat = 6.0; Carbs = 24; Protein = 4.0}
        @{Dessert = 'Eclair'; Calories = (Get-Random); Fat = 6.0; Carbs = 24; Protein = 4.0}
        @{Dessert = 'Cupcake'; Calories = (Get-Random); Fat = 6.0; Carbs = 24; Protein = 4.0}
        @{Dessert = 'Gingerbread'; Calories = (Get-Random); Fat = 6.0; Carbs = 24; Protein = 4.0}
    ) | Out-UDTableData -Page 0 -TotalCount 5 -Properties $Query.Properties 
    
    .NOTES
    General notes
    #>
    [CmdletBinding()]
    param(
        [Parameter()]
        [string]$Id = [Guid]::NewGuid().ToString(),
        [Parameter()]
        [string]$Title = "",
        [Parameter(Mandatory, ParameterSetName = "Static")]
        [AllowEmptyCollection()]
        [AllowNull()]
        [object[]]$Data,
        [Parameter(Mandatory, ParameterSetName = "Dynamic")]
        [Endpoint]$LoadData,
        [Parameter(ParameterSetName = "Static")]
        [Parameter(Mandatory, ParameterSetName = "Dynamic")]
        [Hashtable[]]$Columns,
        [Parameter()]
        [Endpoint]$OnRowSelection,
        [Parameter()]
        [Alias("Sort")]
        [Switch]$ShowSort,
        [Parameter()]
        [Alias("Filter")]
        [Switch]$ShowFilter,
        [Parameter()]
        [Alias("Search")]
        [Switch]$ShowSearch,
        [Parameter()]
        [Switch]$Dense,
        [Parameter()]
        [Alias("Export")]
        [Switch]$ShowExport,
        [Parameter()]
        [Switch]$StickyHeader,
        [Parameter()]
        [int]$PageSize = 5,
        [Parameter()]
        [int[]]$PageSizeOptions = @(),
        [Parameter()]
        [ValidateSet("top", "bottom", "both")]
        [string]$PaginationLocation = "bottom",
        [Parameter()]
        [Alias("Select")]
        [Switch]$ShowSelection,
        [Parameter()]
        [Alias("Paging")]
        [Switch]$ShowPagination,
        [Parameter()]
        [ValidateSet("default", "checkbox", "none")]
        [string]$Padding = "default",
        [Parameter()]
        [ValidateSet("small", "medium")]
        [string]$Size = "medium",
        [Parameter()]
        [Hashtable]$TextOption = (New-UDTableTextOption),
        [Parameter()]
        [string[]]$ExportOption = @("XLSX", "PDF", "JSON", "CSV"),
        [Parameter()]
        [Endpoint]$OnExport,
        [Parameter()]
        [Switch]$DisablePageSizeAll,
        [Parameter()]
        [ValidateSet('ascending', 'descending')]
        [string]$DefaultSortDirection,
        [Parameter()]
        [Switch]$HideToggleAllRowsSelected,
        [Parameter()]
        [Switch]$DisableMultiSelect,
        [Parameter()]
        [Switch]$DisableSortRemove,
        [Parameter()]
        [Hashtable]$Icon,
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [Switch]$ShowRefresh,
        [Parameter()]
        [int]$MaxHeight 
    )

    Begin {
        function getDefaultSortColumn {
            param(
                [Parameter()]    
                [object[]]$Columns
            )
            $DefaultSortColumn = $Columns.Where( { $_.DefaultSortColumn })
            $DefaultSortColumn.field
        }
    }
    Process {

        if ($OnExport) {
            $OnExport.Register($Id + 'Export', $PSCmdlet)
        }

        if (($null -eq $Columns) -and ($null -ne $Data)) {
            $item = $Data | Select-Object -First 1 | ConvertTo-FlatObject
    
            if ($item -is [Hashtable]) {
                $Columns = foreach ($member in $item.Keys) {
                    if ($ShowSearch) {
                        New-UDTableColumn -Property $member -IncludeInSearch
                    }
                    elseif ($ShowExport) {
                        New-UDTableColumn -Property $member -IncludeInExport
                    }
                    elseif ($ShowSearch -and $ShowExport) {
                        New-UDTableColumn -Property $member -IncludeInExport -IncludeInSearch
                    }
                    else {
                        New-UDTableColumn -Property $member
                    }
                }
                
            }
            else {
                $Columns = foreach ($member in $item.PSObject.Properties) {
                    if ($ShowSearch) {
                        New-UDTableColumn -Property $member.Name -IncludeInSearch
                    }
                    elseif ($ShowExport) {
                        New-UDTableColumn -Property $member.Name -IncludeInExport
                    }
                    elseif ($ShowSearch -and $ShowExport) {
                        New-UDTableColumn -Property $member.Name -IncludeInExport -IncludeInSearch
                    }
                    else {
                        New-UDTableColumn -Property $member.Name
                    }
                }
                
            }
        }

        if ($LoadData) {
            $LoadData.Register($Id, $PSCmdlet, @{ "TableColumns" = $Columns })
        }
            
        if ($OnRowSelection) {
            $OnRowSelection.Register($Id + 'OnRowSelection', $PSCmdlet)
        }        
        
        if ($Columns) {
            $RenderedColumns = $Columns.Where( { $null -ne $_.Render })
            if ($Data.Count -ge 1) {
                foreach ($Item in $Data) {
                    foreach ($Column in $RenderedColumns) {
                        $vars = [System.Collections.Generic.List[PSVariable]]::new()
                        $null = $vars.Add((New-Variable -Name EventData -Value $Item -Force -PassThru))
                        $RenderedData = $Column.Render.InvokeWithContext(@{}, $vars)
                        if (-not $RenderedData) {
                            $RenderedData = ""
                        }

                        if ($Item -isnot [hashtable]) {
                            Add-Member -InputObject $Item -MemberType NoteProperty -Name "rendered$($Column.field)" -Value $RenderedData -Force
                        }
                        else {
                            $Item["rendered$($Column.field)"] = $RenderedData
                        }

                    }
                }
            }
        }

    }

    End {

        $defaultSortColumn = getDefaultSortColumn($Columns)
        if ($defaultSortColumn -and -not $DefaultSortDirection) {
            $DefaultSortDirection = 'ascending'
        }

        if ($Data) { 
            $Data = [Array]($Data | ConvertTo-FlatObject) 
            if ($Data -isnot [Array]) {
                $Data = @($Data)
            }
        }
        else {
            $Data = @()
        }

        @{
            id                        = $Id 
            assetId                   = $MUAssetId 
            isPlugin                  = $true 
            type                      = "mu-table"
    
            title                     = $Title
            columns                   = $Columns
            defaultSortColumn         = $defaultSortColumn
            data                      = $Data
            showSort                  = $ShowSort.IsPresent
            showFilter                = $ShowFilter.IsPresent
            showSearch                = $ShowSearch.IsPresent
            showExport                = $ShowExport.IsPresent 
            showSelection             = $ShowSelection.IsPresent 
            showPagination            = $ShowPagination.IsPresent
            isStickyHeader            = $StickyHeader.IsPresent
            isDense                   = $Dense.IsPresent
            loadData                  = $LoadData
            onRowSelection            = $OnRowSelection
            userPageSize              = $PageSize
            userPageSizeOptions       = if ($PageSizeOptions.Count -gt 0) { $PageSizeOptions }else { @(5, 10, 20, 50) }
            padding                   = $Padding.ToLower()
            size                      = $Size
            textOption                = $TextOption
            exportOption              = $ExportOption | ForEach-Object { $_.ToUpper() }
            onExport                  = $OnExport
            disablePageSizeAll        = $DisablePageSizeAll.IsPresent
            defaultSortDirection      = $DefaultSortDirection.ToLower()
            hideToggleAllRowsSelected = $HideToggleAllRowsSelected.IsPresent
            disableMultiSelect        = $DisableMultiSelect.IsPresent
            disableSortRemove         = $DisableSortRemove.IsPresent
            icon                      = $Icon
            className                 = $ClassName
            paginationLocation        = $PaginationLocation.ToLower()
            showRefresh               = $ShowRefresh.IsPresent
            maxHeight                 = if ($MaxHeight -eq 0) { $null } else { $MaxHeight }
        }
    }
}

function New-UDTableTextOption {
    <#
    .SYNOPSIS
    Creates a hashtable to set the text options of a table.
    
    .DESCRIPTION
    Creates a hashtable to set the text options of a table.
    
    .PARAMETER ExportAllCsv
    Overrides the Export All to CSV text.
    
    .PARAMETER ExportCurrentViewCsv
    Overrides the Export Current View as CSV text.
    
    .PARAMETER ExportAllXLSX
    Overrides the Export All to XLSX text.
    
    .PARAMETER ExportCurrentViewXLSX
    Overrides the Export Current View as XLSX text.
    
    .PARAMETER ExportAllPDF
    Overrides the Export All to PDF text.
    
    .PARAMETER ExportCurrentViewPDF
    Overrides the Export Current View as PDF text.
    
    .PARAMETER ExportAllJson
    Overrides the Export All to JSON text.
    
    .PARAMETER ExportCurrentViewJson
    Overrides the Export Current View as JSON text.
    
    .PARAMETER Search
    Overrides the Search text. You can use {0} to use as a place holder for the number of rows.
    
    .PARAMETER FilterSearch
    Overrides the column filter text. You can use {0} to use as a place holder for the number of rows.
    
    .EXAMPLE
    $Options = New-UDTableTextOption -Search "Filter all the rows"
    New-UDTable -Data $Data -TextOption $Ootions
    
    .NOTES
    General notes
    #>
    param(
        [Parameter()]
        [string]$ExportAllCsv = "Export all as CSV",
        [Parameter()]
        [string]$ExportCurrentViewCsv = "Export Current View as CSV",
        [Parameter()]
        [string]$ExportAllXLSX = "Export all as XLSX",
        [Parameter()]
        [string]$ExportCurrentViewXLSX = "Export Current View as XLSX",
        [Parameter()]
        [string]$ExportAllPDF = "Export all as PDF",
        [Parameter()]
        [string]$ExportCurrentViewPDF = "Export Current View as PDF",
        [Parameter()]
        [string]$ExportAllJson = "Export all as JSON",
        [Parameter()]
        [string]$ExportCurrentViewJson = "Export Current View as JSON",
        [Parameter()]
        [string]$ExportFileName = "File Name",
        [Parameter()]
        [string]$Search = "Search {0} records...",
        [Parameter()]
        [string]$FilterSearch = "Search {0} records...",
        [Parameter()]
        [string]$Export = ""
    )

    @{
        exportAllCsv          = $ExportAllCsv
        exportCurrentViewCsv  = $ExportCurrentViewCsv
        exportAllXlsx         = $ExportAllXLSX
        exportCurrentViewXlsx = $ExportCurrentViewXLSX
        exportAllPdf          = $ExportAllPDF
        exportCurrentViewPdf  = $ExportCurrentViewPDF
        exportAllJson         = $ExportAllJson
        exportCurrentViewJson = $ExportCurrentViewJson
        exportFileName        = $ExportFileName
        search                = $Search
        filterSearch          = $FilterSearch
        export                = $Export
    }
}

function New-UDTableColumn {
    <#
    .SYNOPSIS
    Defines a table column.
    
    .DESCRIPTION
    Defines a table column. Use this cmdlet in conjunction with New-UDTable's -Column property. Table columns can be used to control many aspects of the columns within a table. 
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER Property
    The property to select from the data. 
    
    .PARAMETER Title
    The title of the column to show at the top of the table. 
    
    .PARAMETER Render
    How to render this table. Use this parameter instead of property to render custom content within a column. The $Body variable will contain the current row being rendered. 
    
    .PARAMETER ShowSort
    Whether this column supports sorting.
    
    .PARAMETER ShowFilter
    Whether this column supports filtering.
    
    .PARAMETER Search
    Whether this column supports searching.

    .PARAMETER Hidden
    Includes a column in the table but does not show it. This is useful for columns that are used for filtering and exporting but are not meant to be displayed in the table.
    
    .PARAMETER FilterType
    The type of filter to use with this column. Valid values are "text", "select", "fuzzy", "slider", "range", "date", "number", 'autocomplete'

    .PARAMETER Style
    A hashtable of style attributes to apply to the column.

    .PARAMETER Width
    The width of this column in pixels.

    .PARAMETER IncludeInSearch
    Whether to include this column in the search.

    .PARAMETER IncludeInExport
    Whether to include this column in the export.

    .PARAMETER DefaultSortColumn
    Sets this column as the default sort column. 

    .PARAMETER Align
    The alignment of the column. Supported values are 'center', 'inherit', 'justify', 'left', 'right'.
    
    .PARAMETER Truncate
    Whether to truncate the text in this column. A -Width is required to use truncate. 

    .PARAMETER SortType
    Whether to sort this column as a string or datetime.


    .EXAMPLE
    See New-UDTable for examples. 
    #>
    param(
        [Parameter()]
        [string]$Id = [Guid]::NewGuid().ToString(),
        [Parameter(Mandatory)]
        [string]$Property, 
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [ScriptBlock]$Render,
        [Parameter()]
        [Alias("Sort")]
        [switch]$ShowSort,
        [Parameter()]
        [Alias("Filter")]
        [switch]$ShowFilter,
        [Parameter()]
        [ValidateSet("text", "select", "fuzzy", "slider", "range", "date", "number", 'autocomplete')]
        [string]$FilterType = "text",
        [Parameter()]
        [hashtable]$Style = @{ },
        [Parameter()]
        [int]$Width,
        [Parameter()]
        [Alias("Search")]
        [switch]$IncludeInSearch,
        [Parameter()]
        [Alias("Export")]
        [switch]$IncludeInExport,
        [Parameter()]
        [switch]$DefaultSortColumn,
        [Parameter()]
        [ValidateSet('center', 'inherit', 'justify', 'left', 'right')]
        [string]$Align = 'inherit',
        [Parameter()]
        [Switch]$Truncate,
        [Parameter()]
        [ValidateSet('basic', 'datetime', 'alphanumeric')]
        [string]$SortType = 'alphanumeric',
        [Parameter()]
        [Switch]$Hidden
    )

    if ($null -eq $Title -or $Title -eq '') {
        $Title = $Property
    }

    if ($Width -gt 0) {
        $style["maxWidth"] = $width
        $style["width"] = $width
    }

    if ($Truncate) {
        $style["whiteSpace"] = "nowrap"
        $style["overflow"] = "hidden"
        $style["textOverflow"] = "ellipsis"
    }

    @{
        id                  = $Id 
        field               = $Property.ToLower()
        title               = $Title 
        showSort            = $ShowSort.IsPresent 
        showFilter          = $ShowFilter.IsPresent
        filterType          = $FilterType.ToLower()
        includeInSearch     = $IncludeInSearch.IsPresent
        includeInExport     = $IncludeInExport.IsPresent
        isDefaultSortColumn = $DefaultSortColumn.IsPresent
        render              = $Render
        width               = $Width
        align               = $Align
        style               = $Style
        sortType            = $SortType
        hidden              = $Hidden.IsPresent

    }
}
function Out-UDTableData {
    <#
    .SYNOPSIS
    Formats data to be output from New-UDTable's -LoadData script block. 
    
    .DESCRIPTION
    Formats data to be output from New-UDTable's -LoadData script block. 
    
    .PARAMETER Data
    The data to return from LoadData. 
    
    .PARAMETER Page
    The current page we are on within the table. 
    
    .PARAMETER TotalCount
    The total count of items within the data set. 
    
    .PARAMETER Properties
    The properties that are currently passed from the table. You can return the array from the $EventData.Properties array. 
    
    .EXAMPLE
    See New-UDTable for examples. 
    #>
    param(
        [Parameter(ValueFromPipeline = $true, Mandatory)]
        [object]$Data,
        [Parameter(Mandatory)]
        [int]$Page,
        [Parameter(Mandatory)]
        [int]$TotalCount,
        [Parameter(Mandatory)]
        [Alias("Property")]
        [string[]]$Properties
    )

    Begin {
        $DataPage = @{
            data       = @() 
            page       = $Page 
            totalCount = $TotalCount
        }
    }

    Process {
        $item = @{ }
        foreach ($property in $Properties) {
            $RenderedColumn = $TableColumns.Where( { $_.field -eq $property -and $_.Render })
            if ($RenderedColumn) {
                $EventData = $Data
                $item["rendered" + $property] = & ([ScriptBlock]::Create($RenderedColumn.Render.ToString()))
            }

            $item[$property] = $Data.$property
        }
        $DataPage.data += $item
    }

    End {
        if ($DataPage.data) {
            $DataPage.data = [Array]($DataPage.data | ConvertTo-FlatObject)
            $DataPage
        }
    }
}
function New-UDTabs {
    <#
    .SYNOPSIS
    Creates a new set of tabs.
    
    .DESCRIPTION
    Creates a new set of tabs. Tabs can be used to show lots of content on a single page. 
    
    .PARAMETER Tabs
    The tabs to put within this container. 
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER RenderOnActive
    Whether to render the tabs when they are clicked. Is this value isn't present, all the tabs are rendered, even if they are not shown. 
    
    .PARAMETER Orientation
    The orientation of the tabs. Valid values are horizontal and vertical. 

    .PARAMETER Variant
    The variantion of tabs. Valid values are standard, fullWidth and scrollable. 

    .PARAMETER ScrollButtons
    The behavior of the scrollbuttons. Valid values are on, off, auto and desktop. On will enable scroll buttons no matter what. off will disable all scroll buttons. Auto will show scrollbuttons when necessary. Desktop will show scrollbuttons on medium and large screens. 
    
    .EXAMPLE
    Creates a basic set of tabs. 

    New-UDTabs -Tabs {
        New-UDTab -Text "Tab1" -Id 'Tab1' -Content {
            New-UDElement -Tag div -Id 'tab1Content' -Content { "Tab1Content"}
        }
        New-UDTab -Text "Tab2" -Id 'Tab2' -Content {
            New-UDElement -Tag div -Id 'tab2Content' -Content { "Tab2Content"}
        }
        New-UDTab -Text "Tab3" -Id 'Tab3' -Content {
            New-UDElement -Tag div -Id 'tab3Content' -Content { "Tab3Content"}
        }
    }

    .EXAMPLE
    Creates a set of tabs that only render when they are clicked. 

    New-UDTabs -RenderOnActive -Id 'DynamicTabs' -Tabs {
        New-UDTab -Text "Tab1" -Id 'DynamicTab1' -Dynamic -Content {
            New-UDElement -Tag div -Id 'DynamicTab1Content' -Content { Get-Date } 
        }
        New-UDTab -Text "Tab2" -Id 'DynamicTab2' -Dynamic -Content {
            New-UDElement -Tag div -Id 'DynamicTab2Content' -Content { Get-Date }
        }
        New-UDTab -Text "Tab3" -Id 'DynamicTab2' -Dynamic -Content {
            New-UDElement -Tag div -Id 'DynamicTab3Content' -Content { Get-Date }
        }
    }

    .EXAMPLE
    Creates a vertical set of tabs. 

    New-UDTabs -Id 'verticalTabs' -Orientation 'vertical' -Tabs {
        New-UDTab -Text "Tab1" -Content {
            New-UDElement -Tag div -Content { Get-Date } 
        }
        New-UDTab -Text "Tab2" -Content {
            New-UDElement -Tag div -Content { Get-Date } 
        }
        New-UDTab -Text "Tab3" -Content {
            New-UDElement -Tag div -Content { Get-Date } 
        }
    }
    #>
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
        [ScriptBlock]$Tabs,
        [Parameter()]
        [string]$Id = ([Guid]::NewGuid()).ToString(),
        [Parameter()]
        [Switch]$RenderOnActive,
        [Parameter()]
        [ValidateSet('horizontal', 'vertical')]
        [string]$Orientation = "horizontal",
        [Parameter()]
        [ValidateSet('fullWidth', 'scrollable', 'standard')]
        [string]$Variant = 'standard',
        [Parameter()]
        [ValidateSet('on', 'off', 'auto', 'desktop')]
        [string]$ScrollButtons = 'auto',
        [Parameter()]
        [switch]$Centered,
        [Parameter()]
        [string]$ClassName
    )

    End {

        $c = New-UDErrorBoundary -Content $Tabs

        @{
            isPlugin      = $true
            assetId       = $MUAssetId
            type          = "mu-tabs"
            tabs          = $c
            id            = $id
            renderOnClick = $RenderOnActive.IsPresent
            orientation   = $Orientation
            variant       = $Variant.ToLower()
            scrollButtons = $ScrollButtons.ToLower()
            centered      = $Centered.IsPresent
            className     = $ClassName
        }
    }
}

function New-UDTab {
    <#
    .SYNOPSIS
    Creates a new tab. 
    
    .DESCRIPTION
    Creates a new tab. Use New-UDTabs as a container for tabs. 
    
    .PARAMETER Text
    The text to display for this tab. 
    
    .PARAMETER Content
    The content to display when the tab is selected. 
    
    .PARAMETER Id
    The ID of this component. 
    
    .PARAMETER Dynamic
    Whether this tab is dynamic. Dynamic tabs won't render until they are displayed. 
    
    .PARAMETER Icon
    The Icon to display within the tab header.
    
    .PARAMETER Disabled
    Whether this tab is disabled. 
    #>
    [CmdletBinding()]
    param(
        [Parameter()]
        [string]$Text,
        [Parameter(Mandatory)]
        [ScriptBlock]$Content,
        [Parameter()]
        [string]$Id = ([Guid]::NewGuid()).ToString(),
        [Parameter()]
        [switch]$Dynamic,
        [Parameter()]
        [object]$Icon,
        [Parameter()]
        [switch]$Disabled
    )

    End {

        if ($null -ne $Content -and $Dynamic) {
            New-UDEndpoint -Id $Id -Endpoint $Content | Out-Null
        }

        $c = New-UDErrorBoundary -Content $Content

        @{
            isPlugin = $true
            assetId  = $MUAssetId
            type     = "mu-tab"
            label    = $Text
            icon     = $Icon
            content  = $c
            id       = $Id
            dynamic  = $Dynamic.IsPresent
            disabled = $Disabled.IsPresent
        }
    }
}
function New-UDTextbox {
    <#
    .SYNOPSIS
    Creates a textbox.
    
    .DESCRIPTION
    Creates a textbox. Textboxes can be used by themselves or within a New-UDForm.
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.

    .PARAMETER Label
    A label to show above this textbox.
    
    .PARAMETER Placeholder
    A placeholder to place within the text box. 
    
    .PARAMETER Value
    The current value of the textbox. 
    
    .PARAMETER Type
    The type of textbox. This can be values such as text, password or email. 
    
    .PARAMETER Disabled
    Whether this textbox is disabled. 
    
    .PARAMETER Icon
    The icon to show next to the textbox. Use New-UDIcon to create an icon. 
    
    .PARAMETER Autofocus
    Whether to autofocus this textbox. 

    .PARAMETER Mutliline
    Creates a multiline textbox

    .PARAMETER Rows
    The number of rows in a multiline textbox. 

    .PARAMETER RowsMax
    The maximum number of rows in a multiline textbox.

    .PARAMETER FullWidth
    Whether to make this textbox take up the full width of the parent control.

    .PARAMETER Mask
    The mask to apply over a textbox. 

    .PARAMETER Variant
    The variant of textbox. Valid values are "filled", "outlined", "standard"
    
    .EXAMPLE
    Creates a standard textbox. 

    New-UDTextbox -Label 'text' -Id 'txtLabel'

    .EXAMPLE 
    Creates a password textbox. 

    New-UDTextbox -Label 'password' -Id 'txtPassword' -Type 'password'
    #>
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
        [PSTypeName('UniversalDashboard.Icon')]$Icon,
        [Parameter()]
        [Switch]$Autofocus,
        [Parameter()]
        [Switch]$Multiline,
        [Parameter()]
        [int]$Rows = 1,
        [Parameter()]
        [int]$RowsMax = 9999,
        [Parameter()]
        [Switch]$FullWidth,
        [Parameter()]
        [string[]]$Mask,
        [Parameter()]
        [ValidateSet("filled", "outlined", "standard")]
        [string]$Variant = "standard",
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [Endpoint]$OnEnter
    )

    if ($OnEnter) {
        $OnEnter.Register($Id, $PSCmdlet)
    }

    @{
        id         = $id 
        assetId    = $MUAssetId 
        isPlugin   = $true 
        type       = "mu-textbox"

        label      = $Label
        helperText = $placeholder
        value      = $value 
        textType   = $type 
        disabled   = $Disabled.IsPresent 
        autoFocus  = $AutoFocus.IsPresent
        icon       = $icon
        multiline  = $Multiline.IsPresent
        rows       = $Rows 
        rowsMax    = $RowsMax
        fullWidth  = $FullWidth.IsPresent
        mask       = $Mask
        variant    = $Variant.ToLower()
        className  = $ClassName
        onEnter    = $OnEnter
    }
}


class ThemeColors {
    [string]$primary
    [string]$secondary
    [string]$background
    [string]$text
    [string]$muted

    ThemeColors() { 
    }

    ThemeColors([string]$primary, [string]$secondary) {
        $this.primary = $primary
        $this.secondary = $secondary
    }

    ThemeColors([string]$primary, [string]$secondary, [string]$background, [string]$text, [string]$muted) {
        $this.Primary = $Primary
        $this.Secondary = $Secondary
        $this.Background = $Background
        $this.Text = $Text
        $this.Muted = $Muted
    }

}

class ThemeColorModes {
    [ThemeColors]$Dark

    ThemeColorModes() {
    }

    ThemeColorModes([ThemeColors]$Dark) {
        $this.Dark = $Dark
    }
}

function New-UDTheme {
    [CmdletBinding()]
    param(
        [Parameter()]
        [string]$name,
        [Parameter()]
        [ThemeColors]$Colors,
        [Parameter()]
        [ThemeColorModes]$ColorModes,
        [Parameter()]
        [hashtable]$Variants
    )
    end {
        $theme = [ordered]@{
            name     = $Name
            colors   = if ($Colors) {
                $Colors 
            }
            else {
                [ThemeColors]::new() 
            }
            modes    = if ($ColorModes) {
                $ColorModes 
            }
            else {
                [ThemeColorModes]::new([ThemeColors]::new()) 
            }
            variants = $Variants
        }
        $Result = $theme | ConvertTo-Json -Depth 10 
        $Result
    }
}





function New-UDTimePicker {
    <#
    .SYNOPSIS
    Creates a time picker.
    
    .DESCRIPTION
    Creates a time picker. This component can be used stand alone or within New-UDForm. 
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER Label
    The label to show with the time picker.
    
    .PARAMETER OnChange
    A script block to call when the time is changed. The $EventData variable contains the currently selected time. 
    
    .PARAMETER Value
    The current value of the time picker.

    .PARAMETER Locale
    Change the language of the time picker.
    
    .EXAMPLE
    Creates a new time picker 

    New-UDTimePicker -Id 'timePicker'
    #>
    param(
        [Parameter()]
        [string]$Id = [Guid]::NewGuid().ToString(),
        [Parameter()]
        [string]$Label,
        [Parameter()]
        [Endpoint]$OnChange, 
        [Parameter()]
        [string]$Value,
        [Parameter()]
        [ValidateSet("en", "de", 'ru', 'fr')]
        [string]$Locale = "en",
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [Switch]$DisableAmPm
    )

    if ($OnChange) {
        $OnChange.Register($Id, $PSCmdlet)
    }

    @{
        id        = $Id 
        type      = 'mu-timepicker'
        asset     = $MUAssetId
        isPlugin  = $true 

        onChange  = $OnChange 
        value     = $Value
        label     = $Label
        locale    = $Locale.ToLower()
        className = $ClassName
        ampm      = -not ($DisableAmPm.IsPresent)
    }
}
function New-UDTooltip {
    <#
    .SYNOPSIS
    A tooltip component.
    
    .DESCRIPTION
    A tooltip component. Tooltips can be placed over an other component to display a popup when the user hovers over the nested component.
    
    .PARAMETER Id
    The ID of this component.
    
    .PARAMETER Place
    Where to place the tooltip.
    
    .PARAMETER Type
    The type of tooltip.
    
    .PARAMETER Effect
    An effect to apply to the tooltip.
    
    .PARAMETER TooltipContent
    Content to display within the tooltip.
    
    .PARAMETER Content
    Content that activates the tooltip when hovered.
    
    .EXAMPLE
    A simple tooltip.

    New-UDTooltip -Content {
        New-UDTypography -Text 'Hover me'
    } -TooltipContent {
        New-UDTypography -Text 'I'm a tooltip'
    }
    #>
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
        tooltipContent = New-UDErrorBoundary -Content $TooltipContent
        content = New-UDErrorBoundary -Content $Content
    }
}
function New-UDTransferList {
    <#
    .SYNOPSIS
    Creates a transfer list component.
    
    .DESCRIPTION
    A transfer list (or "shuttle") enables the user to move one or more list items between lists.
    
    .PARAMETER Id
    The ID of this component.
    
    .PARAMETER Item
    A list of items that can be transferred between lists. Use New-UDTransferListItem to create an item.
    
    .PARAMETER SelectedItem
    A list of selected items. Use the value of item to transfer items between lists.
    
    .PARAMETER OnChange
    A script block that is executed when the user changes the selected items.
    
    .EXAMPLE
    New-UDTransferList -Item {
        New-UDTransferListItem -Name 'test1' -Value 1
        New-UDTransferListItem -Name 'test2' -Value 2
        New-UDTransferListItem -Name 'test3' -Value 3
        New-UDTransferListItem -Name 'test4' -Value 4
        New-UDTransferListItem -Name 'test5' -Value 5
    } 

    Creates a basic transfer list.
    
    .EXAMPLE
    New-UDTransferList -Item {
        New-UDTransferListItem -Name 'test1' -Value 1
        New-UDTransferListItem -Name 'test2' -Value 2
        New-UDTransferListItem -Name 'test3' -Value 3
        New-UDTransferListItem -Name 'test4' -Value 4
        New-UDTransferListItem -Name 'test5' -Value 5
    } -OnChange {
        Show-UDToast ($EventData | ConvertTo-Json)
    }

    Creates a basic transfer list that shows a toast when the values are changed. 

    .EXAMPLE
    New-UDForm -Content {
        New-UDTransferList -Item {
            New-UDTransferListItem -Name 'test1' -Value 1
            New-UDTransferListItem -Name 'test2' -Value 2
            New-UDTransferListItem -Name 'test3' -Value 3
            New-UDTransferListItem -Name 'test4' -Value 4
            New-UDTransferListItem -Name 'test5' -Value 5
        }
    } -OnSubmit {
        Show-UDToast ($EventData | ConvertTo-Json)
    }

    Creates a transfer list that is part of a form. 
    #>
    param(
        [Parameter()]
        [string]$Id = [Guid]::NewGuid(),
        [Parameter()]
        [ScriptBlock]$Item,
        [Parameter()]
        [string[]]$SelectedItem = @(),
        [Parameter()]
        [Endpoint]$OnChange,
        [Parameter()]
        [string]$ClassName
    )

    if ($OnChange) {
        $OnChange.Register($Id + "onChange", $PSCmdlet)
    }

    @{
        type         = 'mu-transfer-list'
        assetId      = $MUAssetId
        isPlugin     = $true 

        id           = $id 
        item         = $Item.Invoke()
        selectedItem = $SelectedItem
        onChange     = $OnChange
        className    = $ClassName
    }
}

function New-UDTransferListItem {
    <#
    .SYNOPSIS
    Creates an item for use in a transfer list.
    
    .DESCRIPTION
    Creates an item for use in a transfer list.
    
    .PARAMETER Name
    The display name of the item. 
    
    .PARAMETER Value
    The value of the item. 
    #>
    param(
        [Parameter(Mandatory = $true)]
        [String]$Name,
        [Parameter(Mandatory = $true)]
        [String]$Value
    )

    @{
        name  = $Name 
        value = $Value 
    }
}

function New-UDTransition {
    <#
    .SYNOPSIS
    Creates a transition effect.
    
    .DESCRIPTION
    Creates a transition effect.
    
    .PARAMETER Id
    The ID of this component.
    
    .PARAMETER Collapse
    Creates a collapse transition.
    
    .PARAMETER CollapseHeight
    The height of the content when collapsed.
    
    .PARAMETER Fade
    Creates a fade transition.
    
    .PARAMETER Grow
    Creates a grow transition.
    
    .PARAMETER Slide
    Creates a slide transition.
    
    .PARAMETER SlideDirection
    The direction of the slide transition.
    
    .PARAMETER Zoom
    Creates a zoom transition.
    
    .PARAMETER Children
    The content or children to transition.
    
    .PARAMETER In
    Whether the content is transitioned in. You can use Set-UDElement to trigger a transition.
    
    .PARAMETER Timeout
    The number of milliseconds it takes to transition.
    #>
    param(
        [Parameter()]
        [string]$Id = [Guid]::NewGuid().ToString(),
        [Parameter(ParameterSetName = "Collapse")]
        [Switch]$Collapse,
        [Parameter(ParameterSetName = "Collapse")]
        [int]$CollapseHeight,
        [Parameter(ParameterSetName = "Fade")]
        [Switch]$Fade,
        [Parameter(ParameterSetName = "Grow")]
        [Switch]$Grow,
        [Parameter(ParameterSetName = "Slide")]
        [Switch]$Slide,
        [Parameter(ParameterSetName = "Slide")]
        [ValidateSet("Left", "Right", "Down", "Up")]
        [string]$SlideDirection = "Down",
        [Parameter(ParameterSetName = "Zoom")]
        [Switch]$Zoom,
        [Parameter(Mandatory)]
        [Alias("Content")]
        [scriptblock]$Children,
        [Parameter()]
        [Switch]$In,
        [Parameter()]
        [int]$Timeout
    )

    @{
        type = "mu-transition"
        id = $Id 
        asset = $MUAssetId
        isPlugin = $true 

        transition = $PSCmdlet.ParameterSetName.ToLower()
        collapseHeight = $CollapseHeight
        slideDirection = $SlideDirection
        timeout = $Timeout
        in = $In.IsPresent
        children = & $Children 
    }
}
function New-UDTreeView {
    <#
    .SYNOPSIS
    Creates a new tree view.
    
    .DESCRIPTION
    Creates a new tree view.
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER Node
    A collection of root nodes to show within the tree view. 
    
    .PARAMETER OnNodeClicked
    A script block that is called when a node is clicked. $EventData will contain the node that was clicked. 
    
    .EXAMPLE
    Creates a basic tree view. 

    New-UDTreeView -Node {
        New-UDTreeNode -Id 'Root' -Name 'Root' -Children {
            New-UDTreeNode -Id 'Level1' -Name 'Level 1' -Children {
                New-UDTreeNode -Id 'Level2' -Name 'Level 2'
            }
            New-UDTreeNode -Name 'Level 1' -Children {
                New-UDTreeNode -Name 'Level 2'
            }
            New-UDTreeNode -Name 'Level 1' -Children {
                New-UDTreeNode -Name 'Level 2'
            }   
        }
        New-UDTreeNode -Id 'Root2' -Name 'Root 2'
    }
    #>
    param(
        [Parameter()]
        [string]$Id = [Guid]::NewGuid(),
        [Parameter(Mandatory)]
        [ScriptBlock]$Node,
        [Parameter()]
        [Endpoint]$OnNodeClicked,
        [Parameter()]
        [Hashtable]$Style,
        [Parameter()]
        [string]$ClassName
    )

    End {
        if ($OnNodeClicked) {
            $OnNodeClicked.Register($Id, $PSCmdlet)
        }
        
        @{
            assetId       = $AssetId 
            isPlugin      = $true 
            id            = $Id 
            type          = 'mu-treeview'

            node          = & $Node 
            onNodeClicked = $OnNodeClicked
            style         = $Style
            className     = $ClassName
        }
    }
}

function New-UDTreeNode {
    <#
    .SYNOPSIS
    Creates a tree node.
    
    .DESCRIPTION
    Creates a tree node. This cmdlet should be used with New-UDTreeView. 
    
    .PARAMETER Name
    The name of the node. This is displayed within the UI. 
    
    .PARAMETER Id
    The ID of the node. This is passed to the $EventData property when the OnNodeClicked script block is set. 
    
    .PARAMETER Children
    The children of this node. This should be a collection of New-UDTreeNodes. 
    
    .PARAMETER Leaf
    This is a leaf node and should not display children. Added in PSU 2.6.

    .PARAMETER Icon
    The icon to display for this node. Use New-UDIcon to create this icon. Added in PSU 2.6.

    .PARAMETER ExpandedIcon 
    The icon to display for this node when it is expanded. Use New-UDIcon to create this icon. Added in PSU 2.6.

    .EXAMPLE
    See New-UDTreeView for examples. 
    #>
    param(
        [Parameter(Mandatory, Position = 1)]
        [string]$Name,
        [Parameter()]
        [string]$Id = [Guid]::NewGuid(),
        [Parameter()]
        [ScriptBlock]$Children,
        [Parameter()]
        [Switch]$Leaf,
        [Parameter()]
        [object]$Icon, 
        [Parameter()]
        [object]$ExpandedIcon 
    )

    End {
        $ChildrenArray = $null
        if ($PSBoundParameters.ContainsKey("Children")) {
            $ChildrenArray = & $Children
        }
        
        @{
            name         = $Name 
            id           = $Id 
            children     = $ChildrenArray 
            icon         = $Icon 
            expandedIcon = $ExpandedIcon
            leaf         = $Leaf.IsPresent
        }
    }
}
function New-UDTypography {
    <#
    .SYNOPSIS
    Creates typography.
    
    .DESCRIPTION
    Creates typography. Typography allows you to configure text within a dashboard. 
    
    .PARAMETER Id
    The ID of the component. It defaults to a random GUID.
    
    .PARAMETER Variant
    The type of text to display.
    
    .PARAMETER Text
    The text to format. 
    
    .PARAMETER Content
    The content to format. 
    
    .PARAMETER Style
    A set of CSS styles to apply to the typography.
    
    .PARAMETER ClassName
    A CSS className to apply to the typography.
    
    .PARAMETER Align
    How to align the typography.
    
    .PARAMETER GutterBottom
    The gutter bottom. 
    
    .PARAMETER NoWrap
    Disables text wrapping.
    
    .PARAMETER Paragraph
    Whether this typography is a paragraph.
    
    .EXAMPLE
    
    New-UDTypography -Text 'Hello' -Paragraph

    #>
    [CmdletBinding(DefaultParameterSetName = "text")]
    param(
        [Parameter()]
        [string]$Id = ([Guid]::NewGuid()).ToString(),

        [Parameter()]
        [ValidateSet ("h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "button", "overline", "srOnly", "inherit", "display4", "display3", "display2", "display1", "headline", "title", "subheading")]
		[string]$Variant,

		[Parameter(ParameterSetName = "text", Position = 0)]
		[string]$Text,

        [Parameter(ParameterSetName = "endpoint")]
		[scriptblock]$Content,

		[Parameter()]
		[Hashtable]$Style = @{},

		[Parameter()]
		[string]$ClassName,

        [Parameter()]
        [ValidateSet ("inherit", "left", "center", "right", "justify")]
		[string]$Align,

        [Parameter()]
		[switch]$IsEndPoint,

		[Parameter()]
		[Switch]$GutterBottom,

        [Parameter()]
		[Switch]$NoWrap,

        [Parameter()]
		[Switch]$Paragraph,

        [Parameter()]
        [ValidateSet('normal', 'bold', 'lighter', 'bolder', '100', '200', '300', '400', '500', '600', '700', '800', '900')]
        [string]$FontWeight
        
    )

    End {

        if ($FontWeight)
        {
            $Style["fontWeight"] = $FontWeight
        }

        $MUTypography = @{
            #This needs to match what is in the register function call of chips.jsx
            type = "mu-typography"
            #Eventually everything will be a plugin so we wont need this.
            isPlugin = $true
            #This was set in the UniversalDashboard.MaterialUI.psm1 file
            assetId = $MUAssetId

            id = $Id
            className = $ClassName
            variant = $Variant
            noWrap = $NoWrap.IsPresent
            isParagraph = $Paragraph.IsPresent
            text = $Text
            style = $Style
            align = $Align
            content = $TextContent 
            gutterBottom = $GutterBottom.IsPresent
        }

        $MUTypography.PSTypeNames.Insert(0, 'UniversalDashboard.MaterialUI.Typography') | Out-Null

        $MUTypography
    }
}
function New-UDUpload {
    <#
    .SYNOPSIS
    Upload files
    
    .DESCRIPTION
    Upload files. This component works with UDForm and UDStepper.
    
    .PARAMETER Id
    The ID of the uploader.
    
    .PARAMETER Accept
    The type of files to accept. By default, this component accepts all files. 
    
    .PARAMETER OnUpload
    A script block to execute when a file is uploaded. This $body parameter will contain JSON in the following format: 

    {
        data: 'base64 encoded string of file data',
        name: 'filename',
        type: 'type of file, if known'
    }

    $EventData will contain a class with the following properties:

    public string Name { get; set; }
    public string FileName { get; set; }
    public DateTime TimeStamp { get; set; }
    public string ContentType { get; set; }
    public string Type => ContentType;
    
    .PARAMETER Text
    The text to display on the upload button.
    
    .PARAMETER Variant
    The variant of button. Defaults to contained. Valid values: "text", "outlined", "contained"
    
    .PARAMETER Color
    The color of the button. Defaults to 'default'. Valid values: "default", "primary", "secondary", "inherit"

    .PARAMETER ClassName
    A CSS class to apply to the button.

    .EXAMPLE
    A file uploader 

    New-UDDashboard -Title "Hello, World!" -Content {
        New-UDUpload -Text "Upload" -OnUpload {
            Show-UDToast $Body
        }
    }
    
    .EXAMPLE
    A file uploader in a form 

    New-UDDashboard -Title "Hello, World!" -Content {
        New-UDForm -Content {
            New-UDUpload -Text "Upload" 
        } -OnSubmit {
            Show-UDToast $Body
        }
    }
    #>
    param(
        [Parameter()]
        [string]$Id = [Guid]::NewGuid(),
        [Parameter()]
        [string]$Accept = "*",
        [Parameter()]
        [Endpoint]$OnUpload,
        [Parameter()]
        [string]$Text,
        [Parameter()]
        [ValidateSet("text", "outlined", "contained")]
        [string]$Variant = 'contained',
        [Parameter()]
        [ValidateSet('default', 'inherit', 'primary', 'secondary')]
        [string]$Color = "default",
        [Parameter()]
        [string]$ClassName
    )

    if ($OnUpload) {
        $OnUpload.Register($Id, $PSCmdlet)
    }

    @{
        type      = "mu-upload"
        isPlugin  = $true
        assetId   = $MUAssetId
        id        = $id

        accept    = $Accept 
        onUpload  = $OnUpload
        text      = $Text
        variant   = $Variant
        color     = $Color
        className = $ClassName
    }
}
function Add-UDElement {
    <#
    .SYNOPSIS
    Adds an element to a parent element.
    
    .DESCRIPTION
    Adds an element to a parent element. This cmdlet may behave differently depending on the type of parent element.
    
    .PARAMETER ParentId
    The parent element ID to add the item to. 
    
    .PARAMETER Content
    The content to add to the parent element.
    
    .PARAMETER Broadcast
    Whether to update all connected dashboards (all users).
    
    .EXAMPLE
    New-UDElement -Tag 'div' -Id 'parent' -Content {

    }

    New-UDButton -Text 'Click Me' -OnClick {
        Add-UDElement -ParentId 'parent' -Content {
            New-UDTypography -Text 'Hello World'
        }
    }
    #>
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
        elements    = $NewContent
    }

    if ($Broadcast) {
        $DashboardHub.SendWebSocketMessage("addElement", $Data)
    }
    else {
        $DashboardHub.SendWebSocketMessage($ConnectionId, "addElement", $Data)
    }    
}
function Clear-UDElement {
    <#
    .SYNOPSIS
    Removes all children from the specified element.
    
    .DESCRIPTION
    Removes all children from the specified element. This cmdlet may behave differently depending on the type of parent element.
    
    .PARAMETER Id
    The ID of the element to clear.
    
    .PARAMETER Broadcast
    Whether to clear the element on all connected clients.
    
    .EXAMPLE
    New-UDElement -Tag 'div' -Id 'parent' -Content {
        New-UDTypography -Text 'Hello World'
    }

    New-UDButton -Text 'Click Me' -OnClick {
        Clear-UDElement -Id 'parent'
    }
    #> 
    param(
        [Parameter(Mandatory)]
        [string]$Id,
        [Parameter()]
        [Switch]$Broadcast
    )

    if ($Broadcast) {
        $DashboardHub.SendWebSocketMessage("clearElement", $Id)
    }
    else {
        $DashboardHub.SendWebSocketMessage($ConnectionId, "clearElement", $Id)
    }
}

function Get-UDElement {
    <#
    .SYNOPSIS
    Get the state of the specified element.  
    
    .DESCRIPTION
    Get the state of the specified element. This cmdlet may behave differently depending on the type of parent element.
    
    .PARAMETER Id
    The ID of the element to retreive the state of.
    
    .EXAMPLE
    New-UDCodeEditor -Id 'editor' -Code 'Hello World'

    New-UDButton -Text 'Click Me' -OnClick {
        Show-UDToast (Get-UDElement).Code
    }
    #>
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
        [string]$Id
    )

    $requestId = ''

    $requestId = [Guid]::NewGuid().ToString()

    $Data = @{
        requestId   = $requestId 
        componentId = $Id
    }

    $DashboardHub.SendWebSocketMessage($ConnectionId, "requestState", $Data)
    ConvertFrom-Json -InputObject ($stateRequestService.Get($requestId))
}

function Hide-UDModal {
    $DashboardHub.SendWebSocketMessage($ConnectionId, "closeModal", $null)
}
function Hide-UDToast {
    param(
        [Parameter(Mandatory, Position = 0)]
        [string]$Id
    )

    if ($id -notmatch '^[a-zA-Z0-9]+$') {
        throw "Invalid ID. ID must be alphanumeric."
    }

    $DashboardHub.SendWebSocketMessage($ConnectionId, "hideToast", "x" + $Id)
}

function Invoke-UDJavaScript {
    <#
    .SYNOPSIS
    Invokes JavaScript within the browser.
    
    .DESCRIPTION
    Invokes JavaScript within the browser. JavaScript is executed with eval()
    
    .PARAMETER JavaScript
    The JavaScript to execute. 
    
    .EXAMPLE
    New-UDButton -Text 'Click Me' -OnClick {
        Invoke-UDJavaScript 'alert("Hello World!")'
    }
    #>
    param(
        [Parameter(Mandatory)]
        [string]$JavaScript
    )

    $DashboardHub.SendWebSocketMessage($ConnectionId, "invokejavascript", $JavaScript)
}
function Invoke-UDRedirect {
    <#
    .SYNOPSIS
    Redirect the user to another page.
    
    .DESCRIPTION
    Redirect the user to another page.
    
    .PARAMETER Url
    The URL to redirect the user to.
    
    .PARAMETER OpenInNewWindow
    Whether to open the URL in a new window.
    
    .EXAMPLE
    New-UDButton -Text 'Click Me' -OnClick {
        Invoke-UDRedirect 'https://www.google.com'
    }
    #>
    param(
        [Parameter(Mandatory)]
        [string]$Url,
        [Parameter()]
        [Switch]$OpenInNewWindow
    )

    $Data = @{
        url             = $Url 
        openInNewWindow = $OpenInNewWindow.IsPresent
    }

    $DashboardHub.SendWebSocketMessage($ConnectionId, "redirect", $Data)
}
function Remove-UDElement {
    <#
    .SYNOPSIS
    Removes an element from the page.
    
    .DESCRIPTION
    Removes an element from the page.
    
    .PARAMETER Id
    The ID of the element to remove.
    
    .PARAMETER ParentId
    Not used
    
    .PARAMETER Broadcast
    Whether to remove this element from the page of all connected users.
    
    .EXAMPLE
    New-UDElement -Id 'myElement' -Tag 'div' -Content {
        New-UDTypography -Text 'Hello World'
    }
    
    New-UDButton -Text 'Click Me' -OnClick {
        Remove-UDElement -Id 'myElement'
    }
    #>
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
        parentId    = $ParentId
    }

    if ($Broadcast) {
        $DashboardHub.SendWebSocketMessage("removeElement", $Data)
    }
    else {
        $DashboardHub.SendWebSocketMessage($ConnectionId, "removeElement", $Data)
    }
}

function Select-UDElement {   
    <#
    .SYNOPSIS
    Selects the specified element.
    
    .DESCRIPTION
    Selects the specified element. This cmdlet is useful for selecting input fields.
    
    .PARAMETER Id
    The ID of the element to select. 
    
    .PARAMETER ScrollToElement
    Whether to scroll to the element.
    
    .EXAMPLE
    New-UDTextbox -Id 'txtName' -Label 'Name'

    New-UDButton -Text 'Click Me' -OnClick {
        Select-UDElement -Id 'txtName'
    }
    #>
    param(
        [Parameter(Mandatory, ParameterSetName = "Normal")]
        [string]$Id,
        [Parameter(ParameterSetName = "Normal")]
        [Switch]$ScrollToElement
    )

    $Data = @{
        id              = $Id 
        scrollToElement = $ScrollToElement
    }

    $DashboardHub.SendWebSocketMessage($ConnectionId, "select", $Data)
}
function Set-UDClipboard {
    <#
    .SYNOPSIS
    Sets string data into the clipboard.
    
    .DESCRIPTION
    Sets string data into the clipboard.
    
    .PARAMETER Data
    The data to set into the clipboard.
    
    .PARAMETER ToastOnSuccess
    Show a toast if the clipboard data was sent successfully.
    
    .PARAMETER ToastOnError
    Show a toast if the clipboard data was not sent successfully.
    
    .EXAMPLE
    New-UDButton -Text 'Click Me' -OnClick {
        Set-UDClipboard -Data 'Hello World!' -ShowToastOnSuccess
    }
    #>
    param(
        [Parameter(Mandatory)]
        [string]$Data,
        [Parameter()]
        [Switch]$ToastOnSuccess,
        [Parameter()]
        [Switch]$ToastOnError
    )

    $cpData = @{
        data           = $Data 
        toastOnSuccess = $ToastOnSuccess.IsPresent
        toastOnError   = $ToastOnError.IsPresent
    }

    $DashboardHub.SendWebSocketMessage($ConnectionId, "clipboard", $cpData)
}

function Set-UDElement {
    <#
    .SYNOPSIS
    Set properties of an element. 
    
    .DESCRIPTION
    Set the properties of an element. 
    
    .PARAMETER Id
    The element to set properites on. 
    
    .PARAMETER Properties
    The properties to set in the form of a hashtable.
    
    .PARAMETER Broadcast
    Whether to update this element on all connected clients. 
    
    .PARAMETER Content
    Content to set within the element. 
    
    .EXAMPLE
    New-UDButton -Id 'button' -Text 'Disable Me' -OnClick {
        Set-UDElement -Id 'button -Properties @{
            'disabled' = $true
        }
    }
    #>
    param(
        [Parameter(Mandatory)]
        [string]$Id,
        [Alias("Attributes")]
        [Parameter()]
        [Hashtable]$Properties,
        [Parameter()]
        [Switch]$Broadcast,
        [Parameter()]
        [ScriptBlock]$Content
    )

    if ($Content -and -not $Properties) {
        $Properties = @{}
    }

    if ($Content) {
        $Properties['content'] = [Array](& $Content)
    }

    $Data = @{
        componentId = $Id 
        state       = $Properties
    }

    if ($Broadcast) {
        $DashboardHub.SendWebSocketMessage("setState", $data)
    }
    else {
        $DashboardHub.SendWebSocketMessage($ConnectionId, "setState", $Data)
    }
}
function Show-UDModal {
    <#
    .SYNOPSIS
    Show a modal.
    
    .DESCRIPTION
    Show a modal.
    
    .PARAMETER FullScreen
    Create a full screen modal.
    
    .PARAMETER Footer
    The footer components for the modal.
    
    .PARAMETER Header
    The header components for the modal. 
    
    .PARAMETER Content
    The content of the modal. 
    
    .PARAMETER Persistent
    Whether the modal can be closed by clicking outside of it.
    
    .PARAMETER FullWidth
    Whether the modal is full width.
    
    .PARAMETER MaxWidth
    The max width of the modal.
    
    .EXAMPLE
    New-UDButton -Text 'Click Me' -OnClick {
        Show-UDModal -Content {
            New-UDTypography -Text "Hello World"
        }
    }
    #>
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
        maxWidth    = $MaxWidth
        fullWidth   = $FullWidth.IsPresent
        fullScreen  = $FullScreen.IsPresent
    }

    if ($null -ne $Footer) {
        $Modal['footer'] = & $Footer
    }

    if ($null -ne $Header) {
        $Modal['header'] = & $Header
    }

    if ($null -ne $Content) {
        $Modal['content'] = & $Content
    }

    $DashboardHub.SendWebSocketMessage($ConnectionId, "showModal", $modal)
}

function Show-UDToast {
    <#
    .SYNOPSIS
    Displays a toast message to the user. 
    
    .DESCRIPTION
    Displays a toast message to the user. 
    
    .PARAMETER Message
    The message to display. 
    
    .PARAMETER MessageColor
    The text color of the message.
    
    .PARAMETER MessageSize
    The size of the message. 
    
    .PARAMETER Duration
    The duration in milleseconds before the message disappears. 
    
    .PARAMETER Title
    The title to display. 
    
    .PARAMETER TitleColor
    The text color of the title. 
    
    .PARAMETER TitleSize
    The size of the title. 
    
    .PARAMETER Id
    The ID of the toast. For use with Hide-UDToast. 
    
    .PARAMETER BackgroundColor
    The background color of the toast. 
    
    .PARAMETER Theme
    Light or dark theme. 
    
    .PARAMETER Icon
    The icon to display in the toast.
    
    .PARAMETER IconColor
    The color of the icon.
    
    .PARAMETER Position
    Where to display the toast. 
    
    .PARAMETER HideCloseButton
    Hides the close button.
    
    .PARAMETER CloseOnClick
    Closes the toast when clicked.
    
    .PARAMETER CloseOnEscape
    Closes the toast when esc is pressed. 
    
    .PARAMETER ReplaceToast
    Replaces an existing toast if one is already showing.
    
    .PARAMETER RightToLeft
    Right to left text.
    
    .PARAMETER Balloon
    Creates a balloon toast.
    
    .PARAMETER Overlay
    Displays an overlay behind the toast.
    
    .PARAMETER OverlayClose
    Allow the user to close the overlay. 
    
    .PARAMETER OverlayColor
    The color of the overlay. 
    
    .PARAMETER TransitionIn
    The transition in effect.
    
    .PARAMETER TransitionOut
    The transition out effect.
    
    .PARAMETER Broadcast
    Broadcasts the toast to all connected users. 
    
    .PARAMETER Persistent
    Prevents the toast from closing due to the duration.
    
    .EXAMPLE
    Show-UDToast -Message 'Hello, World!'

    Shows a toast message.
    #>
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
        [string]$Icon,
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
        [Switch]$Broadcast,
        [Parameter()]
        [Switch]$Persistent
    )

    $faIcon = $null
    if ($PSBoundParameters.ContainsKey('Icon') -and -not $Icon.StartsWith('fa')) {
        $faIcon = "fa fa-$($Icon.ToLower().Replace("_", "-"))"
    }
    elseif ($PSBoundParameters.ContainsKey('Icon')) {
        $faIcon = $Icon
    }

    if ($Persistent) {
        $Duration = $false
    }

    # if ($id -notmatch '^[a-zA-Z0-9]+$') {
    #     throw "Invalid ID. ID must be alphanumeric."
    # }

    $options = @{
        close           = -not $HideCloseButton.IsPresent
        id              = "x" + $Id
        message         = $Message
        messageColor    = $MessageColor.HtmlColor
        messageSize     = $MessageSize
        title           = $Title
        titleColor      = $TitleColor.HtmlColor
        titleSize       = $TitleSize
        timeout         = $Duration
        position        = $Position
        backgroundColor = $BackgroundColor.HtmlColor
        theme           = $Theme
        icon            = $faIcon
        iconColor       = $IconColor.HtmlColor
        displayMode     = if ($ReplaceToast.IsPresent) { 2 } else { 0 }
        rtl             = $RightToLeft.IsPresent
        balloon         = $Balloon.IsPresent
        overlay         = $Overlay.IsPresent
        overlayClose    = $OverlayClose.IsPresent
        overlayColor    = $OverlayColor.HtmlColor
        closeOnClick    = $CloseOnClick.IsPresent
        closeOnEscape   = $CloseOnEscape.IsPresent
        transitionIn    = $TransitionIn
        transitionOut   = $TransitionOut
    }

    if ($Broadcast) {
        $DashboardHub.SendWebSocketMessage("showToast", $options)
    }
    else {
        $DashboardHub.SendWebSocketMessage($ConnectionId, "showToast", $options)
    }
}

function Start-UDDownload {
    <#
    .SYNOPSIS
    Starts the download of a file within the dashboard.
    
    .DESCRIPTION
    Starts the download of a file within the dashboard. Only text files are supported
    
    .PARAMETER FileName
    The name of the file. 

    .PARAMETER StringData
    The data to be written to the file.

    .PARAMETER ContentType 
    The content type of the file.
    
    .EXAMPLE
    New-UDButton -Text 'Click Me' -OnClick {
        Start-UDDownload -FileName 'myfile.txt' -StringData 'Hello World' -ContentType 'text/plain'
    }
    #>
    param(
        [Parameter()]
        [string]$FileName = "text.txt",
        [Parameter(Mandatory)]
        [string]$StringData,
        [Parameter()]
        [string]$ContentType = "text/plain"
    )

    $Data = @{
        fileName    = $FileName
        stringData  = $StringData
        contentType = $ContentType
    }

    $DashboardHub.SendWebSocketMessage($ConnectionId, "download", $data)
}
function Sync-UDElement {
    <#
    .SYNOPSIS
    Causes an element to update. 
    
    .DESCRIPTION
    Causes an element to update. Not all elements can be updated. For elements that cannot be updated, wrap them in New-UDDynamic and update that.
    
    .PARAMETER Id
    The ID of the element to update. 
    
    .PARAMETER Broadcast
    Whether to broadcast the update to all clients.
    
    .EXAMPLE
    New-UDDyanmic -Id 'dateTime' -Content {
        Get-Date
    }

    New-UDButton -Text 'Refresh' -Content {
        Sync-UDElement 'dateTime'
    }
    #>
    param(
        [Parameter(Mandatory, ValueFromPipeline)]
        [string[]]$Id,
        [Parameter()]
        [Switch]$Broadcast
    )

    Process {
        foreach ($i in $Id) {
            if ($Broadcast) {
                $DashboardHub.SendWebSocketMessage("syncElement", $I)
            }
            else {
                $DashboardHub.SendWebSocketMessage($ConnectionId, "syncElement", $I)
            }
        } 
    }
}

# SIG # Begin signature block
# MIInGgYJKoZIhvcNAQcCoIInCzCCJwcCAQExCzAJBgUrDgMCGgUAMGkGCisGAQQB
# gjcCAQSgWzBZMDQGCisGAQQBgjcCAR4wJgIDAQAABBAfzDtgWUsITrck0sYpfvNR
# AgEAAgEAAgEAAgEAAgEAMCEwCQYFKw4DAhoFAAQUpZUTKb01MxA/2w/WL5m4LgfY
# ZTCggiDCMIIFsTCCBJmgAwIBAgIQASQK+x44C4oW8UtxnfTTwDANBgkqhkiG9w0B
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
# FgQU3HKHIpgGyWJU3Eng7SzAF9q5SygwDQYJKoZIhvcNAQEBBQAEggGAI+hDP2VY
# e6vKNqp8CX5l2RoPpxx7OKomNRWMjB0dZ6PEZdd32Z/3IR69Sct1l9AbQFD5d2uT
# +4dl0BWHplZjuBv2uTQYo/Bwl1QVXfvZqgZJWcESXZlp052dC3iNAPTOlTau9QQU
# EwhDchkizeP8jmQWjmHK5XM00AiedAMJnzmQKJR6WMYOCV+gjpeXm7dz05K0RBNn
# g7Z/MQH+C1XrJN23nz6JkhZisSsrsZN+vb3/FLPf/XT2aiEJIPfGzqT6R3iwKu1M
# IZsMcy8KxEWYS8pUFk/2X/O5aa0/nJk6kXLWeAsPMtaAIAKYAhxtVWo4Zy2Yayzf
# 97o9MPXGyat44xEQggZHdAWmMlJD0CVuNGX8UT4eTrWno/y7q0agOPMr8RF+DSUn
# d0Dj1D3nUEdObiZ1GgBoKvgJ7jjXlto4CndCqlF85GhLZgVKJddWk0/jAs+g0kNg
# ipfHXJXNoBQ0pYxrxUGoi1hQnwVtTuJvzNpA6Uvb3pSC1cr0gn6hn9SooYIDIDCC
# AxwGCSqGSIb3DQEJBjGCAw0wggMJAgEBMHcwYzELMAkGA1UEBhMCVVMxFzAVBgNV
# BAoTDkRpZ2lDZXJ0LCBJbmMuMTswOQYDVQQDEzJEaWdpQ2VydCBUcnVzdGVkIEc0
# IFJTQTQwOTYgU0hBMjU2IFRpbWVTdGFtcGluZyBDQQIQCnpKiJ7JmUKQBmM4TYaX
# nTANBglghkgBZQMEAgEFAKBpMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJ
# KoZIhvcNAQkFMQ8XDTIyMDYxNjE5MjcxMFowLwYJKoZIhvcNAQkEMSIEIIHmbSye
# /K+8zE3jABC2Xt54RbzbGo5A6RJiz7zUGt+oMA0GCSqGSIb3DQEBAQUABIICAA5C
# B0r+aKVI0M6wgQ/LU2+Tjf99Sb9eNE6efNUPxQ7SLcRPa2Y5iEnUhFSekjAuH5RC
# ZC4enWuZ/2yL1mtP+VA0eXdc2wPh0BAcwqKPw4nEQ4mRmucRMPxsHpjMkdvhRnsv
# NokK6T9ibRP+16Tbm+fp8/4UV1BAOXTC84mPxMV7br5jE7nA4c4fI+EiT58wFHVb
# NDKPkGnvG0wjA3uXcdfQOoylZVkvENpW+dXcmNpal5zcNAn3/uowHf8iFeu06IDz
# qjaO8mO6nh4dXc7ExJp1khOBPILYH6S8Vq/xdJijQV6HRx4iGCMB+BBKozAFPPgN
# 4lFdzDmqj/a5KQXWUNaUXTKptFbJyrTaxLPWwBygQZUkGxe21up/ycwycR9BpCv8
# L2ucc/AIqrjn/a6MiI3l1NQslQCPgZI26ImifygGhKGfgn7cwUcLGAZghsEoeKzg
# 79c5j/QijPoZPtEqlvBRer4UAhg51/IaQBkI9adWexClI7Ofz3jP4JhuHBHpxhDv
# a4ftfuKHvd8Z/V/hcI9WblrBSZ+Ltrr4Gvx/ApXtzsDm/S8jBbzaLTdaAqcmdwvw
# 23ct7W/7vFpIldmD63X5CyVqETA+3gVoAfki/5UwkjzsFtZskR1vYDsrns+vjo8r
# FqCq59GrRbCmFw6tT/xHGMyDmBuLuKYx2MOszSJZ
# SIG # End signature block
