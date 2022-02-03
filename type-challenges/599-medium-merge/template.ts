type Merge<F extends object, S extends object> = {
  [key in keyof (S & F)]: key extends keyof S ? S[key]: (S & F)[key]
}