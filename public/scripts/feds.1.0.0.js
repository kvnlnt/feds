var feds = (function (m) {

    function Responsifier(opts) {
        var opts = opts || {};
        this.el = opts.el;
        this.watch = opts.watch || null;
        this.event = opts.event || null;
        this.range = opts.range ? opts.range.split(",") : null;
        this.classAdd = opts.classAdd ? opts.classAdd.split() : [];
        this.classRemove = opts.classRemove ? opts.classRemove.split() : [];
        this.watch.addEventListener('scroll', this.handleScroll.bind(this));
    };

    Responsifier.prototype.handleScroll = function (e) {
        var that = this;
        var low = parseInt(this.range[0]);
        var high = parseInt(this.range[1] === "*" ? 100000 : this.range[1]);
        if (this.watch.scrollY >= low && this.watch.scrollY <= high) {
            if (this.classAdd.length) {
                this.classAdd.forEach(function (i) {
                    that.el.classList.add(i);
                });
            }
            if (this.classRemove.length) {
                this.classRemove.forEach(function (i) {
                    that.el.classList.remove(i);
                });
            }
        }
    };

    // auto register responsifiers
    [].slice
        .call(document.querySelectorAll("[data-responsifier]"), 0)
        .map(function (i) {
            return new Responsifier({
                el: document.querySelector(i.dataset.el),
                watch: i.dataset.watch === "window" ?
                    window : document.querySelector(i.dataset.watch),
                event: i.dataset.event,
                range: i.dataset.range,
                classAdd: i.dataset.classAdd,
                classRemove: i.dataset.classRemove
            });
        });

    // export
    m.Responsifier = Responsifier;

    // return module
    return m;
})(feds || {});