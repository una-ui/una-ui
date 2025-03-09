<script setup lang="ts">
const props = defineProps<{
  teams: {
    name: string
    logo: string
    plan: string
  }[]
}>()
const { toast } = useToast()
const items = [
  ...props.teams.map(team => ({
    label: team.name,
    leading: team.logo,
  })),
  {},
  {
    label: 'Add New Team',
    leading: 'i-lucide-plus',
    onClick: () => {
      toast({
        title: 'New Team Added',
        description: 'Your team has been added successfully',
        leading: 'i-lucide-plus text-success',
        showProgress: true,
        progress: 'success',
      })
    },
  },
]

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
        :items
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
          <NIcon name="i-lucide-chevrons-up-down" class="ml-auto" />
        </NSidebarMenuButton>
      </NDropdownMenu>
    </NSidebarMenuItem>
  </NSidebarMenu>
</template>
