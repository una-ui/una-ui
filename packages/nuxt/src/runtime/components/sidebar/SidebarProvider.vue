<script setup lang="ts">
import type { Ref } from 'vue'
import type { NSidebarProviderProps } from '../../types'
import { useAppConfig, useCookie } from '#app'
import { useEventListener, useMediaQuery, useVModel } from '@vueuse/core'
import { TooltipProvider } from 'reka-ui'
import { computed, ref } from 'vue'
import { provideSidebarContext } from '../../composables/useSidebar'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NSidebarProviderProps>(), {
  defaultOpen: true,
  open: undefined,
})

const emits = defineEmits<{
  'update:open': [open: boolean]
}>()

const { una } = useAppConfig()
const sidebarConfig = computed(() => una.sidebar)

const isMobile = useMediaQuery('(max-width: 768px)')
const openMobile = ref(false)

const openCookie = useCookie(sidebarConfig.value.cookieName, {
  maxAge: sidebarConfig.value.cookieMaxAge,
  default: () => props.defaultOpen ?? false,
})

const open = useVModel(props, 'open', emits, {
  defaultValue: openCookie.value,
  passive: (props.open === undefined) as false,
}) as Ref<boolean>

function setOpen(value: boolean) {
  open.value = value // emits('update:open', value)

  // This sets the cookie to keep the sidebar state.
  openCookie.value = open.value
}

function setOpenMobile(value: boolean) {
  openMobile.value = value
}

// Helper to toggle the sidebar.
function toggleSidebar() {
  return isMobile.value ? setOpenMobile(!openMobile.value) : setOpen(!open.value)
}

useEventListener('keydown', (event: KeyboardEvent) => {
  if (event.key === sidebarConfig.value.keyboardShortcut && (event.metaKey || event.ctrlKey)) {
    event.preventDefault()
    toggleSidebar()
  }
})

// We add a state so that we can do data-state="expanded" or "collapsed".
// This makes it easier to style the sidebar with Tailwind classes.
const state = computed(() => open.value ? 'expanded' : 'collapsed')

provideSidebarContext({
  state,
  open,
  setOpen,
  isMobile,
  openMobile,
  setOpenMobile,
  toggleSidebar,
})
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <div
      :style="{
        '--sidebar-width': sidebarConfig.width,
        '--sidebar-width-icon': sidebarConfig.widthIcon,
      }"
      :class="cn(
        'group/sidebar_wrapper sidebar-provider',
        props.una?.sidebarProvider,
        props.class,
      )"
      v-bind="$attrs"
    >
      <slot />
    </div>
  </TooltipProvider>
</template>
