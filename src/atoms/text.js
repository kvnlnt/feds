const params = require("../../feds").params;

module.exports = {
  ".text-align-center": {
    textAlign: "center"
  },
  ".text-align-left": {
    textAlign: "left"
  },
  ".text-align-right": {
    textAlign: "right"
  },
  ".text-case-lower": {
    textTransform: "lowercase"
  },
  ".text-case-title": {
    textTransform: "capitalize"
  },
  ".text-case-upper": {
    textTransform: "uppercase"
  },
  ".text-color-black": {
    color: `${params.color.black}`
  },
  ".text-color-danger": {
    color: `${params.color.danger}`
  },
  ".text-color-grey": {
    color: `${params.color.grey}`
  },
  ".text-color-grey-l": {
    color: `${params.color.greyLight}`
  },
  ".text-color-light-grey": {
    color: `${params.color.lightGrey}`
  },
  ".text-color-light-grey-l": {
    color: `${params.color.lightGreyLight}`
  },
  ".text-color-light-grey-xl": {
    color: `${params.color.lightGreyExtraLight}`
  },
  ".text-color-info": {
    color: `${params.color.blue}`
  },
  ".text-color-primary": {
    color: `${params.color.blue}`
  },
  ".text-color-primary-l": {
    color: `${params.color.blueLight}`
  },
  ".text-color-secondary": {
    color: `${params.color.blueDark}`
  },
  ".text-color-success": {
    color: `${params.color.green}`
  },
  ".text-color-warn": {
    color: `${params.color.yellow}`
  },
  ".text-color-white": {
    color: `${params.color.white}`
  },
  ".text-ellipsis": {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  },
  ".text-font-mono": {
    fontFamily: "monospace"
  },
  ".text-primary": {
    fontFamily: "OpenSans"
  },
  ".text-bold": {
    fontFamily: "OpenSansBold, Arial"
  },
  ".text-bold-italic": {
    fontFamily: "OpenSansBoldItalic"
  },
  ".text-italic": {
    fontFamily: "OpenSansItalic",
    fontStyle: "italic"
  },
  ".text-height-xs": {
    lineHeight: "1.6rem"
  },
  ".text-height-s": {
    lineHeight: "2.4rem"
  },
  ".text-height-m": {
    lineHeight: "2.4rem"
  },
  ".text-height-l": {
    lineHeight: "2.8rem"
  },
  ".text-height-xl": {
    lineHeight: "3.6rem"
  },
  ".text-height-xxl": {
    lineHeight: "5.6rem"
  },
  ".text-indent-xs": {
    textIndent: "0.5rem"
  },
  ".text-indent-s": {
    textIndent: "1.0rem"
  },
  ".text-indent-m": {
    textIndent: "1.5rem"
  },
  ".text-indent-l": {
    textIndent: "2.0rem"
  },
  ".text-indent-xl": {
    textIndent: "2.5rem"
  },
  ".text-indent-xxl": {
    textIndent: "3rem"
  },
  ".text-pre": {
    whiteSpace: "pre"
  },
  ".text-size-xs": {
    fontSize: "1.1rem"
  },
  ".text-size-s": {
    fontSize: "1.3rem"
  },
  ".text-size-m": {
    fontSize: "1.4rem"
  },
  ".text-size-l": {
    fontSize: "1.8rem"
  },
  ".text-size-xl": {
    fontSize: "2.4rem"
  },
  ".text-size-xxl": {
    fontSize: "4rem"
  },
  ".text-space-xs": {
    letterSpacing: "0rem"
  },
  ".text-space-s": {
    letterSpacing: "0.1rem"
  },
  ".text-underline": {
    textDecoration: "underline"
  },
  ".text-underline-none": {
    textDecoration: "none"
  },
  ".text-weight-normal": {
    fontWeight: "normal"
  },
  ".text-wrap-none": {
    whiteSpace: "nowrap"
  }
};
