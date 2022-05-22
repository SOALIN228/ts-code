// @ts-ignore
Function.prototype.customBind = function (context: any, ...bindArgs: any[]) {
  const self = this;
  return function (...args: any[]) {
    const newArgs = bindArgs.concat(args); // 合并两次参数
    return self.apply(context, newArgs);
  };
};

// @ts-ignore
Function.prototype.customCall = function (context: any, ...args: any[]) {
  if (context == null) context = globalThis;
  if (typeof context !== "object") context = new Object(context); // 值类型转引用类型

  const fnKey = Symbol();
  context[fnKey] = this; // this为当前函数

  const res = context[fnKey](...args);
  delete context[fnKey];
  return res;
};

// @ts-ignore
Function.prototype.customApply = function (context: any, args: any[] = []) {
  if (context == null) context = globalThis;
  if (typeof context !== "object") context = new Object(context); // 值类型转引用类型

  const fnKey = Symbol();
  context[fnKey] = this; // this为当前函数

  const res = context[fnKey](...args);
  delete context[fnKey];
  return res;
};

function fn(this: any, a: any, b: any, c: any) {
  console.log(this, a, b, c);
}

// @ts-ignore
// const bindFn = fn.customBind({ x: 100 }, 10, 20);
// bindFn(30);

// const callFn = fn.customCall({ x: 100 }, 10, 20, 30);
// const applyFn = fn.customCall({ x: 100 }, [10, 20, 30]);
