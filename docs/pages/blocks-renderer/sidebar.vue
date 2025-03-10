<script setup lang="ts">
import AppSidebar from '~/components/sidebar/basic/AppSidebar.vue'

const route = useRoute()

definePageMeta({
  layout: false,
})

const breadcrumbItems = computed(() => {
  const paths = route.path.split('/').filter(Boolean)
  return paths.slice(1).map((path, index) => ({
    label: path.charAt(0).toUpperCase() + path.slice(1),
    to: `/${paths.slice(1, index + 2).join('/')}`, // we exclude the first path for docs only
  }))
})
</script>

<template>
  <NSidebarProvider>
    <AppSidebar />

    <NSidebarInset>
      <header class="h-16 flex shrink-0 items-center justify-between gap-2 border-b transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar_wrapper:h-12">
        <div class="flex items-center gap-2 px-4">
          <NSidebarTrigger class="-ml-1" />
          <NSeparator orientation="vertical" icon class="mx-0 mr-2 h-4" />
          <NBreadcrumb
            breadcrumb-active="text-black"
            class="hidden lg:flex"
            separator="i-lucide-slash"
            :items="breadcrumbItems"
          />
        </div>
      </header>
    </NSidebarInset>
  </NSidebarProvider>
</template>
