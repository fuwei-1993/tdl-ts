type ObjectEntries<T, K extends keyof T = keyof T> = K extends K
  ? [K, Required<T>[K]]
  : never
