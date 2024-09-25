<script setup lang="ts">
const value = ref([40])

const multipleValue = ref([40, 55, 75])
</script>

<template>
  <div class="grid cols-1 gap-8 py-4">
    <NFormGroup
      label="Step size 10"
      :message="value.toString()"
    >
      <NSlider
        v-model="value"
        :step="10"
      />
    </NFormGroup>

    <NFormGroup
      label="Multiple Values"
      :message="multipleValue"
    >
      <NSlider
        v-model="multipleValue"
        :step="10"
        :min-steps-between-thumbs="1"
      />
    </NFormGroup>
  </div>
</template>
