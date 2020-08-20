function stringify (elem) {
    if (elem == null) return ''

    switch (elem.t) {
        // TODO MetaValues

        // Blocks
        case 'BlockQuote': {
            const content = elem.c.map(stringify)
            return content.join('') // ???
        }
        case 'BulletList': // TODO
        case 'DefinitionList': // TODO
            return ''
        case 'Div': {
            const content = elem.c[1].map(stringify)
            return content.join('') // ???
        }
        case 'Header': {
            const content = elem.c[2].map(stringify)
            return content.join('') // ???
        }
        case 'HorizontalRule': // TODO
        case 'LineBlock': // TODO
        case 'Null':
            return ''
        case 'OrderedList': // TODO
            return ''
        case 'Para':
        case 'Plain': {
            const content = elem.c.map(stringify)
            return content.join('') // ???
        }
        case 'RawBlock':
            return elem.c[1]
        case 'Table': // TODO
            return ''

        // Inlines
        case 'Cite': {
            const content = elem.c[1].map(stringify)
            return content.join('') // ???
        }
        case 'Code':
            return elem.c[1]
        case 'Emph': {
            const content = elem.c.map(stringify)
            return content.join('') // ???
        }
        case 'Image': // TODO
            return ''
        case 'LineBreak':
            return ' '
        case 'Link': {
            const content = elem.c[1].map(stringify)
            return content.join('') // ???
        }
        case 'Math':
            return elem.c[1]
        case 'Note': {
            const content = elem.c.map(stringify)
            return content.join('') // ???
        }
        case 'Quoted': {
            const content = elem.c[1]
            const q = elem.c[0].t == 'SingleQuote' ? "'" : '"'
            return `${q}${content.join('')}${q}`
        }
        case 'RawInline':
            return elem.c[1]
        case 'SmallCaps': {
            const content = elem.c.map(stringify)
            return content.join('')
        }
        case 'SoftBreak':
        case 'Space':
            return ' '
        case 'Span': {
            const content = elem.c[1].map(stringify)
            return content.join('') // ???
        }
        case 'Str':
            return elem.c
        case 'Strikeout':
        case 'Strong':
        case 'Subscript':
        case 'Superscript': {
            const content = elem.c.map(stringify)
            return content.join('') // ???
        }

        default:
            return ''
    }
}

export {
    stringify
}
