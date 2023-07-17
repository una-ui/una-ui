<script setup lang="ts">
const top = Math.floor(Math.random() * 80) + 10
// return left position between 10-20 or 70-90
const left = Math.floor(Math.random() * 2) ? Math.floor(Math.random() * 10) + 10 : Math.floor(Math.random() * 20) + 70
</script>

<template>
  <div>
    <DocsPageLayout>
      <slot />
    </DocsPageLayout>

    <Ellipsis
      class="opacity-50"
      :colors="['rgba(var(--c-primary), 1)', 'rgba(var(--c-primary), 1)', 'var(--nv-c-brand-next)']"
      height="15rem" width="15rem" :top="`${top}%`" :left="`${left}%`" blur="15rem"
    />
  </div>
</template>
