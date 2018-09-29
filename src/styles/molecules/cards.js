const atoms = require("../atoms/atoms");

module.exports = {
  ".card": {
    ...atoms[".shadow-s"],
    ...atoms[".bg-color-white"],
    ...atoms[".width-full"]
  },
  ".card-header": {
    ...atoms[".display-flex"],
    ...atoms[".flex-dir-row"],
    ...atoms[".flex-horz-space-between"],
    ...atoms[".flex-vert-bottom"],
    ...atoms[".pad-bot-xs"],
    ...atoms[".pad-top-xs"],
    ...atoms[".border-color-bottom-grey-l"],
    ...atoms[".border-style-solid-bot"],
    ...atoms[".border-size-bot-xs"]
  },
  ".card-header-title": {
    ...atoms[".text-size-l"],
    ...atoms[".text-ellipsis"],
    ...atoms[".text-indent-m"],
    ...atoms[".flex-col"]
  },
  ".card-header-buttons": {
    ...atoms[".pad-left-s"],
    ...atoms[".pad-right-s"],
    ...atoms[".flex-col"],
    ...atoms[".text-align-right"]
  },
  ".card-body": {
    ...atoms[".pad-m"]
  }
};
