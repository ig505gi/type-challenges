import { Equal } from "@type-challenges/utils"

export type Includes<T extends readonly unknown[], U> =
  T extends [infer First, ...infer Rest]
    ? Equal<First, U> extends true
      ? true
      : Includes<Rest, U>
    : false
