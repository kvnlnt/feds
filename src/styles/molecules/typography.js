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
  },
  pre: {
    ...atoms.text.pre
  },
  small: {
    ...atoms.text.size.s
  },
  strong: {
    ...atoms.text.font.primary.bold,
    em: {
      ...atoms.text.font.primary.bold.italic
    }
  }
};
