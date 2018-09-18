const atoms = require("../atoms/atoms");

module.exports = {
  ".button": {
    ...atoms.border.size.xs,
    ...atoms.border.color.primary,
    ...atoms.bg.color.primary.m,
    ...atoms.display.block.inline,
    ...atoms.pad.left.s,
    ...atoms.pad.right.s,
    ...atoms.text.font.primary,
    ...atoms.text.color.white,
    ...atoms.text.height.l,
    ...atoms.text.size.m,
    ...atoms.text.wrap.none,
    ...atoms.text.align.center,
    ...atoms.text.underline.none
  },
  ".button:focus": {
    ...atoms.bg.secondary,
    ...atoms.anim.speed.fast,
    ...atoms.text.color.white
  }
  // ".button:hover": [".bg-secondary", ".anim-speed-fast", ".text-color-white"],
  // ".button:active": [".opac-70", ".anim-speed-fast", ".shadow-s"],
  // ".button.disabled": [".bg-grey", ".opac-50", ".bdr-color-grey-l"],
  // ".button.disabled:hover": [".bg-grey", ".opac-50"],
  // ".button.disabled:active": [".bg-grey", ".opac-50"],
  // ".button.large": [".text-size-l", ".text-height-xxl"],
  // ".button.medium": [".text-height-l"],
  // ".button.small": [".text-height-m"],
  // ".button.danger": [".text-color-white", ".bg-danger", ".bdr-color-danger"],
  // ".button.danger:hover": [".bg-white", ".text-color-danger"],
  // ".button.danger:active": [".opac-50"],
  // ".button.secondary": [".text-color-primary", ".bg-white"],
  // ".button.link": [".text-color-primary", ".bg-white", ".bdr-none"],
  // ".button.secondary:hover": [
  //   ".bg-secondary",
  //   ".anim-speed-fast",
  //   ".text-color-white"
  // ],
  // ".button.secondary:active": [".text-color-primary", ".bg-white", ".shadow-s"],
  // ".button.secondary.disabled, .button.secondary.disabled:hover, .button.secondary.disabled:active": [
  //   ".text-color-grey",
  //   ".bdr-xs",
  //   ".bdr-color-grey-l",
  //   ".bg-white",
  //   ".opac-100"
  // ]
};
