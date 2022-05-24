function cloneDeep(obj: any) {
  if (typeof obj !== "object" || obj == null) return obj;

  let result: any;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = cloneDeep(obj[key]);
    }
  }

  return result;
}
// let a = { x: 1 };
// let b = cloneDeep(a);
// b.x = 2;
// console.log(a, b); // { x: 1 } { x: 2 }

function deepClone(obj: any, map = new WeakMap()): any {
  if (typeof obj !== "object" || obj == null) return obj;
  // 避免循环引用
  const objFromMap = map.get(obj);
  if (objFromMap) return objFromMap;
  // 存储本次遍历的对象，方便后续循环引用判断
  let target: any = {};
  map.set(obj, target);
  // Map
  if (obj instanceof Map) {
    target = new Map();
    obj.forEach((v, k) => {
      const v1 = deepClone(v, map);
      const k1 = deepClone(k, map);
      target.set(k1, v1);
    });
  }
  // Set
  if (obj instanceof Set) {
    target = new Set();
    obj.forEach((v) => {
      const v1 = deepClone(v, map);
      target.add(v1);
    });
  }
  // Array
  if (obj instanceof Array) {
    target = obj.map((item) => deepClone(item));
  }
  // Object
  for (const key in obj) {
    const val = obj[key];
    const _val = deepClone(val, map);
    target[key] = _val;
  }

  return target;
}
let a: any = {
  set: new Set([10, 20, 30]),
  map: new Map([
    ["x", 10],
    ["y", 20],
  ]),
  info: {
    name: "soa",
  },
  fn: () => {
    console.log("x");
  },
};
a.self = a;
console.log(deepClone(a));
