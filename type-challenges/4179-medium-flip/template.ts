type Flip<T> = {
  [key in keyof T as `${T[key] & (string | boolean | number)}`]: key
}
