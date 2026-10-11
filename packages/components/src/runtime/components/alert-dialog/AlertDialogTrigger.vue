<script setup lang="ts">
import type { NAlertDialogTriggerProps } from '../../types'
import { AlertDialogTrigger } from 'reka-ui'

const props = defineProps<NAlertDialogTriggerProps>()
</script>

<template>
  <AlertDialogTrigger
    data-slot="alert-dialog-trigger"
    v-bind="props"
  >
    <slot />
  </AlertDialogTrigger>
</template>
