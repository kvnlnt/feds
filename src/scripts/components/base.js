export default class Component {
  constructor(id = "") {
    this.id = id;
    this.el = document.querySelector(`#${id}`);
  }
}
