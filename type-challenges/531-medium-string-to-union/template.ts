type StringToUnion<
  T extends string,
  R extends string = never
> = T extends `${infer F}${infer E}` ? StringToUnion<E, F | R> : R


