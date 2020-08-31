import * as t from './types'

export function MetaBlocks (blocks: Array<t.Block>): t.MetaBlocks {
  return {
    t: 'MetaBlocks',
    c: blocks
  }
}

export function MetaInlines (inlines: Array<t.Inline>): t.MetaInlines {
  return {
    t: 'MetaInlines',
    c: inlines
  }
}

export function MetaList (values: Array<t.MetaValue>): t.MetaList {
  return {
    t: 'MetaList',
    c: values
  }
}

export function MetaMap (map: t.Meta): t.MetaMap {
  return {
    t: 'MetaMap',
    c: map
  }
}

export function MetaBool (bool: boolean): t.MetaBool {
  return {
    t: 'MetaBool',
    c: bool
  }
}

export function MetaString (str: string): t.MetaString {
  return {
    t: 'MetaString',
    c: str
  }
}

export function Pandoc (
  blocks: Array<t.Block>,
  meta: t.Meta = {}
): t.Pandoc {
  return {
    meta: meta,
    blocks: blocks,
    'pandoc-api-version': [1, 21]
  }
}

export function Attr (
  identifier: string = '',
  classes: Array<string> = [],
  attributes: object = {}
): t.Attr {
  return [identifier, classes, Object.entries(attributes)]
}

export function Citation (
  id: string,
  mode: t.CitationMode,
  prefix: Array<t.Inline>,
  suffix: Array<t.Inline>,
  noteNum: number,
  hash: number
): t.Citation {
  return {
    citationId: id,
    citationPrefix: prefix,
    citationSuffix: suffix,
    citationMode: { t: t.CitationMode[mode] },
    citationNoteNum: noteNum,
    citationHash: hash
  }
}

export function ListAttributes (
  start: number = 1,
  style: t.ListNumberStyle = t.ListNumberStyle.DefaultStyle,
  delimiter: t.ListNumberDelim = t.ListNumberDelim.DefaultDelim
): t.ListAttributes {
  return [
    start,
    { t: t.ListNumberStyle[style] },
    { t: t.ListNumberDelim[delimiter] }
  ]
}

export function Caption (): t.Caption {
  throw new Error('not implemented')
}

export function ColSpec (): t.ColSpec {
  throw new Error('not implemented')
}

export function TableHead (): t.TableHead {
  throw new Error('not implemented')
}

export function TableBody (): t.TableBody {
  throw new Error('not implemented')
}

export function TableFoot (): t.TableFoot {
  throw new Error('not implemented')
}

// Blocks

export function BlockQuote (content: Array<t.Block>): t.BlockQuote {
  return {
    t: 'BlockQuote',
    c: content
  }
}

export function BulletList (content: Array<Array<t.Block>>): t.BulletList {
  return {
    t: 'BulletList',
    c: content
  }
}

export function CodeBlock (text: string, attr: t.Attr = Attr()): t.CodeBlock {
  return {
    t: 'CodeBlock',
    c: [attr, text]
  }
}

export function DefinitionList (
  content: Array<[Array<t.Inline>,
  Array<Array<t.Block>>]>
): t.DefinitionList {
  return {
    t: 'DefinitionList',
    c: content
  }
}

export function Div (content: Array<t.Block>, attr: t.Attr = Attr()): t.Div {
  return {
    t: 'Div',
    c: [attr, content]
  }
}

export function Header (level: number, content: Array<t.Inline>, attr: t.Attr = Attr()): t.Header {
  return {
    t: 'Header',
    c: [level, attr, content]
  }
}

export function HorizontalRule (): t.HorizontalRule {
  return {
    t: 'HorizontalRule'
  }
}

export function LineBlock (content: Array<Array<t.Inline>>): t.LineBlock {
  return {
    t: 'LineBlock',
    c: content
  }
}

export function Null (): t.Null {
  return {
    t: 'Null'
  }
}

export function OrderedList (
  content: Array<Array<t.Block>>,
  listAttributes: t.ListAttributes = ListAttributes()
): t.OrderedList {
  return {
    t: 'OrderedList',
    c: [listAttributes, content]
  }
}

export function Para (content: Array<t.Inline>): t.Para {
  return {
    t: 'Para',
    c: content
  }
}

export function Plain (content: Array<t.Inline>): t.Plain {
  return {
    t: 'Plain',
    c: content
  }
}

export function RawBlock (format: string, text: string): t.RawBlock {
  return {
    t: 'RawBlock',
    c: [format, text]
  }
}

export function Table (
  attr: t.Attr,
  caption: t.Caption,
  colspecs: Array<t.ColSpec>,
  head: t.TableHead,
  bodies: Array<t.TableBody>,
  foot: t.TableFoot
): t.Table {
  return {
    t: 'Table',
    c: [attr, caption, colspecs, head, bodies, foot]
  }
}

// Inlines

export function Cite (content: Array<t.Inline>, citations: Array<t.Citation>): t.Cite {
  return {
    t: 'Cite',
    c: [citations, content]
  }
}

export function Code (text: string, attr: t.Attr = Attr()): t.Code {
  return {
    t: 'Code',
    c: [attr, text]
  }
}

export function Emph (content: Array<t.Inline>): t.Emph {
  return {
    t: 'Emph',
    c: content
  }
}

export function Image (
  caption: Array<t.Inline>,
  src: string,
  title: string = '',
  attr: t.Attr = Attr()
): t.Image {
  return {
    t: 'Image',
    c: [attr, caption, [src, title]]
  }
}

export function LineBreak (): t.LineBreak {
  return {
    t: 'LineBreak'
  }
}

export function Link (
  content: Array<t.Inline>,
  src: string,
  title: string = '',
  attr: t.Attr = Attr()
): t.Link {
  return {
    t: 'Link',
    c: [attr, content, [src, title]]
  }
}

export function Math (mathtype: t.MathType, text: string): t.Math {
  return {
    t: 'Math',
    c: [{ t: t.MathType[mathtype] }, text]
  }
}

export function Note (content: Array<t.Block>): t.Note {
  return {
    t: 'Note',
    c: content
  }
}

export function Quoted (quotetype: t.QuoteType, content: Array<t.Inline>): t.Quoted {
  return {
    t: 'Quoted',
    c: [{ t: t.QuoteType[quotetype] }, content]
  }
}

export function RawInline (format: string, text: string): t.RawInline {
  return {
    t: 'RawInline',
    c: [format, text]
  }
}

export function SmallCaps (content: Array<t.Inline>): t.SmallCaps {
  return {
    t: 'SmallCaps',
    c: content
  }
}

export function SoftBreak (): t.SoftBreak {
  return {
    t: 'SoftBreak'
  }
}

export function Space (): t.Space {
  return {
    t: 'Space'
  }
}

export function Span (content: Array<t.Inline>, attr: t.Attr = Attr()): t.Span {
  return {
    t: 'Span',
    c: [attr, content]
  }
}

export function Str (text: string): t.Str {
  return {
    t: 'Str',
    c: text
  }
}

export function Strikeout (content: Array<t.Inline>): t.Strikeout {
  return {
    t: 'Strikeout',
    c: content
  }
}

export function Strong (content: Array<t.Inline>): t.Strong {
  return {
    t: 'Strong',
    c: content
  }
}

export function Subscript (content: Array<t.Inline>): t.Subscript {
  return {
    t: 'Subscript',
    c: content
  }
}

export function Superscript (content: Array<t.Inline>): t.Superscript {
  return {
    t: 'Superscript',
    c: content
  }
}

export function Underline (content: Array<t.Inline>): t.Underline {
  return {
    t: 'Underline',
    c: content
  }
}
