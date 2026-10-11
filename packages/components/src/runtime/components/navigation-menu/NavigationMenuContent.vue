<script setup lang="ts">
import type { NavigationMenuContentEmits } from 'reka-ui'
import type { NNavigationMenuContentProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import {
  NavigationMenuContent,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '../../utils'

const props = defineProps<NNavigationMenuContentProps>()
const emits = defineEmits<NavigationMenuContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <NavigationMenuContent
    v-bind="forwarded"
    :class="cn(
      'navigation-menu-content',
      'data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52',
      props.una?.navigationMenuContent,
      props.class,
    )"
  >
    <slot />
  </NavigationMenuContent>
</template>
