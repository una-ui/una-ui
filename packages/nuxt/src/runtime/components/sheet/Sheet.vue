<script setup lang="ts">
import type { DialogRootEmits } from 'reka-ui'
import type { NSheetProps } from '../../types'
import { reactivePick } from '@vueuse/core'
import { DialogRoot, useForwardPropsEmits } from 'reka-ui'
import SheetContent from './SheetContent.vue'
import SheetDescription from './SheetDescription.vue'
import SheetFooter from './SheetFooter.vue'
import SheetHeader from './SheetHeader.vue'
import SheetTitle from './SheetTitle.vue'
import SheetTrigger from './SheetTrigger.vue'

const props = defineProps<NSheetProps>()
const emits = defineEmits<DialogRootEmits>()

const rootProps = reactivePick(props, ['open', 'defaultOpen', 'modal'])
const forwarded = useForwardPropsEmits(rootProps, emits)
</script>

<template>
  <DialogRoot v-bind="forwarded">
    <SheetTrigger
      v-if="$slots.trigger"
      v-bind="_sheetTrigger"
      as-child
    >
      <slot name="trigger" />
    </SheetTrigger>

    <SheetContent
      v-if="$slots.default"
      v-bind="_sheetContent"
      :side
    >
      <SheetHeader
        v-if="$slots.header || title || description"
        v-bind="_sheetHeader"
      >
        <slot name="header">
          <SheetTitle>
            {{ title }}
          </SheetTitle>
          <SheetDescription>
            {{ description }}
          </SheetDescription>
        </slot>
      </SheetHeader>

      <slot />

      <SheetFooter
        v-if="$slots.footer"
        v-bind="_sheetFooter"
      >
        <slot name="footer" />
      </SheetFooter>
    </SheetContent>
  </DialogRoot>
</template>
