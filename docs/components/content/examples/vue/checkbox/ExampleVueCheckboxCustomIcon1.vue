<script setup lang="ts">
const options = ref([
  {
    value: true,
    label: '1',
  },
  {
    value: true,
    label: '2',
  },
  {
    value: false,
    label: '3',
  },
])
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <NCheckbox
      v-for="(option, i) in options"
      :key="i"
      v-model="option.value"
      :label="option.label"
      size="xl"
      :una="{
        checkboxIcon: 'i-tabler-checks',
      }"
    />
  </div>
</template>
