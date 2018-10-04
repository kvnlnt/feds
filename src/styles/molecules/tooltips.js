const atoms = require("../atoms/atoms");

module.exports = {
  ".tooltip": {
    ...atoms[".position-rel"]
  },
  ".tooltip:hover:before": {
    ...atoms[".content-data-alt"],
    ...atoms[".pad-xs"],
    ...atoms[".bg-color-grey-l"],
    ...atoms[".text-underline-none"],
    ...atoms[".text-color-white"],
    ...atoms[".text-size-xs"],
    ...atoms[".bdr-none"],
    ...atoms[".position-abs"],
    ...atoms[".position-left-none"],
    width: "150px",
    bottom: "calc(100% + 10px)"
  },
  ".tooltip:hover:after": {
    ...atoms[".block"],
    ...atoms[".content-none"],
    width: 0,
    height: 0,
    borderTop: "8px solid #707783",
    borderLeft: "8px solid transparent",
    borderRight: "8px solid transparent",
    borderBottom: "8px solid transparent",
    position: "absolute",
    bottom: "calc(100% - 6px)",
    left: "10px"
  },
  ".tooltip--right:hover:before": {
    left: "calc(100% + 20px)",
    top: "-10px",
    bottom: "auto"
  },
  ".tooltip--right:hover:after": {
    borderTop: "8px solid transparent",
    borderLeft: "8px solid transparent",
    borderRight: "8px solid #707783",
    borderBottom: "8px solid transparent",
    bottom: "auto",
    top: 0,
    left: "calc(100% + 4px)"
  },
  ".tooltip--left:hover:before": {
    right: "calc(100% + 20px)",
    left: "auto",
    top: "-10px",
    bottom: "auto"
  },
  ".tooltip--left:hover:after": {
    borderTop: "8px solid transparent",
    borderLeft: "8px solid #707783",
    borderRight: "8px solid transparent",
    borderBottom: "8px solid transparent",
    bottom: "auto",
    top: 0,
    right: "calc(100% + 4px)",
    left: "auto"
  },
  ".tooltip--bottom:hover:before": {
    bottom: "auto",
    top: "calc(100% + 10px)"
  },
  ".tooltip--bottom:hover:after": {
    borderTop: "8px solid transparent",
    borderLeft: "8px solid transparent",
    borderRight: "8px solid transparent",
    borderBottom: "8px solid #707783",
    top: "auto",
    bottom: "-10px",
    left: "10px"
  }
};