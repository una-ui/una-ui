<script setup lang="ts">
const colorMode = useColorMode()
function toggleDark() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <NButton
    btn="outline-gray"
    square
    label="i-radix-icons-sun dark:i-radix-icons-moon"
    icon
    @click="toggleDark()"
  />
</template>
