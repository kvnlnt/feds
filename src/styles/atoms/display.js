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
  },
  z: {
    0: {
      zIndex: 0
    },
    1: {
      zIndex: 1
    },
    2: {
      zIndex: 2
    },
    3: {
      zIndex: 3
    },
    4: {
      zIndex: 4
    },
    5: {
      zIndex: 5
    },
    6: {
      zIndex: 6
    },
    7: {
      zIndex: 7
    },
    8: {
      zIndex: 8
    },
    9: {
      zIndex: 9
    },
    infinite: {
      zIndex: 100000
    }
  }
};
