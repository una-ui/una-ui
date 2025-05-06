<script lang="ts" setup>
import type { NDrawerHeaderProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NDrawerHeaderProps>()
</script>

<template>
  <div
    data-slot="drawer-header"
    :class="cn('drawer-header', props.class)"
  >
    <slot />
  </div>
</template>
