// modules
import Version from "./version";
import Bus from "./modules/bus.js";

// components
import { Accordion } from "./components/accordion/accordion";

const modules = {};
const components = {};
components.Accordion = Accordion;

export default class Feds {
  constructor() {
    this.debug = window.location.hash === "#debug";
    if (this.debug) console.time("feds");
    this.version = Version;
    this.components = {};
    this.lib = {};
    this.lib.modules = modules;
    this.lib.components = components;
    this.bus = new Bus();
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
