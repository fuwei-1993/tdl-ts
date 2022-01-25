type LengthOfString<
  S extends string,
  T extends string[] = []
> = S extends `${infer Start}${infer End}`
  ? LengthOfString<End, [...T, Start]>
  : T['length']


