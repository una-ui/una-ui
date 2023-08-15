<script setup lang="ts">
const isVisible = ref(true)
</script>

<template>
  <div flex="~ nowrap" gap-4>
    <NIndicator indicator="solid-red" label="1" size="lg" :visible="isVisible">
      <NButton label="i-heroicons-bell group-active:i-heroicons-bell-solid" size="lg" icon btn="soft-gray square" class="group rounded-full" />
    </NIndicator>

    <NSwitch
      v-model="isVisible"
    />
  </div>
</template>
