<script setup lang="ts">
// @ts-expect-error - module options
const colorMode = useColorMode()
function toggleDark() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button @click="toggleDark()">
    <NIcon
      icon="i-carbon-sun dark:i-carbon-moon"
      aria-label="Toggle theme"
    />
  </button>
</template>
