const config = require("../../package.json");
const util = require("../lib/util");
const build = `// Build: ${config.name}.${config.version}.${config.build}\n`;
const babel = require("rollup-plugin-babel");

console.time(util.ok("Scripts"));

require("rollup")
  .rollup({
    input: "./src/scripts/main.js",
    plugins: [
      babel({
        minified: false,
        compact: false,
        babelrc: false,
        exclude: "node_modules/**",
        sourceMap: true,
        presets: [
          [
            "@babel/preset-env",
            {
              modules: false
            }
          ]
        ]
      })
    ]
  })
  .then(bundle =>
    bundle.generate({
      format: "iife",
      output: {
        name: "Feds",
        sourcemap: true
      }
    })
  )
  .then(result => {
    const path = "./public/scripts/";
    const versionFile = `${util.buildName()}.js`;
    const latestFile = `${util.buildLatestName()}.js`;
    const versionCode = `// ${util.buildTag()}\n${result.code}//# sourceMappingURL=${versionFile}.map`;
    const latestCode = `// ${util.buildTag()}\n${result.code}//# sourceMappingURL=${latestFile}.map`;
    require("fs").writeFileSync(`${path}${versionFile}`, versionCode);
    require("fs").writeFileSync(`${path}${versionFile}.map`, `${result.map}`);
    require("fs").writeFileSync(`${path}${latestFile}`, latestCode);
    require("fs").writeFileSync(`${path}${latestFile}.map`, `${result.map}`);
  })
  .then(null, err => console.error(err));

console.timeEnd(util.ok("Scripts"));
