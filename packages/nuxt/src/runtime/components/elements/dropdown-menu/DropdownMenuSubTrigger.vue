<script setup lang="ts">
import { computed } from 'vue'
import {
  DropdownMenuSubTrigger,
  useForwardProps,
} from 'radix-vue'
import { cn } from '../../../utils'
import Button from '../Button.vue'
import type { NDropdownMenuSubTriggerProps } from '../../../types'

const props = withDefaults(defineProps<NDropdownMenuSubTriggerProps>(), {
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
      :as="Button"
      :class="cn(
        'w-full justify-start font-normal rounded-sm px-2 transition-color focus-visible:outline-0',
        forwardedProps.inset && 'pl-8',
        props.class,
      )"
      :una="{
        btnDefaultVariant: 'dropdown-menu-item-default-variant',
        btnLeading: cn('opacity-75 text-1.1em', forwardedProps.una?.btnLeading),
        btnTrailing: cn('opacity-75 ml-auto text-1.1em', forwardedProps.una?.btnTrailing),
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
