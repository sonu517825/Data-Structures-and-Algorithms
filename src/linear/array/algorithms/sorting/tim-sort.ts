// Tim Sort

const MIN_MERGE = 32;

function minRunLength(n: number): number {
  let r = 0;
  while (n >= MIN_MERGE) {
    r |= n & 1;
    n >>= 1;
  }
  return n + r;
}

function insertionSort<T>(
  arr: T[],
  left: number,
  right: number,
  compare: (a: T, b: T) => number
) {
  for (let i = left + 1; i <= right; i++) {
    const temp = arr[i];
    let j = i - 1;
    while (j >= left && compare(arr[j], temp) > 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
}

function merge<T>(
  arr: T[],
  l: number,
  m: number,
  r: number,
  compare: (a: T, b: T) => number
) {
  const len1 = m - l + 1;
  const len2 = r - m;
  const left = arr.slice(l, m + 1);
  const right = arr.slice(m + 1, r + 1);

  let i = 0,
    j = 0,
    k = l;
  while (i < len1 && j < len2) {
    arr[k++] = compare(left[i], right[j]) <= 0 ? left[i++] : right[j++];
  }
  while (i < len1) arr[k++] = left[i++];
  while (j < len2) arr[k++] = right[j++];
}

export function timSort<T>(
  arr: T[],
  compare: (a: T, b: T) => number = (a, b) => (a > b ? 1 : a < b ? -1 : 0)
): T[] {
  const n = arr.length;
  const minRun = minRunLength(MIN_MERGE);

  for (let i = 0; i < n; i += minRun) {
    insertionSort(arr, i, Math.min(i + MIN_MERGE - 1, n - 1), compare);
  }

  for (let size = minRun; size < n; size *= 2) {
    for (let left = 0; left < n; left += 2 * size) {
      const mid = left + size - 1;
      const right = Math.min(left + 2 * size - 1, n - 1);

      if (mid < right) merge(arr, left, mid, right, compare);
    }
  }

  return arr;
}
