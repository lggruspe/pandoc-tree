#!/usr/bin/env node

import * as create from '../create.js'
import { FilterSet, interact } from '../filter.js'
import * as w from '../wrap.js'
import * as t from '../types.js'

const fns1: FilterSet = {
  Str: function (elem) {
    const str = new w.Str(elem)
    str.text = str.text.toUpperCase()
  }
}

fns1.Header = function (elem) {
  console.error(elem)
}

class Fns2 implements FilterSet {
  Str (elem: t.Str) {
    return create.Link([elem], '#', 'test title')
  }
}

const fns2 = new Fns2()
interact([fns1, fns2])
