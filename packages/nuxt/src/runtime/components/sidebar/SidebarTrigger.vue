<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useSidebar } from '../../composables/useSidebar'
import Button from '../elements/Button.vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { toggleSidebar } = useSidebar()
</script>

<template>
  <Button
    data-sidebar="trigger"
    btn="ghost-white"
    square="7"
    :class="props.class"
    icon
    label="i-lucide-panel-left"
    @click="toggleSidebar"
  />
</template>
