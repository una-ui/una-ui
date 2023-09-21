<script setup lang="ts">
</script>

<template>
  <span class="from-primary to-$c-brand-next bg-gradient-to-r bg-clip-text text-5xl font-bold text-transparent">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </span>
</template>
