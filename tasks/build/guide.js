const fs = require("fs");
const config = require("../../feds.json");
const color = require("../lib/color");
const build = `${config.version}.${config.build+1}`;
let tmpl = fs.readFileSync("./src/guide/index.html", "utf-8");
let reg = /<!--.*include:(.*).*-->/g;
const params = require(`../../src/styles/params.json`);
const atoms = require(`../../src/styles/atoms.json`);
const compiler = require("../lib/compiler");
const compiledAtoms = compiler.compileAtoms(atoms, params);

// setup
console.time(color.ok("Guide"));

// build
tmpl = tmpl.replace('<!-- VERSION -->', build);

// includes
let x;
while((x = reg.exec(tmpl)) !== null){
    tmpl = tmpl.replace(x[0], fs.readFileSync(`./src/guide/includes/${x[1].trim()}`));
}

// atoms
tmpl = tmpl.replace("<!-- ATOMS -->", compiledAtoms);

fs.writeFileSync("./public/index.html", tmpl, "utf-8");

// Running time
console.timeEnd(color.ok("Guide"));
