// feds.1.0.0.667
(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var Version = "1.0.0.667";

  var Bus =
  /*#__PURE__*/
  function () {
    function Bus() {
      _classCallCheck(this, Bus);
    }

    _createClass(Bus, [{
      key: "on",
      value: function on(event, listener) {
        this._eventCollection = this._eventCollection || {};
        this._eventCollection[event] = this._eventCollection[event] || [];

        this._eventCollection[event].push(listener);

        return this;
      }
    }, {
      key: "once",
      value: function once(event, listener) {
        var self = this;

        function fn() {
          self.off(event, fn);
          listener.apply(this, arguments);
        }

        fn.listener = listener;
        this.on(event, fn);
        return this;
      }
    }, {
      key: "off",
      value: function off(event, listener) {
        var listeners;
        if (!this._eventCollection || !(listeners = this._eventCollection[event])) return this;
        listeners.forEach(function (fn, i) {
          if (fn === listener || fn.listener === listener) listeners.splice(i, 1);
        });
        if (listeners.length === 0) delete this._eventCollection[event];
        return this;
      }
    }, {
      key: "trigger",
      value: function trigger(event) {
        var _this = this;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var listeners;

        if (!this._eventCollection || !(listeners = this._eventCollection[event])) {
          return this;
        }

        listeners = listeners.slice(0);
        listeners.forEach(function (fn) {
          return fn.apply(_this, args);
        });
        return this;
      }
    }]);

    return Bus;
  }();

  var Component = function Component() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    _classCallCheck(this, Component);

    this.id = id;
    this.name = name;
    this.el = document.querySelector("#".concat(id));
  };

  var Tab =
  /*#__PURE__*/
  function () {
    function Tab(el, parent) {
      var expanded = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      _classCallCheck(this, Tab);

      this.id = el.dataset.tab;
      this.el = el;
      this.parent = parent;
      this.label = this.el.querySelector("label");
      this.content = this.el.querySelector("div");
      this.caret = this.el.querySelector("i");
      this.expanded = expanded; // events

      this.label.addEventListener("click", this.toggle.bind(this));
      if (this.expanded) this.toggle();
    }

    _createClass(Tab, [{
      key: "toggle",
      value: function toggle() {
        this.expanded = !this.expanded;
        this.content.classList.toggle("hidden");
        this.caret.classList.toggle("rotate-30");
      }
    }]);

    return Tab;
  }();
  var Accordion =
  /*#__PURE__*/
  function (_Base) {
    _inherits(Accordion, _Base);

    function Accordion() {
      var _this;

      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "accordion";

      _classCallCheck(this, Accordion);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Accordion).call(this, id, name));
      _this.tabs = _this.initTabs();
      return _possibleConstructorReturn(_this, _assertThisInitialized(_assertThisInitialized(_this)));
    }

    _createClass(Accordion, [{
      key: "initTabs",
      value: function initTabs() {
        var _this2 = this;

        var preExpandedTabs = feds.params.get("tabs") ? feds.params.get("tabs").split(",").map(function (i) {
          return i.trim();
        }) : [];
        return _toConsumableArray(this.el.children).map(function (i) {
          return new Tab(i, _this2, preExpandedTabs.indexOf(i.dataset.tab) > -1);
        });
      }
    }]);

    return Accordion;
  }(Component);

  var modules = {};
  var components = {};
  components.Accordion = Accordion;

  var Feds =
  /*#__PURE__*/
  function () {
    function Feds() {
      _classCallCheck(this, Feds);

      this.debug = window.location.hash === "#debug";
      if (this.debug) console.time("feds");
      this.version = Version;
      this.components = {};
      this.lib = {};
      this.lib.modules = modules;
      this.lib.components = components;
      this.events = {};
      this.params = new URL(window.location.href).searchParams;
      this.bus = new Bus();
    }

    _createClass(Feds, [{
      key: "init",
      value: function init() {
        this.initComponents();
        if (this.debug) console.timeEnd("feds");
      }
    }, {
      key: "initComponents",
      value: function initComponents() {
        [].slice.call(document.querySelectorAll("[data-component]")).forEach(this.initComponent.bind(this));
        return this;
      }
    }, {
      key: "initComponent",
      value: function initComponent(c) {
        var component = this.lib.components[c.dataset.component];
        if (!component) return this;
        var instance = new component(c.id);
        this.components[c.id] = instance;
        return this;
      }
    }, {
      key: "get",
      value: function get(componentId) {
        return this.components[componentId];
      }
    }]);

    return Feds;
  }();

  // meta
  var feds$1 = new Feds();
  window.feds = feds$1;
  document.addEventListener("DOMContentLoaded", feds$1.init.bind(feds$1));

}());
//# sourceMappingURL=feds.1.0.0.js.map