<script setup lang="ts">
import type { NToastActionProps } from '../../../types'
import { ToastAction } from 'radix-vue'
import { computed } from 'vue'
import { cn, omitProps, randomId } from '../../../utils'
import Button from '../../elements/Button.vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<NToastActionProps>()
const emits = defineEmits(['onAction'])

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastAction
    :alt-text
    as-child
  >
    <Button
      v-bind="omitProps({ ...$attrs, ...delegatedProps }, ['altText'])"
      :id="randomId('toast-action')"
      size="xs"
      :class="cn('toast-action', props.class)"
      :una="{
        btnDefaultVariant: toastAction,
        ...delegatedProps.una,
      }"
      @click="emits('onAction')"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </Button>
  </ToastAction>
</template>
