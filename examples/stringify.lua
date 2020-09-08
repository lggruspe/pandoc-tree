local pandoc = require "pandoc"
pandoc.utils = require "pandoc.utils"

local function Pandoc(doc)
  local str = pandoc.Str(pandoc.utils.stringify(doc))
  doc.blocks = {pandoc.Para {str}}
  return doc
end

return {
  { Pandoc = Pandoc }
}
