const atoms = require("../atoms/atoms");

module.exports = {
  ".box": {
    ...atoms[".pad-s"],
    ...atoms[".shadow-s"],
    ...atoms[".bg-color-white"]
  }
};