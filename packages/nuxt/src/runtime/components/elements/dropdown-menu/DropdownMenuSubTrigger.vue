<script setup lang="ts">
import type { NDropdownMenuSubTriggerProps } from '../../../types'
import {
  DropdownMenuSubTrigger,
  useForwardProps,
} from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Button from '../Button.vue'

const props = withDefaults(defineProps<NDropdownMenuSubTriggerProps>(), {
  dropdownMenuItem: '~',
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuSubTrigger
    as-child
  >
    <Button
      v-bind="{ ...forwardedProps, ...$attrs }"
      :dropdown-menu-item
      :class="cn(
        'dropdown-menu-sub-trigger w-full justify-start font-normal rounded-sm px-2',
        inset && !(forwardedProps.leading || $slots.leading) && 'pl-8',
        props.class,
      )"
      btn="~"
      :una="{
        btnLeading: cn('dropdown-menu-sub-trigger-leading ml-0', forwardedProps.una?.btnLeading),
        btnTrailing: cn('dropdown-menu-sub-trigger-trailing', forwardedProps.una?.btnTrailing),
        ...forwardedProps.una,
      }"
      trailing="dropdown-menu-sub-trigger-trailing-icon"
    >
      <slot v-for="(slotContent, slotName) in $slots" :name="slotName" v-bind="slotContent" />
    </Button>
  </dropdownmenusubtrigger>
</template>
