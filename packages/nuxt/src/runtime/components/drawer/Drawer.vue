<script lang="ts" setup>
import type { DrawerRootEmits, DrawerRootProps } from 'vaul-vue'
import { reactivePick } from '@vueuse/core'
import { useForwardPropsEmits } from 'reka-ui'
import { DrawerRoot } from 'vaul-vue'

const props = withDefaults(defineProps<DrawerRootProps>(), {
  shouldScaleBackground: true,
})

const emits = defineEmits<DrawerRootEmits>()
const rootProps = useForwardPropsEmits(reactivePick(props, 'activeSnapPoint', 'closeThreshold', 'shouldScaleBackground', 'setBackgroundColorOnScale', 'scrollLockTimeout', 'fixed', 'dismissible', 'modal', 'open', 'defaultOpen', 'nested', 'direction', 'noBodyStyles', 'handleOnly', 'preventScrollRestoration', 'snapPoints'), emits)
</script>

<template>
  <DrawerRoot
    data-slot="drawer"
    v-bind="rootProps"
  >
    <slot />
  </DrawerRoot>
</template>
