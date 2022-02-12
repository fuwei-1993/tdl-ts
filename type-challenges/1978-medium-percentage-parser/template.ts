type ParseStrToArr<
  A,
  T extends string[] = []
> = A extends `${infer S}${infer E}` ? ParseStrToArr<E, [...T, S]> : T

type ParseArrToStr<T, U extends string = ''> = T extends [infer S, ...infer R]
  ? ParseArrToStr<R, S extends string ? `${S}${U}` : ''>
  : U
type OverrideShift<T> = T extends [infer S, ...infer R] ? S : ''
type SliceNumber<T extends string> =  Replace<Replace<Replace<T, '%', ''>, '+', ''> , '-', ''>
type OverridePop<T> = T extends [...infer S, infer E] ? E : ''

type PercentageParser<A extends string> = [
  OverrideShift<ParseStrToArr<A>> extends '+' | '-' ? OverrideShift<ParseStrToArr<A>> : '',
  SliceNumber<A> extends `${number}`
    ? SliceNumber<A>
    : '',
  OverridePop<ParseStrToArr<A>> extends '%' ? OverridePop<ParseStrToArr<A>> : ''
]
// 自己写的方法太冗余 打算去看答案

//
