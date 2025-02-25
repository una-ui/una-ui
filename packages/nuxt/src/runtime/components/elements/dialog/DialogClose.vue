<script setup lang="ts">
import type { NDialogCloseProps } from '../../../types'
import { DialogClose } from 'reka-ui'
import Button from '../Button.vue'

const props = withDefaults(defineProps<NDialogCloseProps>(), {
  btn: 'ghost-gray',
  label: 'i-close',
  square: '2em',
  icon: true,
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
