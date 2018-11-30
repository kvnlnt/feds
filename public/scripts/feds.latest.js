// feds.1.0.0.538
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

  var version = "1.0.0.538";

  var Component = function Component() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    _classCallCheck(this, Component);

    this.name = name;
    this.id = id;
  };

  var Modal =
  /*#__PURE__*/
  function (_base) {
    _inherits(Modal, _base);

    function Modal() {
      var _this;

      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "modal";

      _classCallCheck(this, Modal);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, id, name));
      return _possibleConstructorReturn(_this, _assertThisInitialized(_assertThisInitialized(_this)));
    }

    _createClass(Modal, [{
      key: "open",
      value: function open() {
        alert("open");
      }
    }, {
      key: "close",
      value: function close() {
        alert("close");
      }
    }]);

    return Modal;
  }(Component);

  var Feds =
  /*#__PURE__*/
  function () {
    function Feds() {
      _classCallCheck(this, Feds);

      this.debug = window.location.hash === "#debug";
      if (this.debug) console.time("feds");
      this.version = version;
      this.components = {};
      this.lib = {
        components: {
          Modal: Modal
        },
        modules: {}
      };
      this.events = {};
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
        this.components[instance.id] = instance;
        console.log(instance);
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
  var feds = new Feds();
  window.feds = feds;
  document.addEventListener("DOMContentLoaded", feds.init.bind(feds));

}());
//# sourceMappingURL=feds.latest.js.map