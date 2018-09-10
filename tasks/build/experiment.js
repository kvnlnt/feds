const styles = require("../../src/styles/all.js");

const flattenKeys = (obj, join = "-", stack = "", props = []) => {
  for (var p in obj) {
    if (typeof obj[p] == "object") {
      flattenKeys(obj[p], join, stack + (stack ? join : "") + p, props);
    } else {
      props.push(`${stack}${join}${p}{${obj[p]}}`);
    }
  }
  return props;
};

console.log(
  flattenKeys(styles)
    .map(x => `.${x}`)
    .join("")
);
