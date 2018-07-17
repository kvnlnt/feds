const compilePatterns = patterns => patterns;
const compileRules = rules => Object.entries(rules).map(mapRule);
const mapRule = ([k, v]) => `${k} {\n${v.map(d => `  ${d}`).join(";\n")};\n}\n`;
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

module.exports = {
  compilePatterns: compilePatterns,
  compileRules: compileRules,
  interpolate: interpolate,
  precompileAtoms: precompileAtoms,
  precompileMolecules: precompileMolecules,
  precompilePatterns: precompilePatterns,
  precompileResets: precompileResets
};
