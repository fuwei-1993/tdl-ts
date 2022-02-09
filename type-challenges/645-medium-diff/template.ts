type MyExclude2<T, K> = T extends K ? never : T

type MyOmit2<T, K> = {
  [key in MyExclude2<keyof T, K>]: T[key]
}

type Diff<O, O1> = MyOmit2<O & O1, keyof (O | O1)>
