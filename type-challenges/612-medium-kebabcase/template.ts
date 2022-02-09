type LowerFist<T> = T extends `${infer L}${infer R}`
  ? L extends Lowercase<L>
    ? `${L}${R}`
    : `${Lowercase<L>}${R}`
  : T

type KebabCase<T> = T extends `${infer F}-${infer S}`
  ? S extends LowerFist<S>
    ? `${F}-${CamelCase<S>}`
    : `${F}${CamelCase<LowerFist<S>>}`
  : T
