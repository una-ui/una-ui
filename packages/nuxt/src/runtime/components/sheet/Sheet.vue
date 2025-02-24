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
    >
      <slot name="trigger" :open />
    </SheetTrigger>

    <SheetContent
      :_sheet-close
      :_sheet-overlay
      :_sheet-portal
      :sheet
      :una
    >
      <slot name="content">
        <SheetHeader
          v-if="$slots.header || title || description"
          v-bind="_sheetHeader"
          :una
        >
          <slot name="header">
            <SheetTitle
              v-if="$slots.title || title"
              v-bind="_sheetTitle"
              :una
            >
              <slot name="title">
                {{ title }}
              </slot>
            </SheetTitle>
            <SheetDescription
              v-if="$slots.description || description"
              v-bind="_sheetDescription"
              :una
            >
              <slot name="description">
                {{ description }}
              </slot>
            </SheetDescription>
          </slot>
        </SheetHeader>

        <slot />

        <SheetFooter
          v-if="$slots.footer"
          v-bind="_sheetFooter"
          :una
        >
          <slot name="footer" />
        </SheetFooter>
      </slot>
    </SheetContent>
  </DialogRoot>
</template>
