const unCamelCase = (str, separator = "-") =>
  str.replace(/([A-Z])/g, `${separator}$1`).toLowerCase();


const reduceDeclaration = (declaration) => {
  return Object.keys(declaration).reduce((acc, curr) => {
    acc += `\n  ${unCamelCase(curr)}:${declaration[curr]};`;
    return acc;
  }, "");
};

const reduceDeclarations = (declarations, prefix = ".feds") => {
  return Object.keys(declarations).reduce((acc, curr) => {
    acc += `\n${prefix} ${curr} {${reduceDeclaration(declarations[curr])}\n}`;
    return acc;
  }, "");

};

module.exports = {
  compileJavascriptToCSS: reduceDeclarations
};