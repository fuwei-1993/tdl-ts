type AppendToObject<T extends object, U extends string, V> = {
  [key in U | keyof T]: key extends keyof T ? T[key] : V
}

