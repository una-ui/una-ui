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
  rounded: 'sm',
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
        'dropdown-menu-sub-trigger w-full justify-start font-normal px-0.5714285714285714em py-0.42857142857142855em h-auto',
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
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </Button>
  </dropdownmenusubtrigger>
</template>
