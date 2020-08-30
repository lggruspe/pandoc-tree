import { FilterSet } from './filter.js'
import * as t from './types.js'
import { applyFilter } from './walk.js'

export function interact (filter: Array<FilterSet>) {
  const chunks: Array<string> = []
  const readable = process.stdin
  readable.on('readable', () => {
    for (;;) {
      const chunk = readable.read()
      if (chunk == null) break
      chunks.push(chunk)
    }
  })
  readable.on('end', () => {
    const content = chunks.join('')
    let doc = JSON.parse(content)
    doc = applyFilter(doc, filter)
    console.log(JSON.stringify(doc))
  })
}
