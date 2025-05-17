<script setup lang="ts">
import type { NDrawerOverlayProps } from '../../types'
import { DrawerOverlay } from 'vaul-vue'
import { computed } from 'vue'
import { cn } from '../../utils'

const props = defineProps<NDrawerOverlayProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <DrawerOverlay
    data-slot="drawer-overlay"
    v-bind="delegatedProps"
    :class="cn('drawer-overlay', props.class)"
  />
</template>
