<script setup lang="ts">
const value = ref([40])

const isTooHigh = computed(() => value.value[0] > 50)
</script>

<template>
  <NFormField
    name="volume"
    label="Volume"
    required
    hint="Adjust the volume"
    :message="isTooHigh ? 'Volume is too high' : ''"
    :status="isTooHigh ? 'error' : undefined"
  >
    <NSlider
      v-model="value"
      :min="0"
      :max="100"
    />
  </NFormField>
</template>
