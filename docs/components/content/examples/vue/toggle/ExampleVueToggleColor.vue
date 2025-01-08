<script setup lang="ts">
const toggle = ref(true)
</script>

<template>
  <div class="flex gap-4">
    <NToggle
      v-model:pressed="toggle"
      :label="toggle ? 'i-radix-icons-star-filled' : 'i-radix-icons-star'"
      toggle-on="solid-blue"
      toggle-off="soft-gray"
    />

    <NToggle
      label="i-radix-icons-font-italic"
      :default-value="true"
      toggle-on="solid-orange"
      toggle-off="soft-gray"
    />

    <NToggle
      label="i-radix-icons-underline"
      :default-value="true"
      toggle-on="soft-green"
      toggle-off="outline-gray"
    />

    <NToggle
      label="i-radix-icons-strikethrough"
      :default-value="true"
      toggle-on="outline-yellow"
      toggle-off="text-muted"
    />

    <NToggle
      label="i-radix-icons-code"
      :default-value="true"
      toggle-on="soft-red"
      toggle-off="outline-gray"
    />
  </div>
</template>
