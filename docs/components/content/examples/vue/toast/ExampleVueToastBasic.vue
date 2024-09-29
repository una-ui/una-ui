<script setup lang="ts">
const toast = useToast()
</script>

<template>
  <NToaster />
  <div class="grid h-28 place-items-center">
    <NButton
      label="Show toast"
      btn="solid-white"
      @click="toast.add(
        {
          title: 'Example Toast',
          description: 'This toast automatically closes.',
        },
      )"
    />
  </div>
</template>
