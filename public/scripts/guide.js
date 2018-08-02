document.addEventListener("DOMContentLoaded", function () {

  // LAYOUT
  new feds.ContainerQuery({
    target: document.querySelector("#layout"),
    queries: [{
        source: window,
        event: "resize",
        range: [0, 999],
        add: ["flex-dir-col"]
      },
      {
        source: window,
        event: "resize",
        range: [1000, "*"],
        remove: ["flex-dir-col"]
      }
    ]
  });

  // GRID
  new feds.ContainerQuery({
    target: document.querySelector("#responsiveGrid"),
    queries: [{
        source: window,
        event: "resize",
        range: [0, 999],
        add: ["flex-dir-col"]
      },
      {
        source: window,
        event: "resize",
        range: [1000, "*"],
        remove: ["flex-dir-col"]
      }
    ]
  });

  // TOP
  new feds.ContainerQuery({
    target: document.querySelector("#top"),
    queries: [{
        source: window,
        event: "scroll",
        range: [0, 199],
        add: ["hide"]
      },
      {
        source: window,
        event: "scroll",
        range: [200, "*"],
        remove: ["hide"]
      },
      {
        source: window,
        event: "resize",
        range: [0, 999],
        add: ["hide"],
        lock: ["hide"]
      },
      {
        source: window,
        event: "resize",
        range: [1000, "*"],
        remove: ["hide"],
        unlock: ["hide"]
      }
    ]
  });

  // RESPONSIFIER
  new feds.ContainerQuery({
    target: document.querySelector("#responsiveUIBody"),
    queries: [{
        source: window,
        event: "resize",
        range: [0, 799],
        add: ["flex-dir-col"]
      },
      {
        source: window,
        event: "resize",
        range: [800, "*"],
        remove: ["flex-dir-col"]
      }
    ]
  });

  new feds.ContainerQuery({
    target: document.querySelector("#responsiveUIMainMenu"),
    queries: [{
        source: window,
        event: "resize",
        range: [0, 799],
        add: ["hide"]
      },
      {
        source: window,
        event: "resize",
        range: [800, "*"],
        remove: ["hide"]
      },
      {
        source: document.querySelector("#responsiveUIToggleMenu"),
        event: "click",
        toggle: ["hide"]
      }
    ]
  });

  new feds.ContainerQuery({
    target: document.querySelector("#responsiveUIToggleMenu"),
    queries: [{
        source: window,
        event: "resize",
        range: [0, 799],
        remove: ["hide"]
      },
      {
        source: window,
        event: "resize",
        range: [800, "*"],
        add: ["hide"]
      }
    ]
  });

  new feds.ContainerQuery({
    target: document.querySelectorAll("#responsiveUIContent .column:nth-child(-n+2)"),
    queries: [{
        source: window,
        event: "resize",
        range: [0, 799],
        add: ["half"]
      },
      {
        source: window,
        event: "resize",
        range: [800, "*"],
        remove: ["half"]
      }
    ]
  });


});