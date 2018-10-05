const fse = require("fs-extra");
const util = require("../lib/util");

// setup
console.time(util.ok("Clean"));

fse.emptyDirSync("./public/fonts/icons");
fse.writeFileSync("./public/fonts/icons/README", "// icons");

// Running time
console.timeEnd(util.ok("Clean"));