const params = require("../params.js");

module.exports = {
  ".bg-center": {
    backgroundPosition: `center`
  },
  ".bg-color-black": {
    backgroundColor: `${params.color.black}`
  },
  ".bg-color-danger": {
    backgroundColor: `${params.color.red}`
  },
  ".bg-color-grey": {
    backgroundColor: `${params.color.grey}`,
  },
  ".bg-color-grey-l": {
    backgroundColor: `${params.color.greyLight}`
  },
  ".bg-color-light-grey": {
    backgroundColor: `${params.color.lightGrey}`
  },
  ".bg-color-light-grey-l": {
    backgroundColor: `${params.color.lightGreyLight}`
  },
  ".bg-color-light-grey-xl": {
    backgroundColor: `${params.color.lightGreyExtraLight}`
  },
  ".bg-color-primary": {
    backgroundColor: `${params.color.blue}`
  },
  ".bg-color-primary-l": {
    backgroundColor: `${params.color.blueLight}`
  },
  ".bg-color-primary-xl": {
    backgroundColor: `${params.color.lightBlue}`
  },
  ".bg-color-secondary": {
    backgroundColor: `${params.color.blueDark}`
  },
  ".bg-color-success": {
    backgroundColor: `${params.color.green}`
  },
  ".bg-color-warn": {
    backgroundColor: `${params.color.yellow}`
  },
  ".bg-color-white": {
    backgroundColor: `${params.color.white}`
  },
  ".bg-contain": {
    backgroundSize: `contain`
  },
  ".bg-cover": {
    backgroundSize: `cover`
  },
  ".bg-none": {
    backgroundImage: "none",
    background: "transparent",
  },
  ".bg-no-repat": {
    backgroundRepeat: `no-repeat`
  },
};