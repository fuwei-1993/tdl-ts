// 唯一能想到的解法但是不能解大数字的减法（层级过深）
// type MinusOne<
//   T extends number,
//   U extends unknown[] = []
// > = U['length'] extends T ? U : MinusOne<T, [...U, 0]>

// 以下是解决了一定程度层级过深的解法
type Digital = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type MakeDigitalArray<
  N extends Digital,
  T extends unknown[] = []
> = N extends `${T['length']}` ? T : MakeDigitalArray<N, [...T, 0]>

type Multiply10<T extends unknown[]> = [
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

type ToArray<
  S extends number | string,
  T extends unknown[] = []
> = `${S}` extends `${infer F}${infer L}`
  ? F extends Digital
    ? ToArray<L, [...Multiply10<T>, ...MakeDigitalArray<F>]>
    : never
  : T

type Minus<T extends number, M extends number> = ToArray<T> extends [
  ...ToArray<M>,
  ...infer L
]
  ? L['length']
  : 0

type MinusOne<T extends number> = Minus<T, 1>

// 为了方便理解以下是js的实现

function makeArray(n: number, target: number[] = []): number[] {
  if (target.length === n || n > 10) return target

  return makeArray(n, [...target, 0])
}

function multiply10(target: number[] = []) {
  return [
    ...target,
    ...target,
    ...target,
    ...target,
    ...target,
    ...target,
    ...target,
    ...target,
    ...target,
    ...target,
  ]
}

function toArray(n: number | string, target: number[] = []): number[] {
  const strArray = `${n}`.split('')
  if (!strArray.length) return target

  const firstStr = strArray.shift()
  const firstNum = Number(firstStr)

  return toArray(strArray.join(''), [
    ...multiply10(target),
    ...makeArray(firstNum),
  ])
}


