<script setup lang="ts">
import type { NSheetTitleProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { DialogTitle } from 'reka-ui'

import { cn } from '../../utils'

const props = defineProps<NSheetTitleProps>()
const delegatedProps = reactiveOmit(props, ['class'])
</script>

<template>
  <DialogTitle
    :class="cn('sheet-title', props.una?.sheetTitle, props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </DialogTitle>
</template>
