type RequiredByKeys<T, K = keyof T> = MyMerge<
  {
    [key in keyof T as key extends K ? key : never]-?: T[key]
  } & {
    [key in keyof T as key extends K ? never : key]: T[key]
  }
>
