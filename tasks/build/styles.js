const fs = require("fs");
const config = require("../../package");
const util = require("../lib/util");
const stylus = require("stylus");
const main = fs.readFileSync("./src/styles/main.styl", "utf-8");

// setup
console.time(util.ok("Styles"));

const styles = stylus(main)
  .set("filename", `${util.buildName()}.css`)
  .set("sourcemap", {});

styles.render((err, css) => {
  if (err) throw err;
  fs.writeFileSync(`./public/styles/${util.buildName()}.css`, css);
  fs.writeFileSync(
    `./public/styles/${util.buildName()}.css.map`,
    JSON.stringify(styles.sourcemap)
  );
  fs.writeFileSync(`./public/styles/${util.buildLatestName()}.css`, css);
});

// Running time
console.timeEnd(util.ok("Styles"));
