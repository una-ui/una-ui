<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

import { computed } from 'vue'
import { useStorage } from '@vueuse/core'
import { grayThemesDefault, primaryThemesDefault } from '../../../../config/color-themes'
import type { ThemeColors } from '../../../types'

// TODO can dynamic theme to play

const defaultSettings = {
  primaryColors: primaryThemesDefault[0][1],
  grayColors: grayThemesDefault[0][1],
  fontSize: 16,
}

const settings = useStorage('nv-settings', defaultSettings)

// use orange primary theme as default
const defaultPrimaryTheme = primaryThemesDefault.filter(([color]) => color === 'blue')[0][1]['--nv-primary-hex']
// check storage for theme or use default (orange)
const currentPrimaryTheme = computed(() => settings.value.primaryColors?.['--nv-primary-hex'] || defaultPrimaryTheme)
// get current theme name
const currentPrimaryThemeName = computed(() => {
  const theme = primaryThemesDefault.find(([, theme]) => theme['--nv-primary-hex'] === currentPrimaryTheme.value)
  return theme ? theme[0] : ''
})

// use gray primary theme as default
const defaultGrayTheme = grayThemesDefault.filter(([color]) => color === 'gray')[0][1]['--nv-gray-hex']
// check storage for theme or use default (gray)
const currentGrayTheme = computed(() => settings.value.grayColors?.['--nv-gray-hex'] || defaultGrayTheme)
// get current theme name
const currentGrayThemeName = computed(() => {
  const theme = grayThemesDefault.find(([, theme]) => theme['--nv-gray-hex'] === currentGrayTheme.value)
  return theme ? theme[0] : ''
})

// update theme in storage
function updatePrimaryTheme(theme: ThemeColors) {
  settings.value.primaryColors = theme
}
function updateGrayTheme(theme: ThemeColors) {
  settings.value.grayColors = theme
}

function shuffleTheme() {
  const randomPrimaryTheme = primaryThemesDefault[Math.floor(Math.random() * primaryThemesDefault.length)][1]
  const randomGrayTheme = grayThemesDefault[Math.floor(Math.random() * grayThemesDefault.length)][1]
  updatePrimaryTheme(randomPrimaryTheme)
  updateGrayTheme(randomGrayTheme)
}
</script>

<template>
  <div class="sm:ml-7">
    <Popover class="relative inline-block">
      <PopoverButton btn="solid" class="rounded-lg">
        <span i-carbon-color-palette />
      </PopoverButton>

      <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
        <PopoverPanel class="py-5 px-2 absolute right-0 z-10 mt-2 bg-$vp-c-bg-elv border-$vp-c-divider border-1 w-54 rounded-xl shadow-lg">
          <div class="flex flex-col space-y-5">
            <div class="grid grid-cols-5 gap-3">
              <button
                v-for="[key, theme] in primaryThemesDefault"
                :key="key"
                :style="{ background: theme['--nv-primary-hex'] }"
                type="button"
                :class="currentPrimaryThemeName === key ? 'ring-3' : 'scale-93'"
                h-7 w-7 transition-all
                rounded-full
                ring="primary offset-2 offset-base"
                @click="updatePrimaryTheme(theme)"
              >
              <!-- {{ key }} -->
              </button>
            </div>

            <div class="grid grid-cols-5 gap-3">
              <button
                v-for="[key, theme] in grayThemesDefault"
                :key="key"
                :style="{ background: theme['--nv-gray-hex'] }"
                type="button"
                :class="currentGrayThemeName === key ? 'ring-3' : 'scale-93'"
                h-7 w-7 transition-all
                rounded-full
                ring="gray offset-2 offset-base"
                @click="updateGrayTheme(theme)"
              >
              <!-- {{ key }} -->
              </button>
            </div>

            <div>
              <!-- <button
                type="button"
                class="h-7 w-7 transition-all rounded-full ring-3 scale-93 ring-primary offset-2 offset-base"
                @click="shuffleTheme"
              >
                <span i-carbon-shuffle />
              </button> -->
              <button
                type="button"
                btn="solid block"
                class="rounded-lg"
                @click="shuffleTheme"
              >
                Shuffle <span ml-2 i-carbon-shuffle />
              </button>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>
