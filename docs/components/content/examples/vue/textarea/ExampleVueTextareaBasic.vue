<script setup lang="ts">
const value = ref('')
</script>

<template>
  <div class="max-w-lg">
    <NInput
      v-model="value"
      type="textarea"
      placeholder="Write your message here..."
    />
  </div>
</template>
