<script setup lang="ts">
</script>

<template>
  <span class="from-primary to-$c-brand-next bg-gradient-to-r bg-clip-text text-5xl text-transparent font-bold">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </span>
</template>
