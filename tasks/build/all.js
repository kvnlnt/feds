require("./styles");
require("./scripts");
require("./guide");

// increment build
const util = require("../lib/util");
const fs = require("fs");
const config = require("../../feds");
config.build += 1;
const recreatedFedsJs = `module.exports = ${JSON.stringify(config, null, 2)}`;
fs.writeFileSync("./feds.js", recreatedFedsJs, "utf-8");
console.log(util.ok("Build: " + config.build));