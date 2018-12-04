import base from "../base";

class Tab {
  constructor(id = "", expanded = false) {
    this.id = id;
    this.label = document.querySelector(`label[for="${id}"]`);
    this.content = document.querySelector(`#${id}`);
    this.caret = document.createElement("i");
    this.expanded = expanded;

    // styling
    this.styleLabel()
      .styleContent()
      .styleCaret();

    // events
    this.label.addEventListener("click", this.toggle.bind(this));
  }
  styleCaret() {
    [
      "icon",
      "icon-caret",
      "leading-2xl",
      "font-size-xl",
      "margin-right-base",
      "rotate-30"
    ].forEach(i => this.caret.classList.add(i));
    this.label.prepend(this.caret);
    return this;
  }
  styleContent() {
    ["hidden", "pad-left-2xl"].forEach(i => this.content.classList.add(i));
    return this;
  }
  styleLabel() {
    [
      "block",
      "cursor-pointer",
      "leading-2xl",
      "pad-left-s",
      "pad-right-xl",
      "border-style-solid-top",
      "border-size-top-xs",
      "border-color-light-grey",
      "hover:text-color-primary"
    ].forEach(i => this.label.classList.add(i));
    return this;
  }
  toggle() {
    this.expanded = !this.expanded;
    this.content.classList.toggle("hidden");
    this.caret.classList.toggle("rotate-30");
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
