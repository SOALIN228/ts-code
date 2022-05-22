export function findTwoNumbers1(arr: number[], n: number): number[] {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

export function findTwoNumbers2(arr: number[], n: number): number[] {
  const map = new Map()
  for(let i = 0; i < arr.length; i++) {
    if (map.has(n - arr[i])) {
      return [map.get(n - arr[i]), i]
    } else {
      map.set(arr[i], i)
    }
  }
  return [-1, -1]
}

// console.log(findTwoNumbers2([1, 2, 3, 4], 3));
