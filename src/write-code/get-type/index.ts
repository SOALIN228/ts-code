export function getType(x: any): string {
  const originType = Object.prototype.toString.call(x) // '[object String]'
  const spaceIndex = originType.indexOf(' ')
  const type = originType.slice(spaceIndex + 1, -1) // 'String'
  return type.toLowerCase() // 'string'
}

// 功能测试
// console.log(getType(null));
// console.log(getType(undefined));
// console.log(getType(100));
// console.log(getType('abc'));
