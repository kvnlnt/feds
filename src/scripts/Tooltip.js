function Tooltip(opts) {
    var opts = opts || {};
    this.tip = opts.tooltip || '';
    console.log(this);
    return this;
}


Tooltip.prototype = {};