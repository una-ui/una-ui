<script setup lang="ts">
import type { DialogRootEmits } from 'reka-ui'
import type { NSheetProps } from '../../types'
import { reactivePick } from '@vueuse/core'
import { DialogRoot, useForwardPropsEmits, VisuallyHidden } from 'reka-ui'
import { computed } from 'vue'
import { randomId } from '../../utils'
import SheetContent from './SheetContent.vue'
import SheetDescription from './SheetDescription.vue'
import SheetFooter from './SheetFooter.vue'
import SheetHeader from './SheetHeader.vue'
import SheetTitle from './SheetTitle.vue'
import SheetTrigger from './SheetTrigger.vue'

const props = withDefaults(defineProps<NSheetProps>(), {
  showClose: true,
  overlay: true,
})
const emits = defineEmits<DialogRootEmits>()

const DEFAULT_TITLE = randomId('sheet-title')
const DEFAULT_DESCRIPTION = randomId('sheet-description')

const title = computed(() => props.title || DEFAULT_TITLE)
const description = computed(() => props.description || DEFAULT_DESCRIPTION)

const rootProps = reactivePick(props, ['open', 'defaultOpen', 'modal'])
const forwarded = useForwardPropsEmits(rootProps, emits)
</script>

<template>
  <DialogRoot v-slot="{ open }" v-bind="forwarded">
    <slot name="root">
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
        :prevent-close
        :show-close
        :overlay
        v-bind="_sheetContent"
        :una
      >
        <VisuallyHidden v-if="(title === DEFAULT_TITLE || !!$slots.title) || (description === DEFAULT_DESCRIPTION || !!$slots.description)">
          <SheetTitle v-if="title === DEFAULT_TITLE || !!$slots.title">
            {{ title }}
          </SheetTitle>

          <SheetDescription v-if="description === DEFAULT_DESCRIPTION || !!$slots.description">
            {{ description }}
          </SheetDescription>
        </VisuallyHidden>

        <slot name="content">
          <SheetHeader
            v-if="!!$slots.header || (title !== DEFAULT_TITLE || !!$slots.title) || (description !== DEFAULT_DESCRIPTION || !!$slots.description)"
            v-bind="_sheetHeader"
            :una
          >
            <slot name="header">
              <SheetTitle
                v-if="$slots.title || title !== DEFAULT_TITLE"
                v-bind="_sheetTitle"
                :una
              >
                <slot name="title">
                  {{ title }}
                </slot>
              </SheetTitle>

              <SheetDescription
                v-if="$slots.description || description !== DEFAULT_DESCRIPTION"
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
    </slot>
  </DialogRoot>
</template>
