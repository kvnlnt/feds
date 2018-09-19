const params = require("../params.js");

module.exports = {
  bg: {
    center: {
      backgroundPosition: `center`
    },
    color: {
      black: {
        backgroundColor: `${params.color.black}`
      },
      black: { backgroundColor: `${params.color.black}` },
      blackHalf: { backgroundColor: `${params.color.black - 50}` },
      danger: { backgroundColor: `${params.color.red}` },
      grey: {
        xxl: { backgroundColor: `${params.color.greyLight12}` },
        xl: { backgroundColor: `${params.color.greyLight30}` },
        l: { backgroundColor: `${params.color.greyLight}` },
        m: { backgroundColor: `${params.color.grey}` }
      },
      primary: {
        xl: { backgroundColor: `${params.color.lightBlue}` },
        l: { backgroundColor: `${params.color.lightBlueLight}` },
        m: { backgroundColor: `${params.color.blue}` }
      },
      secondary: { backgroundColor: `${params.color.blueDark}` },
      success: { backgroundColor: `${params.color.green}` },
      warn: { backgroundColor: `${params.color.yellow}` },
      white: { backgroundColor: `${params.color.white}` }
    },
    cover: {
      backgroundSize: `cover`
    }
  }
};
