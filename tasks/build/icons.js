const webfontsGenerator = require("webfonts-generator");
const util = require("../lib/util");
const fs = require("fs");

const navIcons = fs
  .readdirSync("./src/styles/icons/nav")
  .map(i => `./src/styles/icons/nav/${i}`);
const commonIcons = fs
  .readdirSync("./src/styles/icons/common")
  .map(i => `./src/styles/icons/common/${i}`);
const icons = [...navIcons, ...commonIcons];

// setup
console.time(util.ok("Icons"));

webfontsGenerator(
  {
    files: icons,
    dest: "./public/fonts/icons",
    cssDest: "./public/fonts/icons/iconfont.css",
    html: true,
    htmlDest: "./src/guide/pages/atoms/icons.hbs",
    htmlTemplate: "./src/styles/icons/template.hbs",
    types: ["svg", "ttf", "woff", "woff2", "eot"]
  },
  function(error) {
    if (error) {
      console.log("Fail!", error);
      process.exit(1);
    }
  }
);

// Running time
console.timeEnd(util.ok("Icons"));
