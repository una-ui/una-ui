<script setup lang="ts">
const value = ref([80])
const isDisabled = ref(true)
</script>

<template>
  <div class="flex flex-col space-y-4">
    <NCheckbox
      v-model:checked="isDisabled"
      label="Disable"
    />

    <NSlider
      v-model="value"
      :disabled="isDisabled"
    />
  </div>
</template>
