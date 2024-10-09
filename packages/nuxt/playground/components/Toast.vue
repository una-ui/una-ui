<script setup lang="ts">
const toast = useToast()

const actions = ref([{
  label: 'Try again',
  // click: () => alert('Lets gooo'),
  // altText: 'Hello',
}])

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
  <NButton
    label="Show toast"
    @click="toast.add(
      {
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
        actions,
        closable: true,
      },
    )"
  />
</template>
