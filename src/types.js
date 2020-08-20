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

    static from (object) {
        assert(object instanceof Array)
        assert(object.length === 3)
        return new Attr(...object)
    }
}

class Citation {
    constructor (id, mode, prefix, suffix, note_num, hash) {
        // TODO default args?
        assert(typeof id === 'string')
        assert(typeof note_num === 'number')
        assert(typeof hash === 'number')
        assert(typeof mode === 'string')
        this.id = id
        this.mode = mode // citation mode
        this.prefix = prefix // list of Inlines?
        this.suffix = suffix // list of Inlines?
        this.note_num = note_num
        this.hash = hash
    }

    get json () {
        return {
            citationId: this.id,
            citationPrefix: this.prefix.map(inline => inline.json),
            citationSuffix: this.suffix.map(inline => inline.json),
            citationMode: { t: this.mode },
            citationNoteNum: this.note_num,
            citationHash: this.hash
        }
    }

    static from (object) {
        assert(typeof object === 'object')
        return new Citation(
            object.citationId,
            object.citationMode.t,
            object.citationPrefix,
            object.citationSuffix,
            object.citationNoteNum,
            object.citationHash
        )
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

    get json () {
        return [
            this.start,
            {t: this.style},
            {t: this.delimiter}
        ]
    }

    static from (object) {
        assert(object instanceof Array)
        assert(object.length === 3)
        const [start, {t: style}, {t: delimiter}] = object
        return new ListAttributes(start, style, delimiter)
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

    static from (object) {
        assert(object.t === 'BlockQuote')
        return new BlockQuote(object.c.map(fromJSON))
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

    static from (object) {
        assert(object.t === 'BulletList')
        return new BulletList(object.c.map(fromJSON))
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

    static from (object) {
        assert(object.t === 'CodeBlock')
        assert(object.c instanceof Array)
        assert(object.c.length() === 2)
        const [attr, text] = object.c
        return new CodeBlock(text, Attr.from(attr))
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

    static from (object) {
        // TODO
        assert(object.t === 'DefinitionList')
        return new DefinitionList(object.c.fromJSON)
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

    static from (object) {
        assert(object.t === 'Div')
        assert(object.c instanceof Array)
        assert(object.c.length === 2)
        const [attr, content] = object.c
        return new Div(content.map(fromJSON), Attr.from(attr))
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

    static from (object) {
        assert(object.t === 'Header')
        assert(object.c instanceof Array)
        assert(object.c.length === 3)
        const [level, attr, content] = object.c
        return new Header(level, content.map(fromJSON), Attr.from(attr))
    }
}

class HorizontalRule {
    get json() {
        return json('HorizontalRule')
    }

    static from (object) {
        assert(object.t === 'HorizontalRule')
        return new HorizontalRule()
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

    static from (object) {
        assert(object.t === 'LineBlock')
        return new LineBlock(object.c.map(fromJSON))
    }
}

class Null {
    get json () {
        return json('Null')
    }

    static from (object) {
        assert(object.t === 'Null')
        return new Null()
    }
}

class OrderedList {
    constructor (items, listAttributes = new ListAttributes()) {
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

    static from (object) {
        assert(object.t === 'OrderedList')
        assert(object.c instanceof Array)
        assert(object.c.length === 2)
        const [listAttributes, items] = object.c
        return new OrderedList(items.map(list => list.map(fromJSON)), ListAttributes.from(listAttributes))
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

    static from (object) {
        assert(object.t === 'Para')
        return new Para(object.c.map(fromJSON))
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

    static from (object) {
        assert(object.t === 'Plain')
        return new Plain(object.c.map(fromJSON))
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

    static from (object) {
        assert(object.t === 'RawBlock')
        return new RawBlock(...object.c)
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

    static from (object) {
        // TODO
        assert(object.t === 'Table')
        return new Table()
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

    static from (object) {
        assert(object.t === 'Cite')
        assert(object.c instanceof Array)
        assert(object.c.length === 2)
        const [citations, content] = object.c
        return new Cite(content.map(fromJSON), citations.map(c => Citation.from(c)))
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

    static from (object) {
        assert(object.t === 'Code')
        assert(object.c instanceof Array)
        assert(object.c.length === 2)
        const [attr, text] = object.c
        return new Code(text, Attr.from(attr))
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

    static from (object) {
        assert(object.t === 'Emph')
        return new Emph(object.c.map(fromJSON))
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
            [
                this.src,
                this.title
            ]
        ]
        return json('Image', content)
    }

    static from (object) {
        assert(object.t === 'Image')
        assert(object.c instanceof Array)
        assert(object.c.length === 3)
        const [attr, caption, target] = object.c
        const [src, title] = target
        return new Image(caption.map(fromJSON), src, title, Attr.from(attr))
    }
}

class LineBreak {
    get json () {
        return json('LineBreak')
    }

    static from (object) {
        assert(object.t === 'LineBreak')
        return new LineBreak()
    }
}

class Link {
    constructor (content, target, title = '', attr = new Attr()) {
        assert(attr instanceof Attr)
        assert(content instanceof Array)
        assert(typeof target === 'string')
        this.content = content // list of Inlines
        this.target = target
        this.title = title // string?
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

    static from (object) {
        assert(object.t === 'Link')
        assert(object.c instanceof Array)
        assert(object.c.length === 3)
        const [attr, content, target] = object.c
        const [src, title] = target
        return new Link(content.map(fromJSON), src, title, Attr.from(attr))
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

    static from (object) {
        assert(object.t === 'Math')
        return new Math(...object.c)
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

    static from (object) {
        assert(object.t === 'Note')
        return new Note(object.c.map(fromJSON))
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
            {
                t: this.quotetype,
            },
            this.content.map(inline => inline.json)
        ]
        return json('Quoted', content)
    }

    static from (object) {
        assert(object.t === 'Quoted')
        const [{t: quotetype}, content] = object.c
        return new Quoted(quotetype, content.map(fromJSON))
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

    static from (object) {
        assert(object.t === 'RawInline')
        return new RawInline(...object.c)
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

    static from (object) {
        assert(object.t === 'SmallCaps')
        return new SmallCaps(object.c.map(fromJSON))
    }
}

class SoftBreak {
    get json () {
        return json('SoftBreak')
    }

    static from (object) {
        assert(object.t === 'SoftBreak')
        return new SoftBreak()
    }
}

class Space {
    get json () {
        return json('Space')
    }

    static from (object) {
        assert(object.t === 'Space')
        return new Space()
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

    static from (object) {
        assert(object.t === 'Span')
        const [attr, content] = object.c
        return new Span(content.map(fromJSON), Attr.from(attr))
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

    static from (object) {
        assert(object.t === 'Strikeout')
        return new Strikeout(object.c.map(fromJSON))
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

    static from (object) {
        assert(object.t === 'Strong')
        return new Strong(object.c.map(fromJSON))
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

    static from (object) {
        assert(object.t === 'Subscript')
        return new Subscript(object.c.map(fromJSON))
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

    static from (object) {
        assert(object.t === 'Superscript')
        return new Superscript(object.c.map(fromJSON))
    }
}

function fromJSON (object) {
    assert(typeof object === 'object')
    assert(typeof object.t === 'string')
    switch (object.t) {
        case 'BlockQuote': return BlockQuote.from(object)
        case 'BulletList': return BulletList.from(object)
        case 'CodeBlock': return CodeBlock.from(object)
        case 'DefinitionList': return DefinitionList.from(object)
        case 'Div': return Div.from(object)
        case 'Header': return Header.from(object)
        case 'HorizontalRule': return HorizontalRule.from(object)
        case 'LineBlock': return LineBlock.from(object)
        case 'Null': return Null.from(object)
        case 'OrderedList': return OrderedList.from(object)
        case 'Para': return Para.from(object)
        case 'Plain': return Plain.from(object)
        case 'RawBlock': return RawBlock.from(object)
        case 'Table': return Table.from(object)
        case 'Cite': return Cite.from(object)
        case 'Code': return Code.from(object)
        case 'Emph': return Emph.from(object)
        case 'Image': return Image.from(object)
        case 'LineBreak': return LineBreak.from(object)
        case 'Link': return Link.from(object)
        case 'Math': return Math.from(object)
        case 'Note': return Note.from(object)
        case 'Quoted': return Quoted.from(object)
        case 'RawInline': return RawInline.from(object)
        case 'SmallCaps': return SmallCaps.from(object)
        case 'SoftBreak': return SoftBreak.from(object)
        case 'Space': return Space.from(object)
        case 'Span': return Span.from(object)
        case 'Str': return Str.from(object)
        case 'Strikeout': return Strikeout.from(object)
        case 'Strong': return Strong.from(object)
        case 'Subscript': return Subscript.from(object)
        case 'Superscript': return Superscript.from(object)
        default:
            assert(false)
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

    fromJSON
}
