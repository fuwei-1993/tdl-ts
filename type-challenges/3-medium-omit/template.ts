type MyExclude<T, K> = T extends K ? never : T

type MyOmit<T, K> =  { [key in (MyExclude<keyof T, K>)]: T[key] }

