const compileRules = rules => Object.entries(rules).map(mapRule);
const mapRule = ([k, v]) => `${k} {\n${v.map(d => `  ${d}`).join(";\n")};\n}\n`;
const tmplPattern = require("../templates/pattern");
const tmplMenu = require("../templates/menu");

const interpolate = (val, params) => {
  const regVar = /\$\{.*?\}/;
  const regVarVal = /\$\{(.*?)\}/;
  if (!regVar.test(val)) return val;
  return val.replace(regVar, params[regVarVal.exec(val)[1]]);
};

const precompileAtoms = (atoms = {}, fn, params = {}) => {
  return Object.keys(atoms).reduce((acc, curr) => {
    acc[curr] = atoms[curr].map(a => fn(a, params));
    return acc;
  }, {});
};

const precompileMenu = patterns => Object.entries(patterns).map(([k, v]) => tmplMenu(v));

const precompileMolecules = (molecules, atoms) => {
  return Object.keys(molecules).reduce((acc, curr) => {
    acc[curr] = [].concat(...molecules[curr].map(c => atoms[c]));
    return acc;
  }, {});
};

const precompilePatterns = patterns => Object.entries(patterns).map(([k, v]) => tmplPattern(v));

const precompileResets = resets => {
  return Object.keys(resets).reduce((acc, curr) => {
    acc[curr] = resets[curr].map(a => a);
    return acc;
  }, {});
};

module.exports = {
  compileRules: compileRules,
  interpolate: interpolate,
  precompileAtoms: precompileAtoms,
  precompileMenu: precompileMenu,
  precompileMolecules: precompileMolecules,
  precompilePatterns: precompilePatterns,
  precompileResets: precompileResets
};