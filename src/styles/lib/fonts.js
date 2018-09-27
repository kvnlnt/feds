const atoms = require("../atoms/atoms");

const fontFace = (fontFamily, filePath) => {
  return `@font-face {
    font-family: "${fontFamily}";
    src:  url("${filePath}.eot");
    src:  url("${filePath}.eot?#iefix") format("embedded-opentype"),
          url("${filePath}.woff") format("woff"),
          url("${filePath}.ttf") format("truetype"),
          url("${filePath}.svg#${fontFamily}") format("svg");
    font-weight: normal;
    font-style: normal;
  }`;
};

module.exports = `
${fontFace("OpenSans", "../fonts/open-sans/OpenSans-Regular-webfont")}
${fontFace("OpenSansItalic", "../fonts/open-sans/OpenSans-Italic-webfont")}
${fontFace("OpenSansLight", "../fonts/open-sans/OpenSans-Light-webfont")}
${fontFace(
  "OpenSansLightItalic",
  "../fonts/open-sans/OpenSans-LightItalic-webfont"
)}
${fontFace("OpenSansBold", "../fonts/open-sans/OpenSans-Semibold-webfont")}
${fontFace(
  "OpenSansBoldItalic",
  "../fonts/open-sans/OpenSans-SemiboldItalic-webfont"
)}
`;
