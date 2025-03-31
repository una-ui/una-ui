<script setup lang="ts">
import type { NavigationMenuRootEmits } from 'reka-ui'
import type { NNavigationMenuRootProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { NavigationMenuRoot, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils'
import NavigationMenuViewport from './NavigationMenuViewport.vue'

const props = defineProps<NNavigationMenuRootProps>()
const emits = defineEmits<NavigationMenuRootEmits>()

const delegatedProps = reactiveOmit(props, ['class', '_navigationMenuViewport', 'una'])

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <NavigationMenuRoot
    v-bind="forwarded"
    :class="cn(
      'navigation-menu-root',
      props.una?.navigationMenuRoot,
      props.class,
    )"
  >
    <slot :model-value />
    <slot name="viewport">
      <div :class="props.orientation === 'vertical' && 'navigation-menu-viewport-vertical'">
        <NavigationMenuViewport v-bind="_navigationMenuViewport" :orientation="forwarded.orientation" />
      </div>
    </slot>
  </NavigationMenuRoot>
</template>
