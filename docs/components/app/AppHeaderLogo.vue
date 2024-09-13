<script setup lang="ts">
const { config } = useDocus()
const title = computed(() => config.value.header?.title || config.value.title)
</script>

<template>
  <NuxtLink
    class="navbar-logo"
    to="/"
    :aria-label="title"
  >
    <Logo />
  </NuxtLink>
</template>

<style lang="ts" scoped>
css({
  a: {
    'display': 'flex',
    'alignItems': 'center',
    'flex': 'none',

    '.logo': {
      'height': '{docus.header.logo.height}',
      'width': 'auto',
      'img, svg': {
        height: 'inherit',
      },
      '.light-img': {
        'display': 'block',
        '@dark': {
          display: 'none',
        },
      },
      '.dark-img': {
        'display': 'none',
        '@dark': {
          display: 'block',
        },
      },
    },
  },
})
</style>
