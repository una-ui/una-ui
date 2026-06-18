<script setup lang="ts">
import type { NAlertDialogCancelProps } from '../../types'
import { AlertDialogCancel } from 'reka-ui'
import { cn } from '../../utils'
import Button from '../elements/Button.vue'

const props = withDefaults(defineProps<NAlertDialogCancelProps>(), {
  btn: 'outline-gray',
  label: 'Cancel',
})
</script>

<template>
  <AlertDialogCancel
    as-child
  >
    <Button
      v-bind="props"
      :class="cn(
        'alert-dialog-cancel',
        props.class,
      )"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </Button>
  </AlertDialogCancel>
</template>
