const atoms = require("../atoms/atoms");

module.exports = {
  a: {
    ...atoms[".text-color-primary"],
    ...atoms[".text-size-m"],
    ...atoms[".text-underline-none"],
    ...atoms[".display-inline-block"],
    ...atoms[".border-size-none"],
    ...atoms[".cursor-pointer"]
  }
};
