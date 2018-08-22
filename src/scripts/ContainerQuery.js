function ContainerQuery(opts) {
  var opts = opts || {};
  this.add = opts.add || [];
  this.condition = opts.condition || null;
  this.debounceTime = opts.debounce || 200;
  this.event = opts.event;
  this.lock = opts.lock || [];
  this.observable = this.constructObservable(opts.observable);
  this.observer = opts.observer
    ? this.constructObserver(opts.observer)
    : this.observable;
  this.range = opts.range || [0, 0];
  this.remove = opts.remove || [];
  this.toggle = opts.toggle || [];
  this.unlock = opts.unlock || [];
}

ContainerQuery.prototype = {
  classAdd: function(i) {
    var that = this;
    this.observer.forEach(function(ii) {
      if (typeof ii === "function") ii = ii(that.observable);
      if (!that.classIsLocked(ii, i)) ii.classList.add(i);
    });
  },
  classIsLocked: function(i, c) {
    return i.dataset.locked
      ? i.dataset.locked.split(",").indexOf(c) > -1
      : false;
  },
  classRemove: function(i) {
    var that = this;
    this.observer.forEach(function(ii) {
      if (typeof ii === "function") ii = ii(that.observable);
      if (!that.classIsLocked(ii, i)) ii.classList.remove(i);
    });
  },
  classToggle: function(i) {
    var that = this;
    this.observer.forEach(function(ii) {
      if (typeof ii === "function") ii = ii(that.observable);
      if (!that.classIsLocked(ii, i)) ii.classList.toggle(i);
    });
  },
  classesAdd: function(target) {
    this.add.forEach(this.classAdd.bind(this));
    return this;
  },
  classesLock: function(target) {
    if (this.lock.length === 0) return;
    var that = this;
    this.observer.forEach(function(ii) {
      if (typeof ii === "function") ii = ii(that.observable);
      ii.dataset.locked = that.lock.join(",");
    });
  },
  classesRemove: function(target) {
    this.remove.forEach(this.classRemove.bind(this));
    return this;
  },
  classesToggle: function(target) {
    this.toggle.forEach(this.classToggle.bind(this));
    return this;
  },
  classesUnlock: function(target) {
    if (this.unlock.length === 0) return;
    var that = this;
    this.observer.forEach(function(i) {
      if (typeof i === "function") i = i(that.observable);
      var locked = i.dataset.locked ? i.dataset.locked.split(",") : [];
      i.dataset.locked = locked
        .filter(function(ii) {
          return that.unlock.indexOf(ii) === -1;
        })
        .join(",");
    });
  },
  conditionMet: function(target) {
    return this.condition ? this.condition(this, target) : true;
  },
  constructObserver: function(observer) {
    if (observer === void 0) return null;
    if (typeof observer === "function") return [observer];
    if (typeof observer === "string")
      return document.querySelectorAll(observer);
    return observer.hasOwnProperty("length") ? observer : [observer];
  },
  constructObservable: function(observable) {
    if (observable === void 0) return null;
    if (typeof observable === "string")
      return document.querySelectorAll(observable);
    return observable.length === 0 ? [observable] : observable;
  },
  debounce: function(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  },
  init: function() {
    if (this.event === Responsifier.SCROLL) this.initScroll();
    if (this.event === Responsifier.RESIZE) this.initResize();
    if (this.event === Responsifier.CLICK) this.initClick();
    if (this.event === Responsifier.HOVER) this.initHover();
    if (this.event === Responsifier.TOGGLE) this.initToggle();
  },
  initClick: function() {
    var that = this;
    this.observable.forEach(function(i) {
      i.addEventListener("click", function(e) {
        that.onClick(e.target);
      });
    });
  },
  initHover: function() {
    var that = this;
    this.observable.forEach(function(i) {
      i.addEventListener("hover", function(e) {
        that.onHover(e.target);
      });
    });
  },
  initResize: function() {
    var that = this;
    this.observable.forEach(function(i) {
      var debouncedResize = that.debounce(function(e) {
        that.onResize(e.target);
      }, that.debounceTime);
      i.addEventListener("resize", debouncedResize);
      that.onResize(i);
    });
  },
  initScroll: function() {
    var that = this;
    this.observable.forEach(function(i) {
      var debouncedScroll = that.debounce(function(e) {
        that.onScroll(e.target);
      }, that.debounceTime);
      i.addEventListener("scroll", debouncedScroll);
      that.onScroll(i);
    });
  },
  initToggle: function() {
    var that = this;
    this.observable.forEach(function(i) {
      i.addEventListener("click", function(e) {
        that.onToggle(e.target);
      });
    });
  },
  onClick: function(target) {
    if (this.conditionMet(target)) this.process(target);
    return this;
  },
  onHover: function(target) {
    if (this.conditionMet(target)) this.process(target);
    return this;
  },
  onResize: function(target) {
    var that = this;
    var r0 = parseInt(this.range[0]);
    var r1 = parseInt(this.range[1] === "*" ? 100000 : this.range[1]);
    this.observable.forEach(function(i) {
      if (i.innerWidth >= r0 && i.innerWidth <= r1 && that.conditionMet(target))
        that.process(target);
    });
    return this;
  },
  onScroll: function() {
    var that = this;
    var r0 = parseInt(this.range[0]);
    var r1 = parseInt(this.range[1] === "*" ? 100000 : this.range[1]);
    this.observable.forEach(function(i) {
      if (i.scrollY >= r0 && i.scrollY <= r1 && that.conditionMet(target))
        that.process(target);
    });
    return this;
  },
  onToggle: function() {
    if (this.conditionMet(target)) this.process(target);
    return this;
  },
  process: function(target) {
    this.classesUnlock(target);
    this.classesAdd(target);
    this.classesRemove(target);
    this.classesToggle(target);
    this.classesLock(target);
    return this;
  }
};
