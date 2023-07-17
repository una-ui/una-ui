<script setup lang="ts">
// generate top from 10 to 90
const top = Math.floor(Math.random() * 80) + 10
// generate left from 0 to 15 or 85 to 100
const left = Math.floor(Math.random() * 2) * 85 + Math.floor(Math.random() * 15)
</script>

<template>
  <div>
    <DocsPageLayout>
      <slot />
    </DocsPageLayout>

    <Ellipsis
      class="absolute opacity-50"
      :colors="['rgba(var(--c-primary), 1)', 'rgba(var(--c-primary), 1)', 'var(--nv-c-brand-next)']"
      height="15rem" width="15rem" :top="`${top}%`" :left="`${left}%`" blur="15rem"
    />
  </div>
</template>
