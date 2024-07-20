<script setup lang="ts">
const colorMode = useColorMode()
function toggleDark() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="flex items-center space-x-3 md:space-x-3.5">
    <NButton
      btn="text-gray"
      class="p-0 text-lg"
      aria-label="Color Mode"
      @click="toggleDark"
    >
      <NIcon
        name="i-radix-icons-sun dark:i-radix-icons-moon"
      />
    </NButton>
    <NThemeSwitcher />
  </div>
</template>
