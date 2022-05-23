class EventBus {
  private events: {
    [key: string]: Array<{ fn: Function; isOnce: boolean }>;
  };

  constructor() {
    this.events = {};
  }

  on(type: string, fn: Function, isOnce = false) {
    const events = this.events;
    if (events[type] == null) {
      events[type] = [];
    }
    events[type].push({ fn, isOnce });
  }

  once(type: string, fn: Function) {
    this.on(type, fn, true);
  }

  off(type: string, fn?: Function) {
    if (!fn) {
      this.events[type] = [];
    } else {
      const fnList = this.events[type];
      if (fnList) {
        this.events[type] = fnList.filter((item) => item.fn !== fn);
      }
    }
  }

  emit(type: string, ...args: any[]) {
    const fnList = this.events[type];
    if (fnList == null) return fnList;

    this.events[type] = fnList.filter((item) => {
      const { fn, isOnce } = item;
      fn(...args);

      if (!isOnce) return true;
      return false;
    });
  }
}

class EventBus2 {
  private events: {
    [key: string]: Array<Function>;
  };
  private onceEvents: {
    [key: string]: Array<Function>;
  };

  constructor() {
    this.events = {};
    this.onceEvents = {};
  }

  on(type: string, fn: Function) {
    const events = this.events;
    if (events[type] == null) {
      events[type] = [];
    }
    events[type].push(fn);
  }

  once(type: string, fn: Function) {
    const onceEvents = this.onceEvents;
    if (onceEvents[type] == null) {
      onceEvents[type] = [];
    }
    onceEvents[type].push(fn);
  }

  off(type: string, fn?: Function) {
    if (!fn) {
      this.events[type] = [];
      this.onceEvents[type] = [];
    } else {
      const fnList = this.events[type];
      const onceFnList = this.onceEvents[type];
      if (fnList) {
        this.events[type] = fnList.filter((curFn) => curFn !== fn);
      }
      if (onceFnList) {
        this.onceEvents[type] = onceFnList.filter((curFn) => curFn !== fn);
      }
    }
  }

  emit(type: string, ...args: any[]) {
    const fnList = this.events[type];
    const onceFnList = this.onceEvents[type];
    if (fnList) {
      fnList.forEach((f) => f(...args));
    }
    if (onceFnList) {
      onceFnList.forEach((f) => f(...args));
      this.onceEvents[type] = [];
    }
  }
}

// const e = new EventBus2();
// function fn1(a: any, b: any) {
//   console.log("fn1", a, b);
// }
// function fn2(a: any, b: any) {
//   console.log("fn2", a, b);
// }
// function fn3(a: any, b: any) {
//   console.log("fn3", a, b);
// }

// e.on("key1", fn1);
// e.on("key1", fn2);
// e.once("key1", fn3);
// e.on("xxx", fn3);

// e.emit("key1", 10, 20);
// e.off("key1", fn1);
// e.emit("key1", 100, 200);
