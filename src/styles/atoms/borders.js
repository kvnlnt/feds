const params = require("../params.js");

const borderColor = prop => {
  return {
    black: { [prop]: `${params.color.black}` },
    grey: {
      [prop]: `${params.color.grey}`,
      xxl: { [prop]: `${params.color.greyLight30}` },
      xl: { [prop]: `${params.color.greyLight30}` },
      l: { [prop]: `${params.color.greyLight}` }
    },
    primary: { [prop]: `${params.color.blue}` },
    white: { [prop]: `${params.color.white}` },
    danger: { [prop]: `${params.color.red}` }
  };
};

const borderSize = prop => {
  return {
    xs: { [prop]: "1px" },
    s: { [prop]: "2px" },
    m: { [prop]: "3px" },
    l: { [prop]: "4px" },
    xl: { [prop]: "5px" },
    none: {
      [prop]: 0,
      borderStyle: "none"
    }
  };
};

module.exports = {
  border: {
    collapse: {
      borderCollapse: "collapse"
    },
    color: Object.assign(
      {
        bot: borderColor("borderBottomColor"),
        top: borderColor("borderTopColor"),
        left: borderColor("borderLeftColor"),
        right: borderColor("borderRightColor")
      },
      borderColor("borderColor")
    ),
    radius: {
      xs: { borderRadius: "1px" },
      s: { borderRadius: "2px" },
      m: { borderRadius: "3px" },
      l: { borderRadius: "4px" },
      xl: { borderRadius: "5px" },
      none: { borderRadius: "0px" }
    },
    size: Object.assign(
      {
        top: borderSize("borderTopWidth"),
        bot: borderSize("borderBottomWidth"),
        left: borderSize("borderLeftWidth"),
        right: borderSize("borderRightWidth")
      },
      borderSize("borderWidth")
    ),
    style: {
      solid: {
        borderStyle: "solid",
        bot: {
          borderBottomStyle: "solid"
        },
        top: {
          borderTopStyle: "solid"
        },
        left: {
          borderLeftStyle: "solid"
        },
        right: {
          borderRightStyle: "solid"
        }
      }
    }
  }
};
