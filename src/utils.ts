import * as create from './create.js'
import * as t from './types.js'
import * as wrap from './wrap.js'
export { stringify } from './stringify.js'

function findNext (
  elems: Array<t.Elem>,
  cond: (elem: t.Elem) => boolean,
  start: number = 0,
  end: number = -1
): number {
  if (end < 0) {
    end = elems.length
  }
  for (let i = start; i < end; i++) {
    if (cond(elems[i])) {
      return i
    }
  }
  return end
}

function isTopLevel (elem: t.Elem): boolean {
  return elem.t === 'Header' && new wrap.Header(elem).level === 1
}

export function makeTopLevelSections (
  blocks: Array<t.Block>,
  fn: (elem: t.Header) => t.Attr
): Array<t.Block> {
  // fn creates an Attr from the header for its parent Div.
  let prev = findNext(blocks, isTopLevel)
  while (prev < blocks.length) {
    const next = findNext(blocks, isTopLevel, prev + 1)
    if (prev < next) {
      const block = blocks[prev]
      const div = create.Div([], fn(block as t.Header))
      const slice = blocks.splice(prev, next - prev, div)
      new wrap.Div(div).content = slice
    }
    prev++
  }
  return blocks
}
