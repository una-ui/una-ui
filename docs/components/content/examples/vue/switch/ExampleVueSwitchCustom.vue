<script setup lang="ts">
const enabled = ref(false)
</script>

<template>
  <div flex gap-7 py-24>
    <NSwitch
      v-model="enabled"
      switch="focus"
      rotate-90
    />

    <NSwitch
      v-model="enabled"
      switch="focus rose"
      class="w-4.5em"
      rotate-90
      :nv="{
        switchSliderBg: 'w-full',
        switchSliderChecked: 'translate-x-3em',
        switchSliderUnchecked: 'translate-x-0',
      }"
    />

    <NSwitch
      v-model="enabled"
      switch="focus indigo 1cm"
      rotate-120
      rounded-lg
      :nv="{
        switchSliderBg: 'rounded-lg',
        switchSlider: 'bg-inverted',
      }"
    />

    <NSwitch
      v-model="enabled"
      switch="3xl"
      type="short"
      rotate-45
      rounded-none
      :nv="{
        switchSlider: 'rounded-none h-2em w-2em',
        switchSliderBg: 'rounded-none',
        switchSliderChecked: 'bg-success',
        switchSliderUnchecked: 'bg-error',
      }"
    />

    <NSwitch
      v-model="enabled"
      switch="4xl"
      :nv="{
        switchSliderBgChecked: 'bg-yellow',
        switchSliderBgUnchecked: 'bg-blue',
        switchSliderChecked: 'rounded-l-lg',
        switchSliderUnchecked: 'rounded-r-lg',
      }"
    />
  </div>
</template>
