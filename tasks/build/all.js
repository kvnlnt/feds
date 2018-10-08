require("./fonts");
require("./styles");
require("./scripts");
require("./guide");

// increment build
const util = require("../lib/util");
const fs = require("fs");
const config = require("../../feds.json");
config.build += 1;
fs.writeFileSync("./feds.json", JSON.stringify(config, null, 2), "utf-8");
console.log(util.ok("Build: " + config.build));
