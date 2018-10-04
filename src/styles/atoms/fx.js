const params = require("../params.js");
module.exports = {
  ".anim-ease-in": {
    transitionTimingFunction: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
  },
  ".anim-ease-out": {
    transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)"
  },
  ".anim-ease-inOut": {
    transitionTimingFunction: "cubic-bezier(0.645, 0.045, 0.355, 1)"
  },
  ".anim-delay-slow": {
    transition: "all 1s"
  },
  ".anim-delay-med": {
    transition: "all 0.5s"
  },
  ".anim-delay-fast": {
    transition: "all 0.3s"
  },
  ".anim-speed-slow": {
    transition: "all 1s"
  },
  ".anim-speed-med": {
    transition: "all 0.5s"
  },
  ".anim-speed-fast": {
    transition: "all 0.3s"
  },
  ".filter-black": {
    filter: "brightness(0)"
  },
  ".filter-white": {
    filter: "brightness(1)"
  },
  ".opac-0": {
    opacity: 0
  },
  ".opac-10": {
    opacity: "0.1"
  },
  ".opac-20": {
    opacity: "0.2"
  },
  ".opac-30": {
    opacity: "0.3"
  },
  ".opac-40": {
    opacity: "0.4"
  },
  ".opac-50": {
    opacity: "0.5"
  },
  ".opac-60": {
    opacity: "0.6"
  },
  ".opac-70": {
    opacity: "0.7"
  },
  ".opac-80": {
    opacity: "0.8"
  },
  ".opac-90": {
    opacity: "0.9"
  },
  ".opac-100": {
    opacity: "1"
  },
  ".shadow-s": {
    boxShadow: "0 1px 2px rgba(14,18,37,.25)"
  },
  ".shadow-none": {
    boxShadow: "none"
  }
};