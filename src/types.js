import { strict as assert } from 'assert'

function json (tag, content) {
    return {
        t: tag,
        c: content
    }
}

class Attr {
    constructor (identifier = '', classes = [], attributes = []) {
        assert(typeof identifier === 'string')
        assert(classes instanceof Array)
        assert(attributes instanceof Array)
        this.identifier = identifier
        this.classes = classes // list of strings
        this.attributes = attributes // table/list of key-values (both strings)
    }

    get json () {
       return [
            this.identifier,
            this.classes,
            this.attributes
        ]
    }
}

class Citation {
    constructor (id, mode, prefix, suffix, note_num, hash) {
        // TODO default args?
        assert(typeof id === 'string')
        assert(typeof note_num === 'number')
        assert(typeof hash === 'number')
        this.id = id
        this.mode = mode // citation mode?
        this.prefix = prefix // list of Inlines?
        this.suffix = suffix // list of Inlines?
        this.note_num = note_num
        this.hash = hash
    }

    get json () {
        const content = [
            this.id,
            this.prefix.map(inline => inline.json),
            this.suffix.map(inline => inline.json),
            this.mode,
            this.note_num,
            this.hash
        ]
        return json('Citation', content)
    }
}

class ListAttributes {
    constructor (start = 1, style = 'DefaultStyle', delimiter = 'DefaultDelim') {
        assert(typeof start === 'number')
        assert(typeof style === 'string')
        assert(typeof delimeter === 'string')
        this.start = start
        this.style = style
        this.delimiter = delimiter
    }
}

// Blocks

class BlockQuote {
    constructor (content) {
        // content: list of Blocks
        assert(content instanceof Array)
        this.content = content
    }

    get json() {
        const content = this.content.map(block => block.json)
        return json('BlockQuote', content)
    }
}

class BulletList {
    constructor (content) {
        // content: list of list of Blocks
        assert(content instanceof Array)
        this.content = content
    }

    get json() {
        const content = this.content.map(list => list.map(block => block.json))
        return json('BulletList', content)
    }
}

class CodeBlock {
    constructor (text, attr = new Attr()) {
        assert(attr instanceof Attr)
        assert(typeof text === 'string')
        this.text = text
        this.attr = attr
    }

    get identifier () {
        return this.attr.identifier
    }

    set identifier (id) {
        assert(typeof id === 'string')
        this.attr.identifier = id
    }

    get classes () {
        return this.attr.classes
    }

    get attributes () {
        return this.attr.attributes
    }

    get json() {
        return json('CodeBlock', [this.attr.json, this.text])
    }
}

class DefinitionList {
    constructor (content) {
        assert(content instanceof Array)
        this.content = content // ???
    }

    get json() {
        // TODO
        return json('DefinitionList')
    }
}

class Div {
    constructor (content, attr = new Attr()) {
        assert(content instanceof Array)
        assert(attr instanceof Attr)
        this.content // list of Blocks
        this.attr = attr
    }

    get identifier () {
        return this.attr.identifier
    }

    set identifier (id) {
        assert(typeof id === 'string')
        this.attr.identifier = id
    }

    get classes () {
        return this.attr.classes
    }

    get attributes() {
        return this.attr.attributes
    }

    get json () {
        const content = this.content.map(block => block.json)
        return json('Div', content)
    }
}

class Header {
    constructor (level, content, attr = new Attr()) {
        assert(typeof level === 'number')
        assert(content instanceof Array)
        assert(attr instanceof Attr)
        this.level = level
        this.content = content // list of Inlines
        this.attr = attr
    }

    get identifier () {
        return this.attr.identifier
    }

    set identifier (id) {
        assert(typeof id === 'string')
        this.attr.identifier = id
    }

    get classes () {
        return this.attr.classes
    }

    get attributes () {
        return this.attr.attributes
    }

    get json() {
        const content = [
            this.level,
            this.attr.json,
            this.content.map(inline => inline.json)
        ]
        return json('Header', content)
    }
}

class HorizontalRule {
    get json() {
        return json('HorizontalRule')
    }
}

class LineBlock {
    constructor (content) {
        this.content = content // inline content???
    }

    get json () {
        const content = this.content.map(list => list.map(inline => inline.json))
        return json('LineBlock', content)
    }
}

