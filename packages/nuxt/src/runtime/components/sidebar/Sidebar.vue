<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { createReusableTemplate } from '@vueuse/core'
import { SIDEBAR_WIDTH_MOBILE, useSidebar } from '../../composables/useSidebar'
import { cn } from '../../utils'
import Sheet from '../sheet/Sheet.vue'
import SheetContent from '../sheet/SheetContent.vue'
import SidebarContent from './SidebarContent.vue'
import SidebarFooter from './SidebarFooter.vue'

import SidebarHeader from './SidebarHeader.vue'

interface SidebarProps {
  sheet?: 'left' | 'right'
  sidebar?: 'sidebar' | 'floating' | 'inset'
  collapsible?: 'offcanvas' | 'icon' | 'none'
  class?: HTMLAttributes['class']
  rail?: boolean
}
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<SidebarProps>(), {
  sheet: 'left',
  sidebar: 'sidebar',
  collapsible: 'offcanvas',
  rail: true,
})

const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

const [DefineSlot, ReuseSlot] = createReusableTemplate()
</script>

<template>
  <DefineSlot>
    <slot>
      <SidebarHeader>
        <slot name="header" />
      </SidebarHeader>
      <SidebarContent>
        <slot name="content" />
      </SidebarContent>
      <SidebarFooter>
        <slot name="footer" />
      </SidebarFooter>
      <NSidebarRail v-if="rail" />
    </slot>
  </DefineSlot>

  <div
    v-if="collapsible === 'none'"
    :class="cn('sidebar-collapsible-none', props.class)"
    v-bind="$attrs"
  >
    <ReuseSlot />
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
          <ReuseSlot />
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
        <ReuseSlot />
      </div>
    </div>
  </div>
</template>
