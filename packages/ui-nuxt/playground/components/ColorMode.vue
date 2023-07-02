<script setup lang="ts">
const colorMode = useColorMode()
function toggleDark() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button i-ri:sun-line flex dark-i-ri:moon-line aria-label="Toggle theme" @click="toggleDark()">
    trst
  </button>
</template>
