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
        <Icon
          v-if="colorMode.preference === 'dark'"
          name="uil:moon"
        />
        <Icon
          v-else-if="colorMode.preference === 'light'"
          name="uil:sun"
        />
        <Icon
          v-else
          name="uil:desktop"
        />
      </ColorScheme>
    </button>

    <button btn="solid">
      test
    </button>
  </div>
</template>
