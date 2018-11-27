const fs = require("fs");
const fse = require("fs-extra");
const config = require("../../package");
const util = require("../lib/util");
const guide = require("../../src/guide/guide.json");
const data = { ...{ config: config }, ...{ guide: guide } };
const cheerio = require("cheerio");
const hb = require("handlebars");
const wfs = fse.outputFileSync;
const cfs = fse.copyFileSync;
const rfs = fs.readFileSync;

// handlebars helpers
hb.registerHelper("page", function(options) {
  let page = ``;
  page += `<section id="${options.hash.title}">`;
  if (options.hash.section)
    page += `<a 
    href="/guide/${options.hash.section.toLowerCase()}" 
    class="button text-size-s font-style-uppercase bg-color-grey-l border-radius-none border-size-none leading-s">
    ${options.hash.section}</a>`;
  page += `<h2 class="guide ${options.hash.section ? "margin-top-2xl" : ""}">${options.hash.title}</h2>`;
  if (options.hash.source)
    page += `<a href="${guide.repo}${options.hash.source}" target="blank">${options.hash.source}</a>`;
  page += `${options.fn(this)}</section>`;
  return page;
});

hb.registerPartial(
  "header",
  `{{#if title}}<h3 class="margin-top-xl margin-bot-none" id="{{title}}">{{title}}</h3>{{/if}}
  <p class="text-size-xs opacity-70 margin-top-none margin-bot-xs">
  {{#if source}}<a href="{{guide.repo}}{{source}}" target="blank">{{source}}</a></p>{{/if}}
  <p class="margin-top-xs margin-bot-l">{{{descr}}}</p>`
);

hb.registerHelper("example", function(options) {
  const flex = options.hash.flex === false ? false : true;
  const title = options.hash.title ? `<h4 class="margin-bot-none">${options.hash.title}</h4>` : "";
  const descr = options.hash.descr ? `<p class="margin-top-xs">${options.hash.descr}</p>` : "";
  const example = `<div class="shadow pad-2xl bg-color-white pos-relative">
  <div class="${flex ? "flex flex-wrap" : ""}">${options.fn(this)}</div></div>`;
  const code = options.hash.code ? `<pre><code data-language="html">${options.fn(this)}</code></pre>` : "";
  return `
  ${title}
  ${descr}
  ${example}
  ${code}
  `;
});

hb.registerHelper("code", function(options) {
  return `<pre><code data-language="html">${options.fn(this)}</code></pre>`;
});

hb.registerHelper("col-4", function(options) {
  return `<div class="width-full tablet:width-1/2 desktop:width-1/4">
  <div class="margin-s">${options.fn(this)}</div></div>`;
});

// main template
let tmpl = rfs("./src/guide/template.html", "utf-8");

// setup
console.time(util.ok("Guide"));

// sections
const render = i => {
  const $t = cheerio.load(tmpl, { decodeEntities: false });
  $t("#content").html(rfs(i.src, "utf-8"));
  wfs("public" + i.link, hb.compile($t.html())(data));
};
guide.pages.general.forEach(render);
guide.pages.atoms.forEach(render);
guide.pages.elements.forEach(render);

// home page
cfs("./src/guide/guide.css", "./public/guide/guide.css");
cfs("./src/guide/guide.js", "./public/guide/guide.js");

// Running time
console.timeEnd(util.ok("Guide"));
