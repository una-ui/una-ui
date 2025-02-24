<script setup lang="ts">
import type { NSheetCloseProps } from '../../types'
import { DialogClose } from 'reka-ui'
import Button from '../elements/Button.vue'

const props = withDefaults(defineProps<NSheetCloseProps>(), {
  btn: 'ghost-gray',
  label: 'i-close',
  square: '2em',
  icon: true,
  ariaLabel: 'Close',
})
</script>

<template>
  <DialogClose
    as-child
  >
    <slot>
      <Button
        v-bind="props"
      />
    </slot>
  </DialogClose>
</template>
