<script setup lang="ts">
import type { NDropdownMenuItemProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { DropdownMenuItem, useForwardProps } from 'reka-ui'
import { cn } from '../../../utils'
import Button from '../Button.vue'

import DropdownMenuShortcut from './DropdownMenuShortcut.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NDropdownMenuItemProps>(), {
  size: 'sm',
  dropdownMenuItem: '~',
  rounded: 'sm',
})

const slots = defineSlots<any>()
const delegatedProps = reactiveOmit(props, ['class'])

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <div>
    <DropdownMenuItem
      as-child
    >
      <Button
        v-bind="{ ...forwardedProps, ...$attrs }"
        :dropdown-menu-item
        :class="cn(
          'dropdown-menu-item-base w-full justify-start font-normal px-0.5714285714285714em py-0.42857142857142855em h-auto',
          forwardedProps.inset && !(forwardedProps.leading || slots.leading) && 'pl-8',
          props.class,
        )"
        :rounded
        btn="~"
        :una="{
          btnLeading: cn('dropdown-menu-item-leading ml-0', forwardedProps.una?.btnLeading),
          btnTrailing: cn('dropdown-menu-item-trailing', forwardedProps.una?.btnTrailing),
          ...forwardedProps.una,
        }"
        @click="forwardedProps.onSelect"
      >
        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template>

        <template
          v-if="forwardedProps.shortcut"
          #trailing
        >
          <DropdownMenuShortcut
            v-bind="_dropdownMenuShortcut"
          >
            {{ forwardedProps.shortcut }}
          </DropdownMenuShortcut>
        </template>
      </Button>
    </DropdownMenuItem>
  </div>
</template>
