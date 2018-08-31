require("./guide");
require("./styles");
require("./scripts");

// increment build
const color = require("./lib/color");
const fs = require("fs");
const config = require("../feds.json");
config.build += 1;
fs.writeFileSync("./feds.json", JSON.stringify(config, null, 2), "utf-8");
console.log(color.ok("Build: " + config.build));
