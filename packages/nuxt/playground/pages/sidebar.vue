<script setup lang="ts">
</script>

<template>
  <NSidebarProvider>
    <AppSidebar />
    <NSidebarInset>
      <header class="group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 h-16 flex shrink-0 items-center gap-2 transition-[width,height] ease-linear">
        <div class="flex items-center gap-2 px-4">
          <NSidebarTrigger class="-ml-1" />
          <NSeparator orientation="vertical" class="mr-2 h-4" />
          <NBreadcrumbRoot>
            <NBreadcrumbList>
              <NBreadcrumbItem class="hidden md:block">
                <NBreadcrumbLink href="#">
                  Building Your Application
                </NBreadcrumbLink>
              </NBreadcrumbItem>
              <NBreadcrumbSeparator class="hidden md:block" />
              <NBreadcrumbItem>
                <NBreadcrumbPage>Data Fetching</NBreadcrumbPage>
              </NBreadcrumbItem>
            </NBreadcrumbList>
          </NBreadcrumbRoot>
        </div>
      </header>
      <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div class="grid auto-rows-min gap-4 md:grid-cols-3">
          <div class="bg-muted/50 aspect-video rounded-xl" />
          <div class="bg-muted/50 aspect-video rounded-xl" />
          <div class="bg-muted/50 aspect-video rounded-xl" />
        </div>
        <div class="bg-muted/50 min-h-[100vh] flex-1 rounded-xl px-2 md:min-h-min" />
      </div>
    </NSidebarInset>
  </NSidebarProvider>
</template>
