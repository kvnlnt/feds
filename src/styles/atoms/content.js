const params = require("../params.js");
module.exports = {
  content: {
    none: {
      content: '""'
    },
    data: {
      alt: {
        content: "attr(data-alt)"
      },
      title: {
        content: "attr(data-title)"
      }
    }
  }
};
