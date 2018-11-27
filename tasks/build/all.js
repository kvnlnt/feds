const fs = require("fs");
const util = require("../lib/util");
const config = require("../../package.json");
config.build += 1;
fs.writeFileSync("./package.json", JSON.stringify(config, null, 2), "utf-8");
fs.writeFileSync("./src/scripts/version.js", `export default "${config.version}.${config.build}";`, "utf-8");
require("./icons");
require("./styles");
require("./scripts");
require("./guide");

console.log(util.ok("Build: " + config.build));
