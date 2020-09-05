import * as get from './get.js'
import * as t from './types.js'

type HasAttr = t.CodeBlock | t.Div | t.Header
  | t.Code | t.Image | t.Link | t.Span

function identifier (elem: HasAttr | t.Attr, val: string): void {
  if (elem instanceof Array) {
    elem[0] = val
  } else {
    identifier(get.attr(elem), val)
  }
}

function classes (elem: HasAttr | t.Attr, val: Array<string>): void {
  if (elem instanceof Array) {
    elem[1] = val
  } else {
    classes(get.attr(elem as HasAttr), val)
  }
}

function attributes (elem: HasAttr | t.Attr, val: Array<[string, string]>): void {
  if (elem instanceof Array) {
    elem[2] = val
  } else {
    attributes(get.attr(elem as HasAttr), val)
  }
}

function id (citation: t.Citation, val: string): void {
  citation.citationId = val
}

function mode (citation: t.Citation, val: t.CitationMode): void {
  citation.citationMode.t = t.CitationMode[val]
}

function prefix (citation: t.Citation, val: Array<t.Inline>): void {
  citation.citationPrefix = val
}

function suffix (citation: t.Citation, val: Array<t.Inline>): void {
  citation.citationSuffix = val
}

function noteNum (citation: t.Citation, val: number): void {
  citation.citationNoteNum = val
}

function hash (citation: t.Citation, val: number): void {
  citation.citationHash = val
}

// Element properties

function attr (
  elem: t.CodeBlock | t.Div | t.Header | t.Table
    | t.Code | t.Image | t.Link | t.Span,
  val: t.Attr
): void {
  switch (elem.t) {
    case 'CodeBlock':
    case 'Div':
    case 'Table':
    case 'Code':
    case 'Image':
    case 'Link':
    case 'Span':
      elem.c[0] = val
      break
    case 'Header':
      elem.c[1] = val
      break
  }
}

function bodies (elem: t.Table, val: Array<t.TableBody>): void {
  elem.c[4] = val
}

function caption (elem: t.Table, val: t.Caption): void
function caption (elem: t.Image, val: Array<t.Inline>): void
function caption (
  elem: t.Table | t.Image,
  val: t.Caption | Array<t.Inline>
): void {
  elem.c[1] = val
}

function citations (elem: t.Cite, val: Array<t.Citation>): void {
  elem.c[0] = val
}

function colspecs (elem: t.Table, val: Array<t.ColSpec>): void {
  elem.c[2] = val
}

function content (elem: t.BlockQuote, val: Array<t.Block>): void
function content (elem: t.BulletList, val: Array<Array<t.Block>>): void
function content (elem: t.DefinitionList, val: Array<[Array<t.Inline>, Array<Array<t.Block>>]>): void
function content (elem: t.Div, val: Array<t.Block>): void
function content (elem: t.Header, val: Array<t.Inline>): void
function content (elem: t.LineBlock, val: Array<Array<t.Inline>>): void
function content (elem: t.OrderedList, val: Array<Array<t.Block>>): void
function content (elem: t.Para, val: Array<t.Inline>): void
function content (elem: t.Plain, val: Array<t.Inline>): void
function content (elem: t.Cite, val: Array<t.Inline>): void
function content (elem: t.Emph, val: Array<t.Inline>): void
function content (elem: t.Link, val: Array<t.Inline>): void
function content (elem: t.Note, val: Array<t.Block>): void
function content (elem: t.Quoted, val: Array<t.Inline>): void
function content (elem: t.SmallCaps, val: Array<t.Inline>): void
function content (elem: t.Span, val: Array<t.Inline>): void
function content (elem: t.Strikeout, val: Array<t.Inline>): void
function content (elem: t.Strong, val: Array<t.Inline>): void
function content (elem: t.Subscript, val: Array<t.Inline>): void
function content (elem: t.Superscript, val: Array<t.Inline>): void
function content (elem: t.Underline, val: Array<t.Inline>): void
function content (
  elem: t.BlockQuote | t.BulletList | t.DefinitionList | t.Div | t.Header | t.LineBlock | t.OrderedList | t.Para | t.Plain
    | t.Cite | t.Emph | t.Link | t.Note | t.Quoted | t.SmallCaps | t.Span | t.Strikeout | t.Strong | t.Subscript | t.Superscript | t.Underline,
  val: Array<Array<t.Block>> | Array<Array<t.Inline>> | Array<t.Block> | Array<t.Inline> | Array<[Array<t.Inline>, Array<Array<t.Block>>]>
): void {
  switch (elem.t) {
    case 'BlockQuote':
    case 'Note':
      elem.c = val as Array<t.Block>
      break
    case 'BulletList':
      elem.c = val as Array<Array<t.Block>>
      break
    case 'DefinitionList':
      elem.c = val as Array<[Array<t.Inline>, Array<Array<t.Block>>]>
      break
    case 'LineBlock':
      elem.c = val as Array<Array<t.Inline>>
      break
    case 'Para':
    case 'Plain':
    case 'Emph':
    case 'SmallCaps':
    case 'Strikeout':
    case 'Strong':
    case 'Subscript':
    case 'Superscript':
    case 'Underline':
      elem.c = val as Array<t.Inline>
      break
    case 'Div':
      elem.c[1] = val as Array<t.Block>
      break
    case 'OrderedList':
      elem.c[1] = val as Array<Array<t.Block>>
      break
    case 'Cite':
    case 'Link':
    case 'Quoted':
    case 'Span':
      elem.c[1] = val as Array<t.Inline>
      break
    case 'Header':
      elem.c[2] = val as Array<t.Inline>
      break
  }
}

function delimiter (elem: t.OrderedList, val: t.ListNumberDelim): void {
  get.listAttributes(elem)[2].t = t.ListNumberDelim[val]
}

function foot (elem: t.Table, val: t.TableFoot): void {
  elem.c[5] = val
}

function format (elem: t.RawBlock | t.RawInline, val: string): void {
  elem.c[0] = val
}

function head (elem: t.Table, val: t.TableHead): void {
  elem.c[3] = val
}

function level (elem: t.Header, val: number): void {
  elem.c[0] = val
}

function listAttributes (elem: t.OrderedList, val: t.ListAttributes): void {
  elem.c[0] = val
}

function mathtype (elem: t.Math, val: t.MathType): void {
  elem.c[0].t = t.MathType[val]
}

function quotetype (elem: t.Quoted, val: t.QuoteType): void {
  elem.c[0].t = t.QuoteType[val]
}

function src (elem: t.Image, val: string): void {
  elem.c[2][0] = val
}

function start (elem: t.OrderedList, val: number): void {
  get.listAttributes(elem)[0] = val
}

function style (elem: t.OrderedList, val: t.ListNumberStyle): void {
  get.listAttributes(elem)[1].t = t.ListNumberStyle[val]
}

function target (elem: t.Link, val: string): void {
  elem.c[2][0] = val
}

function text (
  elem: t.CodeBlock | t.RawBlock
    | t.Code | t.Math | t.RawInline | t.Str,
  val: string
): void {
  if (elem.t === 'Str') {
    elem.c = val
  } else {
    elem.c[1] = val
  }
}

function title (elem: t.Image | t.Link, val: string): void{
  elem.c[2][1] = val
}

function withAttributes (
  elem: HasAttr,
  callback: (attr: { [key: string]: string }) => void
): void {
  const attr = Object.fromEntries(get.attributes(elem))
  callback(attr)
  attributes(elem, Object.entries(attr))
}

export {
  withAttributes,

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
