<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { SIDEBAR_WIDTH_MOBILE, useSidebar } from '../../composables/useSidebar'
import { cn } from '../../utils'
import Sheet from '../sheet/Sheet.vue'
import SheetContent from '../sheet/SheetContent.vue'

interface SidebarProps {
  sheet?: 'left' | 'right'
  variant?: 'sidebar' | 'floating' | 'inset'
  collapsible?: 'offcanvas' | 'icon' | 'none'
  class?: HTMLAttributes['class']
}
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<SidebarProps>(), {
  side: 'left',
  variant: 'sidebar',
  collapsible: 'offcanvas',
})

const { isMobile, state, openMobile, setOpenMobile } = useSidebar()
</script>

<template>
  <div
    v-if="collapsible === 'none'"
    :class="cn('flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </div>

  <Sheet v-else-if="isMobile" :open="openMobile" v-bind="$attrs" @update:open="setOpenMobile">
    <template #root>
      <SheetContent
        data-sidebar="sidebar"
        data-mobile="true"
        :sheet
        class="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
        :style="{
          '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
        }"
      >
        <div class="h-full w-full flex flex-col">
          <slot />
        </div>
      </SheetContent>
    </template>
  </Sheet>

  <div
    v-else class="group peer hidden md:block"
    :data-state="state"
    :data-collapsible="state === 'collapsed' ? collapsible : ''"
    :data-variant="variant"
    :data-side="sheet"
  >
    <!-- This is what handles the sidebar gap on desktop  -->
    <div
      :class="cn(
        'duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear',
        'group-data-[collapsible=offcanvas]:w-0',
        'group-data-[side=right]:rotate-180',
        variant === 'floating' || variant === 'inset'
          ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon) + 1rem)]'
          : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]',
      )"
    />
    <div
      :class="cn(
        'duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex',
        sheet === 'left'
          ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
          : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
        // Adjust the padding for floating and inset variants.
        variant === 'floating' || variant === 'inset'
          ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon) + 1rem + 2px)]'
          : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l',
        props.class,
      )"
      v-bind="$attrs"
    >
      <div
        data-sidebar="sidebar"
        class="h-full w-full flex flex-col bg-sidebar text-sidebar-foreground group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
