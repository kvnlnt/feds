const fs = require("fs");
const config = require("../../feds.json");
const util = require("../lib/util");
const compiler = require("../lib/compiler");
const baseCss = fs.readFileSync("./src/styles/lib/base.css", "utf-8");
const fontCss = fs.readFileSync("./src/styles/lib/fonts.css", "utf-8");
const normalizeCss = fs.readFileSync("./src/styles/lib/normalize.css", "utf-8");
const atoms = require("../../src/styles/atoms/atoms");
const molecules = require("../../src/styles/molecules/molecules");
// const cssComments = new RegExp("\\/\\*.+?\\*\\", 'g');
const build = `/* Build: ${config.name}.${config.version}.${config.build +
  1} */`;


// setup
console.time(util.ok("Styles"));

// compile
const compiledAtoms = compiler.compileJavascriptToCSS(atoms);
const compiledMolecules = compiler.compileJavascriptToCSS(molecules);

// render
const styles = `${build}
${normalizeCss}
${baseCss}
${fontCss}
${compiledMolecules}
${compiledAtoms}`.replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm, '').replace(/\n\s*\n/g, '\n');
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