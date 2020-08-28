// identifier, classes, key-value pairs
export type Attr =
  [string, Array<string>, Array<[string, string]>]

export enum CitationMode {
  AuthorInText,
  SuppressAuthor,
  NormalCitation
}

export interface Citation {
  citationId: string
  citationPrefix: Array<Inline>
  citationSuffix: Array<Inline>
  citationMode: { t: string }
  citationNoteNum: number
  citationHash: number
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
export type ListAttributes = [ number, ListNumberStyle, ListNumberDelim ]

export enum MathType {
  DisplayMath,
  InlineMath
}

export enum QuoteType {
  SingleQuote,
  DoubleQuote
}

// Blocks

export interface BlockQuote {
  t: 'BlockQuote'
  c: Array<Block>
  // content
}

export interface BulletList {
  t: 'BulletList'
  c: Array<Array<Block>>
  // content
}

export interface CodeBlock {
  t: 'CodeBlock'
  c: [Attr, string]
  // [attr, text]
}

export interface DefinitionList {
  t: 'DefinitionList'
  c: Array<[Array<Inline>, Array<Array<Block>>]>
  // content
}

export interface Div {
  t: 'Div'
  c: [Attr, Array<Block>]
  // [attr, content]
}

export interface Header {
  t: 'Header'
  c: [number, Attr, Array<Inline>]
  // [level, attr, content]
}

export interface HorizontalRule {
  t: 'HorizontalRule'
}

export interface LineBlock {
  t: 'LineBlock'
  c: Array<Array<Inline>>
  // content
}

export interface Null {
  t: 'Null'
}

export interface OrderedList {
  t: 'OrderedList'
  c: [ListAttributes, Array<Array<Block>>]
  // [listAttributes, content]
}

export interface Para {
  t: 'Para'
  c: Array<Inline>
  // content
}

export interface Plain {
  t: 'Plain'
  c: Array<Inline>
  // content
}

export interface RawBlock {
  t: 'RawBlock'
  c: [string, string]
  // [format, text]
}

export interface Table {
  t: 'Table'
  c: null // [Attr, ?, Array<?>, ?, Array<?>, ?]
  // [attr, caption, colspecs, head, bodies, foot]
}

// Inlines

export interface Cite {
  // [citations, content]
  t: 'Cite'
  c: [Array<Citation>, Array<Inline>]
}

export interface Code {
  // [attr, text]
  t: 'Code'
  c: [Attr, string]
}

export interface Emph {
  // content
  t: 'Emph'
  c: Array<Inline>
}

export interface Image {
  // [attr, caption, [src, title]]
  t: 'Image'
  c: [Attr, Array<Inline>, [string, string]]
}

export interface LineBreak {
  t: 'LineBreak'
}

export interface Link {
  // [attr, content, [src, title]]
  t: 'Link'
  c: [Attr, Array<Inline>, [string, string]]
}

export interface Math {
  // [mathtype, text]
  t: 'Math'
  c: [{ t: MathType }, string]
}

export interface Note {
  // content
  t: 'Note'
  c: Array<Block>
}

export interface Quoted {
  // [quotetype, content]
  t: 'Quoted'
  c: [{ t: QuoteType }, Array<Inline>]
}

export interface RawInline {
  // [format, text]
  t: 'RawInline'
  c: [string, string]
}

export interface SmallCaps {
  // content
  t: 'SmallCaps'
  c: Array<Inline>
}

export interface SoftBreak {
  t: 'SoftBreak'
}

export interface Space {
  t: 'Space'
}

export interface Span {
  // [attr, content]
  t: 'Span'
  c: [Attr, Array<Inline>]
}

export interface Str {
  // text
  t: 'Str'
  c: string
}

export interface Strikeout {
  // content
  t: 'Strikeout'
  c: Array<Inline>
}

export interface Strong {
  // content
  t: 'Strong'
  c: Array<Inline>
}

export interface Subscript {
  // content
  t: 'Subscript'
  c: Array<Inline>
}

export interface Superscript {
  // content
  t: 'Superscript'
  c: Array<Inline>
}

export interface Underline {
  // content
  t: 'Underline'
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
