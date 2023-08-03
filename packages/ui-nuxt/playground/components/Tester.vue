<script setup lang="ts">
const enabled = ref(false)
</script>

<template>
  <div grid="~ cols-2 sm:cols-3" gap-4>
    <NButton
      label="Button Solid"
      btn="solid"
    />

    <NButton
      label="Button Solid"
    />

    <NButton
      label="Button Outline"
      btn="outline"
    />

    <NButton
      label="Button Soft"
      btn="soft"
    />

    <NButton
      label="Button Ghost"
      btn="ghost"
    />

    <NButton
      label="Button Link"
      btn="link"
    />

    <NButton
      label="Button text"
      btn="text"
    />

    <NButton
      label="Button Base"
      btn="soft"
    />

    <NSwitch
      v-model="enabled"
      type="short"
      switch="orange focus"
    />

    <NSwitch
      v-model="enabled"
    />
  </div>
</template>
