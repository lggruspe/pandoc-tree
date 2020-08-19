#!/usr/bin/env node

import { interact } from './index.js'

const filter = {}

filter.Str = function (elem) {
    console.error(elem.c)
    return elem
}

interact(filter)
