<script setup lang="ts">
defineProps<{
  user: {
    name: string
    email: string
    avatar: string
  }
}>()

const { isMobile } = useSidebar()
</script>

<template>
  <NSidebarMenu>
    <NSidebarMenuItem>
      <NDropdownMenu>
        <NDropdownMenuTrigger as-child>
          <NSidebarMenuButton
            size="lg"
            class="data-[state=open]:text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent"
          >
            <NAvatar class="h-8 w-8 rounded-lg">
              <NAvatarImage :src="user.avatar" :alt="user.name" />
              <NAvatarFallback class="rounded-lg">
                CN
              </NAvatarFallback>
            </NAvatar>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-semibold">{{ user.name }}</span>
              <span class="truncate text-xs">{{ user.email }}</span>
            </div>
            <NIcon name="i-lucide-chevron-down" class="ml-auto size-4" />
          </NSidebarMenuButton>
        </NDropdownMenuTrigger>
        <NDropdownMenuContent
          class="min-w-56 w-[--reka-dropdown-menu-trigger-width] rounded-lg"
          :side="isMobile ? 'bottom' : 'right'"
          align="end"
          :side-offset="4"
        >
          <NDropdownMenuLabel class="p-0 font-normal">
            <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <NAvatar class="h-8 w-8 rounded-lg">
                <NAvatarImage :src="user.avatar" :alt="user.name" />
                <NAvatarFallback class="rounded-lg">
                  CN
                </NAvatarFallback>
              </NAvatar>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">{{ user.name }}</span>
                <span class="truncate text-xs">{{ user.email }}</span>
              </div>
            </div>
          </NDropdownMenuLabel>
          <NDropdownMenuSeparator />
          <NDropdownMenuGroup>
            <NDropdownMenuItem>
              <NIcon name="i-lucide-sparkles" />
              Upgrade to Pro
            </NDropdownMenuItem>
          </NDropdownMenuGroup>
          <NDropdownMenuSeparator />
          <NDropdownMenuGroup>
            <NDropdownMenuItem>
              <NIcon name="i-lucide-badge-check" />
              Account
            </NDropdownMenuItem>
            <NDropdownMenuItem>
              <NIcon name="i-lucide-banknote" />
              Billing
            </NDropdownMenuItem>
            <NDropdownMenuItem>
              <NIcon name="i-lucide-bell" />
              Notifications
            </NDropdownMenuItem>
          </NDropdownMenuGroup>
          <NDropdownMenuSeparator />
          <NDropdownMenuItem>
            <NIcon name="i-lucide-log-out" />
            Log out
          </NDropdownMenuItem>
        </NDropdownMenuContent>
      </NDropdownMenu>
    </NSidebarMenuItem>
  </NSidebarMenu>
</template>
