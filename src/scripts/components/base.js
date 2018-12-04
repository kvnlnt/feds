export default class Component {
  constructor(id = "", name = "", styles = null) {
    this.id = id;
    this.name = name;
    this.el = document.querySelector(`#${id}`);
  }
}
