import * as f from '../filter.js'
import * as t from '../types.js'
import * as w from '../walk.js'

export function Cite (elem: t.Cite, fns: f.FilterSet): f.InlineResult {
  elem.c[1] = w.walkInlines(elem.c[1], fns)
  return fns.Cite ? fns.Cite(elem) : elem
}

export function Code (elem: t.Code, fns: f.FilterSet): f.InlineResult {
  return fns.Code ? fns.Code(elem) : elem
}

export function Emph (elem: t.Emph, fns: f.FilterSet): f.InlineResult {
  elem.c = w.walkInlines(elem.c, fns)
  return fns.Emph ? fns.Emph(elem) : elem
}

export function Image (elem: t.Image, fns: f.FilterSet): f.InlineResult {
  elem.c[1] = w.walkInlines(elem.c[1], fns)
  return fns.Image ? fns.Image(elem) : elem
}

export function LineBreak (elem: t.LineBreak, fns: f.FilterSet): f.InlineResult {
  return fns.LineBreak ? fns.LineBreak(elem) : elem
}

export function Link (elem: t.Link, fns: f.FilterSet): f.InlineResult {
  elem.c[1] = w.walkInlines(elem.c[1], fns)
  return fns.Link ? fns.Link(elem) : elem
}

export function Math (elem: t.Math, fns: f.FilterSet): f.InlineResult {
  return fns.Math ? fns.Math(elem) : elem
}

export function Note (elem: t.Note, fns: f.FilterSet): f.InlineResult {
  elem.c = w.walkBlocks(elem.c, fns)
  return fns.Note ? fns.Note(elem) : elem
}

export function Quoted (elem: t.Quoted, fns: f.FilterSet): f.InlineResult {
  elem.c[1] = w.walkInlines(elem.c[1], fns)
  return fns.Quoted ? fns.Quoted(elem) : elem
}

export function RawInline (elem: t.RawInline, fns: f.FilterSet): f.InlineResult {
  return fns.RawInline ? fns.RawInline(elem) : elem
}

export function SmallCaps (elem: t.SmallCaps, fns: f.FilterSet): f.InlineResult {
  elem.c = w.walkInlines(elem.c, fns)
  return fns.SmallCaps ? fns.SmallCaps(elem) : elem
}

export function SoftBreak (elem: t.SoftBreak, fns: f.FilterSet): f.InlineResult {
  return fns.SoftBreak ? fns.SoftBreak(elem) : elem
}

export function Space (elem: t.Space, fns: f.FilterSet): f.InlineResult {
  return fns.Space ? fns.Space(elem) : elem
}

export function Span (elem: t.Span, fns: f.FilterSet): f.InlineResult {
  elem.c[1] = w.walkInlines(elem.c[1], fns)
  return fns.Span ? fns.Span(elem) : elem
}

export function Str (elem: t.Str, fns: f.FilterSet): f.InlineResult {
  return fns.Str ? fns.Str(elem) : elem
}

export function Strikeout (elem: t.Strikeout, fns: f.FilterSet): f.InlineResult {
  elem.c = w.walkInlines(elem.c, fns)
  return fns.Strikeout ? fns.Strikeout(elem) : elem
}

export function Strong (elem: t.Strong, fns: f.FilterSet): f.InlineResult {
  elem.c = w.walkInlines(elem.c, fns)
  return fns.Strong ? fns.Strong(elem) : elem
}

export function Subscript (elem: t.Subscript, fns: f.FilterSet): f.InlineResult {
  elem.c = w.walkInlines(elem.c, fns)
  return fns.Subscript ? fns.Subscript(elem) : elem
}

export function Superscript (elem: t.Superscript, fns: f.FilterSet): f.InlineResult {
  elem.c = w.walkInlines(elem.c, fns)
  return fns.Superscript ? fns.Superscript(elem) : elem
}

export function Underline (elem: t.Underline, fns: f.FilterSet): f.InlineResult {
  elem.c = w.walkInlines(elem.c, fns)
  return fns.Underline ? fns.Underline(elem) : elem
}
