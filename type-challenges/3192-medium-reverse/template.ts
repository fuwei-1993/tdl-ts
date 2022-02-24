type Reverse<T, U extends unknown[] = []> = T extends [...infer R, infer E]
  ? Reverse<R, [...U, E]>
  : U

