<script setup lang="ts">
import { useAppConfig, useColorMode } from '#imports'
import { useToggle } from '@vueuse/core'
import { SliderRange, SliderThumb, SliderTrack } from 'reka-ui'
import { capitalize, computed } from 'vue'
import { useUnaSettings } from '../../composables/useUnaSettings'
import { useUnaThemes } from '../../composables/useUnaThemes'
import { RADIUS } from '../../constants'
import Button from '../elements/Button.vue'
import Label from '../elements/Label.vue'
import Popover from '../elements/popover/Popover.vue'
import Separator from '../elements/Separator.vue'
import Slider from '../forms/Slider.vue'

const colorMode = useColorMode()
const { una } = useAppConfig()

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

// custom values (e.g. set via app.config) snap the thumb to the closest stop
function closestIndex(values: readonly number[], target: number): number {
  let closest = 0
  values.forEach((value, index) => {
    const best = values[closest]
    if (best !== undefined && Math.abs(value - target) < Math.abs(best - target))
      closest = index
  })
  return closest
}

const fontSizePresets = computed(() => una.fontSizes ?? [])

// slider stops are preset indexes, so unevenly spaced preset values still sit evenly on the track
const fontSizeIndex = computed<number[]>({
  get: () => {
    const presets = fontSizePresets.value
    const exact = presets.findIndex(preset => preset.value === settings.value.fontSize)
    return [exact !== -1 ? exact : closestIndex(presets.map(preset => preset.value), settings.value.fontSize)]
  },
  set: (value) => {
    const preset = fontSizePresets.value[value[0] ?? 0]
    if (preset)
      settings.value.fontSize = preset.value
  },
})

const currentFontSizeLabel = computed(() => {
  const preset = fontSizePresets.value.find(preset => preset.value === settings.value.fontSize)
  return preset ? preset.label : `${settings.value.fontSize}px`
})

const radiusIndex = computed<number[]>({
  get: () => {
    const exact = RADIUS.findIndex(radius => radius === settings.value.radius)
    return [exact !== -1 ? exact : closestIndex(RADIUS, settings.value.radius)]
  },
  set: (value) => {
    const radius = RADIUS[value[0] ?? 0]
    if (radius !== undefined)
      settings.value.radius = radius
  },
})

const currentRadiusLabel = computed(() => `${settings.value.radius}`)

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
          <div class="grid grid-cols-7 gap-3">
            <button
              v-for="[key, theme] in primaryThemes"
              :key="key"
              :title="capitalize(key)"
              :style="{ background: theme['--una-primary-hex'] }"
              class="transition-all"
              rounded="full"
              square="6.5"
              :class="[currentPrimaryThemeName === key ? 'ring-2' : 'scale-93']"
              ring="primary offset-4 offset-base"
              :aria-label="`Primary Color: ${key}`"
              @click="updatePrimaryTheme(key)"
            />
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
              ring="gray offset-4 offset-base"
              @click="updateGrayTheme(key)"
            />
          </div>
        </div>

        <Separator />

        <div class="space-y-1">
          <div class="flex items-center justify-between">
            <Label for="radius" class="text-xs"> Radius </Label>
            <span class="text-xs text-muted">{{ currentRadiusLabel }}</span>
          </div>
          <div class="px-1 py-2.5">
            <Slider
              v-model="radiusIndex"
              :min="0"
              :max="RADIUS.length - 1"
              :step="1"
              aria-label="Radius"
            >
              <template #slider-track>
                <SliderTrack class="slider-track">
                  <SliderRange class="slider-range" />
                  <div class="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
                    <span v-for="(_, i) in RADIUS" :key="i" class="rounded-full bg-base size-1" />
                  </div>
                </SliderTrack>
              </template>
              <template #slider-thumb>
                <SliderThumb class="slider-thumb" :aria-valuetext="currentRadiusLabel" />
              </template>
            </Slider>
          </div>
        </div>

        <template v-if="fontSizePresets.length">
          <Separator />

          <div class="space-y-1">
            <div class="flex items-center justify-between">
              <Label for="font-size" class="text-xs"> Font Size </Label>
              <span class="text-xs text-muted">{{ currentFontSizeLabel }}</span>
            </div>
            <div class="px-1 py-2.5">
              <Slider
                v-model="fontSizeIndex"
                :min="0"
                :max="fontSizePresets.length - 1"
                :step="1"
                aria-label="Font Size"
              >
                <template #slider-track>
                  <SliderTrack class="slider-track">
                    <SliderRange class="slider-range" />
                    <div class="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
                      <span v-for="(_, i) in fontSizePresets" :key="i" class="rounded-full bg-base size-1" />
                    </div>
                  </SliderTrack>
                </template>
                <template #slider-thumb>
                  <SliderThumb class="slider-thumb" :aria-valuetext="currentFontSizeLabel" />
                </template>
              </Slider>
            </div>
          </div>
        </template>

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
