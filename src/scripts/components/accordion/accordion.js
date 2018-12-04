import Base from "../base";

export class Tab {
  constructor(el, parent, expanded = false) {
    this.id = el.dataset.tab;
    this.el = el;
    this.parent = parent;
    this.label = this.el.querySelector("label");
    this.content = this.el.querySelector("div");
    this.caret = this.el.querySelector("i");
    this.expanded = expanded;
    // events
    this.label.addEventListener("click", this.toggle.bind(this));
    if (this.expanded) this.toggle();
  }
  toggle() {
    this.expanded = !this.expanded;
    this.content.classList.toggle("hidden");
    this.caret.classList.toggle("rotate-30");
  }
}

export class Accordion extends Base {
  constructor(id = "", name = "accordion") {
    super(id, name);
    this.tabs = this.initTabs();
    return this;
  }
  initTabs() {
    const preExpandedTabs = feds.params.get("tabs")
      ? feds.params
          .get("tabs")
          .split(",")
          .map(i => i.trim())
      : [];
    return [...this.el.children].map(
      i => new Tab(i, this, preExpandedTabs.indexOf(i.dataset.tab) > -1)
    );
  }
}
