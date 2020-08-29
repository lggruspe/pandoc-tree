import * as t from './elems.js'

abstract class HasAttr {
  abstract attr: t.Attr

  get identifier () {
    return this.attr[0]
  }

  set identifier (val: string) {
    this.attr[0] = val
  }

  get classes () {
    return this.attr[1]
  }

  set classes (val: Array<string>) {
    this.attr[1] = val
  }

  get attributes () {
    return this.attr[2]
  }

  set attributes (val: Array<[string, string]>) {
    this.attr[2] = val
  }
}

export class BlockQuote {
  elem: t.BlockQuote
  constructor (elem: t.BlockQuote) {
    this.elem = elem
  }

  get content () {
    return this.elem.c
  }

  set content (val: Array<t.Block>) {
    this.elem.c = val
  }
}

export class BulletList {
  elem: t.BulletList
  constructor (elem: t.BulletList) {
    this.elem = elem
  }

  get content () {
    return this.elem.c
  }

  set content (val: Array<Array<t.Block>>) {
    this.elem.c = val
  }
}

export class CodeBlock extends HasAttr {
  elem: t.CodeBlock
  constructor (elem: t.CodeBlock) {
    super()
    this.elem = elem
  }

  get attr () {
    return this.elem.c[0]
  }

  set attr (val: t.Attr) {
    this.elem.c[0] = val
  }

  get text () {
    return this.elem.c[1]
  }

  set text (val: string) {
    this.elem.c[1] = val
  }
}

export class DefinitionList {
  elem: t.DefinitionList
  constructor (elem: t.DefinitionList) {
    this.elem = elem
  }

  get content () {
    return this.elem.c
  }

  set content (val: Array<[Array<t.Inline>, Array<Array<t.Block>>]>) {
    this.elem.c = val
  }
}

export class Div extends HasAttr {
  elem: t.Div
  constructor (elem: t.Div) {
    super()
    this.elem = elem
  }

  get attr () {
    return this.elem.c[0]
  }

  set attr (val: t.Attr) {
    this.elem.c[0] = val
  }

  get content () {
    return this.elem.c[1]
  }

  set content (val: Array<t.Block>) {
    this.elem.c[1] = val
  }
}

export class Header extends HasAttr {
  elem: t.Header
  constructor (elem: t.Header) {
    super()
    this.elem = elem
  }

  get attr () {
    return this.elem.c[1]
  }

  set attr (val: t.Attr) {
    this.elem.c[1] = val
  }

  get level () {
    return this.elem.c[0]
  }

  set level (val: number) {
    this.elem.c[0] = val
  }

  get content () {
    return this.elem.c[2]
  }

  set content (val: Array<t.Inline>) {
    this.elem.c[2] = val
  }
}

export class HorizontalRule {
  elem: t.HorizontalRule
  constructor (elem: t.HorizontalRule) {
    this.elem = elem
  }
}

export class LineBlock {
  elem: t.LineBlock
  constructor (elem: t.LineBlock) {
    this.elem = elem
  }

  get content () {
    return this.elem.c
  }

  set content (val: Array<Array<t.Inline>>) {
    this.elem.c = val
  }
}

export class Null {
  elem: t.Null
  constructor (elem: t.Null) {
    this.elem = elem
  }
}

export class OrderedList {
  elem: t.OrderedList
  constructor (elem: t.OrderedList) {
    this.elem = elem
  }

  get listAttributes () {
    return this.elem.c[0]
  }

  set listAttributes (val: t.ListAttributes) {
    this.elem.c[0] = val
  }

  get content () {
    return this.elem.c[1]
  }

  set content (val: Array<Array<t.Block>>) {
    this.elem.c[1] = val
  }

  get start () {
    return this.listAttributes[0]
  }

  set start (val: number) {
    this.listAttributes[0] = val
  }

  get style () {
    const val = this.listAttributes[1].t
    return t.ListNumberStyle[val as keyof typeof t.ListNumberStyle]
  }

  set style (val: t.ListNumberStyle) {
    this.listAttributes[1].t = t.ListNumberStyle[val]
  }

