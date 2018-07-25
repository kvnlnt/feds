const fs = require("fs");
let index = fs.readFileSync("./src/patterns/index.tmpl", "utf-8");

module.exports = stylesheet => {
  index = index.replace('<!-- STYLESHEET -->', stylesheet);
  index = index.replace('<!-- BUTTONS -->', fs.readFileSync("./src/patterns/buttons.html", "utf-8"));
  index = index.replace('<!-- MENU -->', fs.readFileSync("./src/patterns/menu.html", "utf-8"));
  index = index.replace('<!-- COLORS -->', fs.readFileSync("./src/patterns/colors.html", "utf-8"));
  index = index.replace('<!-- TYPOGRAPHY -->', fs.readFileSync("./src/patterns/typography.html", "utf-8"));
  return index;
};