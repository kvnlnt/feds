const params = require("../params");

const margin = prop => {
  return {
    xs: {
      [prop]: `1.4${params.unit.base}`
    },
    s: {
      [prop]: `2${params.unit.base}`
    },
    m: {
      [prop]: `3${params.unit.base}`
    },
    l: {
      [prop]: `4${params.unit.base}`
    },
    xl: {
      [prop]: `5${params.unit.base}`
    },
    none: {
      [prop]: 0
    },
    auto: {
      [prop]: "auto"
    }
  };
};

module.exports = {
  margin: {
    ...margin("margin"),
    top: margin("margin-top"),
    bot: margin("margin-bottom"),
    left: margin("margin-left"),
    right: margin("margin-right")
  }
};
