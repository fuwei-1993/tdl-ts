type Last<T extends any[]> = T extends [...infer Rest, infer S] ? S : never
