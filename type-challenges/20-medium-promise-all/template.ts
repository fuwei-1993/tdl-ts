declare function PromiseAll<T extends unknown[]>(
  values: readonly [...T]
): Promise<{ [key in keyof T]: T[key] extends Promise<infer S> ? S : T[key] }>
