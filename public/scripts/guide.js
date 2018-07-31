document.addEventListener("DOMContentLoaded", function() {
  new feds.ContainerQuery({
    target: document.querySelector("#top"),
    queries: [
      {
        source: window,
        event: "scroll",
        range: [200, "*"],
        remove: ["hide"]
      },
      {
        source: window,
        event: "scroll",
        range: [0, 199],
        add: ["hide"]
      },
      {
        source: window,
        event: "resize",
        range: [0, 799],
        add: ["hide"],
        lock: ["hide"]
      },
      {
        source: window,
        event: "resize",
        range: [800, "*"],
        remove: ["hide"],
        unlock: "hide"
      },
      {
        source: document.querySelector("#top"),
        event: "click",
        toggle: ["hide"]
      }
    ]
  });
});
