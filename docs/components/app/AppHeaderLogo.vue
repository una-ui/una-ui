<script setup lang="ts">
const { config } = useDocus()
</script>

<template>
  <NuxtLink
    class="navbar-logo"
    to="/docs"
    :aria-label="title"
  >
    <Logo />
  </NuxtLink>
</template>

<style lang="ts" scoped>
css({
  a: {
    display: 'flex',
    alignItems: 'center',
    flex: 'none',

    '.logo': {
      height: '{docus.header.logo.height}',
      width: 'auto',
      'img, svg': {
        height: 'inherit',
      },
      '.light-img': {
        display: 'block',
        '@dark': {
          display: 'none'
        }
      },
      '.dark-img': {
        display: 'none',
        '@dark': {
          display: 'block'
        }
      },
    },

    '.title': {
      fontSize: '{docus.header.title.fontSize}',
      fontWeight: '{docus.header.title.fontWeight}',
      color: '{docus.header.title.color.static}',
      '&:hover': {
        color: '{docus.header.title.color.hover}',
      }
    }
  }
})
</style>
