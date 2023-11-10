<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { useToggle } from '@vueuse/core'
import { computed } from 'vue'
import { useUnaThemes } from '../../composables/useUnaThemes'
import { useUnaSettings } from '../../composables/useUnaSettings'
import NButton from '../elements/Button.vue'

const { primaryThemes, grayThemes } = useUnaThemes()

const { settings, reset } = useUnaSettings()

const currentPrimaryThemeHex = computed(() => settings.value.primaryColors?.['--una-primary-hex'])

const currentPrimaryThemeName = computed(() => {
  const theme = primaryThemes.find(([, theme]) => theme['--una-primary-hex'] === currentPrimaryThemeHex.value)
  return theme ? theme[0] : ''
})

const currentGrayThemeHex = computed(() => settings.value.grayColors?.['--una-gray-hex'])

const currentGrayThemeName = computed(() => {
  const theme = grayThemes.find(([, theme]) => theme['--una-gray-hex'] === currentGrayThemeHex.value)
  return theme ? theme[0] : ''
})

// update theme in storage
function updatePrimaryTheme(theme: string) {
  settings.value.primary = theme
}

function updateGrayTheme(theme: string) {
  settings.value.gray = theme
}

const [value, toggle] = useToggle()
function shuffleTheme() {
  const randomPrimaryTheme = primaryThemes[Math.floor(Math.random() * primaryThemes.length)][0]
  const randomGrayTheme = grayThemes[Math.floor(Math.random() * grayThemes.length)][0]
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
                @click="updatePrimaryTheme(key)"
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
                @click="updateGrayTheme(key)"
              />
            </div>

            <hr class="my-2 border-$c-divider">

            <div class="flex space-x-3">
              <NButton
                btn="~ solid block"
                class="transition"
                label="Shuffle"
                leading="i-heroicons-adjustments-horizontal-solid"
                :una="{
                  btnLeading: value ? 'rotate-180 transform' : 'rotate-0',
                }"
                @click="shuffleTheme"
              />

              <NButton
                btn="~ solid-gray"
                size="xs"
                icon
                label="i-heroicons-arrow-uturn-left"
                @click="reset"
              />
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>
