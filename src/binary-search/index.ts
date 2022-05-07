export function binarySearch(arr: number[], target: number): number {
  const length = arr.length;
  if (length === 0) return -1;

  let startIndex = 0;
  let endIndex = length - 1;

  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2);
    const midVal = arr[midIndex];

    if (target < midVal) {
      endIndex = midIndex - 1;
    } else if (target > midVal) {
      startIndex = midIndex + 1;
    } else {
      return midIndex;
    }
  }

  return -1;
}

export function binarySearch2(
  arr: number[],
  target: number,
  startIndex?: number,
  endIndex?: number
): number {
  const length = arr.length;
  if (length === 0) return -1;

  if (startIndex == null) startIndex = 0;
  if (endIndex == null) endIndex = length - 1;

  if (startIndex > endIndex) return -1;

  const midIndex = Math.floor((startIndex + endIndex) / 2);
  const midVal = arr[midIndex];

  if (target < midVal) {
    return binarySearch2(arr, target, startIndex, midIndex - 1);
  } else if (target > midVal) {
    return binarySearch2(arr, target, midIndex + 1, endIndex);
  } else {
    return midIndex;
  }
}

// const arr = [10,20,40,80,160]
// const target = 20
// console.log(binarySearch2(arr, target));
