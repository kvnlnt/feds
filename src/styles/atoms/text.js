const params = require("../params.js");
module.exports = {
  text: {
    align: {
      center: {
        textAlign: "center"
      },
      left: {
        textAlign: "left"
      },
      right: {
        textAlign: "right"
      }
    },
    case: {
      lower: {
        textTransform: "lowercase"
      },
      title: {
        textTransform: "capitalize"
      },
      upper: {
        textTransform: "uppercase"
      }
    },
    color: {
      black: {
        color: `${params.color.black}`
      },
      danger: {
        color: `${params.color.red}`
      },
      grey: {
        color: `${params.color.grey}`,
        l: {
          color: `${params.color.greyLight}`
        },
        xl: {
          color: `${params.color.greyLight30}`
        },
        xxl: {
          color: `${params.color.greyLight12}`
        }
      },
      info: {
        color: `${params.color.blue}`
      },
      primary: {
        color: `${params.color.blue}`,
        l: {
          color: `${params.color.blueLight}`
        }
      },
      secondary: {
        color: `${params.color.blueDark}`
      },
      success: {
        color: `${params.color.green}`
      },
      warn: {
        color: `${params.color.yellow}`
      },
      white: {
        color: `${params.color.white}`
      }
    },
    ellipsis: {
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    },
    font: {
      mono: {
        fontFamily: "monospace"
      },
      primary: {
        fontFamily: `${params.font.primary.openSans}`,
        bold: {
          fontFamily: `${params.font.primary.openSansBold}, Arial`,
          italic: {
            fontFamily: `${params.font.primary.openSansBoldItalic}`
          }
        },
        italic: {
          fontFamily: `${params.font.primary.openSansItalic}`,
          fontStyle: `italic`
        }
      }
    },
    height: {
      xs: {
        lineHeight: `1.6${params.unit.base}`
      },
      s: {
        lineHeight: `2.0${params.unit.base}`
      },
      m: {
        lineHeight: `2.4${params.unit.base}`
      },
      l: {
        lineHeight: `3.2${params.unit.base}`
      },
      xl: {
        lineHeight: `4${params.unit.base}`
      },
      xxl: {
        lineHeight: `4.8${params.unit.base}`
      }
    },
    indent: {
      xs: {
        textIndent: `0.5${params.unit.base}`
      },
      s: {
        textIndent: `1.0${params.unit.base}`
      },
      m: {
        textIndent: `1.5${params.unit.base}`
      },
      l: {
        textIndent: `2.0${params.unit.base}`
      },
      xl: {
        textIndent: `2.5${params.unit.base}`
      },
      xxl: {
        textIndent: `3${params.unit.base}`
      }
    },
    pre: {
      whiteSpace: "pre"
    },
    size: {
      xs: {
        fontSize: `1.1${params.unit.base}`
      },
      s: {
        fontSize: `1.3${params.unit.base}`
      },
      m: {
        fontSize: `1.4${params.unit.base}`
      },
      l: {
        fontSize: `1.8${params.unit.base}`
      },
      xl: {
        fontSize: `2.4${params.unit.base}`
      },
      xxl: {
        fontSize: `4${params.unit.base}`
      }
    },
    space: {
      xs: {
        letterSpacing: `0${params.unit.base}`
      },
      s: {
        letterSpacing: `0.1${params.unit.base}`
      }
    },
    underline: {
      none: {
        textDecoration: "none"
      }
    },
    weight: {
      normal: {
        fontWeight: "normal"
      }
    },
    wrap: {
      none: {
        whiteSpace: "nowrap"
      }
    }
  }
};
