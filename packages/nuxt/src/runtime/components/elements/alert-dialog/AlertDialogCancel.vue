<script setup lang="ts">
import type { NAlertDialogCancelProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogCancel } from 'reka-ui'
import Button from '../Button.vue'

const props = withDefaults(defineProps<NAlertDialogCancelProps>(), {
  btn: 'text-primary',
  label: 'Cancel',
})

const delegatedProps = reactiveOmit(props, 'class', 'una')
</script>

<template>
  <AlertDialogCancel
    v-bind="delegatedProps"
    as-child
  >
    <Button />
  </AlertDialogCancel>
</template>
