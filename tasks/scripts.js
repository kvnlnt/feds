const fs = require("fs");
const config = require("../package.json");
const color = require("./lib/color");

// setup
console.time(color.ok("Scripts"));

const code = {
    ContainerQuery: fs.readFileSync("./src/scripts/ContainerQuery.js", "utf-8"),
    Responsifier: fs.readFileSync("./src/scripts/Responsifier.js", "utf-8")
};

// requires: require and module.exports
// works in: node only
const WrapInCommonJs = () => `${code.ContainerQuery}${code.Responsifier}
module.exports = {
    ContainerQuery: ContainerQuery,
    Responsifier: Responsifier
};`;

// requires: define function
// works in: browser
const WrapInAMD = () => `
define('feds', [], 
function () {
    ${code.ContainerQuery}
    ${code.Responsifier}
    var module = {
        ContainerQuery: ContainerQuery,
        Responsifier: Responsifier
    };
    return module;
});`;

// requires: import 
// works in: some browsers (but should be transpiled to es5)
const WrapInEs6 = () => `
export ${code.ContainerQuery}
export ${code.Responsifier}`;

fs.writeFileSync(`./public/scripts/${config.name}.common.${config.version}.js`, WrapInCommonJs());
fs.writeFileSync(`./public/scripts/${config.name}.common.latest.js`, WrapInCommonJs());
fs.writeFileSync(`./public/scripts/${config.name}.amd.${config.version}.js`, WrapInAMD());
fs.writeFileSync(`./public/scripts/${config.name}.amd.latest.js`, WrapInAMD());
fs.writeFileSync(`./public/scripts/${config.name}.es6.${config.version}.js`, WrapInEs6());
fs.writeFileSync(`./public/scripts/${config.name}.es6.latest.js`, WrapInEs6());

// Running time
console.timeEnd(color.ok("Scripts"));