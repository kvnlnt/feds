const compileRules = rules => Object.entries(rules).map(mapRule);
const mapRule = ([k, v]) => `${k} { ${v.map(d => `${d}`).join(";")}; }\n`;

const interpolate = (val, params) => {
  const regVar = /\$\{.*?\}/;
  const regVarVal = /\$\{(.*?)\}/;
  if (!regVar.test(val)) return val;
  const param = `params["${regVarVal.exec(val)[1].split('.').join('"]["')}"]`;
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
    acc[curr] = [].concat(...molecules[curr].map(c => atoms[c]));
    return acc;
  }, {});
};

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
  precompileMolecules: precompileMolecules,
  precompileResets: precompileResets
};