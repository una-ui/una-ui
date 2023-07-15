import fs from 'fs-extra'

function generateCSSTransition() {
  const keyframes = []

  for (let i = 0; i <= 100; i += 1.25) {
    const light = (i * 3.6) % 360
    const next = ((i + 1.25) * 3.6) % 360
    const keyframe = `${i}% {--vp-c-brand-light: hsl(${light}, 100%, 50%);--vp-c-brand-next: hsl(${next}, 100%, 50%);}`
    keyframes.push(keyframe)
  }

  const cssTransition = `@keyframes colorTransition {${keyframes.join('')}}`.replace(/\n|\s\s+/g, '')

  return cssTransition
}

// Generate and output the CSS transition
const cssTransition = generateCSSTransition()

fs.writeFileSync('./.vitepress/theme/color-transition.css',
  cssTransition,
  { encoding: 'utf-8' })
