import fs from 'fs-extra'
import type { DefaultTheme } from 'vitepress/types'

// create a file with the given name and content
function createFile(name: string, content: string) {
  fs.writeFileSync(name, content, { encoding: 'utf-8' })
}
// create a directory with the given name
function createDirectory(name: string) {
  fs.mkdirSync(name)
}

// just copy a list sidebar items from the config file
const listOfDirectoriesWithFiles: DefaultTheme.SidebarItem[] = [
  {
    text: 'Table (WIP)',
    link: '/data/table',
  },
  {
    text: 'Breadcrumb (WIP)',
    link: '/navigation/breadcrumb',
  },
  {
    text: 'Pagination (WIP)',
    link: '/navigation/pagination',
  },
  {
    text: 'Tabs (WIP)',
    link: '/navigation/tabs',
  },
  {
    text: 'Card (WIP)',
    link: '/layout/card',
  },
  {
    text: 'Divider (WIP)',
    link: '/layout/divider',
  },
  {
    text: 'Skeleton (WIP)',
    link: '/layout/skeleton',
  },
]

// create a file for each sidebar item base on the link and text from the sidebar
for (const directory of listOfDirectoriesWithFiles) {
  if (!directory.link || !directory.text)
    continue

  // create a directory for each sidebar item
  const directoryName = directory.link.split('/')[1]
  if (!fs.existsSync(directoryName))
    createDirectory(directoryName)

  const fileName = directory.link.split('/')[2]
  const path = `./${directoryName}/${fileName}.md`
  const content = `---
title: ${directory.text}
description: 'Work in progress - this component is not yet ready for use.'
---

# ${directory.text.charAt(0).toUpperCase() + directory.text.slice(1)}

:::warning
Work in progress - this component is not yet ready for use.
:::
`

  createFile(path, content)
}
