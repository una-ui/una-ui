<script setup lang="ts">
// generate a random position for the ellipsis between 10% and 90%
const top = Math.floor(Math.random() * 80) + 10
const left = Math.floor(Math.random() * 80) + 10
</script>

<template>
  <div>
    <DocsPageLayout>
      <slot />
    </DocsPageLayout>

    <Ellipsis
      class="opacity-70"
      :colors="['rgba(var(--c-primary), 1)', 'rgba(var(--c-primary), 1)', 'var(--nv-c-brand-next)']"
      height="15rem" width="15rem" :top="`${top}%`" :left="`${left}%`" blur="15rem"
    />
  </div>
</template>
