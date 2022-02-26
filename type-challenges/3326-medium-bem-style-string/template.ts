type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${SplitStringBySign<E, '__'>}${SplitStringBySign<M, '--'>}`

type SplitStringBySign<T, U = '', S = never> = T extends [infer F, ...infer R]
  ? SplitStringBySign<R, U, `${U & string}${F & string}` | S>
  : [S] extends [never]
  ? ''
  : S
