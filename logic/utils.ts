export function lazyMemo<T>(fn: () => T): () => T {
  return () => {
    if (memoMap.has(fn)) {
      const value = fn();
      memoMap.set(fn, value);
      return value;
    } else {
      return memoMap.get(fn);
    }
  };
}
const memoMap = new WeakMap();

export function includes(list1: any[], list2: any[]) {
  return list1.some((item1) => {
    return list2.includes(item1);
  });
}

export function unique<T>(list: T[]): T[] {
  return Array.from(new Set(list));
}
export function exclude(list1: any[], list2: any[]) {
  return list1.filter((item) => !list2.includes(item));
}
export function include(list1: any[], list2: any[]) {
  return list1.filter((item) => list2.includes(item));
}
