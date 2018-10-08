const atoms = require("../atoms/_atoms");

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
    ...atoms[".display-flex"],
    ...atoms[".flex-dir-col"],
    width: "80vw",
    maxWidth: "600px",
    maxHeight: "80vh"
  },
  ".modal-view.fullscreen": {
    height: "100vh",
    width: "100vw"
  },
  ".modal-header": {
    ...atoms[".display-flex"],
    ...atoms[".flex-dir-row"],
    ...atoms[".flex-horz-space-between"],
    ...atoms[".flex-vert-center"],
    ...atoms[".border-color-bottom-grey-l"],
    ...atoms[".border-style-solid-bot"],
    ...atoms[".border-size-bot-xs"],
    ...atoms[".width-full"],
    flex: "0 0 5rem"
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
  },
  ".modal-footer": {
    ...atoms[".display-flex"],
    ...atoms[".flex-dir-row"],
    ...atoms[".flex-horz-space-between"],
    ...atoms[".flex-vert-center"],
    ...atoms[".border-color-bottom-grey-l"],
    ...atoms[".border-style-solid-bot"],
    ...atoms[".border-size-bot-xs"],
    ...atoms[".width-full"],
    flex: "0 0 5rem"
  },
  ".modal-footer-buttons": {
    ...atoms[".pad-left-s"],
    ...atoms[".pad-right-s"],
    ...atoms[".flex-col"],
    ...atoms[".text-align-right"]
  }
};
