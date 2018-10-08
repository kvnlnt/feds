function Modal(el, opts) {
  this.opts = opts || {};
  this.el = el;
  this.name = this.opts.name;
  this.open = this.opts.open;
  this.close = this.opts.close;
  this.type = this.opts.type || 'basic';
  this.responsifier = new Responsifier();
  this._init();
  return this;
}

Modal.prototype = {
  _init: function () {
    this.responsifier
      .add({
        observer: this.el,
        observable: this.open,
        event: feds.Responsifier.CLICK,
        add: ["display-flex"]
      }).add({
        observer: this.el,
        observable: this.close,
        event: feds.Responsifier.CLICK,
        remove: ["display-flex"]
      })
      .add({
        observer: "body",
        observable: this.open,
        event: feds.Responsifier.CLICK,
        add: ["scroll-none"]
      })
      .add({
        observer: "body",
        observable: this.close,
        event: feds.Responsifier.CLICK,
        remove: ["scroll-none"]
      }).init();
  }
};