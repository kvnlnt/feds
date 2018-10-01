const atoms = require("../atoms/atoms");

module.exports = {
  ".modal": {
    backgroundColor: "rgba(0,0,0,.5)",
    ...atoms[".position-fix"],
    ...atoms[".width-full"],
    ...atoms[".height-full"],
    ...atoms[".position-top-none"],
    ...atoms[".position-left-none"],
    ...atoms[".z-infinite"],
    ...atoms[".display-hide"],
    ...atoms[".flex-horz-center"],
    ...atoms[".flex-vert-center"]
  },
  ".modal-view": {
    ...atoms[".position-rel"],
    ...atoms[".bg-color-white"],
    ...atoms[".shadow-s"],
    maxHeight: "80vh",
    maxWidth: "80vw",
    minWidth: "360px"
  },
  ".modal.fullscreen.modal-view": {
    height: "100%",
    width: "100%"
  },
  ".modal-header": {
    ...atoms[".display-flex"],
    ...atoms[".flex-dir-row"],
    ...atoms[".flex-horz-space-between"],
    ...atoms[".flex-vert-bottom"],
    ...atoms[".pad-bot-xs"],
    ...atoms[".pad-top-xs"],
    ...atoms[".border-color-bottom-grey-l"],
    ...atoms[".border-style-solid-bot"],
    ...atoms[".border-size-bot-xs"],
    ...atoms[".width-full"]
  },
  ".modal-header-title": {
    ...atoms[".text-size-l"],
    ...atoms[".text-ellipsis"],
    ...atoms[".text-indent-m"],
    ...atoms[".flex-col"]
  },
  ".modal-header-buttons": {
    ...atoms[".pad-left-s"],
    ...atoms[".pad-right-s"],
    ...atoms[".flex-col"],
    ...atoms[".text-align-right"]
  },
  ".modal-body": {
    ...atoms[".scroll-overflow-y"]
  }
};
