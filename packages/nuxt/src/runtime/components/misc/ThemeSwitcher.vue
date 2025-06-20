<script setup lang="ts">
import type { UnaSettings } from '../../types'
import { useColorMode } from '#imports'
import { useToggle } from '@vueuse/core'
import { capitalize, computed } from 'vue'
import { useUnaSettings } from '../../composables/useUnaSettings'
import { useUnaThemes } from '../../composables/useUnaThemes'
import { RADIUS } from '../../constants'
import Button from '../elements/Button.vue'
import Icon from '../elements/Icon.vue'
import Label from '../elements/Label.vue'
import Popover from '../elements/popover/Popover.vue'
import Separator from '../elements/Separator.vue'

const colorMode = useColorMode()

const [value, toggle] = useToggle()
const { primaryThemes, grayThemes, predefinedThemes } = useUnaThemes()
const { settings, reset } = useUnaSettings()

const currentPrimaryThemeHex = computed(() => settings.value.primaryColors?.['--una-primary-hex'])
const currentPrimaryThemeName = computed(() => {
  if (settings.value.theme) {
    return settings.value.theme.name
  }

  const theme = primaryThemes.find(([, theme]) => theme['--una-primary-hex'] === currentPrimaryThemeHex.value)
  return theme ? theme[0] : ''
})

const currentGrayThemeHex = computed(() => settings.value.grayColors?.['--una-gray-hex'])

const currentGrayThemeName = computed(() => {
  if (settings.value.theme !== null) {
    return false
  }

  const theme = grayThemes.find(([, theme]) => theme['--una-gray-hex'] === currentGrayThemeHex.value)
  return theme ? theme[0] : ''
})

function updateColor(theme: UnaSettings['theme']): void {
  settings.value.theme = theme
  settings.value.primary = ''
  settings.value.gray = ''
}

// update theme in storage
function updatePrimaryTheme(theme: string): void {
  settings.value.theme = null
  settings.value.primary = theme
}

function updateGrayTheme(theme: string): void {
  settings.value.theme = null
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
    :_popover-content="{ align: 'end', class: 'w-73' }"
  >
    <template #trigger="{ open }">
      <slot name="trigger" :open="open">
        <Button
          btn="soft"
          icon square
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
          <p class="text-xs text-muted-foreground">
            Pick a style and color for your components.
          </p>
        </div>

        <Separator />

        <div class="space-y-2">
          <Label for="color" class="text-xs"> Themes</Label>
          <div class="grid grid-cols-2 gap-3">
            <template
              v-for="theme in predefinedThemes"
              :key="theme.name"
            >
              <Button
                v-if="theme"
                btn="solid-gray"
                size="xs"
                :title="capitalize(theme?.name)"
                class="justify-start gap-2 ring-primary"
                :aria-label="`Theme: ${theme.name}`"
                :class="currentPrimaryThemeName === theme?.name && 'ring-2'"
                @click="updateColor(theme)"
              >
                <template #leading>
                  <Icon
                    name="i-tabler-circle-filled"
                    square="4.5"
                    :style="{
                      '--c-primary': `oklch(${theme?.cssVars.dark['--una-primary']})`,
                      '--c-primary-foreground': `oklch(${theme?.cssVars.dark['--una-background']})`,
                    }"
                    class="shrink-0 rounded-full from-$c-primary to-$c-primary-foreground from-20% bg-gradient-to-b"
                  />
                </template>

                <span class="truncate text-xs">
                  {{ theme.name }}
                </span>
              </Button>
            </template>
          </div>
        </div>

        <Separator />

        <div class="space-y-2">
          <Label for="color" class="text-xs"> Primary Color</Label>
          <div class="grid grid-cols-7 gap-3">
            <template
              v-for="[key, theme] in primaryThemes"
              :key="key"
            >
              <button
                :title="capitalize(key)"
                :style="{
                  '--c-primary': `oklch(${theme['--una-primary-600']})`,
                  '--c-primary-foreground': `oklch(${theme['--una-primary-500']})`,
                }"
                class="bg-$c-primary transition-all dark:bg-$c-primary-foreground"
                rounded="full"
                square="6.5"
                :class="[currentPrimaryThemeName === key ? 'ring-2' : 'scale-93']"
                ring="primary offset-4 offset-background"
                :aria-label="`Primary Color: ${key}`"
                @click="updatePrimaryTheme(key)"
              />
            </template>
          </div>
        </div>

        <Separator />

        <div class="space-y-2">
          <Label for="color" class="text-xs"> Gray Color </Label>
          <div class="grid grid-cols-7 gap-3">
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
              ring="gray offset-4 offset-background"
              @click="updateGrayTheme(key)"
            />
          </div>
        </div>

        <Separator />

        <div class="space-y-1">
          <Label for="radius" class="text-xs"> Radius </Label>
          <div class="grid grid-cols-3 gap-2 py-1.5">
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

          <div class="flex justify-around py-1.5 space-x-2">
            <Button
              btn="solid-gray"
              :class="{ 'ring-2 ring-primary': colorMode.preference === 'system' }"
              leading="i-radix-icons-desktop"
              class="px-3"
              size="xs"
              label="System"
              @click="colorMode.preference = 'system'"
            />

            <Button
              btn="solid-gray"
              :class="{ 'ring-2 ring-primary': colorMode.preference === 'light' }"
              leading="i-radix-icons-sun"
              class="px-3"
              size="xs"
              label="Light"
              @click="colorMode.preference = 'light'"
            />

            <Button
              btn="solid-gray"
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

        <div class="grid grid-cols-2 gap-2">
          <Button
            size="xs"
            btn="solid-gray"
            label="Reset"
            leading="i-radix-icons-reload"
            @click="reset"
          />
          <Button
            size="xs"
            btn="solid"
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
