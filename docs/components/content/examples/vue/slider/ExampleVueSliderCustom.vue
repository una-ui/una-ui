<script setup lang="ts">
const equalizerValues = ref([
  [60],
  [50],
  [40],
  [30],
  [50],
  [40],
  [75],
  [85],
  [80],
  [50],
  [100],
  [40],
  [30],
])
</script>

<template>
  <div class="w-full flex flex-col overflow-auto border rounded-lg p-2 space-y-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <NLabel
          for="equalizer"
        >
          Equalizer
        </NLabel>
        <NSwitch
          id="equalizer"
          default-checked
          size="xs"
          class="ml-2"
        />
      </div>

      <NButton
        btn="ghost"
        size="11px"
        label="Reset"
      />
    </div>

    <div class="relative flex justify-between space-x-2">
      <div class="absolute inset-x-0 w-full px-1">
        <NSeparator
          v-for="n in 6"
          :key="n"
        />
      </div>
      <template
        v-for="(_, key) in equalizerValues"
        :key="key"
      >
        <div class="w-10 flex flex-col items-center">
          <NSlider
            v-model="equalizerValues[key]"
            :slider="_[0] < 100 ? 'accent' : 'primary'"
            orientation="vertical"
            size="xs"
            :una="{
              sliderTrack: 'h-32 rounded-none',
              sliderThumb: 'rounded-sm border-1 bg-white',
            }"
          />

          <small class="text-accent">
            {{ _[0] }}
          </small>
        </div>
      </template>
    </div>
  </div>
</template>
