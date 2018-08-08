document.addEventListener("DOMContentLoaded", function () {
  new feds.Responsifier()
    // TOP
    .add({
      observer: "#top",
      observable: window,
      event: feds.Responsifier.SCROLL,
      range: [0, 199],
      add: ["pos-bottom-hide"],
      remove: ["pos-bottom-s"],
    })
    .add({
      observer: "#top",
      observable: window,
      event: feds.Responsifier.SCROLL,
      range: [200, "*"],
      add: ["pos-bottom-s"],
      remove: ["pos-bottom-hide"]
    })
    .add({
      observer: "#top",
      observable: window,
      event: feds.Responsifier.RESIZE,
      range: [0, 999],
      add: ["hide"],
      lock: ["hide"]
    })
    .add({
      observer: "#top",
      observable: window,
      event: feds.Responsifier.RESIZE,
      range: [1000, "*"],
      remove: ["hide"],
      unlock: ["hide"]
    })
    // LAYOUT
    .add({
      observer: "#layout",
      observable: window,
      event: feds.Responsifier.RESIZE,
      range: [0, 999],
      add: ["flex-dir-col", "pad-top-xl", "is-mobile"]
    })
    .add({
      observer: "#layout",
      observable: window,
      event: feds.Responsifier.RESIZE,
      range: [1000, "*"],
      remove: ["flex-dir-col", "pad-top-xl", "is-mobile"]
    })
    // MENU
    .add({
      observer: "#menuToggle",
      observable: window,
      event: feds.Responsifier.RESIZE,
      range: [0, 999],
      remove: ["hide"]
    })
    .add({
      observer: "#menuToggle",
      observable: window,
      event: feds.Responsifier.RESIZE,
      range: [1000, "*"],
      add: ["hide"]
    })
    .add({
      observer: "#mainMenu",
      observable: "#menuToggle",
      event: feds.Responsifier.CLICK,
      toggle: ["hide"]
    })
    .add({
      observer: "#mainMenu",
      observable: window,
      event: feds.Responsifier.RESIZE,
      range: [0, 999],
      add: ["hide"]
    })
    .add({
      observer: "#mainMenu",
      observable: window,
      event: feds.Responsifier.RESIZE,
      range: [1000, "*"],
      remove: ["hide"]
    })
    .add({
      observer: "#mainMenu",
      observable: "#mainMenu a",
      event: feds.Responsifier.CLICK,
      toggle: ["hide"],
      conditions: [
        function () {
          return document
            .querySelector("#layout")
            .classList.contains("is-mobile");
        }
      ]
    })
    // RESPONSIVE GRID
    .add({
      observer: "#responsiveGrid",
      observable: window,
      event: feds.Responsifier.RESIZE,
      range: [0, 999],
      add: ["flex-dir-col"]
    })
    .add({
      observer: "#responsiveGrid",
      observable: window,
      event: feds.Responsifier.RESIZE,
      range: [1000, "*"],
      remove: ["flex-dir-col"]
    })
    .add({
      observer: "#cqBody",
      observable: window,
      event: feds.Responsifier.RESIZE,
      range: [0, 799],
      add: ["flex-dir-col"]
    })
    .add({
      observer: "#cqBody",
      observable: window,
      event: feds.Responsifier.RESIZE,
      range: [800, "*"],
      remove: ["flex-dir-col"]
    })
    .add({
      observer: "#cqMainMenu",
      observable: window,
      event: feds.Responsifier.RESIZE,
      range: [0, 799],
      add: ["hide"]
    })
    .add({
      observer: "#cqMainMenu",
      observable: window,
      event: feds.Responsifier.RESIZE,
      range: [800, "*"],
      remove: ["hide"]
    })
    .add({
      observer: "#cqMainMenu",
      observable: "#cqToggleMenu",
      event: feds.Responsifier.CLICK,
      toggle: ["hide"]
    })
    .add({
      observer: "#cqToggleMenu",
      observable: window,
      event: feds.Responsifier.RESIZE,
      range: [0, 799],
      remove: ["hide"]
    })
    .add({
      observer: "#cqToggleMenu",
      observable: window,
      event: feds.Responsifier.RESIZE,
      range: [800, "*"],
      add: ["hide"]
    })
    .add({
      observer: "#cqContent .column:nth-child(-n+2)",
      observable: window,
      event: feds.Responsifier.RESIZE,
      range: [0, 799],
      add: ["half"]
    })
    .add({
      observer: "#cqContent .column:nth-child(-n+2)",
      observable: window,
      event: feds.Responsifier.RESIZE,
      range: [800, "*"],
      remove: ["half"]
    })
    .init();
});