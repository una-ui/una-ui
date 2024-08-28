<script setup lang="ts">
import { computed } from 'vue'
import {
  DropdownMenuSubTrigger,
  useForwardProps,
} from 'radix-vue'
import { cn } from '../../../utils'
import Button from '../Button.vue'
import type { NDropdownMenuSubTrigger } from '../../../types'

const props = withDefaults(defineProps<NDropdownMenuSubTrigger>(), {
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuSubTrigger
    v-bind="forwardedProps"
    :as="Button"
    :class="cn(
      'w-full justify-start font-normal rounded-sm gap-x-3 px-2 transition-color focus-visible:outline-0',
      props.class,
    )"
    :una="{
      btnDefaultVariant: 'dropdown-menu-item-default-variant',
      btnTrailing: cn('ml-auto text-1em', forwardedProps.una?.btnTrailing),
      ...forwardedProps.una,
    }"
    trailing="i-radix-icons-chevron-right"
  />
</template>
