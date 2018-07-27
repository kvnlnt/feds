var feds = (function (m) {

    function Responsifier(opts) {
        var opts = opts || {};
        this.target = opts.target;
        this.source = opts.source || this.target;
        this.event = opts.event || null;
        this.range = opts.range ? opts.range.split(",") : null;
        this.classAdd = opts.add ? opts.add.split() : [];
        this.classRemove = opts.remove ? opts.remove.split() : [];
        this.classToggle = opts.toggle ? opts.toggle.split() : [];
        if (this.event === "scroll") this.source.addEventListener('scroll', this.handleScroll.bind(this));
        if (this.event === "hover") this.source.addEventListener('mouseover', this.handleHover.bind(this));
        if (this.event === "hover") this.source.addEventListener('mouseout', this.handleHover.bind(this));
        if (this.event === "click") this.source.addEventListener('click', this.handleClick.bind(this));
        if (this.event === "resize") this.source.addEventListener('resize', this.handleResize.bind(this));
        if (this.event === "toggle") this.source.addEventListener('click', this.handleToggle.bind(this));
    };

    Responsifier.prototype = {
        addClasses: function () {
            var that = this;
            if (!this.classAdd.length) return this;
            this.classAdd.forEach(function (i) {
                that.target.classList.add(i);
            });
            return this;
        },
        handleClick: function (e) {
            this.addClasses();
            this.removeClasses();
        },
        handleHover: function (e) {
            this.addClasses();
            this.removeClasses();
            this.toggleClasses();
        },
        handleResize: function (e) {
            var r0 = parseInt(this.range[0]);
            var r1 = parseInt(this.range[1] === "*" ? 100000 : this.range[1]);
            if (this.source.innerWidth >= r0 && this.source.innerWidth <= r1) {
                this.addClasses();
                this.removeClasses();
            }
            return this;
        },
        handleScroll: function (e) {
            var r0 = parseInt(this.range[0]);
            var r1 = parseInt(this.range[1] === "*" ? 100000 : this.range[1]);
            if (this.source.scrollY >= r0 && this.source.scrollY <= r1) {
                this.addClasses();
                this.removeClasses();
            }
            return this;
        },
        handleToggle: function (e) {
            this.toggleClasses();
        },
        removeClasses: function () {
            var that = this;
            if (!this.classRemove.length) return this;
            this.classRemove.forEach(function (i) {
                that.target.classList.remove(i);
            });
            return this;
        },
        toggleClasses: function () {
            var that = this;
            if (!this.classToggle.length) return this;
            this.classToggle.forEach(function (c) {
                that.target.classList.toggle(c);
            });
        }
    };

    // auto register responsifiers
    [].slice
        .call(document.querySelectorAll("[data-responsifier]"), 0)
        .map(function (i) {
            return new Responsifier({
                target: document.querySelector(i.dataset.target),
                source: i.dataset.source === "window" ?
                    window : document.querySelector(i.dataset.source),
                event: i.dataset.event,
                range: i.dataset.range,
                add: i.dataset.add,
                remove: i.dataset.remove,
                toggle: i.dataset.toggle
            });
        });

    // export
    m.Responsifier = Responsifier;

    // return module
    return m;
})(feds || {});