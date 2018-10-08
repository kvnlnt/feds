const util = require("../lib/util");
const config = require("../../feds");
if (config.build !== config.test) {
  console.log(util.error("Tests Invalid"));
  process.exit(1);
} else {
  console.log(util.ok("Tests OK"));
  process.exit(0);
}