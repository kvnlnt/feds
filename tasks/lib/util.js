const util = require("util");
const fs = require("fs");
const config = require("../../package.json");

const ok = msg => {
  return "\x1b[32m✓\x1b[0m " + msg;
};
const error = msg => {
  return "\x1b[31mX\x1b[0m " + msg;
};
const buildName = () => {
  return `${config.name}.${config.version}`;
};
const buildLatestName = () => {
  return `${config.name}.latest`;
};
const buildTag = () => {
  return `${buildName()}.${config.build}`;
};
const readFile = async f => {
  return await util.promisify(fs.readFile)(f, "utf-8");
};

module.exports = {
  ok: ok,
  error: error,
  buildName: buildName,
  buildLatestName: buildLatestName,
  buildTag: buildTag,
  readFile: readFile
};
