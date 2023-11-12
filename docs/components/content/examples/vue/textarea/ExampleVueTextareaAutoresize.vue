<script setup lang="ts">
import { ref } from 'vue'

const value = ref('Line 1\nLine 2\nLine 3\nLine 4\nLine 5\nLine 6\nLine 7\nLine 8\nLine 9\nLine 10')
</script>

<template>
  <div class="max-w-lg">
    <NInput
      v-model="value"
      type="textarea"
      placeholder="Write your message here..."
      autoresize
    />
  </div>
</template>
