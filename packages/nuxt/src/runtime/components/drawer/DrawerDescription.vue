<script setup lang="ts">
import type { NDrawerDescriptionProps } from '../../types'
import { DrawerDescription } from 'vaul-vue'
import { computed } from 'vue'
import { cn } from '../../utils'

const props = defineProps<NDrawerDescriptionProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <DrawerDescription
    data-slot="drawer-description"
    v-bind="delegatedProps"
    :class="cn('drawer-description', props.class)"
  >
    <slot />
  </DrawerDescription>
</template>
