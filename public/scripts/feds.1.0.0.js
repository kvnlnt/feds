var feds = (function (m) {
  function ContainerQuery(opts) {
    var opts = opts || {};
    this.target = opts.target;
    this.queries = opts.queries;
    this.classList = []; // [[className,eventLastAddedBy,eventLastRemovedBy]]
    this.locked = [];
    this.registerListeners();
  }

  ContainerQuery.prototype = {
    classesAdd: function (query) {
      var that = this;
      if (!query.add) return this;
      query.add.forEach(function (c) {
        if (!that.classIsLocked(c)) that.target.classList.add(c);
      });
      return this;
    },
    classIsLocked: function (c) {
      console.log(this.locked);
      return this.locked.indexOf(c) > -1;
    },
    classesLock: function (query) {
      var that = this;
      if (!query.lock) return this;
      query.lock.forEach(function (c) {
        if (!that.classIsLocked(c)) that.locked.push(c);
      });
      return this;
    },
    classesRemove: function (query) {
      var that = this;
      if (!query.remove) return this;
      query.remove.forEach(function (c) {
        if (!that.classIsLocked(c)) that.target.classList.remove(c);
      });
      return this;
    },
    classesToggle: function (query) {
      var that = this;
      if (!query.toggle) return this;
      query.toggle.forEach(function (c) {
        if (!that.classIsLocked(c)) that.target.classList.toggle(c);
      });
      return this;
    },
    classesUnlock: function (query) {
      var that = this;
      if (!query.unlock) return this;
      query.unlock.forEach(function (c) {
        that.locked.splice(that.locked.indexOf(c), 1);
      });
      return this;
    },
    handleClick: function (query) {
      this.process(query);
    },
    handleResize: function (query) {
      var r0 = parseInt(query.range[0]);
      var r1 = parseInt(query.range[1] === "*" ? 100000 : query.range[1]);
      if (query.source.innerWidth >= r0 && query.source.innerWidth <= r1) this.process(query);
      return this;
    },
    handleScroll: function (query) {
      var r0 = parseInt(query.range[0]);
      var r1 = parseInt(query.range[1] === "*" ? 100000 : query.range[1]);
      if (query.source.scrollY >= r0 && query.source.scrollY <= r1) this.process(query);
      return this;
    },
    process: function (query) {
      if (query.lock) this.classesLock(query);
      if (query.unlock) this.classesUnlock(query);
      if (query.add) this.classesAdd(query);
      if (query.remove) this.classesRemove(query);
      if (query.toggle) this.classesToggle(query);
    },
    registerListeners: function () {
      var that = this;
      this.queries.forEach(function (i) {
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