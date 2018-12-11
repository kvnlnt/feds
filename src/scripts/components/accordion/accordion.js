import Base from "../base";

export class Tab {
  constructor(el, expanded = false) {
    this.id = el.dataset.tab;
    this.el = el;
    this.label = this.el.querySelector("label");
    this.caret = this.el.querySelector("i");
    this.content = this.el.querySelector("div");
    this.expanded = expanded;
    // events
    this.label.addEventListener("click", this.toggle.bind(this));
    if (this.expanded) this.expand();
  }
  contract() {
    this.content.classList.add("hidden");
    this.caret.classList.add("rotate-30");
    this.expanded = false;
    return this;
  }
  expand() {
    this.content.classList.remove("hidden");
    this.caret.classList.remove("rotate-30");
    this.expanded = true;
    return this;
  }
  toggle() {
    this.expanded ? this.contract() : this.expand();
    return this;
  }
}

export class Accordion extends Base {
  constructor(id = "") {
    super(id, name);
    this.tabs = this.initTabs();
    return this;
  }
  initTabs() {
    return [...this.el.children].map(i => new Tab(i));
  }
}
