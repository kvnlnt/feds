const atoms = require("../atoms/atoms");

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