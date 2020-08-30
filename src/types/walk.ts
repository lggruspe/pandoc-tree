import * as f from './filter.js'
import * as t from './types.js'
import * as wb from './walk/blocks.js'
import * as wi from './walk/inlines.js'

export function applyFilter (
  doc: t.Pandoc,
  filter: Array<f.FilterSet>
): t.Pandoc {
  for (const fns of filter) {
    doc = applyFilterSet(doc, fns)
  }
  return doc
}

export function applyFilterSet (
  doc: t.Pandoc,
  fns: f.FilterSet
): t.Pandoc {
  doc.blocks = walkBlocks(doc.blocks, fns)
  doc.meta = fns.Meta ? fns.Meta(doc.meta) || doc.meta : doc.meta
  return fns.Pandoc ? fns.Pandoc(doc) || doc : doc
}

export function walkInline (elem: t.Inline, fns: f.FilterSet): f.InlineResult {
  const tag: string = elem.t
  const visit = wi[tag as keyof typeof wi]
  return visit(elem as any, fns)
}

export function walkBlock (elem: t.Block, fns: f.FilterSet): f.BlockResult {
  const tag: string = elem.t
  const visit = wb[tag as keyof typeof wb]
  return visit(elem as any, fns)
}

export function walkInlines (elems: Array<t.Inline>, fns: f.FilterSet): Array<t.Inline> {
  const result = []
  for (const elem of elems) {
    const replacement = walkInline(elem, fns)
    if (replacement == null) result.push(elem)
    else if (replacement instanceof Array) result.push(...replacement)
    else result.push(replacement)
  }
  return result
}

export function walkBlocks (elems: Array<t.Block>, fns: f.FilterSet): Array<t.Block> {
  const result = []
  for (const elem of elems) {
    const replacement = walkBlock(elem, fns)
    if (replacement == null) result.push(elem)
    else if (replacement instanceof Array) result.push(...replacement)
    else result.push(replacement)
  }
  return result
}
