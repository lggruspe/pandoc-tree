import * as t from './types.js'

export type InlineResult = t.Inline | Array<t.Inline> | void
export type BlockResult = t.Block | Array<t.Block> | void

export type FilterSet = {
  Cite?: (elem: t.Cite) => InlineResult,
  Code?: (elem: t.Code) => InlineResult,
  Emph?: (elem: t.Emph) => InlineResult,
  Image?: (elem: t.Image) => InlineResult,
  LineBreak?: (elem: t.LineBreak) => InlineResult,
  Link?: (elem: t.Link) => InlineResult,
  Math?: (elem: t.Math) => InlineResult,
  Note?: (elem: t.Note) => InlineResult,
  Quoted?: (elem: t.Quoted) => InlineResult,
  RawInline?: (elem: t.RawInline) => InlineResult,
  SmallCaps?: (elem: t.SmallCaps) => InlineResult,
  SoftBreak?: (elem: t.SoftBreak) => InlineResult,
  Space?: (elem: t.Space) => InlineResult,
  Span?: (elem: t.Span) => InlineResult,
  Str?: (elem: t.Str) => InlineResult,
  Strikeout?: (elem: t.Strikeout) => InlineResult,
  Strong?: (elem: t.Strong) => InlineResult,
  Subscript?: (elem: t.Subscript) => InlineResult,
  Superscript?: (elem: t.Superscript) => InlineResult,
  Underline?: (elem: t.Underline) => InlineResult,
  BlockQuote?: (elem: t.BlockQuote) => BlockResult,
  BulletList?: (elem: t.BulletList) => BlockResult,
  CodeBlock?: (elem: t.CodeBlock) => BlockResult,
  DefinitionList?: (elem: t.DefinitionList) => BlockResult,
  Div?: (elem: t.Div) => BlockResult,
  Header?: (elem: t.Header) => BlockResult,
  HorizontalRule?: (elem: t.HorizontalRule) => BlockResult,
  LineBlock?: (elem: t.LineBlock) => BlockResult,
  Null?: (elem: t.Null) => BlockResult,
  OrderedList?: (elem: t.OrderedList) => BlockResult,
  Para?: (elem: t.Para) => BlockResult,
  Plain?: (elem: t.Plain) => BlockResult,
  RawBlock?: (elem: t.RawBlock) => BlockResult,
  Table?: (elem: t.Table) => BlockResult,
  Meta?: (meta: t.Meta) => t.Meta,
  Pandoc?: (doc: t.Pandoc) => t.Pandoc
}

export function interact (filter: Array<FilterSet>) {
  const chunks: Array<string> = []
  const readable = process.stdin
  readable.on('readable', () => {
    for (;;) {
      const chunk = readable.read()
      if (chunk == null) break
      chunks.push(chunk)
    }
  })
  readable.on('end', () => {
    const content = chunks.join('')
    let doc = JSON.parse(content)
    doc = applyFilter(doc, filter)
    console.log(JSON.stringify(doc))
  })
}

export function applyFilter (
  doc: t.Pandoc,
  filter: Array<FilterSet>
): t.Pandoc {
  for (const fns of filter) {
    doc = applyFilterSet(doc, fns)
  }
  return doc
}

export function applyFilterSet (
  doc: t.Pandoc,
  fns: FilterSet
): t.Pandoc {
  doc.blocks = walkBlocks(doc.blocks, fns)
  doc.meta = fns.Meta ? fns.Meta(doc.meta) || doc.meta : doc.meta
  return fns.Pandoc ? fns.Pandoc(doc) || doc : doc
}

namespace walk {
  export namespace inline {
    export function Cite (elem: t.Cite, fns: FilterSet): InlineResult {
      elem.c[1] = walkInlines(elem.c[1], fns)
      return fns.Cite ? fns.Cite(elem) : elem
    }

    export function Code (elem: t.Code, fns: FilterSet): InlineResult {
      return fns.Code ? fns.Code(elem) : elem
    }

    export function Emph (elem: t.Emph, fns: FilterSet): InlineResult {
      elem.c = walkInlines(elem.c, fns)
      return fns.Emph ? fns.Emph(elem) : elem
    }

