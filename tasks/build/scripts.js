const fs = require("fs");
const config = require("../../feds.json");
const color = require("../lib/color");
const build = `// Build: ${config.name}.${config.version}.${config.build+1}`;

// setup
console.time(color.ok("Scripts"));

const code = Object.keys(config.scripts).reduce((acc, curr) => {
  acc[curr] = fs.readFileSync(config.scripts[curr], "utf-8");
  return acc;
}, {});

// IIFE: Browser only
const WrapInIIFE = () => `${build}
var feds = (function(m){

${code.ContainerQuery}\n
${code.Reifier}\n
${code.Responsifier}\n
${code.Tooltip}

m.ContainerQuery = ContainerQuery;
m.Reifier = Reifier;
m.Responsifier = Responsifier;
m.Tooltip = Tooltip;
return m;
}(feds || {}))`;

// CommonJS: Node only
const WrapInCommonJs = () => `${build}
${code.ContainerQuery}
${code.Reifier}
${code.Responsifier}
${code.Tooltip}

module.exports = {
  ContainerQuery: ContainerQuery,
  Reifier: Reifier,
  Responsifier: Responsifier,
  Tooltip: Tooltip
};`;

// AMD: Browser only, with AMD
const WrapInAMD = () => `${build}
define('feds', [], 
function () {
  
${code.ContainerQuery}
${code.Reifier}
${code.Responsifier}
${code.Tooltip}

var module = {
    ContainerQuery: ContainerQuery,
    Reifier: Reifier,
    Responsifier: Responsifier,
    Tooltip: Tooltip
};
return module;
});`;

// ESM: Browsers only (via Bundler)
const WrapInEs6 = () => `${build}
export ${code.ContainerQuery}
export ${code.Reifier}
export ${code.Responsifier}
export ${code.Tooltip}`;

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
console.timeEnd(color.ok("Scripts"));