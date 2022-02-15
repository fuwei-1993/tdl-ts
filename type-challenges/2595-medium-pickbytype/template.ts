// type MyIncludeKey<T, K extends keyof T, U> = K extends K
//   ? T[K] extends U
//     ? K
//     : never
//   : never
// type PickByType<T, U> = {
//   [key in MyIncludeKey<T, keyof T, U>]: U
// }

// 从另一个角度出发

type PickByType<T, U> = {
  [key in keyof T as T[key] extends U ? key : never]: U
}
