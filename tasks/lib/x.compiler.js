const fs = require("fs");
const config = require("../../feds.json");

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

const precompileMolecules = (molecules, precompileAtoms) => {
  return Object.keys(molecules).reduce((acc, curr) => {
    acc[curr] = [].concat(
      ...molecules[curr].map(c => {
        if (c.substring(0, 1) === ".") return precompileAtoms[c];
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

const compileFonts = (fonts) => importFonts(fonts);
const compileAtoms = (atoms, params) => compileRules(precompileAtoms(atoms, interpolate, params)).join("");
const compileMolecules = (molecules, atoms, params) =>  compileRules(precompileMolecules(molecules, precompileAtoms(atoms, interpolate, params))).join("");
const compileResets = (resets) => compileRules(precompileResets(resets)).join("");

module.exports = {
  compileFonts: compileFonts,
  compileAtoms: compileAtoms,
  compileMolecules: compileMolecules,
  compileResets: compileResets
};

