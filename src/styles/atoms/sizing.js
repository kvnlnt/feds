const params = require("../params.js");

const sizes = (prop, unit) => {
  return {
    none: {
      [prop]: 0
    },
    full: {
      [prop]: `100${unit}`
    },
    half: {
      [prop]: `50${unit}`
    },
    third: {
      [prop]: `33.3333${unit}`
    },
    fourth: {
      [prop]: `25${unit}`
    },
    fifth: {
      [prop]: `20${unit}`
    },
    sixth: {
      [prop]: `16.666${unit}`
    }
  };
};

module.exports = {
  height: Object.assign(
    {
      maxHeight: "100%"
    },
    sizes("height", "%")
  ),
  width: Object.assign(
    {
      maxWidth: "100%"
    },
    sizes("width", "%")
  ),
  view: {
    height: Object.assign(
      {
        maxHeight: "100%"
      },
      sizes("height", "vh")
    ),
    width: Object.assign(
      {
        maxWidth: "100%"
      },
      sizes("width", "vw")
    )
  }
};
