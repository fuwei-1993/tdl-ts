type MyMerge<T> = {
  [key in keyof T]: T[key]
}

type PartialByKeys<T, K = keyof T> = MyMerge<
  {
    [key in keyof T as key extends K ? key : never]?: T[key]
  } & {
    [key in keyof T as key extends K ? never : key]: T[key]
  }
>


