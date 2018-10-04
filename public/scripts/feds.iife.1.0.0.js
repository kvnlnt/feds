// Build: feds.1.0.0.718
var feds = (function(m){

function ContainerQuery(opts) {
  var opts = opts || {};
  this.add = opts.add || [];
  this.callback = opts.callback || null;
  this.condition = opts.condition || null;
  this.debounceTime = opts.debounce || 200;
  this.event = opts.event;
  this.lock = opts.lock || [];
  this.observable = this.constructObservable(opts.observable);
  this.observer = opts.observer
    ? this.constructObserver(opts.observer)
    : this.observable;
  this.range = opts.range || null;
  this.remove = opts.remove || [];
  this.toggle = opts.toggle || [];
  this.unlock = opts.unlock || [];
}

ContainerQuery.prototype = {
  classIsLocked: function(i, c) {
    return i.dataset.locked
      ? i.dataset.locked.split(",").indexOf(c) > -1
      : false;
    return this;
  },
  classProcess: function(method, target, klass) {
    var that = this;
    this.observer.forEach(function(ii) {
      if (typeof ii === "function") ii = ii(target);
      if (!that.classIsLocked(ii, klass)) ii.classList[method](klass);
    });
  },
  classesLock: function(target) {
    var that = this;
    if (this.lock.length === 0) return;
    this.observer.forEach(function(ii) {
      if (typeof ii === "function") ii = ii(target);
      ii.dataset.locked = that.lock.join(",");
    });
    return this;
  },
  classesUnlock: function(target) {
    if (this.unlock.length === 0) return;
    var that = this;
    this.observer.forEach(function(i) {
      if (typeof i === "function") i = i(target);
      var locked = i.dataset.locked ? i.dataset.locked.split(",") : [];
      i.dataset.locked = locked
        .filter(function(ii) {
          return that.unlock.indexOf(ii) === -1;
        })
        .join(",");
    });
    return this;
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
    var that = this;

    this.observable.forEach(function(i) {
      if (that.event === Responsifier.CLICK) {
        i.addEventListener("click", function(e) {
          that.triggerClick(e.target);
        });
      }
      if (that.event === Responsifier.HOVER) {
        i.addEventListener("hover", function(e) {
          that.triggerHover(e.target);
        });
      }
      if (that.event === Responsifier.RESIZE) {
        var debouncedResize = that.debounce(function(e) {
          that.triggerResize(e.target);
        }, that.debounceTime);
        i.addEventListener("resize", debouncedResize);
        that.triggerResize(i);
      }
      if (that.event === Responsifier.SCROLL) {
        var debouncedScroll = that.debounce(function(e) {
          that.triggerScroll(e.target);
        }, that.debounceTime);
        i.addEventListener("scroll", debouncedScroll);
        that.triggerScroll(i);
      }
      if (that.event === Responsifier.TOGGLE) {
        i.addEventListener("click", function(e) {
          that.triggerToggle(e.target);
        });
      }
    });
    return this;
  },
  triggerClick: function(target) {
    if (this.conditionMet(target)) this.process(target);
    return this;
  },
  triggerHover: function(target) {
    if (this.conditionMet(target)) this.process(target);
    return this;
  },
  triggerResize: function(target) {
    if (!this.range) return this;
    var that = this;
    var r0 = parseInt(this.range[0]);
    var r1 = parseInt(this.range[1] === "*" ? 100000 : this.range[1]);
    this.observable.forEach(function(i) {
      if (i.innerWidth >= r0 && i.innerWidth <= r1 && that.conditionMet(target))
        that.process(target);
    });
    return this;
  },
  triggerScroll: function(target) {
    if (!this.range) return this;
    var that = this;
    var r0 = parseInt(this.range[0]);
    var r1 = parseInt(this.range[1] === "*" ? 100000 : this.range[1]);
    this.observable.forEach(function(i) {
      if (i.scrollY >= r0 && i.scrollY <= r1 && that.conditionMet(target))
        that.process(target);
    });
    return this;
  },
  triggerToggle: function(target) {
    if (this.conditionMet(target)) this.process(target);
    return this;
  },
  process: function(target) {
    this.classesUnlock(target);
    this.add.forEach(this.classProcess.bind(this, "add", target));
    this.remove.forEach(this.classProcess.bind(this, "remove", target));
    this.toggle.forEach(this.classProcess.bind(this, "toggle", target));
    this.classesLock(target);
    if (typeof this.callback === "function") this.callback(target);
    return this;
  }
};


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

function Responsifier(opts) {
  var opts = opts || {};
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

m.ContainerQuery = ContainerQuery;
m.Reifier = Reifier;
m.Responsifier = Responsifier;
return m;
}(feds || {}))