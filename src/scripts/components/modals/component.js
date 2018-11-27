import base from "../base";

export default class Modal extends base {
  constructor(id = "", name = "modal") {
    super(id, name);
    return this;
  }
  open() {
    alert("open");
  }
  close() {
    alert("close");
  }
}
