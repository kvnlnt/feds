const atoms = require("../atoms/atoms");

module.exports = {
  ".card": {
    ...atoms.shadow.s,
    ...atoms.bg.color.white,
    ...atoms.width.full
  },
  ".card-header": {
    ...atoms.height.xxl,
    ...atoms.display.flex,
    ...atoms.flex.dir.row,
    ...atoms.flex.horz.spaceBetween
  },
  ".card-header-title": {
    ...atoms.text.height.xxl,
    ...atoms.text.size.l,
    ...atoms.text.ellipsis,
    ...atoms.text.indent.m
  },
  ".card-header-buttons": {
    ...atoms.text.height.xxl,
    ...atoms.pad.left.s,
    ...atoms.pad.right.s
  },
  ".card-body": {
    ...atoms.pad.s,
    ...atoms.shadow.s,
    ...atoms.bg.color.white
  },
  ".card-footer": {
    ...atoms.pad.s,
    ...atoms.shadow.s,
    ...atoms.bg.color.white
  }
};
