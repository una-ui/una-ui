<script setup lang="ts">
const { toast } = useToast()
</script>

<template>
  <NToaster />
  <div class="grid h-28 place-items-center">
    <NButton
      label="Show toast"
      btn="solid-white"
      @click="toast(
        {
          title: 'Example Toast',
          duration: 5 * 1000,
          showProgress: true,
          description: 'This toast automatically closes.',
        },
      )"
    />
  </div>
</template>
