const util = require("util");
const fs = require("fs");

const ok = msg => {
  return "\x1b[32m✓\x1b[0m " + msg;
};
const error = msg => {
  return "\x1b[31mX\x1b[0m " + msg;
};
const readFile = async f => {
  return await util.promisify(fs.readFile)(f, "utf-8");
};

module.exports = {
  ok: ok,
  error: error,
  readFile: readFile
};
