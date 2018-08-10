const fs = require("fs");
let index = fs.readFileSync("./src/patterns/index.tmpl", "utf-8");
const config = require("../package.json");
const stylesFile = `${config.name}.${config.version}.css`;
const stylesFileLatest = `${config.name}.latest.css`;
const scriptFile = `${config.name}.${config.version}.js`;
const scriptFileLatest = `${config.name}.latest.js`;
const color = require("./lib/color");
const theme = process.argv[2] || "base";

// setup
console.time(color.ok("Guide"));

const guide = (stylesheet, script) => {
    index = index.replace("<!-- STYLESHEET -->", stylesheet);
    index = index.replace("<!-- SCRIPT -->", script);
    index = index.replace(
        "<!-- BUTTONS -->",
        fs.readFileSync("./src/patterns/buttons.html", "utf-8")
    );
    index = index.replace(
        "<!-- COLORS -->",
        fs.readFileSync("./src/patterns/colors.html", "utf-8")
    );
    index = index.replace(
        "<!-- GRIDS -->",
        fs.readFileSync("./src/patterns/grids.html", "utf-8")
    );
    index = index.replace(
        "<!-- ICONS -->",
        fs.readFileSync("./src/patterns/icons.html", "utf-8")
    );
    index = index.replace(
        "<!-- MENU -->",
        fs.readFileSync("./src/patterns/menu.html", "utf-8")
    );
    index = index.replace(
        "<!-- RESPONSIFIER -->",
        fs.readFileSync("./src/patterns/responsifier.html", "utf-8")
    );
    index = index.replace(
        "<!-- TYPOGRAPHY -->",
        fs.readFileSync("./src/patterns/typography.html", "utf-8")
    );
    return index;
};

if (theme === "base")
    fs.writeFileSync(
        "./public/index.html",
        guide("styles/" + stylesFileLatest, "scripts/" + scriptFileLatest)
    );

// Running time
console.timeEnd(color.ok("Guide"));