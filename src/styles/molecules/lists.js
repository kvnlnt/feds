const atoms = require("../atoms/atoms");

module.exports = {
  ul: {
    ...atoms.text.font.primary,
    ...atoms.text.height.m,
    ...atoms.text.size.m
  }
};

// "ul > li, ol > li": [".text-font", ".text-height-m", ".text-size-m"],
// "ul.tree": [".margin-lft-xs", "list-style:none", ".pad-none"],
// "ul.tree ul": [".margin-lft-xs", "list-style:none", ".pad-none"],
// "ul.tree li": [
//   ".margin-none",
//   ".pad-none",
//   ".text-height-m",
//   ".bdr-lft-xs",
//   ".bdr-color-primary"
// ],
// "ul.tree li:last-child": [".bdr-left-none"],
// "ul.tree li:before": [
//   ".pos-rel",
//   "top:-4px",
//   ".text-height-s",
//   ".width-xs",
//   ".bdr-bot-xs",
//   ".bdr-lft-xs",
//   ".bdr-color-primary",
//   ".content-none",
//   ".inline-block",
//   "left:-1px",
//   "height:1.2rem",
//   "margin-right:5px"
// ],
// "ul.tree li:last-child": ["border:0"],
// "ul.tree li:last-child:before": ["left:0"]
