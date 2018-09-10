const unCamelCase = (str, separator) =>
  str.replace(/([A-Z])/g, "-$1").toLowerCase();

/**
 * Compiles Javascript to CSS
 * @param {*} obj nested properties
 * @param {*} stack recursive stack
 * @param {*} css concat css obj
 */
const compileJavascriptToCSS = (obj, stack = "", css = {}) => {
  for (var p in obj) {
    if (typeof obj[p] == "object") {
      compileJavascriptToCSS(obj[p], stack + (stack ? "-" : ".") + p, css);
    } else {
      if (!css.hasOwnProperty(stack)) css[stack] = [];
      css[stack].push(`${unCamelCase(p)}:${obj[p]};`);
    }
  }
  return Object.keys(css).reduce((acc, curr) => {
    acc += `${curr}{${css[curr].join("")}}`;
    return acc;
  }, "");
};

module.exports = {
  compileJavascriptToCSS: compileJavascriptToCSS
};
