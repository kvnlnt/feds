const tmplIndex = require("../templates/index");
const tmplPattern = require("../templates/pattern");
const tmplMenu = require("../templates/menu");

const renderPattern = ([k, v]) => `<h3>${v.name}</h3><div>${v.markup}</div>`;
const renderSection = ([k, v]) => `<section><h2>${k}</h2>${Object.entries(v).map(renderPattern).join('')}</section>`;

const render = (stylesheet, patterns) => {
    const menu = Object.entries(patterns).map(([k, v]) => tmplMenu(k));
    const sections = Object.entries(patterns).map(renderSection);
    const tmpl = tmplIndex(stylesheet, menu, sections);
    return tmpl;
};

module.exports = {
    render: render
};