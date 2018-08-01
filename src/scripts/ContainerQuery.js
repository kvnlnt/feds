var feds = (function(m) {
  function ContainerQuery(opts) {
    var opts = opts || {};
    this.target = opts.target;
    this.queries = opts.queries;
    this.locked = [];
    this.registerListeners().init();
  }

  ContainerQuery.prototype = {
    classesAdd: function(list) {
      var that = this;
      if (!list) return this;
      list.forEach(function(i) {
        if (!that.classIsLocked(i)) that.target.classList.add(i);
      });
      return this;
    },
    classIsLocked: function(i) {
      return this.locked.indexOf(i) > -1;
    },
    classesLock: function(list) {
      var that = this;
      if (!list) return this;
      list.forEach(function(i) {
        if (!that.classIsLocked(i)) that.locked.push(i);
      });
      return this;
    },
    classesRemove: function(list) {
      var that = this;
      if (!list) return this;
      list.forEach(function(i) {
        if (!that.classIsLocked(i)) that.target.classList.remove(i);
      });
      return this;
    },
    classesToggle: function(list) {
      var that = this;
      if (!list) return this;
      list.forEach(function(i) {
        if (!that.classIsLocked(i)) that.target.classList.toggle(i);
      });
      return this;
    },
    classesUnlock: function(list) {
      var that = this;
      if (!list) return this;
      list.forEach(function(i) {
        that.locked.splice(that.locked.indexOf(i), 1);
      });
      return this;
    },
    handleClick: function(query) {
      this.process(query);
      return this;
    },
    handleResize: function(query) {
      var r0 = parseInt(query.range[0]);
      var r1 = parseInt(query.range[1] === "*" ? 100000 : query.range[1]);
      if (query.source.innerWidth >= r0 && query.source.innerWidth <= r1)
        this.process(query);
      return this;
    },
    handleScroll: function(query) {
      var r0 = parseInt(query.range[0]);
      var r1 = parseInt(query.range[1] === "*" ? 100000 : query.range[1]);
      if (query.source.scrollY >= r0 && query.source.scrollY <= r1)
        this.process(query);
      return this;
    },
    init: function() {
      this.queries.forEach(function(i) {
        if (i.event === "scroll") i.source.dispatchEvent(new Event("scroll"));
        if (i.event === "resize") i.source.dispatchEvent(new Event("resize"));
      });
    },
    process: function(query) {
      if (query.unlock) this.classesUnlock(query.unlock);
      if (query.add) this.classesAdd(query.add);
      if (query.remove) this.classesRemove(query.remove);
      if (query.toggle) this.classesToggle(query.toggle);
      if (query.lock) this.classesLock(query.lock);
      return this;
    },
    registerListeners: function() {
      var that = this;
      this.queries.forEach(function(i) {
        var scroll = that.handleScroll.bind(that, i);
        var resize = that.handleResize.bind(that, i);
        var click = that.handleClick.bind(that, i);
        if (i.event === "scroll") i.source.addEventListener(i.event, scroll);
        if (i.event === "resize") i.source.addEventListener(i.event, resize);
        if (i.event === "click") i.source.addEventListener(i.event, click);
      });
      return this;
    }
  };

  // export
  m.ContainerQuery = ContainerQuery;

  // return module
  return m;
})(feds || {});
