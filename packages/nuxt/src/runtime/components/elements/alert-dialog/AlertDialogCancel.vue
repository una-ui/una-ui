<script setup lang="ts">
import type { NAlertDialogCancelProps } from '../../../types'
import { AlertDialogCancel } from 'reka-ui'
import Button from '../Button.vue'

const props = withDefaults(defineProps<NAlertDialogCancelProps>(), {
  btn: 'text-primary',
  label: 'Cancel',
})
</script>

<template>
  <AlertDialogCancel
    as-child
  >
    <slot>
      <Button
        v-bind="props"
      />
    </slot>
  </AlertDialogCancel>
</template>
