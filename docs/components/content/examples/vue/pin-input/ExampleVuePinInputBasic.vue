<script setup lang="ts">
const value1 = ref<string[]>([])
const value2 = ref<string[]>([])
const value3 = ref<string[][]>([['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']])

function handleComplete(e: string[]) {
  alert(e.join(''))
}
</script>

<template>
  <div class="flex flex-wrap gap-4 overflow-x-auto">
    <NPinInput
      v-model="value1"
      placeholder="○"
      @complete="handleComplete"
    />

    <NPinInput
      v-model="value2"
      placeholder="○"
      :length="4"
      mask
      @complete="handleComplete"
    />

    <NPinInput
      :default-value="value3"
      placeholder="○"
      :length="10"
      disabled
      @complete="handleComplete"
    />
  </div>
</template>
