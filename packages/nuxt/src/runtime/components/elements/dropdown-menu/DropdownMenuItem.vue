<script setup lang="ts">
import type { NDropdownMenuItemProps } from '../../../types'
import { DropdownMenuItem, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Button from '../Button.vue'
import DropdownMenuShortcut from './DropdownMenuShortcut.vue'

const props = withDefaults(defineProps<NDropdownMenuItemProps>(), {
  dropdownMenuItem: '~',
})

const slots = defineSlots<any>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <div>
    <DropdownMenuItem
      as-child
    >
      <Button
        v-bind="forwardedProps"
        :dropdown-menu-item
        :class="cn(
          'dropdown-menu-item-base w-full justify-start font-normal rounded-sm px-2',
          forwardedProps.inset && !(forwardedProps.leading || slots.leading) && 'pl-8',
          props.class,
        )"
        btn="~"
        :una="{
          btnLeading: cn('dropdown-menu-item-leading ml-0', forwardedProps.una?.btnLeading),
          btnTrailing: cn('dropdown-menu-item-trailing', forwardedProps.una?.btnTrailing),
          ...forwardedProps.una,
        }"
      >
        <slot v-for="(slotContent, slotName) in $slots" :name="slotName" v-bind="slotContent" />

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