    export function Image (elem: t.Image, fns: FilterSet): InlineResult {
      elem.c[1] = walkInlines(elem.c[1], fns)
      return fns.Image ? fns.Image(elem) : elem
    }

    export function LineBreak (elem: t.LineBreak, fns: FilterSet): InlineResult {
      return fns.LineBreak ? fns.LineBreak(elem) : elem
    }

    export function Link (elem: t.Link, fns: FilterSet): InlineResult {
      elem.c[1] = walkInlines(elem.c[1], fns)
      return fns.Link ? fns.Link(elem) : elem
    }

    export function Math (elem: t.Math, fns: FilterSet): InlineResult {
      return fns.Math ? fns.Math(elem) : elem
    }

    export function Note (elem: t.Note, fns: FilterSet): InlineResult {
      elem.c = walkBlocks(elem.c, fns)
      return fns.Note ? fns.Note(elem) : elem
    }

    export function Quoted (elem: t.Quoted, fns: FilterSet): InlineResult {
      elem.c[1] = walkInlines(elem.c[1], fns)
      return fns.Quoted ? fns.Quoted(elem) : elem
    }

    export function RawInline (elem: t.RawInline, fns: FilterSet): InlineResult {
      return fns.RawInline ? fns.RawInline(elem) : elem
    }

    export function SmallCaps (elem: t.SmallCaps, fns: FilterSet): InlineResult {
      elem.c = walkInlines(elem.c, fns)
      return fns.SmallCaps ? fns.SmallCaps(elem) : elem
    }

    export function SoftBreak (elem: t.SoftBreak, fns: FilterSet): InlineResult {
      return fns.SoftBreak ? fns.SoftBreak(elem) : elem
    }

    export function Space (elem: t.Space, fns: FilterSet): InlineResult {
      return fns.Space ? fns.Space(elem) : elem
    }

    export function Span (elem: t.Span, fns: FilterSet): InlineResult {
      elem.c[1] = walkInlines(elem.c[1], fns)
      return fns.Span ? fns.Span(elem) : elem
    }

    export function Str (elem: t.Str, fns: FilterSet): InlineResult {
      return fns.Str ? fns.Str(elem) : elem
    }

    export function Strikeout (elem: t.Strikeout, fns: FilterSet): InlineResult {
      elem.c = walkInlines(elem.c, fns)
      return fns.Strikeout ? fns.Strikeout(elem) : elem
    }

    export function Strong (elem: t.Strong, fns: FilterSet): InlineResult {
      elem.c = walkInlines(elem.c, fns)
      return fns.Strong ? fns.Strong(elem) : elem
    }

    export function Subscript (elem: t.Subscript, fns: FilterSet): InlineResult {
      elem.c = walkInlines(elem.c, fns)
      return fns.Subscript ? fns.Subscript(elem) : elem
    }

    export function Superscript (elem: t.Superscript, fns: FilterSet): InlineResult {
      elem.c = walkInlines(elem.c, fns)
      return fns.Superscript ? fns.Superscript(elem) : elem
    }

    export function Underline (elem: t.Underline, fns: FilterSet): InlineResult {
      elem.c = walkInlines(elem.c, fns)
      return fns.Underline ? fns.Underline(elem) : elem
    }
  }

  export namespace block {
    export function BlockQuote (elem: t.BlockQuote, fns: FilterSet): BlockResult {
      elem.c = walkBlocks(elem.c, fns)
      return fns.BlockQuote ? fns.BlockQuote(elem) : elem
    }

    export function BulletList (elem: t.BulletList, fns: FilterSet): BlockResult {
      elem.c = elem.c.map(blocks => walkBlocks(blocks, fns))
      return fns.BulletList ? fns.BulletList(elem) : elem
    }

    export function CodeBlock (elem: t.CodeBlock, fns: FilterSet): BlockResult {
      return fns.CodeBlock ? fns.CodeBlock(elem) : elem
    }

    export function DefinitionList (elem: t.DefinitionList, fns: FilterSet): BlockResult {
      elem.c = elem.c.map(item => {
        const [inlines, blocksList] = item
        return [
          walkInlines(inlines, fns),
          blocksList.map(blocks => walkBlocks(blocks, fns))
        ]
      })
      return fns.DefinitionList ? fns.DefinitionList(elem) : elem
    }

