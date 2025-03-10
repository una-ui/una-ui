<script setup lang="ts">
const route = useRoute()

const breadcrumbItems = computed(() => {
  const paths = route.path.split('/').filter(Boolean)
  return paths.map((path, index) => ({
    label: path.charAt(0).toUpperCase() + path.slice(1),
    to: `/${paths.slice(0, index + 1).join('/')}`,
  }))
})

// we need this to be reactive to open the popover when the user clicks on the button and not just on the indicator
const isNotificationsPopoverActive = ref(false)
const isMessagesPopoverActive = ref(false)
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

        <div class="flex items-center px-4">
          <NPopover
            v-model:open="isMessagesPopoverActive"
            :_popover-content="{
              align: 'end',
              class: 'bg-muted',
            }"
          >
            <template #trigger>
              <NIndicator
                label="2"
                size="sm"
              >
                <NButton
                  :btn="isMessagesPopoverActive ? 'text-primary' : 'text-black'"
                  icon
                  square
                  label="i-lucide-message-circle"
                  @click="isMessagesPopoverActive = !isMessagesPopoverActive"
                />
              </NIndicator>
            </template>

            <h3 class="mb-2 font-medium">
              Messages
            </h3>
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <div class="h-8 w-8 flex items-center justify-center rounded-full bg-primary/10">
                  <div class="i-lucide-user text-primary" />
                </div>
                <div>
                  <p class="text-sm font-medium">
                    John Doe
                  </p>
                  <p class="text-muted-foreground text-xs">
                    Hey, can we schedule a meeting?
                  </p>
                </div>
                <span class="text-muted-foreground ml-auto text-xs">2m</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="h-8 w-8 flex items-center justify-center rounded-full bg-primary/10">
                  <div class="i-lucide-user text-primary" />
                </div>
                <div>
                  <p class="text-sm font-medium">
                    Jane Smith
                  </p>
                  <p class="text-muted-foreground text-xs">
                    The project files are ready for review
                  </p>
                </div>
                <span class="text-muted-foreground ml-auto text-xs">1h</span>
              </div>
            </div>
          </NPopover>

          <NPopover
            v-model:open="isNotificationsPopoverActive"
            :_popover-content="{
              align: 'end',
              class: 'bg-muted',
            }"
          >
            <template #trigger>
              <NIndicator
                label="1"
                size="sm"
              >
                <NButton
                  :btn="isNotificationsPopoverActive ? 'text-primary' : 'text-black'"
                  icon
                  square
                  label="i-lucide-bell"
                  @click="isNotificationsPopoverActive = !isNotificationsPopoverActive"
                />
              </NIndicator>
            </template>

            <h3 class="mb-2 font-medium">
              Notifications
            </h3>
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <div class="h-8 w-8 flex items-center justify-center rounded-full bg-primary/10">
                  <NIcon name="i-lucide-git-pull-request text-primary" />
                </div>
                <div class="min-w-0 flex-1">
                  <p class="truncate text-sm font-medium">
                    New Pull Request
                  </p>
                  <p class="text-muted-foreground truncate text-xs">
                    feat: add dashboard components #123
                  </p>
                </div>
                <span class="text-muted-foreground shrink-0 text-xs">2m</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="h-8 w-8 flex items-center justify-center rounded-full bg-primary/10">
                  <div class="i-lucide-git-commit text-primary" />
                </div>
                <div class="min-w-0 flex-1">
                  <p class="truncate text-sm font-medium">
                    Commit pushed to main
                  </p>
                  <p class="text-muted-foreground truncate text-xs">
                    fix: resolve card styling issues
                  </p>
                </div>
                <span class="text-muted-foreground shrink-0 text-xs">1h</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="h-8 w-8 flex items-center justify-center rounded-full bg-primary/10">
                  <div class="i-lucide-github text-primary" />
                </div>
                <div class="min-w-0 flex-1">
                  <p class="truncate text-sm font-medium">
                    Project milestone reached
                  </p>
                  <p class="text-muted-foreground truncate text-xs">
                    Dashboard v1.0.0 released 🎉
                  </p>
                </div>
                <span class="text-muted-foreground shrink-0 text-xs">3h</span>
              </div>
            </div>
          </NPopover>

          <NThemeSwitcher>
            <template #trigger="{ open }">
              <NButton
                :btn="open ? 'text-primary' : 'text-black'"
                icon
                square
                label="i-lucide-paintbrush"
              />
            </template>
          </NThemeSwitcher>

          <ColorMode
            btn="text-black"
          />
        </div>
      </header>

      <NuxtPage />
    </NSidebarInset>
  </NSidebarProvider>
</template>
