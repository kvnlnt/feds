// modules
import version from "./version";

// components
import Modal from "./components/modals/component";

export default class Feds {
  constructor() {
    this.debug = window.location.hash === "#debug";
    if (this.debug) console.time("feds");
    this.version = version;
    this.components = {};
    this.lib = {
      components: {
        Modal: Modal
      },
      modules: {}
    };
    this.events = {};
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
    this.components[instance.id] = instance;
    console.log(instance);
    return this;
  }
  get(componentId) {
    return this.components[componentId];
  }
}
