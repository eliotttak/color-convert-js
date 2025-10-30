# Color-convert.js

[![NPM Version](https://img.shields.io/npm/v/%40eliotttak%2Fcolor-convert.js?style=flat&label=Version&cacheSeconds=300&logoSize=1)][npm_project_page]
[![Types](https://badgen.net/npm/types/@eliotttak/color-convert.js "Types")][npm_project_page]
[![Total downloads](https://badges.ws/npm/dt/@eliotttak/color-convert.js?labelColor=%234C4C4C "Total downloads")][npm_project_page]
[![Weekly downloads](https://badges.ws/npm/dw/@eliotttak/color-convert.js?labelColor=%234xcC4C4C "Weekly downloads")][npm_project_page]
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
- RGB <==> Hexadecimal


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
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@eliotttak/color-convert.js"></script>
```

And then you can use it in your scripts:
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

## Demo
<iframe src="https://cdpn.io/pen/full/EaPewYJ" width="500" height="300"></iframe><br />

If the site doesn't load, find the demo on CodePen : [cdpn.io/pen/full/EaPewYJ](https://cdpn.io/pen/full/EaPewYJ) 


  [npm_project_page]: https://npmjs.org/package/@eliotttak/color-convert.js
  [github_project_page]: https://github.com/eliotttak/color-convert-js
  [Documentation]: https://eliotttak.github.io/color-convert-js