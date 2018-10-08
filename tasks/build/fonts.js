const webfontsGenerator = require("webfonts-generator");
const util = require("../lib/util");
const fs = require("fs");

const navIcons = fs
  .readdirSync("./src/fonts/icons/nav")
  .map(i => `./src/fonts/icons/nav/${i}`);
const commonIcons = fs
  .readdirSync("./src/fonts/icons/common")
  .map(i => `./src/fonts/icons/common/${i}`);
const icons = [...navIcons, ...commonIcons];

// setup
console.time(util.ok("Fonts"));

webfontsGenerator({
    files: icons,
    dest: "./public/fonts/icons",
    cssFontsUrl: "../fonts/icons",
    cssDest: "./src/common/css/icons.css",
    html: true,
    htmlDest: "./src/guide/partials/icons.html",
    htmlTemplate: "./src/fonts/icons/template.hbs",
    types: ["svg", "ttf", "woff", "woff2", "eot"]
  },
  function (error) {
    if (error) {
      console.log("Fail!", error);
    }
  }
);

// Running time
console.timeEnd(util.ok("Fonts"));