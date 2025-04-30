<script setup lang="ts">
import type { NAlertDialogTriggerProps } from '../../../types'
import { AlertDialogTrigger } from 'reka-ui'
import Button from '../Button.vue'

const props = withDefaults(defineProps<NAlertDialogTriggerProps>(), {
  btn: 'solid-gray',
})
</script>

<template>
  <AlertDialogTrigger
    data-slot="alert-dialog-trigger"
    as-child
  >
    <Button
      v-bind="props"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </Button>
  </AlertDialogTrigger>
</template>
