const atoms = require("../atoms/atoms");

module.exports = {
  ul: {
    ...atoms.text.font.primary,
    ...atoms.text.height.m,
    ...atoms.text.size.m
  },
  "ul > li, ol > li": {
    ...atoms.text.font.primary,
    ...atoms.text.height.m,
    ...atoms.text.size.m
  },
  "ul.tree, ul.tree ul": {
    ...atoms.margin.left.xs,
    ...atoms.pad.none,
    listStyle: "none"
  },
  "ul.tree li": {
    ...atoms.margin.none,
    ...atoms.pad.none,
    ...atoms.text.height.m,
    ...atoms.border.size.left.xs,
    ...atoms.border.color.primary
  },
  "ul.tree li:last-child": {
    ...atoms.border.size.left.none
  },
  "ul.tree li:before": {
    ...atoms.border.color.primary,
    ...atoms.border.size.bot.xs,
    ...atoms.border.size.left.xs,
    ...atoms.border.style.solid.bot,
    ...atoms.border.style.solid.left,
    ...atoms.content.none,
    ...atoms.display.block.inline,
    ...atoms.position.rel,
    ...atoms.text.height.s,
    ...atoms.width.xs,
    height: "1.2rem",
    left: "-1px",
    marginRight: "5px",
    top: "-4px",
    width: "1.6rem"
  },
  "ul.tree li:last-child": {
    border: 0
  },
  "ul.tree li:last-child:before": {
    left: 0
  }
};
