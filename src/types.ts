export type MetaBlocks = {
  readonly t: 'MetaBlocks'
  c: Array<Block>
}

export type MetaBool = {
  readonly t: 'MetaBool'
  c: boolean
}

export type MetaInlines = {
  readonly t: 'MetaInlines'
  c: Array<Inline>
}

export type MetaList = {
  readonly t: 'MetaList'
  c: Array<MetaValue>
}

export type MetaMap = {
  readonly t: 'MetaMap'
  c: Meta
}

export type MetaString = {
  readonly t: 'MetaString'
  c: string
}

export type MetaValue =
  | MetaBlocks
  | MetaBool
  | MetaInlines
  | MetaList
  | MetaMap
  | MetaString

export type Meta = {
  [key: string]: MetaValue
}

export type Pandoc = {
  meta: Meta,
  blocks: Array<Block>,
  'pandoc-api-version': [1, 21]
}

export enum Alignment {
  AlignLeft,
  AlignRight,
  AlignCenter,
  AlignDefault
}

// identifier, classes, key-value pairs
export type Attr = [string, Array<string>, Array<[string, string]>]

export type Caption = {
  readonly t: 'Caption'
  c: [(null | Array<Inline>), Array<Block>]
}

export type Cell = {
  readonly t: 'Cell'
  c: [
    Attr,
    { t: string }, // Alignment
    RowSpan,
    ColSpan,
    Array<Block>
  ]
}

export type Citation = {
  citationId: string
  citationPrefix: Array<Inline>
  citationSuffix: Array<Inline>
  citationMode: { t: string } // CitationMode
  citationNoteNum: number
  citationHash: number
}

export enum CitationMode {
  AuthorInText,
  SuppressAuthor,
  NormalCitation
}

export type ColSpan = {
  readonly t: 'ColSpan'
  c: number // integer
}

export type ColSpec = [
  { t: string }, // Alignment
  { t: string } // ColWidth
]

export enum ColWidth {
  // ColWidth(number) // not supported
  ColWidthDefault
}

export enum ListNumberStyle {
  DefaultStyle,
  Example,
  Decimal,
  LowerRoman,
  UpperRoman,
  LowerAlpha,
  UpperAlpha
}

export enum ListNumberDelim {
  DefaultDelim,
  Period,
  OneParen,
  TwoParents
}

// [start, style, delim]
export type ListAttributes = [
  number,
  { t: string }, // ListNumberStyle
  { t: string } // ListNumberDelim
]

export enum MathType {
  DisplayMath,
  InlineMath
}

export enum QuoteType {
  SingleQuote,
  DoubleQuote
}

export type Row = {
  readonly t: 'Row'
  c: [Attr, Array<Cell>]
}

export type RowHeadColumns = {
  readonly t: 'RowHeadColumns'
  c: number // integer
}

export type RowSpan = {
  readonly t: 'RowSpan'
  c: number // integer
}

export type TableHead = {
  readonly t: 'TableHead'
  c: [Attr, Array<Row>]
}

export type TableBody = {
  readonly t: 'TableBody'
  c: [Attr, RowHeadColumns, Array<Row>, Array<Row>]
}

export type TableFoot = {
  readonly t: 'TableFoot'
  c: [Attr, Array<Row>]
}

// Blocks

export type BlockQuote = {
  readonly t: 'BlockQuote'
  c: Array<Block>
}

export type BulletList = {
  readonly t: 'BulletList'
  c: Array<Array<Block>>
}

export type CodeBlock = {
  readonly t: 'CodeBlock'
  c: [Attr, string]
}

export type DefinitionList = {
  readonly t: 'DefinitionList'
  c: Array<[Array<Inline>, Array<Array<Block>>]>
}

export type Div = {
  readonly t: 'Div'
  c: [Attr, Array<Block>]
}

export type Header = {
  readonly t: 'Header'
  c: [number, Attr, Array<Inline>]
}

export type HorizontalRule = {
  readonly t: 'HorizontalRule'
}

export type LineBlock = {
  readonly t: 'LineBlock'
  c: Array<Array<Inline>>
}

