const params = require("../params.js");

const borderColor = prop => {
  return {
    black: { [prop]: `${params.color.black}` },
    grey: {
      xxl: { [prop]: `${params.color.greyLightAt12}` },
      xl: { [prop]: `${params.color.greyLightAt12}` },
      l: { [prop]: `${params.color.greyLight}` },
      m: { [prop]: `${params.color.grey}` }
    },
    primary: { [prop]: `${params.color.blue}` },
    white: { [prop]: `${params.color.white}` },
    danger: { [prop]: `${params.color.red}` }
  };
};

const borderSize = prop => {
  return {
    xs: { [prop]: "1px", borderStyle: "solid" },
    s: { [prop]: "2px", borderStyle: "solid" },
    m: { [prop]: "3px", borderStyle: "solid" },
    l: { [prop]: "4px", borderStyle: "solid" },
    xl: { [prop]: "5px", borderStyle: "solid" },
    none: {
      [prop]: 0,
      borderStyle: "none"
    }
  };
};

module.exports = {
  bdr: {
    collapse: {
      borderCollapse: "collapse"
    },
    color: {
      all: borderColor("borderColor"),
      bot: borderColor("borderBottomColor"),
      top: borderColor("borderTopColor"),
      left: borderColor("borderLeftpColor"),
      right: borderColor("borderRightColor")
    },
    round: {
      xs: { borderRadius: "1px" },
      s: { borderRadius: "2px" },
      m: { borderRadius: "3px" },
      l: { borderRadius: "4px" },
      xl: { borderRadius: "5px" },
      none: { borderRadius: "0px" }
    },
    size: {
      all: borderSize("borderWidth"),
      top: borderSize("borderTopWidth"),
      bot: borderSize("borderBottomWidth"),
      left: borderSize("borderLeftWidth"),
      right: borderSize("borderRightWidth")
    }
  }
};
