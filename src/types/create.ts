import * as t from './elems'

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

export function CodeBlock (attr: t.Attr, text: string): t.CodeBlock {
  return {
    t: 'CodeBlock',
    c: [attr, text]
  }
}

export function DefinitionList (items: Array<[Array<t.Inline>, Array<Array<t.Block>>]>): t.DefinitionList {
  return {
    t: 'DefinitionList',
    c: items
  }
}

export function Div (attr: t.Attr, content: Array<t.Block>): t.Div {
  return {
    t: 'Div',
    c: [attr, content]
  }
}

export function Header (level: number, attr: t.Attr, content: Array<t.Inline>): t.Header {
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

export function OrderedList (listAttributes: t.ListAttributes, content: Array<Array<t.Block>>): t.OrderedList {
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

export function Table (): t.Table {
  throw new Error('Not implemented')
}

// Inlines

export function Cite (citations: Array<t.Citation>, content: Array<t.Inline>): t.Cite {
  return {
    t: 'Cite',
    c: [citations, content]
  }
}

export function Code (attr: t.Attr, text: string): t.Code {
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

export function Image (attr: t.Attr, caption: Array<t.Inline>, src: string, title: string): t.Image {
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

export function Link (attr: t.Attr, content: Array<t.Inline>, src: string, title: string): t.Link {
  return {
    t: 'Link',
    c: [attr, content, [src, title]]
  }
}

export function Math (mathtype: t.MathType, text: string): t.Math {
  return {
    t: 'Math',
    c: [{ t: mathtype }, text]
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
    c: [{ t: quotetype }, content]
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

export function Span (attr: t.Attr, content: Array<t.Inline>): t.Span {
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
