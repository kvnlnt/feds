const util = require("../lib/util");
const config = require("../../package.json");
if (config.build !== config.test) {
  console.log(
    util.error(
      "ERROR: Test and build number don't match. Run 'npm test' locally. Upon success the test number will be updatd to match the build number. Commit your results and push."
    )
  );
  process.exit(1);
} else {
  console.log(util.ok("Tests OK"));
  process.exit(0);
}
