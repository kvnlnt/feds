const fs = require("fs");
const config = require("../../feds.json");
const color = require("../lib/color");
const compiler = require("../lib/compiler");
const atoms = require("../../src/styles/atoms/atoms.js");
const molecules = require("../../src/styles/molecules/molecules.js");
const build = `/* Build: ${config.name}.${config.version}.${config.build +
  1} */`;

// setup
console.time(color.ok("Styles"));

// render
const styles = `${build}\n${compiler.compileJavascriptToCSS(atoms)}`;

// output
const stylesFile = `${config.name}.${config.version}.css`;
const stylesFileLatest = `${config.name}.latest.css`;
fs.writeFileSync("./public/styles/" + stylesFile, styles);
fs.writeFileSync("./public/styles/" + stylesFileLatest, styles);

// Running time
console.timeEnd(color.ok("Styles"));
