<script setup lang="ts">
const value = ref('')
</script>

<template>
  <div class="grid max-w-xl gap-2">
    <NFormGroup label="Resizable both">
      <NInput
        v-model="value"
        type="textarea"
        placeholder="Write your message here..."
        resize
      />
    </NFormGroup>

    <NFormGroup label="Resizable horizontal">
      <NInput
        v-model="value"
        type="textarea"
        placeholder="Write your message here..."
        resize="x"
      />
    </NFormGroup>

    <NFormGroup label="Resizable vertical">
      <NInput
        v-model="value"
        type="textarea"
        placeholder="Write your message here..."
        resize="y"
      />
    </NFormGroup>
  </div>
</template>
