type FlattenDepth<T, U = 1, S extends unknown[] = []> = S['length'] extends U
  ? T
  : T extends [infer F, ...infer R]
  ? F extends unknown[]
    ? [...FlattenDepth<F, U, [...S, 0]>, ...FlattenDepth<R, U, [...S]>]
    : [F, ...FlattenDepth<R, U, [...S]>]
  : T
