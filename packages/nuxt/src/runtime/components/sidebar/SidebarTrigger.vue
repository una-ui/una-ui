<script setup lang="ts">
import type { NButtonProps } from '../../types'
import { useSidebar } from '../../composables/useSidebar'
import { cn } from '../../utils'
import Button from '../elements/Button.vue'

const props = withDefaults(defineProps<NButtonProps>(), {
  btn: 'ghost-white',
  square: '7',
  label: 'i-lucide-panel-left',
  icon: true,
})

const { toggleSidebar } = useSidebar()
</script>

<template>
  <Button
    data-sidebar="trigger"
    v-bind="props"
    :class="cn('p-0', props.class)"
    @click="toggleSidebar"
  />
</template>
