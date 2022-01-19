//  这个是我的解答 我是根据case的例子来推断固定的类型 但是不是很完美
// type DeepReadonly<T> =  T extends (string | number | Function) ? T : {readonly [key in keyof T]: DeepReadonly<T[key]> }

// 看了answer 之后发现了巧妙的解答 并结合我自己的解答变的更加巧妙

type DeepReadonly<T> = (keyof T) extends never ? T : {
  readonly [key in  keyof T]: DeepReadonly<T[key]>
}