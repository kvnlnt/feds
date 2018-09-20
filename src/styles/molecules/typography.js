const atoms = require("../atoms/atoms");

module.exports = {
  p: {
    ...atoms.text.font.primary,
    ...atoms.text.size.m,
    ...atoms.text.height.m,
    ...atoms.text.space.xs,
    ...atoms.margin.top.s,
    ...atoms.margin.bot.s
  },
  code: {
    ...atoms.text.font.monospace,
    ...atoms.text.size.s
  }
};

// "code": [".text-font-monospace", ".text-size-s"],
// "p": [
//   ".text-font",
//   ".text-size-m",
//   ".text-height-m",
//   ".text-space-xs",
//   ".margin-vert-s"
// ],
// "pre": [".text-preformat"],
// "blockquote": [""],
// "small": [".text-size-s"],
//   "strong": [".text-font-bold"],
//   "strong > em, em > strong": [".text-font-bold-italic"],
