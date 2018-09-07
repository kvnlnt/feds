function Reifier() {
    this.components = this.collect();
    return this.components;
}

Reifier.prototype = {
    collect: function () {
        var that = this;
        return [].slice.call(document.querySelectorAll('[data-reify]')).map(function (i) {
            if (!feds[i.dataset.reify]) return null;
            return that.reify(i);
        });
    },
    reify: function (el) {
        return new feds[el.dataset.reify](el.dataset);
    }
};