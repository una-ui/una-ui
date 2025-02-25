<script setup lang="ts">
const { toast } = useToast()
</script>

<template>
  <div class="grid h-28 place-items-center">
    <NButton
      label="Show toast"
      btn="solid-white"
      @click="toast(
        {
          title: 'Success Toast',
          leading: 'i-check',
          description: 'This toast is a success message.',
        },
      )"
    />
  </div>
</template>
