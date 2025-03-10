<script setup lang="ts">
const value = ref([0])
/**
 * @name NSlider
 *
 * @todo
 * - [x] Add slider functionality
 * - [x] Add slider presets
 * - [x] Add dynamic colors
 * - [x] Add dynamic sizes
 * - [x] NFormGroup integration
 * - [ ] NFormGroup status integration ️🚧
 * - [x] Orientation (vertical, horizontal)
 * - [x] Add disabled state
 * - [x] Add slider slots
 * - [x] Add slider props
 * - [x] Add slider documentation
 *     - [x] Add slider markdown
 *     - [x] Add slider examples
 */
</script>

<template>
  <NFormGroup
    label="Volume"
    hint="Adjust the volume"
    message="Volume is too high"
    class="w-1/2"
    :counter="{
      value: value[0],
      max: 80,
    }"
  >
    <NSlider
      v-model="value"
      :min="0"
      :max="100"
    />
  </NFormGroup>
</template>
