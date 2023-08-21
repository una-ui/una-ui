<script setup lang="ts">
const route = useRoute()
const { navBottomLink } = useContentHelpers()
const { navigation } = useContent()
const { config } = useDocus()

const hasNavigation = computed(() => !!config.value.aside?.level)

const filtered = computed(() => config.value.header?.exclude || [])

const tree = computed(() => {
  return (navigation.value || []).filter((item: any) => {
    if (filtered.value.includes(item._path as never))
      return false
    return true
  })
})

const isActive = (link: any) => (link.exact ? route.fullPath === link._path : route.fullPath.startsWith(link._path))
</script>

<template>
  <nav v-if="hasNavigation">
    <ul class="mr-4 inline-flex space-x-4">
      <li
        v-for="link in tree"
        :key="link._path"
      >
        <NButton
          :to="link.redirect ? link.redirect : navBottomLink(link)"
          :btn="isActive(link) ? 'text' : '~'"
          class="px-0 py-1"
          :class="{
            'text-$c-gray-500 hover:text-$c-gray-700': !isActive(link),
          }"
        >
          <Icon
            v-if="link.icon && config?.header?.showLinkIcon"
            :name="link.icon"
          />
          {{ link.title }}
        </NButton>
      </li>
    </ul>
  </nav>
</template>
