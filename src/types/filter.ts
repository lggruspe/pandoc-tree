import * as t from './types.js'

export type InlineResult = t.Inline | Array<t.Inline>
export type BlockResult = t.Block | Array<t.Block>

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
  Pandoc?: (doc: t.Pandoc) => t.Pandoc
}

export type Filter = Array<FilterSet>
