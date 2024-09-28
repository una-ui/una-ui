<script setup lang="ts">
const enabled = ref(false)
</script>

<template>
  <div class="flex flex-wrap gap-7 py-24">
    <NSwitch
      v-model:checked="enabled"
      switch="focus"
      rotate-90
    />

    <NSwitch
      v-model:checked="enabled"
      switch="focus rose"
      class="w-4.5em rotate-90"
      :una="{
        switchTrack: 'w-4.5em',
        switchThumbOn: 'translate-x-3em',
        switchThumbOff: 'translate-x-0',
      }"
    />

    <NSwitch
      v-model:checked="enabled"
      switch="focus indigo"
      size="1cm"
      class="rotate-120 rounded-lg"
      :una="{
        switchTrack: 'rounded-lg',
        switchThumb: 'bg-inverted',
      }"
    />

    <NSwitch
      v-model:checked="enabled"
      size="3xl"
      outset
      class="rounded-non rotate-90"
      :una="{
        switchThumb: 'rounded-none h-2em w-2em',
        switchTrack: 'rounded-none',
        switchThumbOn: 'bg-success',
        switchThumbOff: 'bg-error',
      }"
    />

    <NSwitch
      v-model:checked="enabled"
      size="4xl"
      :una="{
        switchTrackOn: 'bg-yellow',
        switchTrackOff: 'bg-blue',
        switchThumbOn: 'rounded-l-lg',
        switchThumbOff: 'rounded-r-lg',
      }"
    />
  </div>
</template>
