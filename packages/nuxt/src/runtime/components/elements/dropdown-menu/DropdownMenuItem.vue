<script setup lang="ts">
import { computed } from 'vue'
import { DropdownMenuItem, useForwardProps } from 'radix-vue'
import { cn } from '../../../utils'
import type { NDropdownMenuItemProps } from '../../../types'
import Button from '../Button.vue'
import DropdownMenuShortcut from './DropdownMenuShortcut.vue'

const props = withDefaults(defineProps<NDropdownMenuItemProps>(), {
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuItem
    as-child
  >
    <Button
      v-bind="forwardedProps"
      :class="cn(
        'w-full justify-start font-normal text-left rounded-sm gap-x-3 px-2 transition-color focus-visible:outline-0',
        forwardedProps.inset && 'pl-8',
        props.class,
      )"
      :una="{
        btnDefaultVariant: 'dropdown-menu-item-default-variant',
        btnTrailing: cn('ml-auto', forwardedProps.una?.btnTrailing),
        ...forwardedProps.una,
      }"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>

      <template
        v-if="forwardedProps.shortcut"
        #trailing
      >
        <DropdownMenuShortcut>
          {{ forwardedProps.shortcut }}
        </DropdownMenuShortcut>
      </template>
    </Button>
  </DropdownMenuItem>
</template>
