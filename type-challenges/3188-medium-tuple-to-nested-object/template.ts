type CorrectVal<T, U> = [keyof T] extends [never] ? U : T

type TupleToNestedObject<T, U, R = {}> = T extends [...infer Rest, infer F]
  ? F extends string
    ? Rest extends []
      ? { [key in F]: CorrectVal<R, U> }
      : TupleToNestedObject<
          Rest,
          U,
          {
            [key in F]: CorrectVal<R, U>
          }
        >
    : U
  : U

// 这里是js的解答
function tupleToNestObject(
  target: string[],
  val: unknown,
  result: Record<string, any> = {}
) {
  if (!target.length) return val
  const [first, ...rest] = target
  if (rest.length > 0) {
    result[first] = {}
    tupleToNestObject(rest, val, result[first])
  } else {
    result[first] = val
  }
  return result
}
