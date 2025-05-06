<script lang="ts" setup>
import type { DialogContentEmits } from 'reka-ui'
import type { NDrawerContentProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { useForwardPropsEmits } from 'reka-ui'
import { DrawerContent, DrawerPortal } from 'vaul-vue'
import { computed } from 'vue'
import { cn } from '../../utils'
import DrawerOverlay from './DrawerOverlay.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NDrawerContentProps>(), {
  overlay: true,
})

const emits = defineEmits<DialogContentEmits>()
const delegatedProps = reactiveOmit(props, ['class', 'una', '_drawerOverlay', '_drawerClose'])
const forwarded = useForwardPropsEmits(delegatedProps, emits)

const contentEvents = computed(() => {
  if (props.preventClose) {
    return {
      pointerDownOutside: (e: Event) => e.preventDefault(),
      interactOutside: (e: Event) => e.preventDefault(),
      escapeKeyDown: (e: Event) => e.preventDefault(),
      closeAutoFocus: (e: Event) => e.preventDefault(),
    }
  }

  return {
    closeAutoFocus: (e: Event) => e.preventDefault(),
  }
})
</script>

<template>
  <DrawerPortal>
    <DrawerOverlay
      v-if="overlay"
      v-bind="_drawerOverlay"
      :una
    />
    <DrawerContent
      data-slot="drawer-content"
      v-bind="{ ...forwarded, ...$attrs }"
      :class="cn(
        'drawer-content',
        'drawer-content-top',
        'drawer-content-bottom',
        'drawer-content-right',
        'drawer-content-left',
        props.una?.drawerContent,
        props.class,
      )"
      v-on="contentEvents"
    >
      <div :class="cn('drawer-content-handle')" />
      <!-- <div class="group-data-[vaul-drawer-direction=bottom]/drawer-content:block mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full bg-muted" /> -->
      <slot />
    </DrawerContent>
  </DrawerPortal>
</template>
