<script setup lang="ts">
const route = useRoute()

const breadcrumbItems = computed(() => {
  const paths = route.path.split('/').filter(Boolean)
  return paths.map((path, index) => ({
    label: path.charAt(0).toUpperCase() + path.slice(1),
    to: `/${paths.slice(0, index + 1).join('/')}`,
  }))
})
</script>

<template>
  <NSidebarProvider>
    <AppSidebar />
    <NSidebarInset>
      <header class="group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 h-16 flex shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
        <div class="flex items-center gap-2 px-4">
          <NSidebarTrigger class="-ml-1" />
          <NSeparator orientation="vertical" class="mx-0 mr-2 h-4" />
          <NBreadcrumb
            breadcrumb-active="text-black"
            :items="breadcrumbItems"
          />
        </div>
      </header>

      <NuxtPage />
    </NSidebarInset>
  </NSidebarProvider>
</template>