class Null {
    get json () {
        return json('Null')
    }
}

class OrderedList {
    constructor (items, listAttributes = ListAttributes()) {
        assert(items instanceof Array)
        assert(listAttributes instanceof ListAttributes)
        this.items = items // list of list of Blocks
        this.listAttributes = listAttributes
    }

    get start () {
        return this.listAttributes.start
    }

    set start (start) {
        assert(typeof start === 'number')
        this.listAttributes.start = start
    }

    get style () {
        return this.listAttributes.style
    }

    set style (style) {
        assert(typeof style === 'string')
        this.listAttributes.style = style
    }

    get delimiter () {
        return this.listAttributes.delimiter
    }

    set delimiter (delim) {
        assert(typeof delim === 'string')
        this.listAttributes.delimiter = delim
    }

    get json () {
        const content = [
            this.listAttributes.json,
            this.content.map(list => list.map(block => block.json))
        ]
        return json('OrderedList', content)
    }
}

class Para {
    constructor (content) {
        assert(content instanceof Array)
        this.content = content // list of Inlines
    }

    get json () {
        return json('Para', this.content.map(inline => inline.json))
    }
}

class Plain {
    constructor (content) {
        assert(content instanceof Array)
        this.content = content // list of Inlines
    }

    get json () {
        return json('Plain', this.content.map(inline => inline.json))
    }
}

class RawBlock {
    constructor (format, text) {
        assert(typeof format === 'string')
        assert(typeof text === 'string')
        this.format = format
        this.text = text
    }

    get json () {
        return json('RawBlock', [this.format, this.text])
    }
}

class Table {
    constructor (caption, aligns, widths, headers, rows) {
        assert(caption instanceof Array)
        assert(aligns instanceof Array)
        assert(widths instanceof widths)
        assert(headers instanceof Array)
        assert(rows instanceof Array)
        this.caption = caption // list of Inlines
        this.aligns = aligns // list of Alignments
        this.widths = widths
        this.headers = headers // list of table cells
        this.rows = rows // list of lists of table cells
    }

    get json () {
        // TODO
        return json('Table')
    }
}

// Inlines

class Cite {
    constructor (content, citations) {
        assert(content instanceof Array)
        assert(citations instanceof Array)
        this.content = content // list of Inlines
        this.citations = citations // list of Citations
    }

    get json () {
        const content = [
            this.citations.map(cite => cite.json),
            this.content.map(inline => inline.json)
        ]
        return json('Cite', content)
    }
}

class Code {
    constructor (text, attr = new Attr()) {
        assert(typeof text === 'string')
        assert(attr instanceof Attr)
        this.text = text
        this.attr = attr
    }

    get identifier () {
        return this.attr.identifier
    }

    set identifier (id) {
        assert(typeof id === 'string')
        this.attr.identifier = id
    }

    get classes () {
        return this.attr.classes
    }

    get attributes () {
        return this.attr.attributes
    }

    get json () {
        return json('Code', [this.attr.json, this.text])
    }
}

class Emph {
    constructor (content) {
        assert(content instanceof Array)
        this.content = content // list of Inlines
    }

    get json () {
        return json('Emph', this.content.map(inline => inline.json))
    }
}

class Image {
    constructor (caption, src, title = '', attr = new Attr()) {
        assert(caption instanceof Array)
        assert(attr instanceof Attr)
        assert(typeof src === 'string')
        this.caption = caption // list of Inlines
        this.src = src
        this.title = title // string???
        this.attr = attr
    }

    get identifier () {
        return this.attr.identifier
    }

    set identifier (id) {
        assert(typeof id === 'string')
        this.attr.identifier = id
    }

    get classes () {
        return this.attr.classes
    }

    get attributes () {
        return this.attr.attributes
    }

    get json () {
        const content = [
            this.attr.json,
            this.caption.map(inline => inline.json),
            this.src,
        ]
        return json('Image', content)
    }
}

class LineBreak {
    get json () {
        return json('LineBreak')
    }
}

class Link {
    constructor (content, target, title = '', attr = new Attr()) {
        assert(attr instanceof Attr)
        assert(content instanceof Array)
        assert(typeof target === 'string')
        this.content = content // list of Inlines
        this.target = target
        this.title = title // string??? TODO put in json
        this.attr = attr
    }

