<script setup lang="ts">
import { useColorMode } from '#imports'
import { useToggle } from '@vueuse/core'
import { capitalize, computed } from 'vue'
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
  if (primaryThemes.length > 0 && grayThemes.length > 0 && RADIUS.length > 0) {
    // Safe way to access random elements with proper typing
    const safeGetPrimaryTheme = (): string => {
      const index = Math.floor(Math.random() * primaryThemes.length)
      // Force type assertion for TypeScript
      return primaryThemes[index]?.[0] as string
    }

    const safeGetGrayTheme = (): string => {
      const index = Math.floor(Math.random() * grayThemes.length)
      // Force type assertion for TypeScript
      return grayThemes[index]?.[0] as string
    }

    const safeGetRadius = (): number => {
      const index = Math.floor(Math.random() * RADIUS.length)
      // Force type assertion for TypeScript
      return RADIUS[index] as number
    }

    // Get random values with correct typing
    const randomPrimaryTheme = safeGetPrimaryTheme()
    const randomGrayTheme = safeGetGrayTheme()
    const randomRadius = safeGetRadius()

    updatePrimaryTheme(randomPrimaryTheme)
    updateGrayTheme(randomGrayTheme)
    settings.value.radius = randomRadius
    toggle()
  }
}
</script>

<template>
  <Popover
    :_popover-content="{ align: 'end', class: 'w-73 bg-muted' }"
  >
    <template #trigger="{ open }">
      <slot name="trigger" :open="open">
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
          <h1 class="text-md text-base font-semibold">
            Customize
          </h1>
          <p class="text-xs text-muted">
            Pick a style and color for your components.
          </p>
        </div>

        <Separator />

        <div class="space-y-2">
          <Label for="color" class="text-xs"> Primary Color</Label>
          <div class="gap-3 grid grid-cols-7">
            <button
              v-for="[key, theme] in primaryThemes"
              :key="key"
              :title="capitalize(key)"
              :style="{ background: theme['--una-primary-hex'] }"
              class="transition-all"
              rounded="full"
              square="6.5"
              :class="[currentPrimaryThemeName === key ? 'ring-2' : 'scale-93']"
              ring="primary offset-4 offset-transparent"
              :aria-label="`Primary Color: ${key}`"
              @click="updatePrimaryTheme(key)"
            />
          </div>
        </div>

        <Separator />

        <div class="space-y-2">
          <Label for="color" class="text-xs"> Gray Color </Label>
          <div class="gap-3 grid grid-cols-7">
            <button
              v-for="[key, theme] in grayThemes"
              :key="key"
              :title="capitalize(key)"
              :style="{ background: theme['--una-gray-hex'] }"
              :class="currentGrayThemeName === key ? 'ring-2' : 'scale-93'"
              class="transition-all"
              rounded="full"
              square="6.5"
              :aria-label="`Gray Color: ${key}`"
              ring="gray offset-4 offset-base"
              @click="updateGrayTheme(key)"
            />
          </div>
        </div>

        <Separator />

        <div class="space-y-1">
          <Label for="radius" class="text-xs"> Radius </Label>
          <div class="py-1.5 gap-2 grid grid-cols-5">
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

        <div class="space-y-1">
          <Label for="theme" class="text-xs">Mode</Label>

          <div class="py-1.5 flex justify-around space-x-2">
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
            size="xs"
            btn="solid-gray block"
            label="Reset"
            leading="i-radix-icons-reload"
            @click="reset"
          />
          <Button
            size="xs"
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
