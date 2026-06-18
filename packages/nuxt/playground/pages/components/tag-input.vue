<script setup lang="ts">
const modelValue = ref(['Apple', 'Banana'])
</script>

<template>
  <NTagsInput v-model="modelValue" class="w-500px" />
</template>
