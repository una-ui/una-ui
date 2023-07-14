<script setup lang="ts">
const colorMode = useColorMode()
function onClick() {
  const values = ['system', 'light', 'dark']
  const index = values.indexOf(colorMode.preference)
  const next = (index + 1) % values.length

  colorMode.preference = values[next]
}
</script>

<template>
  <div class="flex items-center space-x-2">
    <button
      btn="base"
      class="text-$c-gray-500 hover:text-$c-gray-700"
      aria-label="Color Mode"
      @click="onClick"
    >
      <ColorScheme>
        <NIcon
          v-if="colorMode.preference === 'dark'"
          name="i-heroicons-moon-20-solid"
        />
        <NIcon
          v-else-if="colorMode.preference === 'light'"
          name="i-heroicons-sun-20-solid"
        />
        <NIcon
          v-else
          name="i-heroicons-computer-desktop-20-solid"
        />
      </ColorScheme>
    </button>
    <NThemeSwitcher />
  </div>
</template>
