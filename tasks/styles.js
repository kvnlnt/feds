const fs = require("fs");
const config = require("../feds.json");
const color = require("./lib/color");

// setup
console.time(color.ok("Styles"));

// compiling
const compileRules = rules => Object.entries(rules).map(mapRule);
const mapRule = ([k, v]) => `${k} { ${v.map(d => `${d}`).join(";")}; }\n`;

const interpolate = (val, params) => {
  const regVar = /\$\{.*?\}/;
  const regVarVal = /\$\{(.*?)\}/;
  if (!regVar.test(val)) return val;
  const param = `params["${regVarVal
    .exec(val)[1]
    .split(".")
    .join('"]["')}"]`;
  return val.replace(regVar, eval(param));
};

const precompileAtoms = (atoms = {}, fn, params = {}) => {
  return Object.keys(atoms).reduce((acc, curr) => {
    acc[curr] = atoms[curr].map(a => fn(a, params));
    return acc;
  }, {});
};

const precompileMolecules = (molecules, atoms) => {
  return Object.keys(molecules).reduce((acc, curr) => {
    acc[curr] = [].concat(
      ...molecules[curr].map(c => {
        if (c.substring(0, 1) === ".") return atoms[c];
        return [c];
      })
    );
    return acc;
  }, {});
};

const precompileResets = resets => {
  return Object.keys(resets).reduce((acc, curr) => {
    acc[curr] = resets[curr].map(a => a);
    return acc;
  }, {});
};

const importFonts = fonts =>
  Object.entries(fonts)
    .map(([k, v]) => fs.readFileSync("./public/fonts/" + v, "utf-8"))
    .join("");

// import style (& theme) files
const params = require(`../src/styles/params.json`);
const atoms = require(`../src/styles/atoms.json`);
const molecules = require(`../src/styles/molecules.json`);
const resets = require(`../src/styles/resets.json`);
const fonts = require(`../src/styles/fonts.json`);

// precompile assets
const precompiledAtoms = precompileAtoms(atoms, interpolate, params);
const precompiledMolecules = precompileMolecules(molecules, precompiledAtoms);
const precompiledResets = precompileResets(resets);

// compile
const compiledFonts = importFonts(fonts);
const compiledAtoms = compileRules(precompiledAtoms).join("");
const compiledMolecules = compileRules(precompiledMolecules).join("");
const compiledResets = compileRules(precompiledResets).join("");

// render
const styles = `/* Build: ${config.name}.${config.version}.${config.build+1} */\n${compiledFonts}${compiledResets}${compiledMolecules}${compiledAtoms}`;

// output
const stylesFile = `${config.name}.${config.version}.css`;
const stylesFileLatest = `${config.name}.latest.css`;
fs.writeFileSync("./public/styles/" + stylesFile, styles);
fs.writeFileSync("./public/styles/" + stylesFileLatest, styles);

// Running time
console.timeEnd(color.ok("Styles"));
