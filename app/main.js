const compiler = require("./compiler");
const fs = require("fs");
const theme = process.argv[2] || "../themes/base";

const importThemeFile = (t, f) => {
  const o = require(`../themes/base/${f}`);
  if (t !== "base") {
    try {
      o = Object.assign(o, require(`../themes/${t}/${f}`));
    } catch (err) {
      // noop
    }
  }
  return o;
};

const config = importThemeFile(theme, "config.json");
const params = importThemeFile(theme, "params.json");
const atoms = importThemeFile(theme, "atoms.json");
const molecules = importThemeFile(theme, "molecules.json");
const patterns = importThemeFile(theme, "patterns.json");
const resets = importThemeFile(theme, "resets.json");

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
const precompiledPatterns = compiler.precompilePatterns(patterns);
const compiledAtoms = compiler.compileRules(precompiledAtoms);
const compiledMolecules = compiler.compileRules(precompiledMolecules);
const compilePatterns = compiler.compilePatterns(precompiledPatterns);
const compiledResets = compiler.compileRules(precompiledResets);

// console.log(compiledResets);
// console.log(compiledMolecules);
// console.log(compiledAtoms);
// console.log(precompiledPatterns);

const styles =
  compiledResets.join("") + compiledMolecules.join("") + compiledAtoms.join("");
fs.writeFileSync(`./public/${config.name}.${config.version}.css`, styles);
