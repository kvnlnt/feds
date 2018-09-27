const params = require("../params.js");

const borderColor = (suffix, prop) => {
  const blackPropName = `.border-${prop}-color-black`;
  return {
    [blackPropName]: `${params.color.black}`
  };
};

module.exports = {
  ".border-collapse": {
    borderCollapse: "collapse"
  },
  ".border-color-black": {
    borderColor: `${params.color.black}`
  },
  ".border-color-grey": {
    borderColor: `${params.color.grey}`
  },
  ".border-color-grey-l": {
    borderColor: `${params.color.greyLight}`
  },
  ".border-color-grey-xl": {
    borderColor: `${params.color.greyLight30}`
  },
  ".border-color-grey-xxl": {
    borderColor: `${params.color.greyLight12}`
  },
  ".border-color-primary": {
    borderColor: `${params.color.blue}`
  },
  ".border-color-white": {
    borderColor: `${params.color.white}`
  },
  ".border-color-danger": {
    borderColor: `${params.color.red}`
  },
  ".border-color-bottom-black": {
    borderBottomColor: `${params.color.black}`
  },
  ".border-color-bottom-grey": {
    borderBottomColor: `${params.color.grey}`
  },
  ".border-color-bottom-grey-l": {
    borderBottomColor: `${params.color.greyLight}`
  },
  ".border-color-bottom-grey-xl": {
    borderBottomColor: `${params.color.greyLight30}`
  },
  ".border-color-bottom-grey-xxl": {
    borderBottomColor: `${params.color.greyLight12}`
  },
  ".border-color-bottom-primary": {
    borderBottomColor: `${params.color.blue}`
  },
  ".border-color-bottom-white": {
    borderBottomColor: `${params.color.white}`
  },
  ".border-color-bottom-danger": {
    borderBottomColor: `${params.color.red}`
  },
  ".border-color-top-black": {
    borderTopColor: `${params.color.black}`
  },
  ".border-color-top-grey": {
    borderTopColor: `${params.color.grey}`
  },
  ".border-color-top-grey-l": {
    borderTopColor: `${params.color.greyLight}`
  },
  ".border-color-top-grey-xl": {
    borderTopColor: `${params.color.greyLight30}`
  },
  ".border-color-top-grey-xxl": {
    borderTopColor: `${params.color.greyLight12}`
  },
  ".border-color-top-primary": {
    borderTopColor: `${params.color.blue}`
  },
  ".border-color-top-white": {
    borderTopColor: `${params.color.white}`
  },
  ".border-color-top-danger": {
    borderTopColor: `${params.color.red}`
  }
};

// const borderColor = prop => {
//   return {
//     black: {
//       [prop]: `${params.color.black}`
//     },
//     grey: {
//       [prop]: `${params.color.grey}`,
//       xxl: {
//         [prop]: `${params.color.greyLight30}`
//       },
//       xl: {
//         [prop]: `${params.color.greyLight30}`
//       },
//       l: {
//         [prop]: `${params.color.greyLight}`
//       }
//     },
//     primary: {
//       [prop]: `${params.color.blue}`
//     },
//     white: {
//       [prop]: `${params.color.white}`
//     },
//     danger: {
//       [prop]: `${params.color.red}`
//     }
//   };
// };

// const borderSize = prop => {
//   return {
//     xs: {
//       [prop]: "1px"
//     },
//     s: {
//       [prop]: "2px"
//     },
//     m: {
//       [prop]: "3px"
//     },
//     l: {
//       [prop]: "4px"
//     },
//     xl: {
//       [prop]: "5px"
//     },
//     none: {
//       [prop]: 0,
//       borderStyle: "none"
//     }
//   };
// };

// const old = {
//   border: {
//     collapse: {
//       borderCollapse: "collapse"
//     },
//     color: Object.assign({
//         bot: borderColor("borderBottomColor"),
//         top: borderColor("borderTopColor"),
//         left: borderColor("borderLeftColor"),
//         right: borderColor("borderRightColor")
//       },
//       borderColor("borderColor")
//     ),
//     radius: {
//       xs: {
//         borderRadius: "1px"
//       },
//       s: {
//         borderRadius: "2px"
//       },
//       m: {
//         borderRadius: "3px"
//       },
//       l: {
//         borderRadius: "4px"
//       },
//       xl: {
//         borderRadius: "5px"
//       },
//       none: {
//         borderRadius: "0px"
//       }
//     },
//     size: Object.assign({
//         top: borderSize("borderTopWidth"),
//         bot: borderSize("borderBottomWidth"),
//         left: borderSize("borderLeftWidth"),
//         right: borderSize("borderRightWidth")
//       },
//       borderSize("borderWidth")
//     ),
//     style: {
//       solid: {
//         borderStyle: "solid",
//         bot: {
//           borderBottomStyle: "solid"
//         },
//         top: {
//           borderTopStyle: "solid"
//         },
//         left: {
//           borderLeftStyle: "solid"
//         },
//         right: {
//           borderRightStyle: "solid"
//         }
//       }
//     }
//   }
// };