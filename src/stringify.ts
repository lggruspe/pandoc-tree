import * as t from './types.js'

function concat (a: string, b: string): string {
  return a + b
}

function concatenate (a: string, b: t.Elem): string {
  return a + stringify(b)
}

function concatenateInlines (elems: Array<t.Inline>): string {
  return elems.reduce(concatenate, '')
}

function concatenateBlocks (elems: Array<t.Block>): string {
  return elems.reduce(concatenate, '')
}

export namespace block {
  export function BlockQuote (elem: t.BlockQuote): string {
    return elem.c.reduce(concatenate, '')
  }

  export function BulletList (elem: t.BulletList): string {
    return elem.c.map(concatenateBlocks).reduce(concat, '')
  }

  export function CodeBlock (elem: t.CodeBlock): string {
    return elem.c[1]
  }

  export function DefinitionList (elem: t.DefinitionList): string {
    return elem.c.map(([inlines, blocksList]) => {
      return concatenateInlines(inlines) + blocksList.map(concatenateBlocks).reduce(concat, '')
    }).reduce(concat, '')
  }

  export function Div (elem: t.Div): string {
    return concatenateBlocks(elem.c[1])
  }

  export function Header (elem: t.Header): string {
    return concatenateInlines(elem.c[2])
  }

  export function HorizontalRule (elem: t.HorizontalRule): string {
    return ''
  }

  export function LineBlock (elem: t.LineBlock): string {
    return elem.c.map(concatenateInlines).reduce(concat, '')
  }

  export function Null (elem: t.Null): string {
    return ''
  }

  export function OrderedList (elem: t.OrderedList): string {
    return elem.c[1].map(concatenateBlocks).reduce(concat, '')
  }

  export function Para (elem: t.Para): string {
    return concatenateInlines(elem.c)
  }

  export function Plain (elem: t.Plain): string {
    return concatenateInlines(elem.c)
  }

  export function RawBlock (elem: t.RawBlock): string {
    return elem.c[1]
  }

  export function Table (elem: t.Table): string {
    throw new Error('not implemented')
  }
}

export namespace inline {
  export function Cite (elem: t.Cite): string {
    return concatenateInlines(elem.c[1])
  }

  export function Code (elem: t.Code): string {
    return elem.c[1]
  }

  export function Emph (elem: t.Emph): string {
    return concatenateInlines(elem.c)
  }

  export function Image (elem: t.Image): string {
    return concatenateInlines(elem.c[1])
  }

  export function LineBreak (elem: t.LineBreak): string {
    return ' '
  }

  export function Link (elem: t.Link): string {
    return concatenateInlines(elem.c[1])
  }

  export function Math (elem: t.Math): string {
    return elem.c[1]
  }

  export function Note (elem: t.Note): string {
    return concatenateBlocks(elem.c)
  }

  export function Quoted (elem: t.Quoted): string {
    return concatenateInlines(elem.c[1])
  }

  export function RawInline (elem: t.RawInline): string {
    return elem.c[1]
  }

  export function SmallCaps (elem: t.SmallCaps): string {
    return concatenateInlines(elem.c)
  }

  export function SoftBreak (elem: t.SoftBreak): string {
    return ' '
  }

  export function Space (elem: t.Space): string {
    return ' '
  }

  export function Span (elem: t.Span): string {
    return concatenateInlines(elem.c[1])
  }

  export function Str (elem: t.Str): string {
    return elem.c
  }

  export function Strikeout (elem: t.Strikeout): string {
    return concatenateInlines(elem.c)
  }

  export function Strong (elem: t.Strong): string {
    return concatenateInlines(elem.c)
  }

  export function Subscript (elem: t.Subscript): string {
    return concatenateInlines(elem.c)
  }

  export function Superscript (elem: t.Superscript): string {
    return concatenateInlines(elem.c)
  }

  export function Underline (elem: t.Underline): string {
    return concatenateInlines(elem.c)
  }
}

export function stringify (elem: t.Elem): string {
  const tag = elem.t
  if (t.isBlock(elem)) {
    const wb = block
    const fn = wb[tag as keyof typeof wb]
    return fn(elem as any)
  } else if (t.isInline(elem)) {
    const wi = inline
    const fn = wi[tag as keyof typeof wi]
    return fn(elem as any)
  }
  return ''
}
