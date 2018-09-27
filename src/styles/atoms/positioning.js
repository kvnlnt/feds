const params = require("../params");

const position = prop => {
  return {
    xs: {
      [prop]: `1.6${params.unit.base}`
    },
    s: {
      [prop]: `2${params.unit.base}`
    },
    m: {
      [prop]: `2.4${params.unit.base}`
    },
    l: {
      [prop]: `3.2${params.unit.base}`
    },
    xl: {
      [prop]: `4${params.unit.base}`
    },
    xxl: {
      [prop]: `5${params.unit.base}`
    },
    none: {
      [prop]: 0
    },
    auto: {
      [prop]: "auto"
    },
    hide: {
      [prop]: "-100%"
    }
  };
};

module.exports = {
  position: {
    abs: {
      position: "absolute"
    },
    fix: {
      position: "fixed"
    },
    rel: {
      position: "relative"
    },
    top: position("top"),
    bot: position("bottom"),
    left: position("left"),
    right: position("right")
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
