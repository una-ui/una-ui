<script setup lang="ts">
const value = ref('')
</script>

<template>
  <div class="max-w-lg">
    <NInput
      v-model="value"
      type="textarea"
      placeholder="Write your message here..."
      :rows="10"
      :cols="20"
    />
  </div>
</template>
