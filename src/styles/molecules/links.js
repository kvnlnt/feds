const atoms = require("../atoms/atoms");

module.exports = {
  link: {
    ...atoms.text.font.primary,
    ...atoms.text.color.primary,
    ...atoms.text.size.m,
    ...atoms.text.underline.none,
    ...atoms.display.inline.block,
    ...atoms.border.size.none
  }
};

// "a": [
//   ".text-font",
//   ".text-color-primary",
//   ".cursor-pointer",
//   ".text-size-m",
//   ".text-underline-none",
//   ".inline-block",
//   ".bdr-none"
// ],
