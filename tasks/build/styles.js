const fs = require("fs");
const config = require("../../feds.json");
const color = require("../lib/color");
const compiler = require("../lib/compiler");
const build = `/* Build: ${config.name}.${config.version}.${config.build+1} */`;

// setup
console.time(color.ok("Styles"));

// import style (& theme) files
const params = require(`../../src/styles/params.json`);
const atoms = require(`../../src/styles/atoms.json`);
const molecules = require(`../../src/styles/molecules.json`);
const resets = require(`../../src/styles/resets.json`);
const fonts = require(`../../src/styles/fonts.json`);

// compile
const compiledFonts = compiler.compileFonts(fonts);
const compiledAtoms = compiler.compileAtoms(atoms, params);
const compiledMolecules = compiler.compileMolecules(molecules, atoms, params);
const compiledResets = compiler.compileResets(resets);

// render
const styles = `${build}\n${compiledFonts}${compiledResets}${compiledMolecules}${compiledAtoms}`;

// output
const stylesFile = `${config.name}.${config.version}.css`;
const stylesFileLatest = `${config.name}.latest.css`;
fs.writeFileSync("./public/styles/" + stylesFile, styles);
fs.writeFileSync("./public/styles/" + stylesFileLatest, styles);

// Running time
console.timeEnd(color.ok("Styles"));
