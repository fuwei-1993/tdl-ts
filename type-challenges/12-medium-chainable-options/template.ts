type Chainable<T extends object = {}> = {
  option<K extends string, V>(
    key: K,
    value: V
  ): Chainable<{ [key in K]: V } & T>
  get(): T
}

