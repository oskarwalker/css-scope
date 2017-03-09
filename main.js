var cssLib = require('css');

function scope (css, scope, cssOptions) {
  cssOptions = cssOptions || {};

  var ast = cssLib.parse(css, cssOptions);

  ast.stylesheet.rules = ast.stylesheet.rules.map(function (rule) {
    rule.selectors = rule.selectors.map(function (selector) {
      return [scope, selector].join(' ');
    });
    return rule;
  });

  return cssLib.stringify(ast);
}


module.exports = scope;