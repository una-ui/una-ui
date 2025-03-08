<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { SIDEBAR_WIDTH_MOBILE, useSidebar } from '../../composables/useSidebar'
import { cn } from '../../utils'
import Sheet from '../sheet/Sheet.vue'
import SheetContent from '../sheet/SheetContent.vue'

interface SidebarProps {
  sheet?: 'left' | 'right'
  sidebar?: 'sidebar' | 'floating' | 'inset'
  collapsible?: 'offcanvas' | 'icon' | 'none'
  class?: HTMLAttributes['class']
}
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<SidebarProps>(), {
  sheet: 'left',
  sidebar: 'sidebar',
  collapsible: 'offcanvas',
})

const { isMobile, state, openMobile, setOpenMobile } = useSidebar()
</script>

<template>
  <div
    v-if="collapsible === 'none'"
    :class="cn('sidebar-collapsible-none', props.class)"
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
        class="sidebar-mobile"
        :style="{
          '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
        }"
      >
        <div class="sidebar-mobile-inner">
          <slot />
        </div>
      </SheetContent>
    </template>
  </Sheet>

  <div
    v-else :class="cn('group peer sidebar-desktop')"
    :data-state="state"
    :data-collapsible="state === 'collapsed' ? collapsible : ''"
    :data-variant="sidebar"
    :data-side="sheet"
  >
    <!-- This is what handles the sidebar gap on desktop  -->
    <div
      :class="cn(
        'sidebar-desktop-gap',
        sidebar === 'floating' || sidebar === 'inset'
          ? 'sidebar-desktop-gap-floating'
          : 'sidebar-desktop-gap-default',
      )"
    />
    <div
      :class="cn(
        'sidebar-desktop-position',
        sheet === 'left'
          ? 'sidebar-desktop-position-left'
          : 'sidebar-desktop-position-right',
        // Adjust the padding for floating and inset variants.
        sidebar === 'floating' || sidebar === 'inset'
          ? 'sidebar-desktop-padding-floating'
          : 'sidebar-desktop-padding-default',
        props.class,
      )"
      v-bind="$attrs"
    >
      <div
        data-sidebar="sidebar"
        class="sidebar-desktop-inner"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
