type Absolute<T extends number | string | bigint> =
  `${T}` extends `${infer F}${infer R}`
    ? F extends '-'
      ? `${R}`
      : `${F}${R}`
    : T
