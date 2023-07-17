<script setup lang="ts">
// generate top from 10 to 90
const location = Math.floor(Math.random() * 80) + 10
</script>

<template>
  <DocsPageLayout>
    <slot />

    <Ellipsis
      class="absolute opacity-50"
      :colors="['rgba(var(--c-primary), 1)', 'rgba(var(--c-primary), 1)', 'rgba(var(--c-primary), 1)']"
      height="15rem" width="15rem" :top="`${location}%`" :left="`${location}%`" blur="15rem"
    />
  </DocsPageLayout>
</template>
