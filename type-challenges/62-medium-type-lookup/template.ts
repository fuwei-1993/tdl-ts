/**@description {此方法也无法根据所有的值匹配类型} */
// type IfHasPropertyKey<T, V> = {
//   [key in keyof T]:  T[key] extends V ? key: never
// }[keyof T]

// type MyExtractLookUp<T, U> = T extends U ? T : never

// type LookUp<U extends object, T> =  MyExtractLookUp<U, {[key in IfHasPropertyKey<U, T>]: T}>

type LookUp<U extends object, T> = U extends { type: T } ? U : never
