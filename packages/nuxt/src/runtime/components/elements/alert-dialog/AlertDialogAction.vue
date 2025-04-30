<script setup lang="ts">
import type { NAlertDialogActionProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogAction } from 'reka-ui'
import Button from '../Button.vue'

const props = withDefaults(defineProps<NAlertDialogActionProps>(), {
  btn: 'solid-primary',
  label: 'Confirmed',
})

const delegatedProps = reactiveOmit(props, 'class', 'una')
</script>

<template>
  <AlertDialogAction
    v-bind="delegatedProps"
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
