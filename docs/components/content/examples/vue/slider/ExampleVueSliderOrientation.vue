<script setup lang="ts">
const value = ref([30])
</script>

<template>
  <div class="flex flex-col items-center space-y-4">
    <NFormGroup
      label="Vertical Slider"
      class="h-80"
    >
      <NSlider
        v-model="value"
        orientation="vertical"
        :min="0"
        :max="100"
        :step="5"
      />
    </NFormGroup>
    <NFormGroup
      label="Horizontal Slider"
      class="w-80"
    >
      <NSlider
        v-model="value"
        orientation="horizontal"
        :min="0"
        :max="100"
        :step="5"
      />
    </NFormGroup>
  </div>
</template>
