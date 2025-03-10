<script setup lang="ts">
import type { NSidebarInputProps } from '../../types'
import { cn } from '../../utils'
import Input from '../forms/Input.vue'

const props = defineProps<NSidebarInputProps>()
</script>

<template>
  <Input
    data-sidebar="input"
    :class="cn(
      'sidebar-input',
      props.class,
    )"
  >
    <slot />
  </Input>
</template>
