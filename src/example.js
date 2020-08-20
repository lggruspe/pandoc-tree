#!/usr/bin/env node

import { Link } from './types.js'
import { interact, toJSONFilter } from './index.js'

const filter = {}

filter.Str = function (elem) {
    return new Link([elem], '#')
}

interact(toJSONFilter(filter))
