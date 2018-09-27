const params = require("../params.js");
module.exports = {
  display: {
    block: {
      display: "block",
      inline: {
        display: "inline-block"
      }
    },
    flex: {
      display: "flex"
    },
    grid: {
      display: "grid"
    },
    hide: {
      display: "none"
    },
    inline: {
      block: {
        display: "inline-block"
      }
    },
    overflow: {
      hide: {
        overflow: "hidden"
      },
      x: {
        auto: {
          overflowX: "auto"
        },
        hidden: {
          overflowX: "hidden"
        }
      },
      y: {
        auto: {
          overflowY: "auto"
        },
        hidden: {
          overflowY: "hidden"
        }
      }
    },
    table: {
      display: "table",
      cell: {
        display: "table-cell"
      },
      fixed: {
        tableLayout: "fixed"
      },
      row: {
        display: "table-row"
      }
    }
  }
};
