import { strict as assert } from 'assert'

function interact (filter) {
    const chunks = []
    const readable = process.stdin
    readable.on('readable', () => {
        for (;;) {
            let chunk = readable.read()
            if (chunk == null) break
            chunks.push(chunk)
        }
    })
    readable.on('end', () => {
        const content = chunks.join('')
        const doc = JSON.parse(content)
        const output = applyFilter(doc, filter)
        console.log(JSON.stringify(output))
    })
}

function apply (elem, filter) {
    assert(elem != null)
    assert(typeof elem.t === 'string')
    const f = filter[elem.t]
    if (!f) return elem
    const output = f(elem)
    return output || elem
}

function walkAll (elems, filter) {
    assert(elems instanceof Array)

    let i = 0
    while (i < elems.length) {
        const elem = elems[i]
        const output = walk(elem, filter)
        if (output instanceof Array) {
            elems.splice(i, 1, ...output)
            i += output.length
        } else {
            elems[i] = output
            i++
        }
    }
    return elems
}

function walk (elem, filter) {
    assert(elem != null)
    assert(typeof elem.t === 'string')

    switch (elem.t) {
        // MetaValues
        case 'MetaMap': {
            walk(elem.c[2], filter)
            return apply(elem, filter)
        }
        case 'MetaList': {
            walkAll(elem.c, filter)
            return apply(elem, filter)
        }
        case 'MetaBool':
        case 'MetaString': {
            return apply(elem, filter)
        }
        case 'MetaInlines':
        case 'MetaBlocks': {
            walkAll(elem.c, filter)
            return apply(elem, filter)
        }

        // Blocks
        case 'Plain':
        case 'Para': {
            walkAll(elem.c, filter)
            return apply(elem, filter)
        }
        case 'LineBlock': {
            for (const list of elem.c[0]) {
                walkAll(list, filter)
            }
            return apply(elem, filter)
        }
        case 'CodeBlock':
        case 'RawBlock':
            return apply(elem, filter)
        case 'BlockQuote': {
            walkAll(elem.c, filter)
            return apply(elem, filter)
        }
        case 'OrderedList': {
            for (const list of elem.c[1]) {
                walkAll(list, filter)
            }
            return apply(elem, filter)
        }
        case 'BulletList': {
            for (const list of elem.c[0]) {
                walkAll(list, filter)
            }
            return apply(elem, filter)
        }
        case 'DefinitionList': {
            for (const [inlines, blocks] of elem.c) {
                walkAll(inlines, filter)
                for (const block of blocks) {
                    walkAll(block, filter)
                }
                return apply(elem, filter)
            }
            return apply(elem, filter)
        }
        case 'Header': {
            walkAll(elem.c[2], filter)
            return apply(elem, filter)
        }
        case 'HorizontalRule':
            return apply(elem, filter)
        case 'Table': {
            return apply(elem, filter)
        }
        case 'Div': {
            walkAll(elem.c[1], filter)
            return apply(elem, filter)
        }
        case 'Null':
            return apply(elem, filter)

        // Inlines
        case 'Str':
            return apply(elem, filter)
        case 'Emph':
        case 'Underline':
        case 'Strong':
        case 'Strikeout':
        case 'Superscript':
        case 'Subscript':
        case 'SmallCaps': {
            walkAll(elem.c, filter)
            return apply(elem, filter)
        }
        case 'Quoted': {
            walkAll(elem.c)
            return apply(elem, filter)
        }
        case 'Cite': {
            walkAll(elem.c[0], filter)
            walkAll(elem.c[1], filter)
            return apply(elem, filter)
        }
        case 'Code':
        case 'Space':
        case 'SoftBreak':
        case 'LineBreak':
        case 'Math':
        case 'RawInline':
            return apply(elem, filter)
        case 'Link':
        case 'Image': {
            walkAll(elem.c[1], filter)
            return apply(elem, filter)
        }
        case 'Note': {
            walkAll(elem.c, filter)
            return apply(elem, filter)
        }
        case 'Span': {
            walkAll(elem.c[1], filter)
            return apply(elem, filter)
        }

        default: // invalid tag
    }
}

function applyFilter (doc, filter) {
    walkAll(doc.blocks, filter)
    for (const m of Object.values(doc.meta)) {
        walk(m, filter)
    }
    return doc
}

export {
    applyFilter,
    interact,
}
