const atoms = require("../atoms/atoms");

module.exports = {
  "table": {
    ...atoms[".width-full"],
    borderCollapse: "collapse"
  },
  "table td": {
    ...atoms[".border-size-bot-xs"],
    ...atoms[".border-color-light-grey"],
    ...atoms[".border-style-solid-bot"],
    ...atoms[".pad-xs"],
    ...atoms[".text-size-m"]
  },
  "table th": {
    ...atoms[".border-size-bot-xs"],
    ...atoms[".border-color-grey-l"],
    ...atoms[".border-style-solid-bot"],
    ...atoms[".text-bold"],
    ...atoms[".text-size-s"],
    ...atoms[".text-case-upper"],
    ...atoms[".text-space-s"],
    ...atoms[".text-align-left"],
    ...atoms[".pad-xs"]
  },
  ".table--pivot": {
    ...atoms[".display-flex"],
    ...atoms[".display-overflow-hide"]
  },
  ".table--pivot thead": {
    ...atoms[".display-flex"],
    flexShrink: 0,
    minWidth: "min-content"
  },
  ".table--pivot tbody": {
    ...atoms[".display-flex"],
    ...atoms[".position-rel"],
    ...atoms[".display-overflow-x-auto"],
    ...atoms[".display-overflow-y-hidden"],
    flex: 1
  },
  ".table--pivot tr": {
    ...atoms[".display-flex"],
    ...atoms[".flex-dir-col"],
    minWidth: "min-content",
    flex: 1
  },
  ".table--pivot td, .table--pivot th": {
    ...atoms[".display-block"],
    ...atoms[".text-size-s"]
  },
  ".table--wrap, .table--wrap tbody": {
    ...atoms[".display-block"]
  },
  ".table--wrap thead": {
    ...atoms[".display-hide"]
  },
  ".table--wrap tr": {
    ...atoms[".display-flex"],
    ...atoms[".flex-dir-col"],
    ...atoms[".margin-bot-m"]
  },
  ".table--wrap td:before": {
    ...atoms[".content-data-title"],
    ...atoms[".display.block"],
    ...atoms[".width.half"],
    ...atoms[".text-bold"],
    ...atoms[".text-size-s"],
    ...atoms[".text-case-upper"],
    ...atoms[".text-space-s"],
    ...atoms[".text-align-left"],
    ...atoms[".pad-right-s"],
    float: "left"
  }
};