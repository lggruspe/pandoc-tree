import * as t from './types.js'

type HasAttr = t.CodeBlock | t.Div | t.Header
  | t.Code | t.Image | t.Link | t.Span

function identifier (elem: HasAttr | t.Attr): string {
  if (elem instanceof Array) {
    return elem[0]
  }
  return identifier(attr(elem as any))
}

function classes (elem: HasAttr | t.Attr): Array<string> {
  if (elem instanceof Array) {
    return elem[1]
  }
  return classes(attr(elem as any))
}

function attributes (elem: HasAttr | t.Attr): Array<[string, string]> {
  if (elem instanceof Array) {
    return elem[2]
  }
  return attributes(attr(elem as any))
}

function id (citation: t.Citation): string {
  return citation.citationId
}

function mode (citation: t.Citation): t.CitationMode {
  const tag = citation.citationMode.t
  return t.CitationMode[tag as keyof typeof t.CitationMode]
}

function prefix (citation: t.Citation): Array<t.Inline> {
  return citation.citationPrefix
}

function suffix (citation: t.Citation): Array<t.Inline> {
  return citation.citationSuffix
}

function noteNum (citation: t.Citation): number {
  return citation.citationNoteNum
}

function hash (citation: t.Citation): number {
  return citation.citationHash
}

// Element properties

function attr (
  elem: t.CodeBlock | t.Div | t.Header | t.Table
    | t.Code | t.Image | t.Link | t.Span
): t.Attr {
  switch (elem.t) {
    case 'CodeBlock':
    case 'Div':
    case 'Table':
    case 'Code':
    case 'Image':
    case 'Link':
    case 'Span':
      return elem.c[0]
    case 'Header':
      return elem.c[1]
  }
}

function bodies (elem: t.Table): Array<t.TableBody> {
  return elem.c[4]
}

function caption (elem: t.Table): t.Caption
function caption (elem: t.Image): Array<t.Inline>
function caption (elem: t.Table | t.Image) {
  return elem.c[1]
}

function citations (elem: t.Cite): Array<t.Citation> {
  return elem.c[0]
}

function colspecs (elem: t.Table): Array<t.ColSpec> {
  return elem.c[2]
}

function content (elem: t.BlockQuote): Array<t.Block>
function content (elem: t.BulletList): Array<Array<t.Block>>
function content (elem: t.DefinitionList): Array<[Array<t.Inline>, Array<Array<t.Block>>]>
function content (elem: t.Div): Array<t.Block>
function content (elem: t.Header): Array<t.Inline>
function content (elem: t.LineBlock): Array<Array<t.Inline>>
function content (elem: t.OrderedList): Array<Array<t.Block>>
function content (elem: t.Para): Array<t.Inline>
function content (elem: t.Plain): Array<t.Inline>
function content (elem: t.Cite): Array<t.Inline>
function content (elem: t.Emph): Array<t.Inline>
function content (elem: t.Link): Array<t.Inline>
function content (elem: t.Note): Array<t.Block>
function content (elem: t.Quoted): Array<t.Inline>
function content (elem: t.SmallCaps): Array<t.Inline>
function content (elem: t.Span): Array<t.Inline>
function content (elem: t.Strikeout): Array<t.Inline>
function content (elem: t.Strong): Array<t.Inline>
function content (elem: t.Subscript): Array<t.Inline>
function content (elem: t.Superscript): Array<t.Inline>
function content (elem: t.Underline): Array<t.Inline>
function content (
  elem: t.BlockQuote | t.BulletList | t.DefinitionList | t.Div | t.Header | t.LineBlock | t.OrderedList | t.Para | t.Plain
    | t.Cite | t.Emph | t.Link | t.Note | t.Quoted | t.SmallCaps | t.Span | t.Strikeout | t.Strong | t.Subscript | t.Superscript | t.Underline
) {
  switch (elem.t) {
    case 'BlockQuote':
    case 'BulletList':
    case 'DefinitionList':
    case 'LineBlock':
    case 'Para':
    case 'Plain':
    case 'Emph':
    case 'Note':
    case 'SmallCaps':
    case 'Strikeout':
    case 'Strong':
    case 'Subscript':
    case 'Superscript':
    case 'Underline':
      return elem.c
    case 'Div':
    case 'OrderedList':
    case 'Cite':
    case 'Link':
    case 'Quoted':
    case 'Span':
      return elem.c[1]
    case 'Header':
      return elem.c[2]
  }
}

function delimiter (elem: t.OrderedList): t.ListNumberDelim {
  const tag = listAttributes(elem)[2].t
  return t.ListNumberDelim[tag as keyof typeof t.ListNumberDelim]
}

function foot (elem: t.Table): t.TableFoot {
  return elem.c[5]
}

function format (elem: t.RawBlock | t.RawInline) {
  return elem.c[0]
}

function head (elem: t.Table): t.TableHead {
  return elem.c[3]
}

function level (elem: t.Header): number {
  return elem.c[0]
}

function listAttributes (elem: t.OrderedList): t.ListAttributes {
  return elem.c[0]
}

function mathtype (elem: t.Math): t.MathType {
  const tag = elem.c[0].t
  return t.MathType[tag as keyof typeof t.MathType]
}

function quotetype (elem: t.Quoted): t.QuoteType {
  const tag = elem.c[0].t
  return t.QuoteType[tag as keyof typeof t.QuoteType]
}

function src (elem: t.Image): string {
  return elem.c[2][0]
}

function start (elem: t.OrderedList): number {
  return listAttributes(elem)[0]
}

function style (elem: t.OrderedList): t.ListNumberStyle {
  const tag = listAttributes(elem)[1].t
  return t.ListNumberStyle[tag as keyof typeof t.ListNumberStyle]
}

function target (elem: t.Link): string {
  return elem.c[2][0]
}

function text (
  elem: t.CodeBlock | t.RawBlock
    | t.Code | t.Math | t.RawInline | t.Str
): string {
  return elem.t === 'Str' ? elem.c : elem.c[1]
}

function title (elem: t.Image | t.Link): string {
  return elem.c[2][1]
}

export {
  identifier,
  classes,
  attributes,
  id,
  mode,
  prefix,
  suffix,
  noteNum,
  hash,

  attr,
  bodies,
  caption,
  citations,
  colspecs,
  content,
  delimiter,
  foot,
  format,
  head,
  level,
  listAttributes,
  mathtype,
  quotetype,
  src,
  start,
  style,
  target,
  text,
  title
}
