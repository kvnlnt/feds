const atoms = require("../atoms/_atoms");

module.exports = {
  ".box": {
    ...atoms[".pad-s"],
    ...atoms[".shadow-s"],
    ...atoms[".bg-color-white"]
  }
};
