const color = require("../lib/color");
const config = require("../../feds.json");
if (config.build !== config.test) {
  console.log(color.error("Tests Invalid"));
  process.exit(1);
} else {
  console.log(color.ok("Tests OK"));
  process.exit(0);
}
