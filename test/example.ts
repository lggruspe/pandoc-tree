#!/usr/bin/env node

import * as create from '../src/create'
import { FilterSet, interact } from '../src/filter'
import * as w from '../src/wrap'
import * as t from '../src/types'

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
