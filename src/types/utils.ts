import * as t from './elems.js'
import * as w from './wrap.js'

export function wrap (elem: t.Elem): w.Elem {
  const tag: string = elem.t
  const Wrapper = w[tag as keyof typeof w]
  return new Wrapper(elem as any)
}
