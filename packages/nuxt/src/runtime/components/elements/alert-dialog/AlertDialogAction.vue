<script setup lang="ts">
import type { NAlertDialogActionProps } from '../../../types'
import { AlertDialogAction } from 'reka-ui'
import Button from '../Button.vue'

const props = withDefaults(defineProps<NAlertDialogActionProps>(), {
  btn: 'solid-primary',
  label: 'Confirmed',
})
</script>

<template>
  <AlertDialogAction
    as-child
  >
    <slot>
      <Button
        v-bind="props"
      />
    </slot>
  </AlertDialogAction>
</template>
