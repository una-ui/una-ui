<script setup lang="ts">
import type { NAlertDialogActionProps } from '../../types'
import { AlertDialogAction } from 'reka-ui'
import Button from '../elements/Button.vue'

const props = withDefaults(defineProps<NAlertDialogActionProps>(), {
  btn: 'solid-primary',
  label: 'Continue',
})
</script>

<template>
  <AlertDialogAction
    as-child
  >
    <Button
      v-bind="props"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </Button>
  </AlertDialogAction>
</template>
