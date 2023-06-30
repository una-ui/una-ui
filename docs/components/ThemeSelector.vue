<script setup lang="ts">
import { grayThemes, primaryThemes } from '../../config/color-themes'

// TODO can dynamic theme to play

interface ThemeColors {
  [key: string]: string
}

const settings = useStorage('nv-settings', {
  primaryColors: undefined as ThemeColors | undefined,
  grayColors: undefined as ThemeColors | undefined,
  fontSize: 15,
})

// use orange primary theme as default
const defaultPrimaryTheme = primaryThemes.filter(([color]) => color === 'orange')[0][1]['--nv-primary-hex']
// check storage for theme or use default (orange)
const currentPrimaryTheme = computed(() => settings.value.primaryColors?.['--nv-primary-hex'] || defaultPrimaryTheme)
// get current theme name
const currentPrimaryThemeName = computed(() => {
  const theme = primaryThemes.find(([, theme]) => theme['--nv-primary-hex'] === currentPrimaryTheme.value)
  return theme ? theme[0] : ''
})

// use gray primary theme as default
const defaultGrayTheme = grayThemes.filter(([color]) => color === 'gray')[0][1]['--nv-gray-hex']
// check storage for theme or use default (gray)
const currentGrayTheme = computed(() => settings.value.grayColors?.['--nv-gray-hex'] || defaultGrayTheme)
// get current theme name
const currentGrayThemeName = computed(() => {
  const theme = grayThemes.find(([, theme]) => theme['--nv-gray-hex'] === currentGrayTheme.value)
  return theme ? theme[0] : ''
})

// update theme in storage
function updatePrimaryTheme(theme: ThemeColors) {
  settings.value.primaryColors = theme
}
function updateGrayTheme(theme: ThemeColors) {
  settings.value.grayColors = theme
}

// TODO: move to global
const style = document.createElement('style') as HTMLStyleElement
style.id = 'nexvelt-ui'
document.head.appendChild(style)

watchEffect(() => {
  const styleTag = document.getElementById('nexvelt-ui')
  if (styleTag) {
    styleTag.innerHTML = `
    :root {
        --font-size: ${settings.value.fontSize}px;
        ${Object.entries(settings.value.primaryColors || {}).map(([k, v]) => `${k}: ${v};`).join('\n')}
        ${Object.entries(settings.value.grayColors || {}).map(([k, v]) => `${k}: ${v};`).join('\n')}
    }
  `.replace(/\s*\n+\s*/g, '')
  }
})
</script>

<template>
  <div flex="~ col" space-y-4>
    <div>
      <h4 text="primary-active">
        Primary Theme
      </h4>
      <div class="wrap grid grid-cols-6 gap2" py-4>
        <button
          v-for="[key, theme] in primaryThemes"
          :key="key"
          :style="{ background: theme['--nv-primary-hex'] }"
          type="button"
          :class="currentPrimaryThemeName === key ? 'ring-2' : 'scale-95'"
          :title="key"
          h-15 transition-all
          ring="primary offset-3 offset-base"
          btn="base"
          text-white
          @click="updatePrimaryTheme(theme)"
        >
          {{ key }}
        </button>
      </div>
    </div>

    <div>
      <h4 text="gray-active">
        Gray Theme
      </h4>
      <div class="wrap grid grid-cols-6 gap2" py-4>
        <button
          v-for="[key, theme] in grayThemes"
          :key="key"
          :style="{ background: theme['--nv-gray-hex'] }"
          type="button"
          :class="currentGrayThemeName === key ? 'ring-2' : 'scale-95'"
          :title="key"
          h-14 transition-all
          ring="gray offset-3 offset-base"
          btn="base"
          text-white
          @click="updateGrayTheme(theme)"
        >
          {{ key }}
        </button>
      </div>
    </div>

    <div>
      <h4 text="gray-active">
        Font Size ({{ settings.fontSize }}px)
      </h4>
      <input v-model.number="settings.fontSize" input="base" type="range" min="10" max="30">
    </div>
  </div>
</template>
