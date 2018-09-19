const fs = require("fs");
const config = require("../../feds.json");
const util = require("../lib/util");
const build = `${config.version}.${config.build + 1}`;
const compiler = require("../lib/compiler");
const atoms = require("../../src/styles/atoms/atoms.js");
const compiledAtoms = compiler.compileJavascriptToCSS(atoms);
let tmpl = fs.readFileSync("./src/guide/index.html", "utf-8");
let reg = /<!--.*include:(.*).*-->/g;

// setup
console.time(util.ok("Guide"));

// build
tmpl = tmpl.replace("<!-- VERSION -->", build);

// includes
let x;
while ((x = reg.exec(tmpl)) !== null) {
  tmpl = tmpl.replace(
    x[0],
    fs.readFileSync(`./src/guide/includes/${x[1].trim()}`)
  );
}

// atoms
// tmpl = tmpl.replace("<!-- ATOMS -->", compiledAtoms);

fs.writeFileSync("./public/index.html", tmpl, "utf-8");

// Running time
console.timeEnd(util.ok("Guide"));
