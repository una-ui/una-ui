<script setup lang="ts">
const socials = ['twitter', 'facebook', 'instagram', 'tiktok', 'youtube', 'github', 'medium']
const { config } = useDocus()

const icons = computed<any>(() => {
  return Object.entries(config.value.socials || {})
    .map(([key, value]) => {
      if (typeof value === 'object') {
        return value
      }
      else if (typeof value === 'string' && value && socials.includes(key)) {
        const icon = key === 'github' ? 'radix-icons:github-logo' : key === 'twitter' ? 'hugeicons:new-twitter' : key

        return {
          href: /^https?:\/\//.test(value) ? value : `https://${key}.com/${value}`,
          icon: `${icon}`,
          label: value,
          rel: 'noopener noreferrer',
        }
      }
      else {
        return null
      }
    })
    .filter(Boolean)
})
</script>

<template>
  <div class="flex items-center">
    <NuxtLink
      v-for="icon in icons"
      :key="icon.label"
      :rel="icon.rel"
      :title="icon.label"
      :aria-label="icon.label"
      :href="icon.href"
      target="_blank"
      btn="!text-gray"
      class="p-0 text-lg"
    >
      <Icon
        v-if="icon.icon"
        class="!h-1.1em !w-1.1em"
        :name="icon.icon"
      />
    </NuxtLink>
  </div>
</template>

<style lang="ts" scoped>
css({
  a: {
    'display': 'flex',
    'color': '{color.gray.500}',
    'padding': '{space.2}',

    '@dark': {
      color: '{color.gray.400}',
    },

    '&:hover': {
      'color': '{color.gray.700}',
      '@dark': {
        color: '{color.gray.200}',
      },
    },
  },
})
</style>
