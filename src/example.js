#!/usr/bin/env node

import { Link, Str } from './types.js'
import { interact } from './index.js'

const filter = {}

filter.Str = function (elem) {
    const str = Str.from(elem)
    return new Link([str], '#').json
}

interact(filter)
