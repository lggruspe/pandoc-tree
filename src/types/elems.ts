export enum Alignment {
  AlignLeft,
  AlignRight,
  AlignCenter,
  AlignDefault
}

// identifier, classes, key-value pairs
export type Attr = [string, Array<string>, Array<[string, string]>]

export interface Caption {
  readonly t: 'Caption'
  c: [(null | Array<Inline>), Array<Block>]
}

export interface Cell {
  readonly t: 'Cell'
  c: [
    Attr,
    { t: string }, // Alignment
    RowSpan,
    ColSpan,
    Array<Block>
  ]
}

export interface Citation {
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

export interface ColSpan {
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

export interface Row {
  readonly t: 'Row'
  c: [Attr, Array<Cell>]
}

export interface RowHeadColumns {
  readonly t: 'RowHeadColumns'
  c: number // integer
}

export interface RowSpan {
  readonly t: 'RowSpan'
  c: number // integer
}

export interface TableHead {
  readonly t: 'TableHead'
  c: [Attr, Array<Row>]
}

export interface TableBody {
  readonly t: 'TableBody'
  c: [Attr, RowHeadColumns, Array<Row>, Array<Row>]
}

export interface TableFoot {
  readonly t: 'TableFoot'
  c: [Attr, Array<Row>]
}

// Blocks

export interface BlockQuote {
  readonly t: 'BlockQuote'
  c: Array<Block>
}

export interface BulletList {
  readonly t: 'BulletList'
  c: Array<Array<Block>>
}

export interface CodeBlock {
  readonly t: 'CodeBlock'
  c: [Attr, string]
}

export interface DefinitionList {
  readonly t: 'DefinitionList'
  c: Array<[Array<Inline>, Array<Array<Block>>]>
}

export interface Div {
  readonly t: 'Div'
  c: [Attr, Array<Block>]
}

export interface Header {
  readonly t: 'Header'
  c: [number, Attr, Array<Inline>]
}

export interface HorizontalRule {
  readonly t: 'HorizontalRule'
}

export interface LineBlock {
  readonly t: 'LineBlock'
  c: Array<Array<Inline>>
}

export interface Null {
  readonly t: 'Null'
}

export interface OrderedList {
  readonly t: 'OrderedList'
  c: [ListAttributes, Array<Array<Block>>]
}

export interface Para {
  readonly t: 'Para'
  c: Array<Inline>
}

export interface Plain {
  readonly t: 'Plain'
  c: Array<Inline>
}

export interface RawBlock {
  readonly t: 'RawBlock'
  c: [string, string]
}

export interface Table {
  readonly t: 'Table'
  c: [Attr, Caption, Array<ColSpec>, TableHead, Array<TableBody>, TableFoot]
  // [attr, caption, colspecs, head, bodies, foot]
}

// Inlines

export interface Cite {
  readonly t: 'Cite'
  c: [Array<Citation>, Array<Inline>]
}

export interface Code {
  readonly t: 'Code'
  c: [Attr, string]
}

export interface Emph {
  readonly t: 'Emph'
  c: Array<Inline>
}

export interface Image {
  readonly t: 'Image'
  c: [Attr, Array<Inline>, [string, string]]
}

export interface LineBreak {
  readonly t: 'LineBreak'
}

export interface Link {
  readonly t: 'Link'
  c: [Attr, Array<Inline>, [string, string]]
}

export interface Math {
  readonly t: 'Math'
  c: [
    { t: string }, // MathType
    string
  ]
}

export interface Note {
  readonly t: 'Note'
  c: Array<Block>
}

export interface Quoted {
  readonly t: 'Quoted'
  c: [
    { t: string }, // QuoteType
    Array<Inline>
  ]
}

export interface RawInline {
  readonly t: 'RawInline'
  c: [string, string]
}

export interface SmallCaps {
  readonly t: 'SmallCaps'
  c: Array<Inline>
}

export interface SoftBreak {
  readonly t: 'SoftBreak'
}

export interface Space {
  readonly t: 'Space'
}

export interface Span {
  readonly t: 'Span'
  c: [Attr, Array<Inline>]
}

export interface Str {
  readonly t: 'Str'
  c: string
}

export interface Strikeout {
  readonly t: 'Strikeout'
  c: Array<Inline>
}

export interface Strong {
  readonly t: 'Strong'
  c: Array<Inline>
}

export interface Subscript {
  readonly t: 'Subscript'
  c: Array<Inline>
}

export interface Superscript {
  readonly t: 'Superscript'
  c: Array<Inline>
}

export interface Underline {
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
