const atoms = require("../atoms/_atoms");

module.exports = {
  h1: {
    ...atoms[".text-size-xxl"],
    ...atoms[".text-space-s"],
    ...atoms[".text-weight-normal"]
  },
  h2: {
    ...atoms[".text-size-xl"],
    ...atoms[".text-font-l"],
    ...atoms[".text-space-s"]
  },
  h3: {
    ...atoms[".text-size-l"],
    ...atoms[".text--bold"],
    ...atoms[".text-space-s"]
  },
  h4: {
    ...atoms[".text-size-m"],
    ...atoms[".text-space-s"]
  },
  h5: {
    ...atoms[".text-size-s"],
    ...atoms[".text-space-s"]
  },
  ".header-xl": {
    ...atoms[".text-size-xxl"],
    ...atoms[".text-space-s"],
    ...atoms[".text-weight-normal"],
    ...atoms[".margin-none"]
  },
  ".header-l": {
    ...atoms[".text-size-xl"],
    ...atoms[".text-font-l"],
    ...atoms[".text-space-s"],
    ...atoms[".margin-none"]
  },
  ".header-m": {
    ...atoms[".text-size-l"],
    ...atoms[".text--bold"],
    ...atoms[".text-space-s"],
    ...atoms[".margin-none"]
  },
  ".header-s": {
    ...atoms[".text-size-m"],
    ...atoms[".text-space-s"],
    ...atoms[".margin-none"]
  },
  ".header-xs": {
    ...atoms[".text-size-s"],
    ...atoms[".text-space-s"],
    ...atoms[".margin-none"]
  }
};
