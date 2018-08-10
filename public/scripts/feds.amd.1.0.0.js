
define('feds', [], 
function () {
    function ContainerQuery(opts) {
    var opts = opts || {};
    this.add = opts.add || [];
    this.conditions = opts.conditions || [];
    this.debounceTime = opts.debounce || 200;
    this.event = opts.event;
    this.lock = opts.lock || [];
    this.observable = this.constructObservable(opts.observable);
    this.observer = opts.observer ? this.constructObserver(opts.observer) : this.observable;
    this.range = opts.range || [0, 0];
    this.remove = opts.remove || [];
    this.toggle = opts.toggle || [];
    this.unlock = opts.unlock || [];
}

ContainerQuery.prototype = {
    classAdd: function (i) {
        var that = this;
        this.observer.forEach(function (ii) {
            if (!that.classIsLocked(ii, i)) ii.classList.add(i);
        });
    },
    classIsLocked: function (i, c) {
        return i.dataset.locked ? i.dataset.locked.split(',').indexOf(c) > -1 : false;
    },
    classRemove: function (i) {
        var that = this;
        this.observer.forEach(function (ii) {
            if (!that.classIsLocked(ii, i)) ii.classList.remove(i);
        });
    },
    classToggle: function (i) {
        var that = this;
        this.observer.forEach(function (ii) {
            if (!that.classIsLocked(ii, i)) ii.classList.toggle(i);
        });
    },
    classesAdd: function () {
        this.add.forEach(this.classAdd.bind(this));
        return this;
    },
    classesLock: function () {
        if (this.lock.length === 0) return;
        var that = this;
        this.observer.forEach(function (ii) {
            ii.dataset.locked = that.lock.join(',');
        });
    },
    classesRemove: function () {
        this.remove.forEach(this.classRemove.bind(this));
        return this;
    },
    classesToggle: function () {
        this.toggle.forEach(this.classToggle.bind(this));
        return this;
    },
    classesUnlock: function () {
        if (this.unlock.length === 0) return;
        var that = this;
        this.observer.forEach(function (i) {
            var locked = i.dataset.locked ? i.dataset.locked.split(',') : [];
            i.dataset.locked = locked
                .filter(function (ii) {
                    return that.unlock.indexOf(ii) === -1;
                })
                .join(',');
        });
    },
    conditionsMet: function () {
        if (this.conditions.length === 0) return true;
        return this.conditions.every(function (i) {
            return i();
        });
    },
    constructObserver: function (observer) {
        if (observer === void 0) return null;
        if (typeof observer === "string") return document.querySelectorAll(observer);
        return observer.hasOwnProperty('length') ? observer : [observer];
    },
    constructObservable: function (observable) {
        if (observable === void 0) return null;
        if (typeof observable === "string") return document.querySelectorAll(observable);
        return observable.length === 0 ? [observable] : observable;
    },
    debounce: function (func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },
    handleClick: function (e) {
        this.onClick();
        return this;
    },
    handleHover: function (e) {
        this.onHover();
        return this;
    },
    handleResize: function (e) {
        this.onResize();
    },
    handleScroll: function (e) {
        this.onScroll();
    },
    handleToggle: function (e) {
        this.onToggle();
        return this;
    },
    init: function () {
        if (this.event === Responsifier.SCROLL) this.initScroll();
        if (this.event === Responsifier.RESIZE) this.initResize();
        if (this.event === Responsifier.CLICK) this.initClick();
        if (this.event === Responsifier.HOVER) this.initHover();
        if (this.event === Responsifier.TOGGLE) this.initToggle();
    },
    initClick: function () {
        var that = this;
        this.observable.forEach(function (i) {
            i.addEventListener("click", that.handleClick.bind(that));
        });
    },
    initHover: function () {
        var that = this;
        this.observable.forEach(function (i) {
            i.addEventListener("hover", that.handleHover.bind(that));
        });
    },
    initResize: function () {
        var that = this;
        this.observable.forEach(function (i) {
            var debouncedResize = that.debounce(that.handleResize.bind(that), that.debounceTime);
            i.addEventListener("resize", debouncedResize);
        });
        this.onResize();
    },
    initScroll: function () {
        var that = this;
        this.observable.forEach(function (i) {
            var debouncedScroll = that.debounce(that.handleScroll.bind(that), that.debounceTime);
            i.addEventListener("scroll", debouncedScroll);
        });
        this.onScroll();
    },
    initToggle: function () {
        var that = this;
        this.observable.forEach(function (i) {
            i.addEventListener("click", that.handleToggle.bind(that));
        });
    },
    onClick: function () {
        if (this.conditionsMet()) this.process();
        return this;
    },
    onHover: function () {
        if (this.conditionsMet()) this.process();
        return this;
    },
    onResize: function () {
        var that = this;
        var r0 = parseInt(this.range[0]);
        var r1 = parseInt(this.range[1] === "*" ? 100000 : this.range[1]);
        this.observable.forEach(function (i) {
            if (i.innerWidth >= r0 && i.innerWidth <= r1 && that.conditionsMet()) that.process();
        });
        return this;
    },
    onScroll: function () {
        var that = this;
        var r0 = parseInt(this.range[0]);
        var r1 = parseInt(this.range[1] === "*" ? 100000 : this.range[1]);
        this.observable.forEach(function (i) {
            if (i.scrollY >= r0 && i.scrollY <= r1 && that.conditionsMet()) that.process();
        });
        return this;
    },
    onToggle: function () {
        if (this.conditionsMet()) this.process();
        return this;
    },
    process: function () {
        this.classesUnlock(this.unlock);
        this.classesAdd(this.add);
        this.classesRemove(this.remove);
        this.classesToggle(this.toggle);
        this.classesLock(this.lock);
        return this;
    }
};
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
    var module = {
        ContainerQuery: ContainerQuery,
        Responsifier: Responsifier
    };
    return module;
});