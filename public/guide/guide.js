function responsify() {
  new feds.Responsifier()
    // TOP
    .add({
      observer: "#top",
      observable: window,
      event: feds.Responsifier.SCROLL,
      range: [0, 199],
      add: ["position-bot-hide"],
      remove: ["position-bot-s"]
    })
    .add({
      observer: "#top",
      observable: window,
      event: feds.Responsifier.SCROLL,
      range: [200, "*"],
      add: ["position-bot-s"],
      remove: ["position-bot-hide"]
    })
    .add({
      observer: "#top",
      observable: window,
      event: feds.Responsifier.RESIZE,
      range: [0, 999],
      add: ["display-hide"],
      lock: ["display-hide"]
    })
    .add({
      observer: "#top",
      observable: window,
      event: feds.Responsifier.RESIZE,
      range: [1000, "*"],
      remove: ["display-hide"],
      unlock: ["display-hide"]
    })
    // LAYOUT
    .add({
      observer: "#layout",
      observable: window,
      event: feds.Responsifier.RESIZE,
      range: [0, 999],
      add: ["flex-dir-col", "pad-top-l", "is-mobile"]
    })
    .add({
      observer: "#layout",
      observable: window,
      event: feds.Responsifier.RESIZE,
      range: [1000, "*"],
      remove: ["flex-dir-col", "pad-top-l", "is-mobile"]
    })
    // MENU
    .add({
      observer: "#menuToggle",
      observable: window,
      event: feds.Responsifier.RESIZE,
      range: [0, 999],
      remove: ["display-hide"]
    })
    .add({
      observer: "#menuToggle",
      observable: window,
      event: feds.Responsifier.RESIZE,
      range: [1000, "*"],
      add: ["display-hide"]
    })
    .add({
      observer: "#mainMenu",
      observable: "#menuToggle",
      event: feds.Responsifier.CLICK,
      toggle: ["display-hide"]
    })
    .add({
      observer: "#mainMenu",
      observable: window,
      event: feds.Responsifier.RESIZE,
      range: [0, 999],
      add: ["display-hide"]
    })
    .add({
      observer: "#mainMenu",
      observable: window,
      event: feds.Responsifier.RESIZE,
      range: [1000, "*"],
      remove: ["display-hide"]
    })
    .add({
      observer: "#mainMenu",
      observable: "#mainMenu a",
      event: feds.Responsifier.CLICK,
      toggle: ["display-hide"],
      condition: function(r, e) {
        return document
          .querySelector("#layout")
          .classList.contains("is-mobile");
      }
    })
    .add({
      observer: "#popupExample",
      observable: "#popupExampleTrigger",
      event: feds.Responsifier.CLICK,
      toggle: ["flex"]
    })
    .add({
      observer: "#popupExample",
      observable: "#popupExampleClose",
      event: feds.Responsifier.CLICK,
      toggle: ["flex"]
    })
    .init();
}

function reify() {
  feds.components = new feds.Reifier();
}

function cleanUpExamples() {
  var code = document.querySelectorAll("*");
  for (var i = 0; i < code.length; i++) {
    code[i].innerHTML = code[i].innerHTML
      .replace(/                 /g, "")
      .trim();
  }
}

function scrollToTop() {
  window.scrollTo(0, 0);
}

document.addEventListener("DOMContentLoaded", function() {
  cleanUpExamples();
  responsify();
  reify();
});
