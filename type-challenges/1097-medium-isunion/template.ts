type IsUnion<T, U = T> = U extends U
  ? [T extends U ? never : T] extends [never]
    ? false
    : true
  : never
