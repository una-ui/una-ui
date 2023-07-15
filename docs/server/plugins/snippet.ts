import * as fs from 'node:fs'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:beforeParse', (file: any) => {
    if (file._id.endsWith('.md')) {
      const snippetMatch = file.body.match(/<<< (@.+) (.*)/g)
      if (!snippetMatch)
        return

      let modifiedBody = file.body

      for (const snippet of snippetMatch) {
        const regex = /<<< (@.+) (.*)/
        const [, src, suffix] = snippet.match(regex)

        const normalizedSrc = src.replace(/@/g, '.')
        const nameExt = normalizedSrc.split('.').pop().toLowerCase()
        const isAFile = fs.existsSync(normalizedSrc)
        const escapedSnippet = snippet.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

        if (!isAFile) {
          modifiedBody = modifiedBody.replace(new RegExp(escapedSnippet, 'g'), `🔴 ${normalizedSrc} | File does not exist 🔴`)
        }
        else {
          const content = fs.readFileSync(normalizedSrc, { encoding: 'utf-8' })
          const renderedContent = `\`\`\`${nameExt}${suffix ? ` ${suffix}` : ''}\n${content}\`\`\``

          modifiedBody = modifiedBody.replace(new RegExp(escapedSnippet, 'g'), renderedContent)
        }
      }

      file.body = modifiedBody
    }
  })
})
