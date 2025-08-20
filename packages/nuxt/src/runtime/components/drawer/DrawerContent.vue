<script setup lang="ts">
import type { DialogContentEmits } from 'reka-ui'
import type { NDrawerContentProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { useForwardPropsEmits } from 'reka-ui'
import { DrawerContent, DrawerPortal } from 'vaul-vue'
import { cn } from '../../utils'
import DrawerOverlay from './DrawerOverlay.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NDrawerContentProps>(), {
  overlay: true,
})

const emits = defineEmits<DialogContentEmits>()
const delegatedProps = reactiveOmit(props, ['class', 'una', '_drawerOverlay', '_drawerClose'])
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DrawerPortal>
    <DrawerOverlay
      v-if="overlay"
      v-bind="_drawerOverlay"
      :una
    />
    <DrawerContent
      data-slot="drawer-content"
      v-bind="{ ...forwarded, ...$attrs }"
      :class="cn(
        'drawer-content',
        'drawer-content-top',
        'drawer-content-bottom',
        'drawer-content-right',
        'drawer-content-left',
        'group',
        props.una?.drawerContent,
        props.class,
      )"
    >
      <div
        :class="cn(
          'drawer-handle',
          props.una?.drawerHandle,
        )"
      />
      <slot />
    </DrawerContent>
  </DrawerPortal>
</template>
