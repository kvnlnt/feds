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
    bot: {
      color: borderColor("borderBottomColor"),
      size: borderSize("borderBottomWidth")
    },
    collapse: {
      borderCollapse: "collapse"
    },
    color: borderColor("borderColor"),
    left: {
      color: borderColor("borderLeftColor"),
      size: borderSize("borderLeftWidth")
    },
    radius: {
      xs: { borderRadius: "1px" },
      s: { borderRadius: "2px" },
      m: { borderRadius: "3px" },
      l: { borderRadius: "4px" },
      xl: { borderRadius: "5px" },
      none: { borderRadius: "0px" }
    },
    right: {
      color: borderColor("borderRightColor"),
      size: borderSize("borderRightWidth")
    },
    size: borderSize("borderWidth"),
    top: {
      color: borderColor("borderTopColor"),
      size: borderSize("borderTopWidth")
    }
  }
};
