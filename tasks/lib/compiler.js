const unCamelCase = (str, separator = "-") =>
  str.replace(/([A-Z])/g, `${separator}$1`).toLowerCase();

/**
 * Compiles Javascript to CSS
 * @param {*} obj nested properties
 * @param {*} stack recursive stack
 * @param {*} css concat css obj
 */
const compileJavascriptToCSS = (
  obj,
  prefix = ".",
  maxTraverse = 1000,
  stack = "",
  css = {},
  curLevel = 1
) => {
  for (var p in obj) {
    if (typeof obj[p] == "object" && curLevel <= maxTraverse) {
      compileJavascriptToCSS(
        obj[p],
        prefix,
        maxTraverse,
        stack + (stack ? "-" : prefix) + p,
        css,
        curLevel + 1
      );
    } else {
      if (!css.hasOwnProperty(stack)) css[stack] = [];
      if (typeof obj[p] != "object")
        css[stack].push(`\n  ${unCamelCase(p)}:${obj[p]};`);
    }
  }
  return Object.keys(css).reduce((acc, curr) => {
    acc += `${curr} {${css[curr].join("")}\n}\n`;
    return acc;
  }, "");
};

module.exports = {
  compileJavascriptToCSS: compileJavascriptToCSS
};
