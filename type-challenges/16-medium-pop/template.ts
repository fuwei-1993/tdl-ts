
type Pop<T extends any[]> = T extends [...infer Rest, infer S] ? Rest : never