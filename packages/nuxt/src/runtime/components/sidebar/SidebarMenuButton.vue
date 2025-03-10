<script setup lang="ts">
import type { NSidebarMenuButtonProps } from '../../types'
import { computed } from 'vue'
import { useSidebar } from '../../composables/useSidebar'
import TooltipContent from '../elements/tooltip/TooltipContent.vue'
import TooltipRoot from '../elements/tooltip/TooltipRoot.vue'
import TooltipTrigger from '../elements/tooltip/TooltipTrigger.vue'
import SidebarMenuButtonChild from './SidebarMenuButtonChild.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NSidebarMenuButtonProps>(), {
  as: 'button',
  variant: 'default',
  size: 'default',
})

const { isMobile, state } = useSidebar()

const delegatedProps = computed(() => {
  const { tooltip, ...delegated } = props
  return delegated
})
</script>

<template>
  <SidebarMenuButtonChild v-if="!tooltip" v-bind="{ ...delegatedProps, ...$attrs }">
    <slot />
  </SidebarMenuButtonChild>

  <TooltipRoot v-else>
    <TooltipTrigger as-child>
      <SidebarMenuButtonChild v-bind="{ ...delegatedProps, ...$attrs }">
        <slot />
      </SidebarMenuButtonChild>
    </TooltipTrigger>

    <TooltipContent
      side="right"
      align="center"
      :hidden="state !== 'collapsed' || isMobile"
    >
      <template v-if="typeof tooltip === 'string'">
        {{ tooltip }}
      </template>
      <component :is="tooltip" v-else />
    </TooltipContent>
  </TooltipRoot>
</template>
