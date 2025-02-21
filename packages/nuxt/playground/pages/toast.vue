<script setup lang="ts">
const { toast } = useToast()

/**
 * @name NToast
 *
 * @todo
 * - [x] Add toast functionality
 *     - [x] Add Toasts.vue to app for Button functionality
 *         - [x] Add list of toasts
 *     - [x] Add NToast general functionality
 * - [x] Add useToast composable
 * - [x] Add toast presets
 * - [x] Add dynamic colors
 * - [x] Add toast slots
 * - [x] Add toast props
 * - [x] Add toast documentation
 *     - [x] Add toast markdown
 *     - [x] Add toast examples
 */
</script>

<template>
  <div class="space-x-2">
    <NButton
      btn="solid-white"
      label="Show toast"
      @click="toast.error('Uh oh! Something went wrong.', {
        description: 'There was a problem with your request.',
        showProgress: true,
        actions: [
          {
            label: 'Try again',
            size: 'xs',
            altText: 'Text',
          },
        ],
        closable: true,
      })"
    />

    <NButton
      btn="solid-white"
      label="Show toast"
      @click="toast(
        {
          toast: 'solid-warning',
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          actions: [
            {
              label: 'Try again',
              size: 'xs',
              altText: 'Text',
              btn: 'solid-warning',
            },
          ],
        },
      )"
    />

    <NButton
      btn="solid-white"
      label="Show toast"
      @click="toast(
        {
          toast: 'solid-white',
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          closable: true,
        },
      )"
    />
  </div>
</template>
