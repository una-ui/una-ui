<script setup lang="ts">
const progress = ref(13)

watchEffect((cleanupFn) => {
  const timer = setTimeout(() => progress.value = 66, 500)
  cleanupFn(() => clearTimeout(timer))
})

/**
 * @name NProgress
 *
 * @todo
 * - [x] Add progress functionality
 * - [x] Add progress presets
 * - [x] Add dynamic colors
 * - [x] Add dynamic sizes
 * - [x] Add progress slots
 * - [x] Add progress props
 * - [ ] Add animations
 * - [ ] Add indeterminate state
 * - [ ] Add progress documentation
 *     - [ ] Add progress markdown
 *     - [ ] Add progress examples
 */
</script>

<template>
  <NProgress
    size="xs"
    class="w-3/5"
  />
</template>
