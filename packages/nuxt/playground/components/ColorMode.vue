<script setup lang="ts">
const colorMode = useColorMode()
function toggleDark() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <NButton
    btn="solid square"
    @click="toggleDark()"
  >
    <NIcon
      name="i-heroicons-sun-20-solid dark:i-heroicons-moon-20-solid"
    />
  </NButton>
</template>
