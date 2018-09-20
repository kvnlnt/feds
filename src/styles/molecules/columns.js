const atoms = require("../atoms/atoms");

module.exports = {
  ".column": { ...atoms.flex.col },
  ".column.half": { ...atoms.flex.col.half },
  ".column.full": { ...atoms.flex.col.full },
  ".column.third": { ...atoms.flex.col.third },
  ".column.fourth": { ...atoms.flex.col.fourth },
  ".column.fifth": { ...atoms.flex.col.fifth },
  ".column.sixth": { ...atoms.flex.col.sixth },
  ".columns": {
    ...atoms.display.flex,
    ...atoms.flex.dir.row,
    ...atoms.flex.wrap
  },
  ".columns.spacing-s .column:first-child, .columns.spacing-s .column + .column": {
    ...atoms.margin.right.s,
    ...atoms.margin.bot.s
  },
  ".columns.spacing-xs .column:first-child, .columns.spacing-xs .column + .column": {
    ...atoms.margin.right.xs,
    ...atoms.margin.bot.xs
  }
};
