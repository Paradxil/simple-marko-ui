# simple-marko-ui
A simple set of UI components for MarkoJS. Created to make ui design with MarkoJS fast and limit the amount of custom styles required.

## Install
`npm i simple-marko-ui`

That's it!
Marko will  [automatically find the tags](https://markojs.com/docs/custom-tags/#using-tags-from-npm) for you.

## Usage
**Getting started:**

simple-marko-ui tags are all prefixed with `ui-` for easy use. Simply drop them into your Marko files.

```marko
ui-text -- Hello world!
```

See individual component documentation for details about what attributes and options each component supports.

**Attributes:**

Most components accept a standard base set of attributes that allow for making easy style or layout changes. Individual components also often have attributes specific to their use cases.

|Attribute|Description|
|---|---|
|`filled`|Fill the background with the primary color.|
|`secondary`|Fill the background with the secondary color.|
|`light`|Use the light text color.|
|`dark`|Use the dark text color.|
|`rounded`|Round the corners.|
|`raised`|Display a box shadow around the element.|
|`outlined`|Display a border around the element.|
|`padded`|Pad the element.|
|`paddedwide`|Pad the element with more padding.|
|`paddednarrow`|Pad the element with less padding.|
|`fullwidth`|Fill available horizontal space.|
|`hidden`|Don't display this element.|

Example: 
```marko
ui-button text='Click Me!' trailingicon='arrow-right' raised rounded paddedwide
```

**Layout:**

Using the `ui-linear-layout` component makes it easier to quickly create responsive designs. For example, the following code creates a three column layout that wraps when needed. This component uses flexbox to position elements. It default to a horizontal layout but accepts the `vertical` attribute. By nesting `ui-linear-layout` components you can quickly create complex layouts.

```marko
ui-linear-layout wrap
    @element
        ui-linear-layout vertical
            @element
                ui-heading -- Column 1
    @element
        ui-linear-layout vertical
            @element
                ui-heading -- Column 2
    @element
        ui-linear-layout vertical
            @element
                ui-heading -- Column 3
```

**Theming:**

Theming is currently done using css variables. Note that use of `!important` is required. An easier method of theming using tag attributes is planned. This would also allow for nested themes.

```css
:root {
    --primary: #fff !important;
    --primary-dark: #f1f3f5 !important;
    --text-dark: #495057 !important;
    --text-light: #fff !important;
    --border: #ced4da !important;
    --rounded-radius: 5px !important;
    --padding: 8px !important;
    --padding-narrow: 4px !important;
    --padding-wide: 16px !important;
    --text-font: sans-serif !important;
    --button-font: sans-serif !important;
    --header-font: sans-serif !important;
    --font-size-h1: 2.5em !important;
}
```

## Components
Completed:
- `ui-button`
- `ui-combobox`
- `ui-container`
- `ui-date-select`
- `ui-duration`
- `ui-emphasis`
- `ui-heading`
- `ui-horizontal-layout` (see `ui-linear-layout`)
- `ui-icon`
- `ui-label`
- `ui-linear-layout`
- `ui-spacer`
- `ui-submit`
- `ui-text`
- `ui-timer`
- `ui-vertical-layout` (see `ui-linear-layout`)

In progress (usable):
- `ui-card`
- `ui-color-select`
- `ui-date`
- `ui-list`
- `ui-pageview`
- `ui-popover`
- `ui-select`
- `ui-sidebar`
- `ui-textbox`
- `ui-time`

Planned:
- `ui-tooltip`

## Contribute
Feel free to submit bug reports, issues, or feature requests.

Pull requests are welcome.

## License
This project is licensed under MIT.

Copyright (c) 2021 Hunter Stratton

## Developers
Hunter Stratton