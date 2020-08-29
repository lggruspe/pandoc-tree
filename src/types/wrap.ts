import * as t from './elems.js'

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

export class CodeBlock {
  elem: t.CodeBlock
  constructor (elem: t.CodeBlock) {
    this.elem = elem
  }

  // TODO attr

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

export class Div {
  elem: t.Div
  constructor (elem: t.Div) {
    this.elem = elem
  }

  // TODO attr

  get content () {
    return this.elem.c[1]
  }

  set content (val: Array<t.Block>) {
    this.elem.c[1] = val
  }
}

export class Header {
  elem: t.Header
  constructor (elem: t.Header) {
    this.elem = elem
  }

  // TODO attr
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

  // TODO listAttributes
  get content () {
    return this.elem.c[1]
  }

  set content (val: Array<Array<t.Block>>) {
    this.elem.c[1] = val
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

  // TODO set citations?
  get content () {
    return this.elem.c[1]
  }

  set content (val: Array<t.Inline>) {
    this.elem.c[1] = val
  }
}

export class Code {
  elem: t.Code
  constructor (elem: t.Code) {
    this.elem = elem
  }

  // TODO attr
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

export class Image {
  elem: t.Image
  constructor (elem: t.Image) {
    this.elem = elem
  }

  // TODO attr, set caption?
  get caption () {
    return this.elem.c[1]
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

export class Link {
  elem: t.Link
  constructor (elem: t.Link) {
    this.elem = elem
  }

  // TODO attr
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

export class Span {
  elem: t.Span
  constructor (elem: t.Span) {
    this.elem = elem
  }

  // TODO attr
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
