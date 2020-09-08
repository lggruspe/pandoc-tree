#!/usr/bin/env node

import {
  create,
  FilterSet,
  interact,
  utils
} from '../src/index.js'

const fs: FilterSet = {
  Pandoc: function (doc) {
    const str = create.Str(utils.stringify(doc))
    doc.blocks = [create.Para([str])]
    return doc
  }
}

interact([fs])
