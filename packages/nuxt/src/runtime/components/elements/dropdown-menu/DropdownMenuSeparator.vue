<script setup lang="ts">
import type { NDropdownMenuSeparatorProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import {
  DropdownMenuSeparator,
} from 'reka-ui'
import { cn } from '../../../utils'

import Separator from '../Separator.vue'

const props = defineProps<NDropdownMenuSeparatorProps>()
const delegatedProps = reactiveOmit(props, ['class'])
</script>

<template>
  <DropdownMenuSeparator
    as-child
  >
    <div class="dropdown-menu-separator-root">
      <Separator
        v-bind="delegatedProps"
        :class="cn(
          'dropdown-menu-separator my-1',
          props.una?.dropdownMenuSeparator,
          props.class,
        )"
      />
    </div>
  </DropdownMenuSeparator>
</template>
