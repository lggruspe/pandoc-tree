#!/usr/bin/env node

import {
  create,
  filter as f,
  types as t,
  wrap as w
} from '../src/index.js'

const fns1: f.FilterSet = {
  Str: function (elem) {
    const str = new w.Str(elem)
    str.text = str.text.toUpperCase()
  }
}

fns1.Header = function (elem) {
  console.error(elem)
}

class Fns2 implements f.FilterSet {
  Str (elem: t.Str) {
    return create.Link([elem], '#', 'test title')
  }
}

const fns2 = new Fns2()
f.interact([fns1, fns2])
