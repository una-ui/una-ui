<script setup lang="ts">
import AppSidebar from '~/components/sidebar/collapsible-nested/AppSidebar.vue'
</script>

<template>
  <NSidebarProvider
    :style="{
      '--sidebar-width': '350px',
    }"
  >
    <AppSidebar />
    <NSidebarInset>
      <header class="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
        <NSidebarTrigger class="-ml-1" />
        <NSeparator orientation="vertical" class="mx-0 h-4" />
        <NBreadcrumb
          :una="{
            breadcrumbSeparator: 'hidden md:block',
          }"
          :items="[
            {
              label: 'All Inboxes',
              to: '#',
              class: 'hidden md:block',
            },
            {
              label: 'Inbox',
              to: '#',
            },
          ]"
        />
      </header>
      <div class="flex flex-1 flex-col gap-4 p-4">
        <div
          v-for="index in 24"
          :key="index"
          class="aspect-video h-12 w-full rounded-lg bg-muted"
        />
      </div>
    </NSidebarInset>
  </NSidebarProvider>
</template>
