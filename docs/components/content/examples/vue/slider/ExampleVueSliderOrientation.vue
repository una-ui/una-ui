<script setup lang="ts">
const value = ref([40])
</script>

<template>
  <div>
    <NFormGroup
      class="h-50"
    >
      <NSlider
        v-model="value"
        orientation="vertical"
      />
    </NFormGroup>
    <NFormGroup
      class="w-50"
    >
      <NSlider
        v-model="value"
        orientation="horizontal"
      />
    </NFormGroup>
  </div>
</template>
