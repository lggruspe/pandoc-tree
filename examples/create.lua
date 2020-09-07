local pandoc = require "pandoc"

local function Pandoc(doc)
  local function block(b)
    table.insert(doc.blocks, b)
  end

  local function inline(i)
    table.insert(doc.blocks, pandoc.Para {i})
  end

  block(pandoc.BlockQuote {
    pandoc.Para {
      pandoc.Str "a"
    }
  })

  block(pandoc.BulletList {
    {
      pandoc.Plain {
        pandoc.Str "a"
      }
    },
    {
      pandoc.Plain {
        pandoc.Str "b"
      }
    }
  })

  block(pandoc.CodeBlock "a")

  block(pandoc.DefinitionList {
    {
      {
        pandoc.Str "a"
      },
      {
        {
          pandoc.Plain {
            pandoc.Str "b"
          }
        }
      }
    },
    {
      {
        pandoc.Str "c"
      },
      {
        {
          pandoc.Plain {
            pandoc.Str "d"
          }
        }
      }
    }
  })

  block(pandoc.Div {
    pandoc.Para {
      pandoc.Str "a"
    }
  })

  block(pandoc.Header(2, {
    pandoc.Str "a"
  }))

  block(pandoc.HorizontalRule())
  block(pandoc.Null())

  block(pandoc.OrderedList {
    {
      pandoc.Plain {
        pandoc.Str "a"
      }
    },
    {
      pandoc.Plain {
        pandoc.Str "b"
      }
    }
  })

  block(pandoc.Para {
    pandoc.Str "a"
  })

  block(pandoc.Plain {
    pandoc.Str "a"
  })

  block(pandoc.RawBlock("html", "<p>a</p>"))

  inline(pandoc.Code "a")
  inline(pandoc.Emph { pandoc.Str "a" })

  inline(pandoc.Image(
    { pandoc.Str "a" },
    "b",
    "c"
  ))

  inline(pandoc.LineBreak())

  inline(pandoc.Link(
    { pandoc.Str "a" },
    "b",
    "c"
  ))

  inline(pandoc.Math("InlineMath", "a"))
  inline(pandoc.Math("DisplayMath", "a"))

  inline(pandoc.Note {
    pandoc.Para { pandoc.Str "a" }
  })

  inline(pandoc.Quoted(
    "SingleQuote",
    { pandoc.Str "a" }
  ))
  inline(pandoc.Quoted(
    "DoubleQuote",
    { pandoc.Str "a" }
  ))

  inline(pandoc.RawInline("html", "<p>a</p>"))
  inline(pandoc.SmallCaps { pandoc.Str "a" })
  inline(pandoc.SoftBreak())
  inline(pandoc.Space())
  inline(pandoc.Span { pandoc.Str "a" })
  inline(pandoc.Str "a")
  inline(pandoc.Strikeout { pandoc.Str "a" })
  inline(pandoc.Strong { pandoc.Str "a" })
  inline(pandoc.Superscript { pandoc.Str "a" })
  inline(pandoc.Subscript { pandoc.Str "a" })
  inline(pandoc.Underline { pandoc.Str "a" })
  return doc
end

return {
  {
    Pandoc = Pandoc
  }
}
