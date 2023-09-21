<script setup lang="ts">
</script>

<template>
  <span class="from-primary to-$c-brand-next bg-gradient-to-l bg-clip-text text-transparent">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </span>
</template>
