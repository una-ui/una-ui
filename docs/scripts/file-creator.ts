import fs from 'fs-extra'

// create a file with the given name and content
function createFile(name: string, content: string) {
  fs.writeFileSync(name, content, { encoding: 'utf-8' })
}
// create a directory with the given name
function createDirectory(name: string) {
  fs.mkdirSync(name)
}

// just update the path and the list of directories with files
const directoryFolder = './content/4.components/0.elements'
const listOfDirectoriesWithFiles = [
  {
    text: '🔴 Button',
    link: '4.button',
    presetName: 'button.ts',
    componentName: 'elements/button.vue',
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

## Basic

## Events

## Slots

## Props

## Presets
@@@ ../packages/preset/src/_shortcuts/${directory.presetName}

## Components
@@@ ../packages/nuxt/src/runtime/components/${directory.componentName}
`

  createFile(path, content)
}
