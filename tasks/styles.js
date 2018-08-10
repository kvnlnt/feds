const fs = require("fs");
const theme = process.argv[2] || "base";
const config = require("../package.json");
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
const params = importStyleConfig(theme, "params.json");
const atoms = importStyleConfig(theme, "atoms.json");
const molecules = importStyleConfig(theme, "molecules.json");
const resets = importStyleConfig(theme, "resets.json");
const fonts = importStyleConfig(theme, "fonts.json");

// precompile assets
const precompiledAtoms = precompileAtoms(
    atoms,
    interpolate,
    params
);

const precompiledMolecules = precompileMolecules(
    molecules,
    precompiledAtoms
);

const precompiledResets = precompileResets(resets);

// compile
const compiledFonts = importFonts(fonts);
const compiledAtoms = compileRules(precompiledAtoms).join("");
const compiledMolecules = compileRules(precompiledMolecules).join("");
const compiledResets = compileRules(precompiledResets).join("");

// render
const styles = `${compiledFonts}${compiledResets}${compiledMolecules}${compiledAtoms}`;

// output
const stylesFile = `${config.name}.${config.version}.css`;
const stylesFileLatest = `${config.name}.latest.css`;
fs.writeFileSync("./public/styles/" + stylesFile, styles);
fs.writeFileSync("./public/styles/" + stylesFileLatest, styles);

// Running time
console.timeEnd(color.ok("Styles"));