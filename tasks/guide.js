const tmplIndex = require("../patterns/index");
const fs = require("fs");
const menu = fs.readFileSync("./patterns/menu.html", "utf-8");
const buttons = fs.readFileSync("./patterns/buttons.html", "utf-8");
const colors = fs.readFileSync("./patterns/colors.html", "utf-8");
const typography = fs.readFileSync("./patterns/typography.html", "utf-8");

const render = stylesheet => {
  const tmpl = tmplIndex(stylesheet, menu, buttons + colors + typography);
  return tmpl;
};

module.exports = {
  render: render
};