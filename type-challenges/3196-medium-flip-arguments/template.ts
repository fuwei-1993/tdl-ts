type FlipArguments<T> = T extends (...args: infer A) => infer R
  ? (...args: Reverse<A>) => R
  : never
