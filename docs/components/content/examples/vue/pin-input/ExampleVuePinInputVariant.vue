<script setup lang="ts">
const value = ref(['1', '2', '', '4', '5', ''])
</script>

<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <NPinInput
      v-model="value"
      placeholder="•"
      pin-input="outline-primary"
    />

    <NPinInput
      v-model="value"
      placeholder="•"
      pin-input="outline-orange"
    />

    <NPinInput
      v-model="value"
      placeholder="•"
      pin-input="outline-amber"
    />

    <NPinInput
      v-model="value"
      placeholder="•"
      pin-input="outline-indigo"
    />

    <NPinInput
      v-model="value"
      placeholder="•"
      pin-input="solid-lime"
    />

    <NPinInput
      v-model="value"
      placeholder="•"
      pin-input="solid-red"
    />
  </div>
</template>
