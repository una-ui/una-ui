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
      class="w-4.5em rotate-90"
      :nv="{
        switchTrack: 'w-full',
        switchThumbOn: 'translate-x-3em',
        switchThumbOff: 'translate-x-0',
      }"
    />

    <NSwitch
      v-model="enabled"
      switch="focus indigo 1cm"
      class="rotate-120 rounded-lg"
      :nv="{
        switchTrack: 'rounded-lg',
        switchThumb: 'bg-inverted',
      }"
    />

    <NSwitch
      v-model="enabled"
      switch="3xl"
      outset
      class="rounded-non rotate-90"
      :nv="{
        switchThumb: 'rounded-none h-2em w-2em',
        switchTrack: 'rounded-none',
        switchThumbOn: 'bg-success',
        switchThumbOff: 'bg-error',
      }"
    />

    <NSwitch
      v-model="enabled"
      switch="4xl"
      :nv="{
        switchTrackOn: 'bg-yellow',
        switchTrackOff: 'bg-blue',
        switchThumbOn: 'rounded-l-lg',
        switchThumbOff: 'rounded-r-lg',
      }"
    />
  </div>
</template>
