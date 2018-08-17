require("./styles");
require("./scripts");

// increment build
const color = require("./lib/color");
const fs = require("fs");
const pkg = require("../package.json");
pkg.build += 1;
fs.writeFileSync("./package.json", JSON.stringify(pkg, null, 2), "utf-8");
console.log(color.ok("Build: " + pkg.build));
