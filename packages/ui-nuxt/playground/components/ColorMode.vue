<script setup lang="ts">
const colorMode = useColorMode()
function toggleDark() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <NButton
    btn="solid"
    @click="toggleDark()"
  >
    <NIcon
      name="i-carbon-sun dark:i-carbon-moon"
    />
  </NButton>
</template>
