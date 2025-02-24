<script setup lang="ts">
import type { DialogRootEmits } from 'reka-ui'
import type { NSheetProps } from '../../types'
import { DialogRoot, useForwardPropsEmits } from 'reka-ui'
import SheetContent from './SheetContent.vue'
import SheetTrigger from './SheetTrigger.vue'

const props = defineProps<NSheetProps>()
const emits = defineEmits<DialogRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DialogRoot v-bind="forwarded">
    <SheetTrigger
      v-if="$slots.trigger"
      v-bind="props._sheetTrigger"
      as-child
    >
      <slot name="trigger" />
    </SheetTrigger>

    <SheetContent
      v-if="$slots.default"
      v-bind="props._sheetContent"
      :side
    >
      <slot />
    </SheetContent>
  </DialogRoot>
</template>
