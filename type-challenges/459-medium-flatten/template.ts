type Flatten<T> = T extends [infer F, ...infer E]
  ? F extends unknown[]
    ? [...Flatten<F>, ...Flatten<E>]
    : [F, ...Flatten<E>]
  : []
// type b = Flatten<[1, 2, 3]>
