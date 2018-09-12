const fs = require("fs");
const config = require("../../feds.json");
const util = require("../lib/util");
const compiler = require("../lib/compiler");
const atoms = require("../../src/styles/atoms/atoms.js");
const molecules = require("../../src/styles/molecules/molecules.js");
const build = `/* Build: ${config.name}.${config.version}.${config.build +
  1} */`;

// setup
console.time(util.ok("Styles"));

// compile
const compiledAtoms = compiler.compileJavascriptToCSS(atoms);
const compiledMolecules = compiler.compileJavascriptToCSS(molecules, 1, "");

// render
const styles = `${build}\n${compiledMolecules}${compiledAtoms}`;
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
