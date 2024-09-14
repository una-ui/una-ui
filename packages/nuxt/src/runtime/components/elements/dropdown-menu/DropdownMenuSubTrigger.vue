<script setup lang="ts">
import type { NDropdownMenuSubTriggerProps } from '../../../types'
import {
  DropdownMenuSubTrigger,
  useForwardProps,
} from 'radix-vue'
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
      v-bind="forwardedProps"
      :dropdown-menu-item
      :class="cn(
        'dropdown-menu-sub-trigger w-full justify-start font-normal rounded-sm px-2',
        forwardedProps.inset && !(forwardedProps.leading || $slots.leading) && 'pl-8',
        props.class,
      )"
      btn="~"
      :una="{
        btnLeading: cn('dropdown-menu-sub-trigger-leading', forwardedProps.una?.btnLeading),
        btnTrailing: cn('dropdown-menu-sub-trigger-trailing', forwardedProps.una?.btnTrailing),
        ...forwardedProps.una,
      }"
      trailing="i-radix-icons-chevron-right"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </Button>
  </dropdownmenusubtrigger>
</template>
