<script setup lang="ts">
const colorMode = useColorMode()
function toggleDark() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <NButton
    btn="ghost-gray"
    square
    icon
    label="i-radix-icons-sun dark:i-radix-icons-moon"
    @click="toggleDark()"
  />
</template>
