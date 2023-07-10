<script setup lang="ts">
function click(description: string) {
  alert(description)
}
</script>

<template>
  <NVInput
    input="outline-purple"
    leading="i-heroicons-hand-thumb-up-20-solid text-blue pointer-events-auto cursor-pointer active:text-green"
    trailing="i-heroicons-arrow-down-tray-20-solid text-yellow pointer-events-auto cursor-pointer active:text-lime"
    placeholder="Leading and trailing icons are clickable"
    @leading="click('leading icon is clicked')"
    @trailing="click('trailing icon is clicked')"
  />
</template>
