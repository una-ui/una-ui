<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { useStorage } from '@vueuse/core'
import { computed, ref } from 'vue'
import { grayThemesDefault, primaryThemesDefault } from '../../composables/themes'

export interface ThemeColors {
  [key: string]: string
}

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

const trigger = ref(false) // 📌
function shuffleTheme() {
  const randomPrimaryTheme = primaryThemesDefault[Math.floor(Math.random() * primaryThemesDefault.length)][1]
  const randomGrayTheme = grayThemesDefault[Math.floor(Math.random() * grayThemesDefault.length)][1]
  updatePrimaryTheme(randomPrimaryTheme)
  updateGrayTheme(randomGrayTheme)
  trigger.value = !trigger.value
}
</script>

<template>
  <div class="sm:ml-5">
    <Popover class="relative inline-block">
      <PopoverButton
        btn="~ square soft"
        class="rounded-lg"
      >
        <span i-heroicons-swatch-20-solid text-md />
      </PopoverButton>

      <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
        <PopoverPanel class="absolute right-0 mt-2 w-54 border-1 border-base rounded-xl bg-muted px-4 py-5 shadow-lg">
          <div class="flex flex-col space-y-5">
            <div class="grid grid-cols-5 gap-3">
              <button
                v-for="[key, theme] in primaryThemesDefault"
                :key="key"
                :style="{ background: theme['--nv-primary-hex'] }"
                class="h-6.5 w-6.5 rounded-full transition-all" :class="[currentPrimaryThemeName === key ? 'ring-2' : 'scale-93']"
                ring="primary offset-4 offset-base"
                @click="updatePrimaryTheme(theme)"
              />
            </div>

            <hr class="my-2 border-$c-divider">

            <div class="grid grid-cols-5 gap-3">
              <button
                v-for="[key, theme] in grayThemesDefault"
                :key="key"
                :style="{ background: theme['--nv-gray-hex'] }"
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
                :class="trigger ? 'rotate-180 transform' : 'rotate-0'"
              />
            </button>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>
