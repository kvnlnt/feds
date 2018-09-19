const atoms = require("../atoms/atoms");

module.exports = {
  h1: {
    ...atoms.text.size.xxl,
    ...atoms.text.font.primary,
    ...atoms.text.space.s,
    ...atoms.text.weight.normal
  },
  h2: {
    ...atoms.text.font.primary,
    ...atoms.text.size.xl,
    ...atoms.text.font.l,
    ...atoms.text.space.s
  },
  h3: {
    ...atoms.text.size.l,
    ...atoms.text.font.primary.bold,
    ...atoms.text.space.s,
    ...atoms.margin.top.m,
    ...atoms.margin.bot.s
  },
  "h3+p": {
    marginTop: "-1.4rem"
  },
  h4: {
    ...atoms.text.size.m,
    ...atoms.text.font.primary,
    ...atoms.text.space.s
  },
  h5: {
    ...atoms.text.size.s,
    ...atoms.text.font.primary,
    ...atoms.text.space.s
  }
};