    export function Div (elem: t.Div, fns: FilterSet): BlockResult {
      elem.c[1] = walkBlocks(elem.c[1], fns)
      return fns.Div ? fns.Div(elem) : elem
    }

    export function Header (elem: t.Header, fns: FilterSet): BlockResult {
      elem.c[2] = walkInlines(elem.c[2], fns)
      return fns.Header ? fns.Header(elem) : elem
    }

    export function HorizontalRule (elem: t.HorizontalRule, fns: FilterSet): BlockResult {
      return fns.HorizontalRule ? fns.HorizontalRule(elem) : elem
    }

    export function LineBlock (elem: t.LineBlock, fns: FilterSet): BlockResult {
      elem.c = elem.c.map(inlines => walkInlines(inlines, fns))
      return fns.LineBlock ? fns.LineBlock(elem) : elem
    }

    export function Null (elem: t.Null, fns: FilterSet): BlockResult {
      return fns.Null ? fns.Null(elem) : elem
    }

    export function OrderedList (elem: t.OrderedList, fns: FilterSet): BlockResult {
      elem.c[1] = elem.c[1].map(blocks => walkBlocks(blocks, fns))
      return fns.OrderedList ? fns.OrderedList(elem) : elem
    }

    export function Para (elem: t.Para, fns: FilterSet): BlockResult {
      elem.c = walkInlines(elem.c, fns)
      return fns.Para ? fns.Para(elem) : elem
    }

    export function Plain (elem: t.Plain, fns: FilterSet): BlockResult {
      elem.c = walkInlines(elem.c, fns)
      return fns.Plain ? fns.Plain(elem) : elem
    }

    export function RawBlock (elem: t.RawBlock, fns: FilterSet): BlockResult {
      return fns.RawBlock ? fns.RawBlock(elem) : elem
    }

    export function Table (elem: t.Table, fns: FilterSet): BlockResult {
      if (elem.c[1].c[0]) {
        elem.c[1].c[0] = walkInlines(elem.c[1].c[0], fns)
      }
      elem.c[1].c[1] = walkBlocks(elem.c[1].c[1], fns)
      for (const headRow of elem.c[3].c[1]) {
        for (const cell of headRow.c[1]) {
          cell.c[4] = walkBlocks(cell.c[4], fns)
        }
      }
      for (const body of elem.c[4]) {
        for (const row of body.c[2]) {
          for (const cell of row.c[1]) {
            cell.c[4] = walkBlocks(cell.c[4], fns)
          }
        }
        for (const row of body.c[3]) {
          for (const cell of row.c[1]) {
            cell.c[4] = walkBlocks(cell.c[4], fns)
          }
        }
      }
      for (const footRow of elem.c[5].c[1]) {
        for (const cell of footRow.c[1]) {
          cell.c[4] = walkBlocks(cell.c[4], fns)
        }
      }
      return fns.Table ? fns.Table(elem) : elem
    }
  }
}

export function walkInline (elem: t.Inline, fns: FilterSet): InlineResult {
  const wi = walk.inline
  const tag: string = elem.t
  const visit = wi[tag as keyof typeof wi]
  return visit(elem as any, fns)
}

export function walkBlock (elem: t.Block, fns: FilterSet): BlockResult {
  const wb = walk.block
  const tag: string = elem.t
  const visit = wb[tag as keyof typeof wb]
  return visit(elem as any, fns)
}

export function walkInlines (elems: Array<t.Inline>, fns: FilterSet): Array<t.Inline> {
  const result = []
  for (const elem of elems) {
    const replacement = walkInline(elem, fns)
    if (replacement == null) result.push(elem)
    else if (replacement instanceof Array) result.push(...replacement)
    else result.push(replacement)
  }
  return result
}

export function walkBlocks (elems: Array<t.Block>, fns: FilterSet): Array<t.Block> {
  const result = []
  for (const elem of elems) {
    const replacement = walkBlock(elem, fns)
    if (replacement == null) result.push(elem)
    else if (replacement instanceof Array) result.push(...replacement)
    else result.push(replacement)
  }
  return result
}
