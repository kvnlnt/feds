const fs = require("fs");
const config = require("../../feds.json");
const util = require("../lib/util");
const build = `// Build: ${config.name}.${config.version}.${config.build + 1}`;

// setup
console.time(util.ok("Scripts"));

const code = Object.keys(config.scripts).reduce((acc, curr) => {
  acc[curr] = fs.readFileSync(config.scripts[curr], "utf-8");
  return acc;
}, {});

// IIFE: Browser only
const WrapInIIFE = () => `${build}
var feds = (function(m){

${code.ContainerQuery}\n
${code.Reifier}\n
${code.Responsifier}

m.ContainerQuery = ContainerQuery;
m.Reifier = Reifier;
m.Responsifier = Responsifier;
return m;
}(feds || {}))`;

// CommonJS: Node only
const WrapInCommonJs = () => `${build}
${code.ContainerQuery}
${code.Reifier}
${code.Responsifier}

module.exports = {
  ContainerQuery: ContainerQuery,
  Reifier: Reifier,
  Responsifier: Responsifier
};`;

// AMD: Browser only, with AMD
const WrapInAMD = () => `${build}
define('feds', [], 
function () {
  
${code.ContainerQuery}
${code.Reifier}
${code.Responsifier}

var module = {
    ContainerQuery: ContainerQuery,
    Reifier: Reifier,
    Responsifier: Responsifier
};
return module;
});`;

// ESM: Browsers only (via Bundler)
const WrapInEs6 = () => `${build}
export ${code.ContainerQuery}
export ${code.Reifier}
export ${code.Responsifier}`;

fs.writeFileSync(
  `./public/scripts/${config.name}.iife.${config.version}.js`,
  WrapInIIFE()
);
fs.writeFileSync(
  `./public/scripts/${config.name}.iife.latest.js`,
  WrapInIIFE()
);
fs.writeFileSync(
  `./public/scripts/${config.name}.common.${config.version}.js`,
  WrapInCommonJs()
);
fs.writeFileSync(
  `./public/scripts/${config.name}.common.latest.js`,
  WrapInCommonJs()
);
fs.writeFileSync(
  `./public/scripts/${config.name}.amd.${config.version}.js`,
  WrapInAMD()
);
fs.writeFileSync(`./public/scripts/${config.name}.amd.latest.js`, WrapInAMD());
fs.writeFileSync(
  `./public/scripts/${config.name}.es6.${config.version}.js`,
  WrapInEs6()
);
fs.writeFileSync(`./public/scripts/${config.name}.es6.latest.js`, WrapInEs6());

// Running time
console.timeEnd(util.ok("Scripts"));
