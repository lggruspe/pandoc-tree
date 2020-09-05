#!/usr/bin/env node

import {
  create,
  filter as f,
  get,
  set,
  types as t
} from '../src/index.js'

const fns1: f.FilterSet = {
  Str: function (elem) {
    set.text(elem, get.text(elem).toUpperCase())
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
