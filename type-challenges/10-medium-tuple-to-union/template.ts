type TupleToUnion<T> = T extends {
  [key: number]: infer S
} ? S : never