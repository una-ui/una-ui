<script setup lang="ts">
import type { NPopoverCloseProps } from '../../../types'
import { PopoverClose } from 'reka-ui'
import Button from '../Button.vue'

const props = withDefaults(defineProps<NPopoverCloseProps>(), {
  btn: 'ghost-gray',
  label: 'i-close',
  square: '2em',
  icon: true,
})
</script>

<template>
  <PopoverClose
    as-child
  >
    <slot>
      <Button
        v-bind="props"
      />
    </slot>
  </PopoverClose>
</template>
