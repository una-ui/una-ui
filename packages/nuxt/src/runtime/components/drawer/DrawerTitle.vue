<script setup lang="ts">
import type { NDrawerTitleProps } from '../../types'
import { DrawerTitle } from 'vaul-vue'
import { computed } from 'vue'
import { cn } from '../../utils'

const props = defineProps<NDrawerTitleProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <DrawerTitle
    data-slot="drawer-title"
    v-bind="delegatedProps"
    :class="cn(
      'drawer-title',
      props.una?.drawerTitle,
      props.class,
    )"
  >
    <slot />
  </DrawerTitle>
</template>
