import fs from 'fs-extra'

// create a file with the given name and content
function createFile(name: string, content: string) {
  fs.writeFileSync(name, content, { encoding: 'utf-8' })
}
// create a directory with the given name
function createDirectory(name: string) {
  fs.mkdirSync(name)
}

// just copy a list sidebar items from the config file
const directoryFolder = './content/4.components/4.layouts'
const listOfDirectoriesWithFiles = [
  {
    text: '🔴 Card',
    link: '0.card',
  },
  {
    text: '🔴 Divider',
    link: '1.divider',
  },
  {
    text: '🔴 Skeleton',
    link: '2.skeleton',
  },
]

// create a file for each sidebar item base on the link and text from the sidebar
for (const directory of listOfDirectoriesWithFiles) {
  if (!directory.link || !directory.text)
    continue

  // create a directory for each sidebar item
  if (!fs.existsSync(directoryFolder))
    createDirectory(directoryFolder)

  const path = `./${directoryFolder}/${directory.link}.md`
  const content = `---
title: ${directory.text}
description: 'Work in progress - this component is not yet ready for use.'
---

# ${directory.text.charAt(0).toUpperCase() + directory.text.slice(1)}

::alert{type="warning"}
Work in progress - this component is not yet ready for use.
::
`

  createFile(path, content)
}
