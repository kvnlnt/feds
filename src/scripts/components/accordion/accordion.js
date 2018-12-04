import base from "../base";

class Tab {
  constructor(id = "", expanded = false) {
    this.id = id;
    this.label = document.querySelector(`label[for="${id}"]`);
    this.content = document.querySelector(`#${id}`);
    this.expanded = expanded;
    // events
    this.label.addEventListener("click", this.toggle.bind(this));
  }
  toggle() {
    this.expanded = !this.expanded;
    this.content.classList.toggle("hidden");
  }
}

export default class Accordion extends base {
  constructor(id = "", name = "accordion") {
    super(id, name);
    this.tabs = this.initTabs();
    return this;
  }
  initTabs() {
    return [...this.el.children]
      .filter(i => i.nodeName === "LABEL")
      .map(i => new Tab(i.getAttribute("for")));
  }
}
