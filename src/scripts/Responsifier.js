function Responsifier(opts) {
  this.queries = [];
  return this;
}

Responsifier.SCROLL = "SCROLL";
Responsifier.RESIZE = "RESIZE";
Responsifier.CLICK = "CLICK";
Responsifier.HOVER = "HOVER";
Responsifier.TOGGLE = "TOGGLE";

Responsifier.prototype = {
  add: function (opts) {
    var opts = opts || {};
    this.queries.push(new ContainerQuery(opts));
    return this;
  },
  init: function () {
    this.queries.forEach(function (i) {
      i.init();
    });
  }
};