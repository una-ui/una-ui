<script setup lang="ts">
import type { NSheetDescriptionProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { DialogDescription } from 'reka-ui'

import { cn } from '../../utils'

const props = defineProps<NSheetDescriptionProps>()
const delegatedProps = reactiveOmit(props, ['class'])
</script>

<template>
  <DialogDescription
    data-slot="sheet-description"
    :class="cn('sheet-description', props.una?.sheetDescription, props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </DialogDescription>
</template>
