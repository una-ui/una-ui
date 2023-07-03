<script setup lang="ts">
const colorMode = useColorMode()
function toggleDark() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    btn-ghost
    @click="toggleDark()"
  >
    <NIcon
      icon="i-carbon-sun dark:i-carbon-moon"
    />
  </button>
</template>
