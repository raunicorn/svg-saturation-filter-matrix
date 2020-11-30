# svg-saturation-filter-matrix

A function that generates saturation filter matrix for svg element feColorMatrix which simulates filter effect of photoshop.

## install

```javascript
import svgSaturationFilterMatrix from "svg-saturation-filter-matrix";
```

## how to use

```javascript
var saturation = 0; // range from -100 to 100, 0 means no saturation shift
console.log(svgSaturationFilterMatrix(saturation));
// `1 0 0 0 0
// 0 1 0 0 0
// 0 0 1 0 0
// 0 0 0 1 0`
```
