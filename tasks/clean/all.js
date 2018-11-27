const fse = require("fs-extra");
const util = require("../lib/util");
// setup
console.time(util.ok("Clean"));

fse.emptyDirSync("./public/guide");
fse.emptyDirSync("./public/fonts/icons");
fse.writeFileSync("./public/fonts/icons/README", "// icons");

// delete current build artifacts (don't delete old artifacts!)
fse.remove(`./public/styles/${util.buildName()}.css`);
fse.remove(`./public/styles/${util.buildLatestName()}.css`);
fse.remove(`./public/styles/${util.buildName()}.min.css`);
fse.remove(`./public/styles/${util.buildLatestName()}.min.css`);
fse.remove(`./public/scripts/${util.buildName()}.js`);
fse.remove(`./public/scripts/${util.buildLatestName()}.js`);
fse.remove(`./public/scripts/${util.buildName()}.js.map`);
fse.remove(`./public/scripts/${util.buildLatestName()}.js.map`);

// Running time
console.timeEnd(util.ok("Clean"));