export type Null = {
  readonly t: 'Null'
}

export type OrderedList = {
  readonly t: 'OrderedList'
  c: [ListAttributes, Array<Array<Block>>]
}

export type Para = {
  readonly t: 'Para'
  c: Array<Inline>
}

export type Plain = {
  readonly t: 'Plain'
  c: Array<Inline>
}

export type RawBlock = {
  readonly t: 'RawBlock'
  c: [string, string]
}

export type Table = {
  readonly t: 'Table'
  c: [Attr, Caption, Array<ColSpec>, TableHead, Array<TableBody>, TableFoot]
}

// Inlines

export type Cite = {
  readonly t: 'Cite'
  c: [Array<Citation>, Array<Inline>]
}

export type Code = {
  readonly t: 'Code'
  c: [Attr, string]
}

export type Emph = {
  readonly t: 'Emph'
  c: Array<Inline>
}

export type Image = {
  readonly t: 'Image'
  c: [Attr, Array<Inline>, [string, string]]
}

export type LineBreak = {
  readonly t: 'LineBreak'
}

export type Link = {
  readonly t: 'Link'
  c: [Attr, Array<Inline>, [string, string]]
}

export type Math = {
  readonly t: 'Math'
  c: [
    { t: string }, // MathType
    string
  ]
}

export type Note = {
  readonly t: 'Note'
  c: Array<Block>
}

export type Quoted = {
  readonly t: 'Quoted'
  c: [
    { t: string }, // QuoteType
    Array<Inline>
  ]
}

export type RawInline = {
  readonly t: 'RawInline'
  c: [string, string]
}

export type SmallCaps = {
  readonly t: 'SmallCaps'
  c: Array<Inline>
}

export type SoftBreak = {
  readonly t: 'SoftBreak'
}

export type Space = {
  readonly t: 'Space'
}

export type Span = {
  readonly t: 'Span'
  c: [Attr, Array<Inline>]
}

export type Str = {
  readonly t: 'Str'
  c: string
}

export type Strikeout = {
  readonly t: 'Strikeout'
  c: Array<Inline>
}

export type Strong = {
  readonly t: 'Strong'
  c: Array<Inline>
}

export type Subscript = {
  readonly t: 'Subscript'
  c: Array<Inline>
}

export type Superscript = {
  readonly t: 'Superscript'
  c: Array<Inline>
}

export type Underline = {
  readonly t: 'Underline'
  c: Array<Inline>
}

export type Inline =
  | Cite
  | Code
  | Emph
  | Image
  | LineBreak
  | Link
  | Math
  | Note
  | Quoted
  | RawInline
  | SmallCaps
  | SoftBreak
  | Space
  | Span
  | Str
  | Strikeout
  | Strong
  | Subscript
  | Superscript
  | Underline

export type Block =
  | BlockQuote
  | BulletList
  | CodeBlock
  | DefinitionList
  | Div
  | Header
  | HorizontalRule
  | LineBlock
  | Null
  | OrderedList
  | Para
  | Plain
  | RawBlock
  | Table

export type Elem = Block | Inline

const INLINE_TAGS = new Set([
  'Cite',
  'Code',
  'Emph',
  'Image',
  'LineBreak',
  'Link',
  'Math',
  'Note',
  'Quoted',
  'RawInline',
  'SmallCaps',
  'SoftBreak',
  'Space',
  'Span',
  'Str',
  'Strikeout',
  'Strong',
  'Subscript',
  'Superscript',
  'Underline'
])

const BLOCK_TAGS = new Set([
  'BlockQuote',
  'BulletList',
  'CodeBlock',
  'DefinitionList',
  'Div',
  'Header',
  'HorizontalRule',
  'LineBlock',
  'Null',
  'OrderedList',
  'Para',
  'Plain',
  'RawBlock',
  'Table'
])

export function isBlock (elem: Elem): elem is Block {
  return BLOCK_TAGS.has(elem.t)
}

export function isInline (elem: Elem): elem is Inline {
  return INLINE_TAGS.has(elem.t)
}
