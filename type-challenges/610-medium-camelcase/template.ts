// type WordsMap = {
//   a: 'A'
//   b: 'B'
//   c: 'C'
//   d: 'D'
//   e: 'E'
//   f: 'F'
//   g: 'G'
//   h: 'H'
//   i: 'I'
//   j: 'J'
//   k: 'K'
//   l: 'L'
//   m: 'M'
//   n: 'N'
//   o: 'O'
//   p: 'P'
//   q: 'Q'
//   r: 'R'
//   s: 'S'
//   t: 'T'
//   u: 'U'
//   v: 'V'
//   w: 'W'
//   x: 'X'
//   y: 'Y'
//   z: 'Z'
// }

// type MyReplace<
//   T,
//   F extends string,
//   R extends string
// > = T extends `${infer Start}${F}${infer W}${infer End}`
//   ? F extends '-'
//     ? W extends keyof WordsMap
//       ? MyReplace<`${Start}${WordsMap[W]}${End}`, F, R>
//       : MyReplace<`${Start}${R}${W}${End}`, F, R>
//     : MyReplace<`${Start}${F}${W}${End}`, F, R>
//   : T

// type MyReplace2<
//   T,
//   F extends string,
//   R extends string
// > = T extends `${infer Start}${F}${infer End}`
//   ? MyReplace2<`${Start}${R}${End}`, F, R>
//   : T

// type CamelCase<S> = MyReplace2<MyReplace<S, '-', '&'>, '&', '-'>

// 以下是更为精炼的答案

type UpperFist<T extends string> = T extends `${infer L}${infer R}`
  ? L extends Uppercase<L>
    ? `${L}${R}`
    : `${Uppercase<L>}${R}`
  : T

type CamelCase<T, R extends string = '-'> = T extends `${infer F}${R}${infer S}`
  ? S extends UpperFist<S>
    ? `${F}${R}${CamelCase<S>}`
    : `${F}${CamelCase<UpperFist<S>>}`
  : T
