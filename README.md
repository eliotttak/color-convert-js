# Color-convert.js

[![Latest version](https://badgen.net/npm/v/@eliotttak/color-convert.js "Latest version")][npm_project_page]
[![Types](https://badgen.net/npm/types/@eliotttak/color-convert.js "Types")][npm_project_page]
[![Total downloads](https://badgen.net/npm/dt/@eliotttak/color-convert.js "Total downloads")][npm_project_page]
[![Weekly downloads](https://badgen.net/npm/dw/@eliotttak/color-convert.js "Weekly downloads")][npm_project_page]
[![Node.js version](https://badgen.net/npm/node/@eliotttak/color-convert.js "Node.js version")][npm_project_page]
[![Dependents](https://badgen.net/npm/dependents/@eliotttak/color-convert.js "Node.js version")][npm_project_page]

[![Stars](https://badgen.net/github/stars/eliotttak/color-convert-js "Stars")][github_project_page]
[![Watchers](https://badgen.net/github/watchers/eliotttak/color-convert-js "Watchers")][github_project_page]
[![License](https://badgen.net/github/license/eliotttak/color-convert-js "License")][github_project_page]
[![Forks](https://badgen.net/github/forks/eliotttak/color-convert-js "Forks")][github_project_page]
[![Commits](https://badgen.net/github/commits/eliotttak/color-convert-js "Commits")][github_project_page]

## Introduction
Color-convert.js is a little JavaScript Library, that convert color formats, as RGB, HSL, CMYK and soon many others. It is light, and easy to use.

## Availables conversions:
- RGB <==> HSL
- RGB <==> CMYK
- HSL <==> CMYK

## Installation

<details><summary>Using NPM</span></summary>

First install in your project
```bash
npm install @eliotttak/color-convert.js
```

And then use it in your script
```javascript
const colorConvertJs = require("@eliotttak/color-convert.js")

console.table(colorConvertJs.rgbToHsl(0, 255, 0))
```
Output :

| (index) | Values |
| :-----: | :----: |
|    h    |  120   |
|    s    |  100   |
|    l    |   50   |
</details>
<details><summary>In a website, using an URL</span></summary>

Add this line to you HTML
```html
<script type="text/javascript" src="https://raw.githubusercontent.com/eliotttak/color-convert-js/refs/heads/main/index.js"></script>
```

And then you can use it in your scripts
```javascript
console.table(rgbToHsl(0, 255, 0))
```
Output :

| (index) | Values |
| :-----: | :----: |
|    h    |  120   |
|    s    |  100   |
|    l    |   50   |
</details>

## API
You can find the JSDoc documentation here : [Documentation]

[npm_project_page]: https://npmjs.org/package/@eliotttak/color-convert.js
[github_project_page]: https://github.com/eliotttak/color-convert-js
[Documentation]: https://eliotttak.github.io/color-convert-js