type TrimLeft<S extends string> = S extends `${' ' | '\t' | '\n'}${infer R}`
  ? TrimLeft<R>
  : S
