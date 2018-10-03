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
    ...atoms[".pad-s"],
    ...atoms[".border-color-bottom-grey-l"],
    ...atoms[".border-style-solid-bot"],
    ...atoms[".border-size-bot-xs"]
  },
  ".card-body": {
    ...atoms[".pad-s"]
  }
};