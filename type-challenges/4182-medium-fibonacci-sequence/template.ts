type Unit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

type MakeArray<
  T extends Unit,
  S extends unknown[] = []
> = T extends `${S['length']}` ? S : MakeArray<T, [...S, 0]>

type MakeArray10<T extends unknown[]> = [
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T
]

type _ToArray<
  T extends string | number,
  R extends unknown[] = []
> = `${T}` extends `${infer P}${infer K}`
  ? P extends Unit
    ? _ToArray<K, [...MakeArray10<R>, ...MakeArray<P>]>
    : never
  : R

type _Minus<T extends number, N extends number> = ToArray<T> extends [
  ...ToArray<N>,
  ...infer R
]
  ? R['length']
  : 0

type Add<T extends number, N extends number> = [
  ...ToArray<N>,
  ...ToArray<T>
]['length']

type Fibonacci<
  T extends number,
  U extends any[] = [any],
  V = 1,
  P = 1
> = U extends { length: T }
  ? V
  : Fibonacci<T, [any, ...U], P, Add<V & number, P & number>>

// 以下为js实现
function _makeArray(len: number) {
  if (len < 10) return new Array(len).fill(0)
  return []
}

function make10(arr: unknown[]) {
  return [
    ...arr,
    ...arr,
    ...arr,
    ...arr,
    ...arr,
    ...arr,
    ...arr,
    ...arr,
    ...arr,
    ...arr,
  ]
}
function dec(target: string, result: unknown[] = []): unknown[] {
  const strArr = target.split('')
  if (!strArr.length) return result
  const firstNum = Number(strArr.shift())

  return dec(strArr.join(''), [...make10(result), ..._makeArray(firstNum)])
}

function fibonacci(target: number, calc = [0], prev = 1, result = 1): number {
  if(target <= 0) return 0
  if(target === calc.length) return prev

  return fibonacci(target, [...calc, 0], result, prev + result )
}