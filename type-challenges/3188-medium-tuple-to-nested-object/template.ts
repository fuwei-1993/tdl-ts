// type CorrectVal<T, U> = [keyof T] extends [never] ? U : T

// type TupleToNestedObject<T, U, R = {}> = T extends [...infer Rest, infer F]
//   ? F extends string
//     ? Rest extends []
//       ? { [key in F]: CorrectVal<R, U> }
//       : TupleToNestedObject<
//           Rest,
//           U,
//           {
//             [key in F]: CorrectVal<R, U>
//           }
//         >
//     : U
//   : U

// // 这里是js的解答
// function tupleToNestObject(
//   target: string[],
//   val: unknown,
//   result: Record<string, any> = {}
// ) {
//   if (!target.length) return val
//   const [first, ...rest] = target
//   if (rest.length > 0) {
//     result[first] = {}
//     tupleToNestObject(rest, val, result[first])
//   } else {
//     result[first] = val
//   }
//   return result
// }

// 好吧 再一次发现了更好的方法 妈的 // 他们说这就是人生
// 学到了 key in F & string 这种操作

type TupleToNestedObject<T, U> = T extends [infer F, ...infer R] ? {
  [key in F & string]: TupleToNestedObject<R, U>
} : U

// 这里是对应的js解法
function tupleToNestedObject(target: string[], val: unknown): unknown {
  if(target.length === 0) return val
  const [first, ...rest] = target
  return {
    [first]: tupleToNestedObject(rest, val)
  }
}

console.log(tupleToNestedObject(['a', 'b'], 4234));
