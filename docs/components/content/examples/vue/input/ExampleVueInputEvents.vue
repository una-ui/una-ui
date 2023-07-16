<script setup lang="ts">
function click(description: string) {
  // eslint-disable-next-line no-alert
  alert(description)
}
</script>

<template>
  <NInput
    input="outline-purple"
    leading="i-heroicons-hand-thumb-up-20-solid active:scale-120 text-blue pointer-events-auto cursor-pointer active:text-green"
    trailing="i-heroicons-arrow-down-tray-20-solid active:scale-90 text-yellow pointer-events-auto cursor-pointer active:text-lime"
    placeholder="Leading and trailing icons are clickable"
    @leading="click('leading icon is clicked')"
    @trailing="click('trailing icon is clicked')"
  />
</template>
