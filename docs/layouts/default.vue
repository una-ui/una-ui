<script setup lang="ts">
// generate a random position for the ellipsis
const top = Math.floor(Math.random() * 80)
const left = Math.floor(Math.random() * 80)
</script>

<template>
  <div>
    <DocsPageLayout>
      <slot />
    </DocsPageLayout>

    <Ellipsis
      :colors="['rgba(var(--c-primary), 1)', 'rgba(var(--c-primary), 1)', 'var(--nv-c-brand-next)']"
      height="15rem" width="15rem" :top="`${top}%`" :left="`${left}%`" blur="15rem"
      style="opacity:.4"
    />
  </div>
</template>
