<script setup lang="ts">
const props = defineProps<{
  teams: {
    name: string
    logo: Component
    plan: string
  }[]
}>()

const { isMobile } = useSidebar()
const activeTeam = ref(props.teams[0])
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
            <div class="text-sidebar-primary-foreground aspect-square square-8 flex items-center justify-center rounded-lg bg-sidebar-primary">
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
        </NDropdownMenuTrigger>
        <NDropdownMenuContent
          class="min-w-56 w-[--reka-dropdown-menu-trigger-width] rounded-lg"
          align="start"
          :side="isMobile ? 'bottom' : 'right'"
          :side-offset="4"
        >
          <NDropdownMenuLabel class="text-xs text-muted">
            Teams
          </NDropdownMenuLabel>
          <NDropdownMenuItem
            v-for="(team, index) in teams"
            :key="team.name"
            class="gap-2 p-2"
            @click="activeTeam = team"
          >
            <div class="square-6 flex items-center justify-center border rounded-sm">
              <NIcon :name="team.logo" class="square-4 shrink-0" />
            </div>
            {{ team.name }}
            <NDropdownMenuShortcut>⌘{{ index + 1 }}</NDropdownMenuShortcut>
          </NDropdownMenuItem>
          <NDropdownMenuSeparator />
          <NDropdownMenuItem class="gap-2 p-2">
            <div class="square-6 flex items-center justify-center border rounded-md bg-background">
              <NIcon name="i-lucide-plus" class="square-4" />
            </div>
            <div class="text-muted font-medium">
              Add team
            </div>
          </NDropdownMenuItem>
        </NDropdownMenuContent>
      </NDropdownMenu>
    </NSidebarMenuItem>
  </NSidebarMenu>
</template>
