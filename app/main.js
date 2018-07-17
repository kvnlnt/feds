const compiler = require("./compiler");
const fs = require("fs");
const theme = process.argv[2] || "base";
const template = require("../templates/index");

// setup
console.time("Styler");
if (!fs.existsSync("./public")) fs.mkdirSync("./public");

// theme files
const importThemeFile = (t, f) => {
  let o = require(`../themes/base/${f}`);
  const isCustom = t !== "base" && fs.existsSync(`./themes/${t}/${f}`);
  if (isCustom) o = Object.assign(o, require(`../themes/${t}/${f}`));
  return o;
};

const config = importThemeFile(theme, "config.json");
const params = importThemeFile(theme, "params.json");
const atoms = importThemeFile(theme, "atoms.json");
const molecules = importThemeFile(theme, "molecules.json");
const patterns = importThemeFile(theme, "patterns.json");
const resets = importThemeFile(theme, "resets.json");

// output
const outPath = `./public/`;
const outFile = `${config.name}.${config.version}.css`;
const outGuide = `${config.name}.${config.version}.html`;

// precompile
const precompiledAtoms = compiler.precompileAtoms(atoms, compiler.interpolate, params);
const precompiledMolecules = compiler.precompileMolecules(molecules, precompiledAtoms);
const precompiledResets = compiler.precompileResets(resets);
const precompiledPatterns = compiler.precompilePatterns(patterns);

// compile
const compiledAtoms = compiler.compileRules(precompiledAtoms).join("");
const compiledMolecules = compiler.compileRules(precompiledMolecules).join("");
const compiledPatterns = template(outFile, precompiledPatterns.links.join(""), precompiledPatterns.markup.join(""));
const compiledResets = compiler.compileRules(precompiledResets).join("");

// render
const styles = `${compiledResets}${compiledMolecules}${compiledAtoms}`;
fs.writeFileSync(outPath + outFile, styles);
fs.writeFileSync(outPath + outGuide, compiledPatterns);

console.log(compiledPatterns);

// Running time
console.timeEnd("Styler");