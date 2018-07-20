const tmplIndex = require("../templates/index");
const fs = require("fs");
const menu = fs.readFileSync("./templates/menu.html", "utf-8");
const buttons = fs.readFileSync("./templates/buttons.html", "utf-8");
const colors = fs.readFileSync("./templates/colors.html", "utf-8");

const render = (stylesheet) => {
  const tmpl = tmplIndex(stylesheet, menu, colors + buttons);
  return tmpl;
};

module.exports = {
  render: render
};