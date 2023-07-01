<script setup lang="ts">
import { grayThemes, primaryThemes } from '../../config/color-themes'
import type { ThemeColors } from '../types'

// TODO can dynamic theme to play

const defaultSettings = {
  primaryColors: primaryThemes[0][1],
  grayColors: grayThemes[0][1],
  fontSize: 16,
}

const settings = useStorage('nv-settings', defaultSettings)

// use orange primary theme as default
const defaultPrimaryTheme = primaryThemes.filter(([color]) => color === 'blue')[0][1]['--nv-primary-hex']
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
</script>

<template>
  <ClientOnly>
    <div flex="~ col" space-y-5>
      <div>
        <h4 text="primary">
          Primary
        </h4>
        <div class="mt-5 wrap grid grid-cols-8 gap-5">
          <button
            v-for="[key, theme] in primaryThemes"
            :key="key"
            :style="{ background: theme['--nv-primary-hex'] }"
            type="button"
            :class="currentPrimaryThemeName === key ? 'ring-3' : 'scale-93'"
            :title="key"
            h-10 w-10 transition-all
            rounded-full
            ring="primary offset-3 offset-base"
            btn="base"
            text-white
            @click="updatePrimaryTheme(theme)"
          >
          <!-- {{ key }} -->
          </button>
        </div>
      </div>

      <div>
        <h4 text="primary">
          Gray
        </h4>
        <div class="mt-5 wrap grid grid-cols-8 gap-5">
          <button
            v-for="[key, theme] in grayThemes"
            :key="key"
            :style="{ background: theme['--nv-gray-hex'] }"
            type="button"
            :class="currentGrayThemeName === key ? 'ring-3' : 'scale-93'"
            :title="key"
            h-10 w-10 transition-all
            rounded-full
            ring="gray offset-3 offset-base"
            text-white
            @click="updateGrayTheme(theme)"
          >
          <!-- {{ key }} -->
          </button>
        </div>
      </div>

      <!-- <div>
        <h4 text="primary">
          Font Size ({{ settings.fontSize }}px)
        </h4>
        <input v-model.number="settings.fontSize" input="base" type="range" min="10" max="30">
      </div> -->
    </div>
  </ClientOnly>
</template>