  get delimiter () {
    const val = this.listAttributes[2].t
    return t.ListNumberDelim[val as keyof typeof t.ListNumberDelim]
  }

  set delimiter (val: t.ListNumberDelim) {
    this.listAttributes[2].t = t.ListNumberDelim[val]
  }
}

export class Para {
  elem: t.Para
  constructor (elem: t.Para) {
    this.elem = elem
  }

  get content () {
    return this.elem.c
  }

  set content (val: Array<t.Inline>) {
    this.elem.c = val
  }
}

export class Plain {
  elem: t.Plain
  constructor (elem: t.Plain) {
    this.elem = elem
  }

  get content () {
    return this.elem.c
  }

  set content (val: Array<t.Inline>) {
    this.elem.c = val
  }
}

export class RawBlock {
  elem: t.RawBlock
  constructor (elem: t.RawBlock) {
    this.elem = elem
  }

  get format () {
    return this.elem.c[0]
  }

  set format (val: string) {
    this.elem.c[0] = val
  }

  get text () {
    return this.elem.c[1]
  }

  set text (val: string) {
    this.elem.c[1] = val
  }
}

export class Table {
  elem: t.Table
  constructor (elem: t.Table) {
    this.elem = elem
  }

  get attr () {
    return this.elem.c[0]
  }

  set attr (val: t.Attr) {
    this.elem.c[0] = val
  }

  // TODO attr, caption, colspecs, head, bodies, foot
}

export class Cite {
  elem: t.Cite
  constructor (elem: t.Cite) {
    this.elem = elem
  }

  get citations () {
    return this.elem.c[0]
  }

  set citations (val: Array<t.Citation>) {
    this.elem.c[0] = val
  }

  get content () {
    return this.elem.c[1]
  }

  set content (val: Array<t.Inline>) {
    this.elem.c[1] = val
  }
}

export class Code extends HasAttr {
  elem: t.Code
  constructor (elem: t.Code) {
    super()
    this.elem = elem
  }

  get attr () {
    return this.elem.c[0]
  }

  set attr (val: t.Attr) {
    this.elem.c[0] = val
  }

  get text () {
    return this.elem.c[1]
  }

  set text (val: string) {
    this.elem.c[1] = val
  }
}

export class Emph {
  elem: t.Emph
  constructor (elem: t.Emph) {
    this.elem = elem
  }

  get content () {
    return this.elem.c
  }

  set content (val: Array<t.Inline>) {
    this.elem.c = val
  }
}

export class Image extends HasAttr {
  elem: t.Image
  constructor (elem: t.Image) {
    super()
    this.elem = elem
  }

  get attr () {
    return this.elem.c[0]
  }

  set attr (val: t.Attr) {
    this.elem.c[0] = val
  }

  get caption () {
    return this.elem.c[1]
  }

  set caption (val: Array<t.Inline>) {
    this.elem.c[1] = val
  }

  get src () {
    return this.elem.c[2][0]
  }

  set src (val: string) {
    this.elem.c[2][0] = val
  }

  get title () {
    return this.elem.c[2][1]
  }

  set title (val: string) {
    this.elem.c[2][1] = val
  }
}

export class LineBreak {
  elem: t.LineBreak
  constructor (elem: t.LineBreak) {
    this.elem = elem
  }
}

export class Link extends HasAttr {
  elem: t.Link
  constructor (elem: t.Link) {
    super()
    this.elem = elem
  }

  get attr () {
    return this.elem.c[0]
  }

  set attr (val: t.Attr) {
    this.elem.c[0] = val
  }

  get content () {
    return this.elem.c[1]
  }

  set content (val: Array<t.Inline>) {
    this.elem.c[1] = val
  }

  get src () {
    return this.elem.c[2][0]
  }

  set src (val: string) {
    this.elem.c[2][0] = val
  }

  get title () {
    return this.elem.c[2][1]
  }

  set title (val: string) {
    this.elem.c[2][1] = val
  }
}

