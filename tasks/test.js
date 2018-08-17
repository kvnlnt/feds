const fs = require("fs");
const createTestCafe = require("testcafe");
const report = fs.createWriteStream("tests/report.json");
const pkg = require("../package.json");
let testcafe = null;

createTestCafe("localhost", 1337, 1338)
  .then(tc => {
    testcafe = tc;
    return testcafe
      .createRunner()
      .src(["tests/*.js"])
      .browsers(["chrome"])
      .reporter("json", report)
      .run();
  })
  .then(failedCount => {
    console.log("Tests failed: " + failedCount);
    if (failedCount > 0) {
      pkg.test = false;
    } else {
      pkg.test = pkg.build;
    }
    fs.writeFileSync("./package.json", JSON.stringify(pkg, null, 2), "utf-8");
    testcafe.close();
  });
