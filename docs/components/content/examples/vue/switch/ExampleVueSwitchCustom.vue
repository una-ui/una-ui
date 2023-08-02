<script setup lang="ts">
const enabled = ref(false)
</script>

<template>
  <div flex gap-4 py-4>
    <NSwitch
      v-model="enabled"
      switch="xl"
      rotate-90
    />

    <NSwitch
      v-model="enabled"
      switch="2xl"
      rotate-120 rounded-lg
      :nv="{
        switchUnchecked: 'switch-unchecked-indigo',
        switchSlider: 'bg-inverted',
      }"
    />

    <NSwitch
      v-model="enabled"
      switch="3xl"
      variant="short"
      rotate-45 rounded-none
      :nv="{
        switchChecked: 'switch-checked-yellow',
        switchSlider: 'rounded-none',
        switchSliderChecked: 'bg-base',
        switchSliderUnchecked: 'bg-yellow',
      }"
    />

    <NSwitch
      v-model="enabled"
      switch="4xl"
      :nv="{
        switchChecked: 'switch-checked-lime',
        switchUnchecked: 'switch-unchecked-red',
        switchSliderChecked: 'rounded-l-lg',
        switchSliderUnchecked: 'rounded-r-lg',
      }"
    />
  </div>
</template>
