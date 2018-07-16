const fs = require("fs");
const theme = process.argv[2] || "./themes/base";
const config = require(`${theme}/config.json`);
const params = require(`${theme}/params.json`);
const atoms = require(`${theme}/atoms.json`);
const molecules = require(`${theme}/molecules.json`);
const patterns = require(`${theme}/patterns.json`);
const resets = require(`${theme}/resets.json`);

const compileRules = rules => Object.entries(rules).map(mapRule);
const mapRule = ([k, v]) => `${k}{${v.map(d => `${d}`).join(";")};}`;
const mapPattern = ([k, v]) => `
  <h2>${v.name}</h2>
  <div>${v.desc ? v.desc : ""}</div>
  <div>${v.markup}</div>
`;

const interpolate = (val, params) => {
  const regVar = /\$\{.*?\}/;
  const regVarVal = /\$\{(.*?)\}/;
  return val.replace(regVar, params[regVarVal.exec(val)[1]]);
};

const precompileAtoms = (atoms = {}, fn, params = {}) => {
  return Object.keys(atoms).reduce((acc, curr) => {
    acc[curr] = atoms[curr].map(a => fn(a, params));
    return acc;
  }, {});
};

const precompileMolecules = (molecules, atoms) => {
  return Object.keys(molecules).reduce((acc, curr) => {
    acc[curr] = [].concat(...molecules[curr].map(c => atoms[c]));
    return acc;
  }, {});
};

const precompilePatterns = patterns => Object.entries(patterns).map(mapPattern);

const precompileResets = resets => {
  return Object.keys(resets).reduce((acc, curr) => {
    acc[curr] = resets[curr].map(a => a);
    return acc;
  }, {});
};

const precompiledAtoms = precompileAtoms(atoms, interpolate, params);
const precompiledMolecules = precompileMolecules(molecules, precompiledAtoms);
const precompiledResets = precompileResets(resets);
const precompiledPatterns = precompilePatterns(patterns);
const compiledAtoms = compileRules(precompiledAtoms);
const compiledMolecules = compileRules(precompiledMolecules);
// const compilePatterns = compilePatterns(precompiledPatterns);
const compiledResets = compileRules(precompiledResets);

// console.log(compiledResets);
// console.log(compiledMolecules);
// console.log(compiledAtoms);
console.log(precompiledPatterns);

const styles =
  compiledResets.join("") + compiledMolecules.join("") + compiledAtoms.join("");
fs.writeFileSync(`./public/${config.name}.${config.version}.css`, styles);
