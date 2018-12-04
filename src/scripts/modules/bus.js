export default class Bus {
  on(event, listener) {
    this._eventCollection = this._eventCollection || {};
    this._eventCollection[event] = this._eventCollection[event] || [];
    this._eventCollection[event].push(listener);
    return this;
  }

  once(event, listener) {
    const self = this;
    function fn() {
      self.off(event, fn);
      listener.apply(this, arguments);
    }
    fn.listener = listener;
    this.on(event, fn);
    return this;
  }

  off(event, listener) {
    let listeners;
    if (!this._eventCollection || !(listeners = this._eventCollection[event]))
      return this;
    listeners.forEach((fn, i) => {
      if (fn === listener || fn.listener === listener) listeners.splice(i, 1);
    });
    if (listeners.length === 0) delete this._eventCollection[event];
    return this;
  }

  trigger(event, ...args) {
    let listeners;
    if (!this._eventCollection || !(listeners = this._eventCollection[event])) {
      return this;
    }
    listeners = listeners.slice(0);
    listeners.forEach(fn => fn.apply(this, args));
    return this;
  }
}
