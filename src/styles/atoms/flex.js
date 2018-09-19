const params = require("../params.js");
module.exports = {
  flex: {
    basis: {
      half: {
        flexBasis: "50%"
      },
      third: {
        flexBasis: "33.3333%"
      },
      fourth: {
        flexBasis: "25%"
      },
      fifth: {
        flexBasis: "20%"
      }
    },
    col: {
      full: {
        flexBasis: "100%"
      },
      half: {
        flexBasis: "50%"
      },
      third: {
        flexBasis: "33.3333%"
      },
      fourth: {
        flexBasis: "25%"
      },
      fifth: {
        flexBasis: "20%"
      },
      sixth: {
        flexBasis: "16.6666%"
      }
    },
    dir: {
      col: {
        flexDirection: "column"
      },
      row: {
        flexDirection: "row"
      }
    },
    fit: {
      flexGrow: 0
    },
    horz: {
      center: {
        justifyContent: "center"
      },
      left: {
        justifyContent: "left"
      },
      right: {
        justifyContent: "right"
      }
    },
    vert: {
      center: {
        alignItems: "center"
      },
      left: {
        alignItems: "left"
      },
      right: {
        alignItems: "right"
      }
    },
    wrap: {
      flexWrap: "wrap"
    }
  }
};
