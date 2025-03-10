<script setup lang="ts">
defineProps<{
  user: {
    name: string
    email: string
    avatar: string
  }
}>()

const navs = [
  {
    label: 'Upgrade to Pro',
    leading: 'i-lucide-sparkles',
  },
  {},
  {
    label: 'Account',
    leading: 'i-lucide-badge-check',
  },
  {
    label: 'Billing',
    leading: 'i-lucide-banknote',
  },
  {
    label: 'Notifications',
    leading: 'i-lucide-bell',
  },
  {
    label: 'Log out',
    leading: 'i-lucide-log-out',
  },
]

const { isMobile } = useSidebar()
</script>

<template>
  <NSidebarMenu>
    <NSidebarMenuItem>
      <NDropdownMenu
        :items="navs"
        :_dropdown-menu-content="{
          class: 'min-w-56 w-[--reka-dropdown-menu-trigger-width] rounded-lg',
          align: 'start',
          side: isMobile ? 'bottom' : 'right',
          sideOffset: 4,
        }"
        :_dropdown-menu-label="{
          class: 'p-0 font-normal',
        }"
      >
        <NSidebarMenuButton
          size="lg"
          class="md:h-8 data-[state=open]:bg-sidebar-accent md:p-0 data-[state=open]:text-sidebar-accent-foreground"
        >
          <NAvatar
            square="8"
            rounded="lg"
            :src="user.avatar"
            :alt="user.name"
          />
          <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-semibold">{{ user.name }}</span>
            <span class="truncate text-xs">{{ user.email }}</span>
          </div>
          <NIcon name="i-lucide-chevron-down" class="ml-auto size-4" />
        </NSidebarMenuButton>

        <template #menu-label>
          <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <NAvatar
              square="8"
              rounded="lg"
              :src="user.avatar"
              :alt="user.name"
            />
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-semibold">{{ user.name }}</span>
              <span class="truncate text-xs">{{ user.email }}</span>
            </div>
          </div>
        </template>
      </NDropdownMenu>
    </NSidebarMenuItem>
  </NSidebarMenu>
</template>
