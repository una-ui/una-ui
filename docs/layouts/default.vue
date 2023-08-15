<script setup lang="ts">
const location = Math.floor(Math.random() * 80) + 10
</script>

<template>
  <div>
    <DocsPageLayout>
      <slot />
    </DocsPageLayout>

    <Ellipsis
      class="absolute opacity-50"
      :colors="['rgba(var(--nv-primary), .9)', 'rgba(var(--nv-primary), .5)', 'rgba(var(--nv-primary), .9)']"
      height="15rem" width="15rem" :top="`${location}%`" :left="`${location}%`" blur="15rem"
    />
  </div>
</template>
