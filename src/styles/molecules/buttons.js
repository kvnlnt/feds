const atoms = require("../atoms/atoms");

module.exports = {
  ".button": {
    ...atoms[".border-size-xs"],
    ...atoms[".border-color-primary"],
    ...atoms[".border-radius-l"],
    ...atoms[".border-style-solid"],
    ...atoms[".bg-color-primary"],
    ...atoms[".display-block-inline"],
    ...atoms[".pad-left-s"],
    ...atoms[".pad-right-s"],
    ...atoms[".text-color-white"],
    ...atoms[".text-height-xl"],
    ...atoms[".text-size-m"],
    ...atoms[".text-wrap-none"],
    ...atoms[".text-align-center"],
    ...atoms[".text-underline-none"],
    ...atoms[".cursor-pointer"]
  },
  ".button:focus": {
    ...atoms[".bg-color-secondary"],
    ...atoms[".anim-speed-fast"],
    ...atoms[".text-color-white"]
  },
  ".button:hover": {
    ...atoms[".bg-color-secondary"],
    ...atoms[".anim-speed-fast"],
    ...atoms[".text-color-white"]
  },
  ".button:active": {
    ...atoms[".opac-70"],
    ...atoms[".anim-speed-fast"],
    ...atoms[".shadow.s"]
  },
  ".button.disabled": {
    ...atoms[".bg-color-grey"],
    ...atoms[".opac-50"],
    ...atoms[".border-color-grey"]
  },
  ".button.disabled:hover": {
    ...atoms[".bg-color-grey"],
    ...atoms[".opac-50"]
  },
  ".button.disabled:active": {
    ...atoms[".bg-color-grey"],
    ...atoms[".opac-50"]
  },
  ".button.large": {
    ...atoms[".text-size-l"],
    ...atoms[".text-height-xxl"]
  },
  ".button.medium": {
    ...atoms[".text-size-m"],
    ...atoms[".text-height-l"]
  },
  ".button.small": {
    ...atoms[".text-size-s"],
    ...atoms[".text-height-m"]
  },
  ".button.danger": {
    ...atoms[".text-color-white"],
    ...atoms[".bg-color-danger"],
    ...atoms[".border-color-danger"]
  },
  ".button.danger:hover": {
    ...atoms[".bg-color-white"],
    ...atoms[".text-color-danger"]
  },
  ".button-danger:active": {
    ...atoms[".opac-50"]
  },
  ".button.secondary": {
    ...atoms[".text-color-secondary"],
    ...atoms[".bg-color-white"],
    ...atoms[".border-color-primary"]
  },
  ".button.link": {
    ...atoms[".text-color-primary"],
    ...atoms[".bg-color-white"],
    ...atoms[".border-size-none"]
  },
  ".button.secondary:hover": {
    ...atoms[".bg-color-secondary"],
    ...atoms[".anim-speed-fast"],
    ...atoms[".text-color-white"]
  },
  ".button.secondary:active": {
    ...atoms[".text-color-primary"],
    ...atoms[".bg-color-white"],
    ...atoms[".shadow-s"]
  },
  ".button.secondary.disabled, .button.secondary.disabled:hover, .button.secondary.disabled:active": {
    ...atoms[".text-color-grey"],
    ...atoms[".border-size-xs"],
    ...atoms[".border-color-grey-l"],
    ...atoms[".bg-color-white"],
    ...atoms[".opac-100"],
    pointerEvents: "none"
  }
};