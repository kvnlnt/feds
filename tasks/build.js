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

// import style (& theme) files
const config = importStyleConfig(theme, "config.json");
const params = importStyleConfig(theme, "params.json");
const atoms = importStyleConfig(theme, "atoms.json");
const molecules = importStyleConfig(theme, "molecules.json");
const resets = importStyleConfig(theme, "resets.json");
const fonts = importStyleConfig(theme, "fonts.json");

// precompile assets
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
const scripts =
  fs.readFileSync("./src/scripts/namespacer.js", "utf-8") +
  fs.readFileSync("./src/scripts/Responsifier.js", "utf-8");

// output
const stylesFile = `${config.name}.${config.version}.css`;
const stylesFileLatest = `${config.name}.latest.css`;
const scriptFile = `${config.name}.${config.version}.js`;
const scriptFileLatest = `${config.name}.latest.js`;
fs.writeFileSync("./public/styles/" + stylesFile, styles);
fs.writeFileSync("./public/styles/" + stylesFileLatest, styles);
fs.writeFileSync("./public/scripts/" + scriptFile, scripts);
fs.writeFileSync("./public/scripts/" + scriptFileLatest, scripts);
if (theme === "base")
  fs.writeFileSync(
    "./public/index.html",
    guide("styles/" + stylesFileLatest, "scripts/" + scriptFileLatest)
  );

// Running time
console.timeEnd("FEDS");