export class Math {
  elem: t.Math
  constructor (elem: t.Math) {
    this.elem = elem
  }

  get mathtype (): t.MathType {
    const _type = this.elem.c[0].t
    return t.MathType[_type as keyof typeof t.MathType]
  }

  set mathtype (val: t.MathType) {
    this.elem.c[0].t = t.MathType[val]
  }

  get text () {
    return this.elem.c[1]
  }

  set text (val: string) {
    this.elem.c[1] = val
  }
}

export class Note {
  elem: t.Note
  constructor (elem: t.Note) {
    this.elem = elem
  }

  get content () {
    return this.elem.c
  }

  set content (val: Array<t.Block>) {
    this.elem.c = val
  }
}

export class Quoted {
  elem: t.Quoted
  constructor (elem: t.Quoted) {
    this.elem = elem
  }

  get quotetype (): t.QuoteType {
    const _type = this.elem.c[0].t
    return t.QuoteType[_type as keyof typeof t.QuoteType]
  }

  set quotetype (val: t.QuoteType) {
    this.elem.c[0].t = t.QuoteType[val]
  }

  get content () {
    return this.elem.c[1]
  }

  set content (val: Array<t.Inline>) {
    this.elem.c[1] = val
  }
}

export class RawInline {
  elem: t.RawInline
  constructor (elem: t.RawInline) {
    this.elem = elem
  }

  get format () {
    return this.elem.c[0]
  }

  set format (val: string) {
    this.elem.c[0] = val
  }

  get text () {
    return this.elem.c[1]
  }

  set text (val: string) {
    this.elem.c[1] = val
  }
}

export class SmallCaps {
  elem: t.SmallCaps
  constructor (elem: t.SmallCaps) {
    this.elem = elem
  }

  get content () {
    return this.elem.c
  }

  set content (val: Array<t.Inline>) {
    this.elem.c = val
  }
}

export class SoftBreak {
  elem: t.SoftBreak
  constructor (elem: t.SoftBreak) {
    this.elem = elem
  }
}

export class Space {
  elem: t.Space
  constructor (elem: t.Space) {
    this.elem = elem
  }
}

export class Span extends HasAttr {
  elem: t.Span
  constructor (elem: t.Span) {
    super()
    this.elem = elem
  }

  get attr () {
    return this.elem.c[0]
  }

  set attr (val: t.Attr) {
    this.elem.c[0] = val
  }

  get content () {
    return this.elem.c[1]
  }

  set content (val: Array<t.Inline>) {
    this.elem.c[1] = val
  }
}

export class Str {
  elem: t.Str
  constructor (elem: t.Str) {
    this.elem = elem
  }

  get text () {
    return this.elem.c
  }

  set text (val: string) {
    this.elem.c = val
  }
}

export class Strikeout {
  elem: t.Strikeout
  constructor (elem: t.Strikeout) {
    this.elem = elem
  }

  get content () {
    return this.elem.c
  }

  set content (val: Array<t.Inline>) {
    this.elem.c = val
  }
}

export class Strong {
  elem: t.Strong
  constructor (elem: t.Strong) {
    this.elem = elem
  }

  get content () {
    return this.elem.c
  }

  set content (val: Array<t.Inline>) {
    this.elem.c = val
  }
}

export class Subscript {
  elem: t.Subscript
  constructor (elem: t.Subscript) {
    this.elem = elem
  }

  get content () {
    return this.elem.c
  }

  set content (val: Array<t.Inline>) {
    this.elem.c = val
  }
}

export class Superscript {
  elem: t.Superscript
  constructor (elem: t.Superscript) {
    this.elem = elem
  }

  get content () {
    return this.elem.c
  }

  set content (val: Array<t.Inline>) {
    this.elem.c = val
  }
}

export class Underline {
  elem: t.Underline
  constructor (elem: t.Underline) {
    this.elem = elem
  }

  get content () {
    return this.elem.c
  }

  set content (val: Array<t.Inline>) {
    this.elem.c = val
  }
}

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

export type Elem = Block | Inline
