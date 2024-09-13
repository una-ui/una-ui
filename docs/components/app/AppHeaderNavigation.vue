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

const isActive = (link: any): boolean => (link.exact ? route.fullPath === link._path : route.fullPath.startsWith(link._path))
</script>

<template>
  <nav class="hidden lg:block">
    <ul v-if="hasNavigation" class="mr-2 inline-flex items-center space-x-6">
      <li
        v-for="link in tree"
        :key="link._path"
      >
        <NButton
          :to="link.redirect ? link.redirect : navBottomLink(link)"
          :btn="isActive(link) ? 'text' : '~'"
          class="p-1 font-medium"
          :class="{
            'text-gray-500 dark:text-gray-400 hover:text-$c-gray-700': !isActive(link),
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

    <AppPackageNavigation />
  </nav>
</template>
