const atoms = require("../atoms/_atoms");

module.exports = {
  select: {
    ...atoms[".display-appearance-none"],
    ...atoms[".border-size-none"],
    ...atoms[".shadow-none"],
    ...atoms[".border-none"],
    ...atoms[".bg-none"],
    ...atoms[".unit-height-xl"],
    ...atoms[".width-full"],
    ...atoms.margins[".margin-none"],
    ...atoms[".pad-none"],
    ...atoms[".cursor-pointer"],
    ...atoms[".text-indent-s"],
    ...atoms.positioning[".position-rel"]
  },
  " select::-ms-expand": {
    ...atoms[".display-none"]
  },
  ".select": {
    ...atoms[".display-block"],
    ...atoms.positioning[".position-rel"],
    ...atoms[".text-height-xl"],
    ...atoms[".display-overflow-hide"],
    ...atoms[".border-size-xs"],
    ...atoms[".border-style-solid"],
    ...atoms[".border-color-grey-l"]
  },
  ".select::after": {
    width: 0,
    height: 0,
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    borderTop: "9px solid #000000",
    content: '""',
    display: "block",
    position: "absolute",
    top: "14px",
    right: "12px",
    pointerEvents: "none"
  }
};
