const atoms = require("../atoms/_atoms");

module.exports = {
  "ul, ol": {
    ...atoms[".text-height-m"],
    ...atoms[".text-size-m"]
  },
  "ul > li, ol > li": {
    ...atoms[".text-height-m"],
    ...atoms[".text-size-m"]
  }
};