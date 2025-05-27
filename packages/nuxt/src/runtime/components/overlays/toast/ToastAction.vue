<script setup lang="ts">
import type { NToastActionProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { ToastAction } from 'reka-ui'
import { cn, omitProps, randomId } from '../../../utils'

import Button from '../../elements/Button.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NToastActionProps>(), {
  btn: 'solid-white',
  size: 'xs',
})
const delegatedProps = reactiveOmit(props, ['class'])
</script>

<template>
  <ToastAction
    :alt-text="altText"
    as-child
  >
    <Button
      v-bind="omitProps({ ...$attrs, ...delegatedProps }, ['altText'])"
      :id="randomId('toast-action')"
      :class="cn('toast-action', props.class)"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </Button>
  </ToastAction>
</template>
