<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../utils'
import Input from '../forms/Input.vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
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
