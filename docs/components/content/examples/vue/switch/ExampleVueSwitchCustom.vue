<script setup lang="ts">
const enabled = ref(false)
</script>

<template>
  <div class="flex flex-wrap gap-7 py-24">
    <NSwitch
      v-model:checked="enabled"
      switch-checked="primary"
      rotate-90
    />

    <NSwitch
      v-model:checked="enabled"
      switch-checked="rose"
      class="w-4.5em rotate-90"
      :una="{
        switchThumbChecked: 'translate-x-3em',
      }"
    />

    <NSwitch
      v-model:checked="enabled"
      switch-checked="indigo"
      size="1cm"
      class="rotate-120 rounded-lg"
      :una="{
        switchThumb: 'bg-foreground',
      }"
    />

    <NSwitch
      v-model:checked="enabled"
      size="3xl"
      class="rotate-90 rounded-none"
      :una="{
        switchThumb: 'rounded-none square-2em',
        switchThumbChecked: 'bg-success',
        switchThumbUnchecked: '-translate-x-5 bg-error',
      }"
    />

    <NSwitch
      v-model:checked="enabled"
      size="4xl"
      :una="{
        switchChecked: 'bg-yellow',
        switchUnchecked: 'bg-blue',
        switchThumbChecked: 'rounded-l-lg',
        switchThumbUnchecked: 'rounded-r-lg',
      }"
    />
  </div>
</template>
