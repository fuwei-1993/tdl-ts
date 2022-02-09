type IsEmpty<T> = T extends
  | false
  | []
  | { [key: string]: never }
  | 0
  | ''
  | never
  ? false
  : true

type AnyOf<T extends readonly any[]> = IsEmpty<T[number]> extends false
  ? false
  : true
