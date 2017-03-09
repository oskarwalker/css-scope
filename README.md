# CSS-scope

This module puts given css input in scope of a class

```css
/* module-a.css */
p {
  color: white;
}
```

```javascript
var scopePrefix = '.module-a';
var cssContent = fs.readFile('module-a.css', ...);
var scopedCss = scope(cssContent, scopePrefix, options);
```

Results in

```css
.module-a p {
  color: white;
}
```