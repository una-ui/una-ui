<script setup lang="ts">
const colorMode = useColorMode()
function toggleDark() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <NButton
    btn="outline-gray"

    label="i-radix-icons-moon dark:i-radix-icons-sun"
    icon square
    @click="toggleDark()"
  />
</template>
