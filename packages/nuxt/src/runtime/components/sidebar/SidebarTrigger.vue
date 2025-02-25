<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useSidebar } from '../../composables/useSidebar'
import { cn } from '../../utils'
import Button from '../elements/Button.vue'
import Icon from '../elements/Icon.vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { toggleSidebar } = useSidebar()
</script>

<template>
  <Button
    data-sidebar="trigger"
    btn="ghost"
    square
    :class="cn('h-7 w-7', props.class)"
    @click="toggleSidebar"
  >
    <Icon name="i-lucide-panel-left" />
    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>
