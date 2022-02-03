// https://github.com/type-challenges/type-challenges/issues/614 本答案解释

type Permutation<T, K = T> = [T] extends [never] ? []: K extends K ? [K, ...Permutation<Exclude<T, K>>] : never

function assertNever<T>(value: T extends never ? true : false) {}
/** @ts-ignore */
assertNever<string>(true) // 类型“true”的参数不能赋给类型“false”的参数。
/** @ts-ignore */
assertNever<never>(true)  // 类型“boolean”的参数不能赋给类型“never”的参数。

function assertNeverArray<T>(value: T[] extends never[] ? true : false) {}
function assertNeverTuple<T>(value: [T] extends [never] ? true : false) {}

// both of these fail, as expected
/** @ts-ignore */
assertNeverArray<string>(true)
/** @ts-ignore */
assertNeverTuple<string>(true)

// both of these pass, as expected
assertNeverArray<never>(true)
assertNeverTuple<never>(true)