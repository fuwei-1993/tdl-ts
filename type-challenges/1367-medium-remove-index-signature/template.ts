type MyExcludeSign<T> = string extends T
  ? never
  : T extends number
  ? never
  : T

type RemoveIndexSignature<T> = {
  [key in keyof T as MyExcludeSign<key>]: T[key]
}

