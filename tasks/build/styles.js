const fs = require("fs");
const config = require("../../feds");
const util = require("../lib/util");
const compiler = require("../lib/compiler");
const baseCss = fs.readFileSync("./src/common/css/base.css", "utf-8");
const openSansFont = fs.readFileSync("./src/common/css/open-sans.css", "utf-8");
const iconsFont = fs.readFileSync("./src/common/css/icons.css", "utf-8");
const normalizeCss = fs.readFileSync("./src/vendor/css/normalize.css", "utf-8");
const atoms = require("../../src/atoms/_atoms");
const elements = require("../../src/elements/_elements");
const components = require("../../src/components/_components");
const build = `/* Build: ${config.name}.${config.version}.${config.build +
  1} */`;

// setup
console.time(util.ok("Styles"));

// compile
const compiledAtoms = compiler.compileJavascriptToCSS(atoms);
const compiledElements = compiler.compileJavascriptToCSS(elements);
const compiledComponents = compiler.compileJavascriptToCSS(components);

// render
const styles = `${build}
${normalizeCss}
${baseCss}
${iconsFont}
${openSansFont}
${compiledElements}
${compiledComponents}
${compiledAtoms}`
  .replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm, "")
  .replace(/\n\s*\n/g, "\n");
const stylesMin = styles.replace(/\s/g, "");

// files
const path = "./public/styles";
const file = `${path}/${config.name}.${config.version}.css`;
const fileMin = `${path}/${config.name}.${config.version}.min.css`;
const fileLatest = `${path}/${config.name}.latest.css`;
const fileLatestMin = `${path}/${config.name}.latest.min.css`;

// output
fs.writeFileSync(`${file}`, styles);
fs.writeFileSync(`${fileMin}`, stylesMin);
fs.writeFileSync(`${fileLatest}`, styles);
fs.writeFileSync(`${fileLatestMin}`, stylesMin);

// Running time
console.timeEnd(util.ok("Styles"));