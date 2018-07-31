var feds = (function(m) {
  function ContainerQuery(opts) {
    var opts = opts || {};
    this.target = [].slice.call(document.querySelectorAll(opts.target), 0);
    this.source = opts.source || this.target;
    this.queries = opts.queries;
    this.classList = []; // [[className,eventLastAddedBy,eventLastRemovedBy]]
    this.locked = false;
    this.registerListeners();
  }

  ContainerQuery.prototype = {
    addListener: function(evt, cb) {},
    registerListeners: function() {
      var that = this;
      this.queries.forEach(function(i) {
        if (i.event === "scroll") that.addListener(i.event, that.handleScroll);
      });
      return this;
    },
    process: function(e) {
      if (e.type === "scroll") return this.handleScroll();
      if (e.type === "resize") return this.handleResize();
      if (e.type === "click") return this.handleClick();
      if (e.type === "click") return this.handleClick();
    }
    // handleResize: function(e) {
    //   var r0 = parseInt(this.range[0]);
    //   var r1 = parseInt(this.range[1] === "*" ? 100000 : this.range[1]);
    //   if (this.source.innerWidth >= r0 && this.source.innerWidth <= r1) {
    //     this.process();
    //   }
    //   return this;
    // },
    // handleScroll: function(e) {
    //   var r0 = parseInt(this.range[0]);
    //   var r1 = parseInt(this.range[1] === "*" ? 100000 : this.range[1]);
    //   if (this.source.scrollY >= r0 && this.source.scrollY <= r1) {
    //     this.process();
    //   }
    //   return this;
    // }
    // process: function() {
    //   this.processClassesToAdd();
    //   this.processClassesToRemove();
    //   this.processClassesToToggle();
    // },
    // processClassesToAdd: function() {
    //   var that = this;
    //   if (!this.classesToAdd.length) return this;
    //   this.classesToAdd.forEach(function(i) {
    //     that.target.forEach(function(ii) {
    //       ii.classList.add(i);
    //     });
    //   });
    //   return this;
    // },
    // processClassesToRemove: function() {
    //   var that = this;
    //   if (!this.classesToRemove.length) return this;
    //   this.classesToRemove.forEach(function(i) {
    //     that.target.forEach(function(ii) {
    //       ii.classList.remove(i);
    //     });
    //   });
    //   return this;
    // },
    // processClassesToToggle: function() {
    //   var that = this;
    //   if (!this.classesToToggle.length) return this;
    //   this.classesToToggle.forEach(function(i) {
    //     that.target.forEach(function(ii) {
    //       ii.classList.toggle(i);
    //     });
    //   });
    // }
  };

  // export
  m.ContainerQuery = ContainerQuery;

  // return module
  return m;
})(feds || {});
