import * as f from '../filter.js'
import * as t from '../types.js'
import * as w from '../walk.js'

export function BlockQuote (elem: t.BlockQuote, fns: f.FilterSet): f.BlockResult {
  elem.c = w.walkBlocks(elem.c, fns)
  return fns.BlockQuote ? fns.BlockQuote(elem) : elem
}

export function BulletList (elem: t.BulletList, fns: f.FilterSet): f.BlockResult {
  elem.c = elem.c.map(blocks => w.walkBlocks(blocks, fns))
  return fns.BulletList ? fns.BulletList(elem) : elem
}

export function CodeBlock (elem: t.CodeBlock, fns: f.FilterSet): f.BlockResult {
  return fns.CodeBlock ? fns.CodeBlock(elem) : elem
}

export function DefinitionList (elem: t.DefinitionList, fns: f.FilterSet): f.BlockResult {
  elem.c = elem.c.map(item => {
    const [inlines, blocksList] = item
    return [
      w.walkInlines(inlines, fns),
      blocksList.map(blocks => w.walkBlocks(blocks, fns))
    ]
  })
  return fns.DefinitionList ? fns.DefinitionList(elem) : elem
}

export function Div (elem: t.Div, fns: f.FilterSet): f.BlockResult {
  elem.c[1] = w.walkBlocks(elem.c[1], fns)
  return fns.Div ? fns.Div(elem) : elem
}

export function Header (elem: t.Header, fns: f.FilterSet): f.BlockResult {
  elem.c[2] = w.walkInlines(elem.c[2], fns)
  return fns.Header ? fns.Header(elem) : elem
}

export function HorizontalRule (elem: t.HorizontalRule, fns: f.FilterSet): f.BlockResult {
  return fns.HorizontalRule ? fns.HorizontalRule(elem) : elem
}

export function LineBlock (elem: t.LineBlock, fns: f.FilterSet): f.BlockResult {
  elem.c = elem.c.map(inlines => w.walkInlines(inlines, fns))
  return fns.LineBlock ? fns.LineBlock(elem) : elem
}

export function Null (elem: t.Null, fns: f.FilterSet): f.BlockResult {
  return fns.Null ? fns.Null(elem) : elem
}

export function OrderedList (elem: t.OrderedList, fns: f.FilterSet): f.BlockResult {
  elem.c[1] = elem.c[1].map(blocks => w.walkBlocks(blocks, fns))
  return fns.OrderedList ? fns.OrderedList(elem) : elem
}

export function Para (elem: t.Para, fns: f.FilterSet): f.BlockResult {
  elem.c = w.walkInlines(elem.c, fns)
  return fns.Para ? fns.Para(elem) : elem
}

export function Plain (elem: t.Plain, fns: f.FilterSet): f.BlockResult {
  elem.c = w.walkInlines(elem.c, fns)
  return fns.Plain ? fns.Plain(elem) : elem
}

export function RawBlock (elem: t.RawBlock, fns: f.FilterSet): f.BlockResult {
  return fns.RawBlock ? fns.RawBlock(elem) : elem
}

export function Table (elem: t.Table, fns: f.FilterSet): f.BlockResult {
  // TODO
  throw new Error('not implemented')
  // return fns.Table ? fns.Table(elem) : elem
}
