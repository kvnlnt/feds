const compiler = require("./compiler");
const guide = require("./guide");
const fs = require("fs");
const theme = process.argv[2] || "base";

// setup
console.time("FEDS");

// helpers
const importStyleConfig = (t, f) => {
  let o = require(`../src/styles/base/${f}`);
  const isCustom = t !== "base" && fs.existsSync(`./src/styles/${t}/${f}`);
  if (isCustom) o = Object.assign(o, require(`../src/styles/${t}/${f}`));
  return o;
};

const importFonts = fonts =>
  Object.entries(fonts)
  .map(([k, v]) => fs.readFileSync("./public/fonts/" + v, "utf-8"))
  .join("");

// theme files
const config = importStyleConfig(theme, "config.json");
const params = importStyleConfig(theme, "params.json");
const atoms = importStyleConfig(theme, "atoms.json");
const molecules = importStyleConfig(theme, "molecules.json");
const resets = importStyleConfig(theme, "resets.json");
const fonts = importStyleConfig(theme, "fonts.json");

// output
const stylesFile = `${config.name}.${config.version}.css`;

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
const compiledFonts = importFonts(fonts);
const compiledAtoms = compiler.compileRules(precompiledAtoms).join("");
const compiledMolecules = compiler.compileRules(precompiledMolecules).join("");
const compiledResets = compiler.compileRules(precompiledResets).join("");

// render
const styles = `${compiledFonts}${compiledResets}${compiledMolecules}${compiledAtoms}`;
fs.writeFileSync('./public/styles/' + stylesFile, styles);
if (theme === "base")
  fs.writeFileSync("./public/index.html", guide('styles/' + stylesFile));

// Running time
console.timeEnd("FEDS");