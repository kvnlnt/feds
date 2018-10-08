const atoms = require("../atoms/_atoms");

module.exports = {
  p: {
    ...atoms[".text-size-m"],
    ...atoms[".text-height-m"],
    ...atoms[".text-space-xs"],
    ...atoms[".margin-top-xs"],
    ...atoms[".margin-bot-xs"]
  },
  code: {
    ...atoms[".text-font-monospace"],
    ...atoms[".text-size-s"]
  },
  pre: {
    ...atoms[".text.pre"]
  },
  small: {
    ...atoms[".text-size-s"]
  },
  strong: {
    ...atoms[".text-bold"]
  },
  em: {
    ...atoms[".text-italic"]
  }
};
