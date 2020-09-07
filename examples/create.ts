#!/usr/bin/env node

import {
  create,
  filter,
  types
} from '../src/index.js'

const fs: filter.FilterSet = {
  Pandoc: function (doc) {
    const block = (b: types.Block) => doc.blocks.push(b)
    const inline = (i: types.Inline) => doc.blocks.push(create.Para([i]))

    // Test blocks
    block(
      create.BlockQuote([
        create.Para([
          create.Str('a')
        ])
      ])
    )

    block(
      create.BulletList([
        [
          create.Plain([
            create.Str('a')
          ])
        ],
        [
          create.Plain([
            create.Str('b')
          ])
        ]
      ])
    )

    block(create.CodeBlock('a'))

    block(
      create.DefinitionList([
        [
          [
            create.Str('a')
          ],
          [
            [
              create.Plain([
                create.Str('b')
              ])
            ]
          ]
        ],
        [
          [
            create.Str('c')
          ],
          [
            [
              create.Plain([
                create.Str('d')
              ])
            ]
          ]
        ]
      ])
    )

    block(
      create.Div([
        create.Para([
          create.Str('a')
        ])
      ])
    )

    block(
      create.Header(2, [
        create.Str('a')
      ])
    )

    block(create.HorizontalRule())

    // TODO LineBlock

    block(create.Null())

    block(
      create.OrderedList([
        [
          create.Plain([
            create.Str('a')
          ])
        ],
        [
          create.Plain([
            create.Str('b')
          ])
        ]
      ])
    )

    block(
      create.Para([
        create.Str('a')
      ])
    )

    block(
      create.Plain([
        create.Str('a')
      ])
    )

    block(create.RawBlock('html', '<p>a</p>'))

    // TODO Table

    // Test inlines

    // TODO Cite

    inline(create.Code('a'))

    inline(
      create.Emph([
        create.Str('a')
      ])
    )

    inline(
      create.Image(
        [
          create.Str('a')
        ],
        'b',
        'c'
      )
    )

    inline(create.LineBreak())

    inline(
      create.Link(
        [
          create.Str('a')
        ],
        'b',
        'c'
      )
    )

    inline(create.Math(types.MathType.InlineMath, 'a'))
    inline(create.Math(types.MathType.DisplayMath, 'a'))

    inline(
      create.Note([
        create.Para([
          create.Str('a')
        ])
      ])
    )

    inline(
      create.Quoted(
        types.QuoteType.SingleQuote,
        [
          create.Str('a')
        ]
      )
    )
    inline(
      create.Quoted(
        types.QuoteType.DoubleQuote,
        [
          create.Str('a')
        ]
      )
    )

    inline(create.RawInline('html', '<p>a</p>'))

    inline(
      create.SmallCaps([
        create.Str('a')
      ])
    )

    inline(create.SoftBreak())
    inline(create.Space())

    inline(
      create.Span([
        create.Str('a')
      ])
    )

    inline(create.Str('a'))

    inline(
      create.Strikeout([
        create.Str('a')
      ])
    )
    inline(
      create.Strong([
        create.Str('a')
      ])
    )
    inline(
      create.Superscript([
        create.Str('a')
      ])
    )
    inline(
      create.Subscript([
        create.Str('a')
      ])
    )
    inline(
      create.Underline([
        create.Str('a')
      ])
    )
    return doc
  }
}

filter.interact([fs])
