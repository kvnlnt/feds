const atoms = require("../atoms/atoms");

module.exports = {
  a: {
    ...atoms.text.font.primary,
    ...atoms.text.color.primary.m,
    ...atoms.text.size.m,
    ...atoms.text.underline.none,
    ...atoms.display.inline.block,
    ...atoms.border.size.none
  }
};