    get identifier () {
        return this.attr.identifier
    }

    set identifier (id) {
        assert(typeof id === 'string')
        this.attr.identifier = id
    }

    get classes () {
        return this.attr.classes
    }

    get attributes () {
        return this.attr.attributes
    }

    get json () {
        const content = [
            this.attr.json,
            this.content.map(inline => inline.json),
            [
                this.target,
                this.title
            ]
        ]
        return json('Link', content)
    }
}

class Math {
    constructor (mathtype, text) {
        assert(typeof mathtype === 'string')
        assert(typeof text === 'string')
        this.mathtype = mathtype
        this.text = text
    }

    get json () {
        return json('Math', [this.mathtype, this.text])
    }
}

class Note {
    constructor (content) {
        assert(content instanceof Array)
        this.content = content // list of Blocks
    }

    get json () {
        return json('Note', this.content.map(block => block.json))
    }
}

class Quoted {
    constructor (quotetype, content) {
        assert(typeof quotetype === 'string')
        assert(content instanceof Array)
        this.quotetype = quotetype
        this.content = content // list of Inlines
    }

    get json () {
        const content = [
            this.quotetype,
            this.content.map(inline => inline.json)
        ]
        return json('Quoted', content)
    }
}

class RawInline {
    constructor (format, text) {
        assert(typeof format === 'string')
        assert(typeof text === 'string')
        this.format = format
        this.text = text
    }

    get json () {
        return json('RawInline', [this.format, this.text])
    }
}

class SmallCaps {
    constructor (content) {
        assert(content instanceof Array)
        this.content = content // list of Inlines
    }

    get json () {
        return json('SmallCaps', this.content.map(inline => inline.json))
    }
}

class SoftBreak {
    get json () {
        return json('SoftBreak')
    }
}

class Space {
    get json () {
        return json('Space')
    }
}

class Span {
    constructor (content, attr = new Attr()) {
        assert(attr instanceof Attr)
        assert(content instanceof Array)
        this.content = content // list of Inlines
        this.attr = attr
    }

    get identifier () {
        return this.attr.identifier
    }

    set identifier (id) {
        assert(typeof id === 'string')
        this.attr.identifier = id
    }

    get classes () {
        return this.attr.classes
    }

    get attributes () {
        return this.attr.attributes
    }

    get json () {
        const content = [
            this.attr.json,
            this.content.map(inline => inline.json)
        ]
        return json('Span', content)
    }
}

class Str {
    constructor (text) {
        assert(typeof text === 'string')
        this.text = text
    }

    get json () {
        return json('Str', this.text)
    }

    static from (object) {
        assert(object.t === 'Str')
        return new Str(object.c)
    }
}

class Strikeout {
    constructor (content) {
        assert(content instanceof Array)
        this.content = content // list of Inlines
    }

    get json () {
        return json('Strikeout', this.content.map(inline => inline.json))
    }
}

class Strong {
    constructor (content) {
        assert(content instanceof Array)
        this.content = content // list of Inlines
    }

    get json () {
        return json('Strong', this.content.map(inline => inline.json))
    }
}

class Subscript {
    constructor (content) {
        assert(content instanceof Array)
        this.content = content // list of Inlines
    }

    get json () {
        return json('Subscript', this.content.map(inline => inline.json))
    }
}

class Superscript {
    constructor (content) {
        assert(content instanceof Array)
        this.content = content // list of Inlines
    }

    get json () {
        return json('Superscript', this.content.map(inline => inline.json))
    }
}

export {
    Attr,
    Citation,
    ListAttributes,

    BlockQuote,
    BulletList,
    CodeBlock,
    DefinitionList,
    Div,
    Header,
    HorizontalRule,
    LineBlock,
    Null,
    OrderedList,
    Para,
    Plain,
    RawBlock,
    Table,

    Cite,
    Code,
    Emph,
    Image,
    LineBreak,
    Link,
    Math,
    Note,
    Quoted,
    RawInline,
    SmallCaps,
    SoftBreak,
    Space,
    Span,
    Str,
    Strikeout,
    Strong,
    Subscript,
    Superscript,
}
