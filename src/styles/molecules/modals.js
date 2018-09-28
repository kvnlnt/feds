const atoms = require("../atoms/atoms");

module.exports = {
  ".modal": {
    backgroundColor: "rgba(0,0,0,.5)",
    ...atoms[".position.fix"],
    ...atoms[".width.full"],
    ...atoms[".height.full"],
    ...atoms[".position-top-none"],
    ...atoms[".position-left-none"],
    ...atoms[".z.infinite"],
    ...atoms[".display.hide"],
    ...atoms[".flex-horz-center"],
    ...atoms[".flex-vert-center"]
  },
  ".modal-view": {
    ...atoms[".position.rel"],
    ...atoms[".bg-color-white"],
    height: "500px",
    width: "600px"
  },
  ".modal-fullscreen -modal-view": {
    height: "100%",
    width: "100%"
  },
  ".modal-small -modal-view": {
    height: "300px",
    width: "300px"
  },
  ".modal-header, .modal-footer": {
    flex: "0 0 50px",
    ...atoms[".position-abs"]
  },
  ".modal-header": {
    top: "0px"
  },
  ".modal-footer": {
    bottom: "0px"
  },
  ".modal-body": {
    ...atoms[".scroll-overflow-y"]
  },
  ".modal-close": {
    ...atoms[".position-abs"],
    ...atoms[".position-right-m"],
    ...atoms[".position-top-m"],
    ...atoms[".cursor-pointer"],
    ...atoms[".display-block"]
  }
};