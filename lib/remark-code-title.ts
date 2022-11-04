// From https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/91a93b6a4a1e17b295f0bcf66da8e86881a43741/lib/remark-code-title.ts
// Suggested here https://github.com/mottox2/remark-code-titles/issues/6
// Due to "Cannot handle unknown node `raw`" MXD compile error

import { Parent } from 'unist'
import { visit } from 'unist-util-visit'

export default function remarkCodeTitles() {
  return (tree: Parent & { lang?: string }) =>
    visit(tree, 'code', (node: Parent & { lang?: string }, index, parent: Parent) => {
      const nodeLang = node.lang || ''
      let language = ''
      let title = ''

      if (nodeLang.includes(':')) {
        language = nodeLang.slice(0, nodeLang.search(':'))
        title = nodeLang.slice(nodeLang.search(':') + 1, nodeLang.length)
      }

      if (!title) {
        return
      }

      const className = 'remark-code-title'

      const titleNode = {
        type: 'mdxJsxFlowElement',
        name: 'div',
        attributes: [{ type: 'mdxJsxAttribute', name: 'className', value: className }],
        children: [{ type: 'text', value: title }],
        data: { _xdmExplicitJsx: true },
      }

      parent.children.splice(index, 0, titleNode)
      node.lang = language
    })
}
