<script setup lang="ts">
const colorMode = useColorMode()
function toggleDark() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="flex items-center pr-4 xl:pr-0">
    <button
      btn="~ base"
      class="mr-3 px-0 text-$c-gray-500 hover:text-$c-gray-700"
      aria-label="Color Mode"
      @click="toggleDark"
    >
      <NIcon
        name="i-heroicons-sun-20-solid dark:i-heroicons-moon-20-solid"
      />
    </button>
    <NThemeSwitcher />
  </div>
</template>
