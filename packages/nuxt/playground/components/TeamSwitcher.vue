<script setup lang="ts">
const props = defineProps<{
  teams: {
    name: string
    logo: string
    plan: string
  }[]
}>()

const { isMobile } = useSidebar()
const activeTeam = ref(props.teams[0])
</script>

<template>
  <NSidebarMenu>
    <NSidebarMenuItem>
      <NDropdownMenu
        :_dropdownMenuContent="{
          class: 'min-w-56 w-[--reka-dropdown-menu-trigger-width] rounded-lg',
          align: 'start',
          side: isMobile ? 'bottom' : 'right',
          sideOffset: 4,
        }"
      >
        <NSidebarMenuButton
          size="lg"
          class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div class="aspect-square flex items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground square-8">
            <NIcon :name="activeTeam.logo" class="square-4" />
          </div>
          <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-semibold">
              {{ activeTeam.name }}
            </span>
            <span class="truncate text-xs">{{ activeTeam.plan }}</span>
          </div>
          <NIcon name="i-lucide-chevron-down" class="ml-auto" />
        </NSidebarMenuButton>

        <template #content>
          <NDropdownMenuLabel size="xs" class="text-muted">
            Teams
          </NDropdownMenuLabel>
          <NDropdownMenuItem
            v-for="(team, index) in teams"
            :key="team.name"
            class="gap-2 p-2"
            @click="activeTeam = team"
          >
            <div class="flex items-center justify-center border rounded-sm square-6">
              <NIcon :name="team.logo" class="shrink-0 square-4" />
            </div>
            {{ team.name }}
            <NDropdownMenuShortcut>⌘{{ index + 1 }}</NDropdownMenuShortcut>
          </NDropdownMenuItem>

          <NDropdownMenuSeparator />

          <NDropdownMenuItem class="gap-2 p-2">
            <div class="flex items-center justify-center border rounded-md bg-background square-6">
              <NIcon name="i-lucide-plus" class="square-4" />
            </div>
            <div class="text-muted font-medium">
              Add team
            </div>
          </NDropdownMenuItem>
        </template>
      </NDropdownMenu>
    </NSidebarMenuItem>
  </NSidebarMenu>
</template>
