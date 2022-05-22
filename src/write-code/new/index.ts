export function customNew<T>(constructor: Function, ...args: any[]): T {
  const obj = Object.create(constructor.prototype);
  constructor.apply(obj, args);
  return obj;
}

// class Foo {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }
// }

function Test(this: any, name: string) {
  this.name = name;
}

Test.prototype.getName = function () {
  return this.name;
};

// const f = new Foo("xxx");
// const f: any = customNew(Test, "xxx");
// console.log("f", f, f.getName());
