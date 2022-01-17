type MyOmitKey<T, K> = T extends K ? never : T

type MyOmit<T, K> =  { [key in (MyOmitKey<keyof T, K>)]: T[key] }

