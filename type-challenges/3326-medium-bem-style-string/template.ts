type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${SplitStringBySign<E, '__'>}${SplitStringBySign<M, '--'>}`

// 其实可以用`${T[number]}`来获取字符串的分割
type SplitStringBySign<T, U = '', S = never> = T extends [infer F, ...infer R]
  ? SplitStringBySign<R, U, `${U & string}${F & string}` | S>
  : [S] extends [never]
  ? ''
  : S