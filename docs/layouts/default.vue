<script setup lang="ts">
const top = Math.floor(Math.random() * 80) + 10
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
      height="10rem" width="10rem" :top="`${top}%`" :left="`${left}%`" blur="15rem"
    />
  </div>
</template>
