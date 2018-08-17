const color = require("./lib/color");
const pkg = require("../package.json");
if (pkg.build !== pkg.test) {
  console.log(color.error("Tests Invalid"));
  process.exit(1);
} else {
  console.log(color.ok("Tests OK"));
  process.exit(0);
}
