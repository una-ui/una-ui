import * as fs from 'node:fs'

// Set your desired default prefix here 🚀
const defaultPrefix = '@@@'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:beforeParse', (file: any) => {
    if (file._id.endsWith('.md')) {
      const snippetMatch = file.body.match(new RegExp(`^${defaultPrefix}\\s([^{\\s]+)(?:\\s(.+))?`, 'gm'))

      if (!snippetMatch)
        return

      let modifiedBody = file.body

      for (const snippet of snippetMatch) {
        const [, src, suffix] = snippet.match(new RegExp(`${defaultPrefix}\\s([^{\\s]+)(?:\\s(.+))?`))

        const normalizedSrc = src.replace(/@/g, '.')
        const normalizeSuffix = JSON.stringify(suffix || '')
        const nameExt = normalizedSrc.split('.').pop().toLowerCase()
        const markdown = `${nameExt} ${normalizeSuffix}`
        const isAFile = fs.existsSync(normalizedSrc)
        const escapedSnippet = snippet.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

        if (!isAFile) {
          modifiedBody = modifiedBody.replace(new RegExp(escapedSnippet, 'g'), `🔴 ${normalizedSrc} | Snippet does not exist 🔴`)
        }
        else {
          const content = fs.readFileSync(normalizedSrc, { encoding: 'utf-8' })
          const renderedContent = `\`\`\`${markdown}\n${content}\`\`\``

          modifiedBody = modifiedBody.replace(new RegExp(escapedSnippet, 'g'), renderedContent)
        }
      }

      file.body = modifiedBody
    }
  })
})
