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
  ".bg-color-grey-xxl": {
    backgroundColor: `${params.color.greyLight12}`
  },
  ".bg-color-grey-xl": {
    backgroundColor: `${params.color.greyLight30}`
  },
  ".bg-color-grey-l": {
    backgroundColor: `${params.color.greyLight}`
  },
  ".bg-color-grey-primary": {
    backgroundColor: `${params.color.blue}`
  },
  ".bg-color-grey-primary-xl": {
    backgroundColor: `${params.color.lightBlue}`
  },
  ".bg-color-grey-primary-l": {
    backgroundColor: `${params.color.lightBlueLight}`
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
  ".bg-cover": {
    backgroundSize: `cover`
  }

};