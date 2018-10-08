const fs = require("fs");
const config = require("../../feds");
const util = require("../lib/util");
const build = `// Build: ${config.name}.${config.version}.${config.build + 1}`;

let sourceCode = [
  // vendor scripts
  // library scripts
  ["Responsifier", './src/common/js/Responsifier.js'],
  ["Reifier", './src/common/js/Reifier.js'],
  ["EventBus", './src/common/js/EventBus.js'],
  // components
  ["Modal", './src/components/modals/component.js'],

];

// setup
console.time(util.ok("Scripts"));

const code = sourceCode.map(i => {
  return {
    name: i[0],
    code: fs.readFileSync(i[1], "utf-8")
  }
});

// IIFE: Browser only
const WrapInIIFE = () => `${build}
var feds = (function(m){

${code.map(i => `${i.code}`).join("\n")}

${code.map(i => `m.${i.name} = ${i.name};`).join("\n")}

return m;
}(feds || {}))`;

// CommonJS: Node only
const WrapInCommonJs = () => `${build}

${code.map(i => `${i.code}`).join("\n")}

module.exports = {
${code.map(i => `${i.name}:${i.name}`).join(",\n")}
};`;

// AMD: Browser only, with AMD
const WrapInAMD = () => `${build}
define('feds', [],
function () {

${code.map(i => `${i.code}`).join("\n")}

var module = {
${code.map(i => `${i.name}:${i.name}`).join(",\n")}
};
return module;
});`;

// ESM: Browsers only (via Bundler)
const WrapInEs6 = () => `${build}
${code.map(i => `export ${i.code}`).join("\n")}`;

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