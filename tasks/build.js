const compiler = require("./compiler");
const guide = require("./guide");
const fs = require("fs");
const theme = process.argv[2] || "base";

// setup
console.time("Styler");
if (!fs.existsSync("./public")) fs.mkdirSync("./public");

// theme files
const importStyleConfig = (t, f) => {
  let o = require(`../styles/base/${f}`);
  const isCustom = t !== "base" && fs.existsSync(`./styles/${t}/${f}`);
  if (isCustom) o = Object.assign(o, require(`../styles/${t}/${f}`));
  return o;
};

const config = importStyleConfig(theme, "config.json");
const params = importStyleConfig(theme, "params.json");
const atoms = importStyleConfig(theme, "atoms.json");
const molecules = importStyleConfig(theme, "molecules.json");
const patterns = importStyleConfig(theme, "patterns.json");
const resets = importStyleConfig(theme, "resets.json");

// output
const outPath = `./public/`;
const outFile = `${config.name}.${config.version}.css`;

// precompile
const precompiledAtoms = compiler.precompileAtoms(
  atoms,
  compiler.interpolate,
  params
);
const precompiledMolecules = compiler.precompileMolecules(
  molecules,
  precompiledAtoms
);
const precompiledResets = compiler.precompileResets(resets);

// compile
const compiledAtoms = compiler.compileRules(precompiledAtoms).join("");
const compiledMolecules = compiler.compileRules(precompiledMolecules).join("");
const compiledResets = compiler.compileRules(precompiledResets).join("");

// render
const styles = `${compiledResets}${compiledMolecules}${compiledAtoms}`;
fs.writeFileSync(outPath + outFile, styles);
if (theme === "base") fs.writeFileSync("./index.html", guide.render(outPath + outFile, patterns));

// Running time
console.timeEnd("Styler");