import fs from 'fs-extra'
import type { DefaultTheme } from 'vitepress/types'

// create a file with the given name and content
function createFile(name: string, content: string) {
  fs.writeFileSync(name, content, { encoding: 'utf-8' })
}

const listOfDirectoriesWithFiles: DefaultTheme.SidebarItem[] = [
  {
    // text: 'Accordion (WIP)',
    // link: '/elements/accordion',
  },
]

for (const directory of listOfDirectoriesWithFiles) {
  if (!directory.link || !directory.text)
    continue

  const fileName = directory.link.split('/')[2]
  const path = `./forms/${fileName}.md`
  const content = `---
title: ${directory.text}
description: ${directory.text}
---

# ${directory.text.charAt(0).toUpperCase() + directory.text.slice(1)}

:::warning
Work in progress - this component is not yet ready for use.
:::
`

  createFile(path, content)
}
