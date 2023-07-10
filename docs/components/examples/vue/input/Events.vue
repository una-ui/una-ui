<script setup lang="ts">
function click(description: string) {
  alert(description)
}
</script>

<template>
  <div grid="~ cols-2" gap-4>
    <NVInput
      input="outline-purple"
      leading="i-heroicons-hand-thumb-up-20-solid text-blue pointer-events-auto cursor-pointer active:text-green"
      trailing="i-heroicons-arrow-down-tray-20-solid text-yellow pointer-events-auto cursor-pointer active:text-lime"
      :nv="{
        inputWrapper: 'col-span-2',
      }"
      placeholder="Leading and trailing icons are clickable"
      @leading="click('leading icon is clicked')"
      @trailing="click('trailing icon is clicked')"
    />
  </div>
</template>
