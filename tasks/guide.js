const fs = require("fs");
let index = fs.readFileSync("./patterns/index.html", "utf-8");

module.exports = stylesheet => {
  index = index.replace('<!-- STYLESHEET -->', stylesheet);
  index = index.replace('<!-- BUTTONS -->', fs.readFileSync("./patterns/buttons.html", "utf-8"));
  index = index.replace('<!-- MENU -->', fs.readFileSync("./patterns/menu.html", "utf-8"));
  index = index.replace('<!-- COLORS -->', fs.readFileSync("./patterns/colors.html", "utf-8"));
  index = index.replace('<!-- TYPOGRAPHY -->', fs.readFileSync("./patterns/typography.html", "utf-8"));
  return index;
};