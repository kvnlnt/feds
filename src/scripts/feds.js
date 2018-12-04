// modules
import version from "./version";

// components
import Modal from "./components/modals/component";
import { Accordion } from "./components/accordion/accordion";

export default class Feds {
  constructor() {
    this.debug = window.location.hash === "#debug";
    if (this.debug) console.time("feds");
    this.version = version;
    this.components = {};
    this.lib = {
      components: {
        Modal: Modal,
        Accordion: Accordion
      },
      modules: {}
    };
    this.events = {};
    this.params = new URL(window.location.href).searchParams;
  }
  init() {
    this.initComponents();
    if (this.debug) console.timeEnd("feds");
  }
  initComponents() {
    [].slice
      .call(document.querySelectorAll("[data-component]"))
      .forEach(this.initComponent.bind(this));
    return this;
  }
  initComponent(c) {
    const component = this.lib.components[c.dataset.component];
    if (!component) return this;
    const instance = new component(c.id);
    this.components[c.id] = instance;
    return this;
  }
  get(componentId) {
    return this.components[componentId];
  }
}
