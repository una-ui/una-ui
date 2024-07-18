<script setup lang="ts">
const value = ref([40])

const isTooHigh = computed(() => value.value[0] > 50)
</script>

<template>
  <NFormGroup
    label="Volume"
    hint="Adjust the volume"
    :message="isTooHigh ? 'Volume is too high' : ''"
    :status="isTooHigh ? 'error' : undefined"
    :counter="{
      value: value[0],
      max: 50,
    }"
  >
    <NSlider
      v-model="value"
      :min="0"
      :max="100"
    />
  </NFormGroup>
</template>
