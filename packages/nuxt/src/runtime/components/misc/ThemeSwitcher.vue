<script setup lang="ts">
import { useColorMode } from '#imports'
import { useToggle } from '@vueuse/core'
import { computed } from 'vue'
import { useUnaSettings } from '../../composables/useUnaSettings'
import { useUnaThemes } from '../../composables/useUnaThemes'
import { RADIUS } from '../../constants'
import Button from '../elements/Button.vue'
import Label from '../elements/Label.vue'
import Popover from '../elements/popover/Popover.vue'
import Separator from '../elements/Separator.vue'

const colorMode = useColorMode()

const [value, toggle] = useToggle()
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
function updatePrimaryTheme(theme: string): void {
  settings.value.primary = theme
}

function updateGrayTheme(theme: string): void {
  settings.value.gray = theme
}

function shuffleTheme(): void {
  const randomPrimaryTheme = primaryThemes[Math.floor(Math.random() * primaryThemes.length)][0]
  const randomGrayTheme = grayThemes[Math.floor(Math.random() * grayThemes.length)][0]
  const randomRadius = RADIUS[Math.floor(Math.random() * RADIUS.length)]
  updatePrimaryTheme(randomPrimaryTheme)
  updateGrayTheme(randomGrayTheme)
  settings.value.radius = randomRadius
  toggle()
}
</script>

<template>
  <Popover :_popover-content="{ align: 'end', class: 'z-100 w-73 bg-muted' }">
    <template #trigger>
      <slot name="trigger">
        <Button
          btn="soft"
          square
          icon
          label="i-lucide-paintbrush"
        />
      </slot>
    </template>

    <slot name="content">
      <div class="flex flex-col">
        <div class="grid space-y-1">
          <h1 class="text-md text-foreground font-semibold">
            Customize
          </h1>
          <p class="text-xs text-muted">
            Pick a style and color for your components.
          </p>
        </div>

        <Separator />

        <div class="space-y-3">
          <Label for="color" class="text-xs"> Primary Color</Label>
          <div class="grid grid-cols-7 gap-3">
            <button
              v-for="[key, theme] in primaryThemes"
              :key="key"
              :style="{ background: theme['--una-primary-hex'] }"
              class="h-6.5 w-6.5 rounded-full transition-all"
              :class="[currentPrimaryThemeName === key ? 'ring-2' : 'scale-93']"
              ring="primary offset-4 offset-base"
              aria-label="Primary Color"
              @click="updatePrimaryTheme(key)"
            />
          </div>
        </div>

        <Separator />

        <div class="space-y-3">
          <Label for="color" class="text-xs"> Gray Color </Label>
          <div class="grid grid-cols-7 gap-3">
            <button
              v-for="[key, theme] in grayThemes"
              :key="key"
              :style="{ background: theme['--una-gray-hex'] }"
              :class="currentGrayThemeName === key ? 'ring-2' : 'scale-93'"
              class="h-6.5 w-6.5 rounded-full transition-all"
              aria-label="Gray Color"
              ring="gray offset-4 offset-base"
              @click="updateGrayTheme(key)"
            />
          </div>
        </div>

        <Separator />

        <div class="space-y-3">
          <Label for="radius" class="text-xs"> Radius </Label>
          <div class="grid grid-cols-5 gap-2 py-1.5">
            <Button
              v-for="r in RADIUS"
              :key="r"
              btn="solid-gray"
              size="xs"
              :class="
                r === settings.radius
                  ? 'ring-2 ring-primary'
                  : ''
              "
              @click="settings.radius = r"
            >
              {{ r }}
            </Button>
          </div>
        </div>

        <Separator />

        <div class="space-y-3">
          <Label for="theme" class="text-xs">Mode</Label>

          <div class="flex justify-around py-1.5 space-x-2">
            <Button
              btn="solid-gray block"
              :class="{ 'ring-2 ring-primary': colorMode.preference === 'system' }"
              leading="i-radix-icons-desktop"
              class="px-3"
              size="xs"
              label="System"
              @click="colorMode.preference = 'system'"
            />

            <Button
              btn="solid-gray block"
              :class="{ 'ring-2 ring-primary': colorMode.preference === 'light' }"
              leading="i-radix-icons-sun"
              class="px-3"
              size="xs"
              label="Light"
              @click="colorMode.preference = 'light'"
            />

            <Button
              btn="solid-gray block"
              :class="{ 'ring-2 ring-primary': colorMode.preference === 'dark' }"
              leading="i-radix-icons-moon"
              class="px-3"
              size="xs"
              label="Dark"
              @click="colorMode.preference = 'dark'"
            />
          </div>
        </div>

        <Separator />

        <div class="flex space-x-3">
          <Button
            btn="solid-gray block"
            size="xs"
            label="Reset"
            leading="i-radix-icons-reload"
            @click="reset"
          />
          <Button
            btn="solid block"
            class="transition"
            label="Shuffle"
            leading="i-lucide-paintbrush"
            :una="{
              btnLeading: value ? 'rotate-6 transform' : '-rotate-6',
            }"
            @click="shuffleTheme"
          />
        </div>
      </div>
    </slot>
  </Popover>
</template>
