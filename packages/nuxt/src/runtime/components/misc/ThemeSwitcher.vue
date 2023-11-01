<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { useStorage, useToggle } from '@vueuse/core'
import { computed } from 'vue'
import { grayThemes, primaryThemes } from '../../composables/themes'

// TODO: globalize
export interface ThemeColors {
  [key: string]: string
}

// TODO: confingurable in the app.config
const defaultSettings = {
  primaryColors: primaryThemes.filter(([colorName, _]) => colorName === 'yellow')[0][1],
  grayColors: grayThemes.filter(([colorName, _]) => colorName === 'stone')[0][1],
  fontSize: 16,
}

const settings = useStorage('una-settings', defaultSettings)

// use yellow primary theme as default
const currentPrimaryTheme = computed(() => settings.value.primaryColors?.['--una-primary-hex'])
// get current theme name
const currentPrimaryThemeName = computed(() => {
  const theme = primaryThemes.find(([, theme]) => theme['--una-primary-hex'] === currentPrimaryTheme.value)
  return theme ? theme[0] : ''
})

// use stone primary theme as default
const currentGrayTheme = computed(() => settings.value.grayColors?.['--una-gray-hex'])
// get current theme name
const currentGrayThemeName = computed(() => {
  const theme = grayThemes.find(([, theme]) => theme['--una-gray-hex'] === currentGrayTheme.value)
  return theme ? theme[0] : ''
})

// update theme in storage
function updatePrimaryTheme(theme: ThemeColors) {
  settings.value.primaryColors = theme
}
function updateGrayTheme(theme: ThemeColors) {
  settings.value.grayColors = theme
}

const [value, toggle] = useToggle()
function shuffleTheme() {
  const randomPrimaryTheme = primaryThemes[Math.floor(Math.random() * primaryThemes.length)][1]
  const randomGrayTheme = grayThemes[Math.floor(Math.random() * grayThemes.length)][1]
  updatePrimaryTheme(randomPrimaryTheme)
  updateGrayTheme(randomGrayTheme)
  toggle()
}
</script>

<template>
  <div>
    <Popover class="relative inline-block">
      <PopoverButton
        btn="~ square soft"
        class="rounded-lg"
      >
        <span i-heroicons-swatch-20-solid text-md />
      </PopoverButton>

      <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
        <PopoverPanel class="absolute right-0 z-100 mt-2 w-54 border-1 border-base rounded-xl bg-muted px-4 py-5 shadow-lg">
          <div class="flex flex-col space-y-5">
            <div class="grid grid-cols-5 gap-3">
              <button
                v-for="[key, theme] in primaryThemes"
                :key="key"
                :style="{ background: theme['--una-primary-hex'] }"
                class="h-6.5 w-6.5 rounded-full transition-all" :class="[currentPrimaryThemeName === key ? 'ring-2' : 'scale-93']"
                ring="primary offset-4 offset-base"
                @click="updatePrimaryTheme(theme)"
              />
            </div>

            <hr class="my-2 border-$c-divider">

            <div class="grid grid-cols-5 gap-3">
              <button
                v-for="[key, theme] in grayThemes"
                :key="key"
                :style="{ background: theme['--una-gray-hex'] }"
                :class="currentGrayThemeName === key ? 'ring-2' : 'scale-93'"
                class="h-6.5 w-6.5 rounded-full transition-all"
                ring="gray offset-4 offset-base"
                @click="updateGrayTheme(theme)"
              />
            </div>

            <hr class="my-2 border-$c-divider">

            <button
              btn="~ solid block"
              class="rounded-lg transition"
              @click="shuffleTheme"
            >
              Shuffle
              <span
                i-heroicons-adjustments-horizontal-20-solid ml-2
                :class="value ? 'rotate-180 transform' : 'rotate-0'"
              />
            </button>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>
