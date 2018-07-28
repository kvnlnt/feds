var feds = (function(m) {
  function Responsifier(opts) {
    var opts = opts || {};
    this.target = [].slice.call(opts.target, 0);
    this.source = opts.source || this.target;
    this.event = opts.event || null;
    this.range = opts.range ? opts.range.split(",") : null;
    this.classAdd = this.cleanList(opts.add);
    this.classRemove = this.cleanList(opts.remove);
    this.classToggle = this.cleanList(opts.toggle);
    this.addListeners()
      .handleScroll()
      .handleResize();
  }

  Responsifier.prototype = {
    addClasses: function() {
      var that = this;
      if (!this.classAdd.length) return this;
      this.classAdd.forEach(function(i) {
        that.target.forEach(function(ii) {
          ii.classList.add(i);
        });
      });
      return this;
    },
    addListeners: function() {
      if (this.event === "scroll") {
        this.source.addEventListener("scroll", this.handleScroll.bind(this));
      }
      if (this.event === "hover") {
        this.source.addEventListener("mouseover", this.handleHover.bind(this));
      }
      if (this.event === "hover") {
        this.source.addEventListener("mouseout", this.handleHover.bind(this));
      }
      if (this.event === "click") {
        this.source.addEventListener("click", this.handleClick.bind(this));
      }
      if (this.event === "resize") {
        this.source.addEventListener("resize", this.handleResize.bind(this));
      }
      if (this.event === "toggle") {
        this.source.addEventListener("click", this.handleToggle.bind(this));
      }
      return this;
    },
    cleanList: function(list) {
      return (list ? list.split(",") : []).map(function(i) {
        return i.trim();
      });
    },
    handleClick: function(e) {
      this.addClasses();
      this.removeClasses();
    },
    handleHover: function(e) {
      this.addClasses();
      this.removeClasses();
      this.toggleClasses();
    },
    handleResize: function(e) {
      var r0 = parseInt(this.range[0]);
      var r1 = parseInt(this.range[1] === "*" ? 100000 : this.range[1]);
      if (this.source.innerWidth >= r0 && this.source.innerWidth <= r1) {
        this.addClasses();
        this.removeClasses();
      }
      return this;
    },
    handleScroll: function(e) {
      var r0 = parseInt(this.range[0]);
      var r1 = parseInt(this.range[1] === "*" ? 100000 : this.range[1]);
      if (this.source.scrollY >= r0 && this.source.scrollY <= r1) {
        this.addClasses();
        this.removeClasses();
      }
      return this;
    },
    handleToggle: function(e) {
      this.toggleClasses();
    },
    removeClasses: function() {
      var that = this;
      if (!this.classRemove.length) return this;
      this.classRemove.forEach(function(i) {
        that.target.forEach(function(ii) {
          ii.classList.remove(i);
        });
      });
      return this;
    },
    toggleClasses: function() {
      var that = this;
      if (!this.classToggle.length) return this;
      this.classToggle.forEach(function(i) {
        that.target.forEach(function(ii) {
          ii.classList.toggle(i);
        });
      });
    }
  };

  document.addEventListener("DOMContentLoaded", function() {
    // auto register responsifiers
    [].slice
      .call(document.querySelectorAll("[data-responsifier]"), 0)
      .map(function(i) {
        return new Responsifier({
          target: document.querySelectorAll(i.dataset.target),
          source:
            i.dataset.source === "window"
              ? window
              : document.querySelector(i.dataset.source),
          event: i.dataset.event,
          range: i.dataset.range,
          add: i.dataset.add,
          remove: i.dataset.remove,
          toggle: i.dataset.toggle
        });
      });
  });

  // export
  m.Responsifier = Responsifier;

  // return module
  return m;
})(feds || {});
