<script setup lang="ts">
import type { NSidebarInputProps } from '../../types'
import { cn } from '../../utils'
import Input from '../forms/Input.vue'

const props = defineProps<NSidebarInputProps>()
</script>

<template>
  <Input
    data-slot="sidebar-input"
    data-sidebar="input"
    :class="cn(
      'sidebar-input',
      props.una?.sidebarInput,
      props.class,
    )"
  >
    <slot />
  </Input>
</template>
