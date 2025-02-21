<script setup lang="ts">
import { toast } from 'vue-sonner'
</script>

<template>
  <div class="flex flex-col gap-2">
    <!-- Default toast -->
    <NButton
      btn="solid-white"
      @click="() => {
        toast('Hello, world!', {
          description: 'This is a description',
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo'),
          },
        })
      }"
    >
      Default Toast
    </NButton>

    <!-- Success toast with action -->
    <NButton
      btn="solid-white"
      @click="() => {
        toast.success('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo'),
          },
        })
      }"
    >
      Success Toast
    </NButton>

    <!-- Error toast -->
    <NButton
      btn="solid-white"
      @click="() => {
        toast.error('Failed to save changes', {
          description: 'Please try again later',
        })
      }"
    >
      Error Toast
    </NButton>

    <!-- Loading toast -->
    <NButton
      btn="solid-white"
      @click="() => {
        const toastId = toast.loading('Uploading file...', {
          description: 'This may take a few seconds',
        })

        // Simulate completion after 2 seconds
        useTimeoutFn(() => {
          toast.success('File uploaded successfully', { id: toastId })
        }, 2000)
      }"
    >
      Loading Toast
    </NButton>

    <!-- Info toast with custom duration -->
    <NButton
      btn="solid-white"
      @click="() => {
        toast.info('Did you know?', {
          description: 'You can customize toast duration',
          duration: 5000,
        })
      }"
    >
      Info Toast
    </NButton>

    <!-- Warning toast with multiple actions -->
    <NButton
      btn="solid-white"
      @click="() => {
        toast.warning('Unsaved changes', {
          description: 'You have unsaved changes. Save before leaving?',
          action: {
            label: 'Save',
            onClick: () => console.log('Saved'),
          },
          cancel: {
            label: 'Discard',
            onClick: () => console.log('Discarded'),
          },
        })
      }"
    >
      Warning Toast
    </NButton>
  </div>
</template>
