// type GreaterThan<T extends number, U extends number, S extends number[] = []> = T extends U
//   ? false
//   : ToArray<T> extends [...infer F, ...ToArray<U>]
//   ? true
//   : false

// 真的是奇妙的方法 谁先满足谁小
type GreaterThan<
  T extends number,
  U extends number,
  S extends number[] = []
> = T extends S['length']
  ? false
  : U extends S['length']
  ? true
  : GreaterThan<T, U, [...S, 0]>
