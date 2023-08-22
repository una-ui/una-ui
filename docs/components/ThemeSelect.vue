<script setup lang="ts">
const colorMode = useColorMode()
function toggleDark() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="inline-flex pr-4 space-x-6 xl:pr-0">
    <button
      btn
      class="px-0 text-$c-gray-500 hover:text-$c-gray-700"
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
