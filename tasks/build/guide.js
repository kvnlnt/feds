const fs = require("fs");
const config = require("../../feds");
const util = require("../lib/util");
const build = `${config.version}.${config.build + 1}`;
const compiler = require("../lib/compiler");
const atoms = require("../../src/atoms/_atoms.js");
const compiledAtoms = compiler.compileJavascriptToCSS(atoms);
const partialMenu = fs.readFileSync("./src/guide/partials/menu.html");
let tmpl = fs.readFileSync("./src/guide/template.html", "utf-8");

// setup
console.time(util.ok("Guide"));

// version
tmpl = tmpl.replace("<!-- data:version -->", build);

// pages
const renderPage = (partialFile, t, outFile = null) => {
  if (outFile === null) outFile = partialFile;
  fs.readFile(
    `./src/guide/partials/${partialFile}`,
    "utf-8",
    (err, partialContent) => {
      if (err) throw err;
      partialContent = partialContent.replace(
        "<!-- partial:atoms -->",
        compiledAtoms
      );
      t = t.replace("<!-- partial:menu -->", partialMenu);
      t = t.replace("<!-- partial:content -->", partialContent);
      fs.writeFile(`./public/guide/${outFile}`, t, err => {
        if (err) throw err;
        `./public/guide/${outFile}`;
      });
    }
  );
  return;
};

renderPage("about.html", tmpl, "index.html");
renderPage("about.html", tmpl);
renderPage("atoms.html", tmpl);
renderPage("buttons.html", tmpl);
renderPage("cards.html", tmpl);
renderPage("colors.html", tmpl);
renderPage("columns.html", tmpl);
renderPage("compatibility.html", tmpl);
renderPage("compliance.html", tmpl);
renderPage("concepts.html", tmpl);
renderPage("forms.html", tmpl);
renderPage("icons.html", tmpl);
renderPage("indicators.html", tmpl);
renderPage("lists.html", tmpl);
renderPage("menu.html", tmpl);
renderPage("messaging.html", tmpl);
renderPage("modals.html", tmpl);
renderPage("navigations.html", tmpl);
renderPage("polyfills.html", tmpl);
renderPage("refactoring.html", tmpl);
renderPage("reifier.html", tmpl);
renderPage("repo.html", tmpl);
renderPage("responsifier.html", tmpl);
renderPage("tables.html", tmpl);
renderPage("tabs.html", tmpl);
renderPage("testing.html", tmpl);
renderPage("tooltip.html", tmpl);
renderPage("typography.html", tmpl);

// Running time
console.timeEnd(util.ok("Guide"));