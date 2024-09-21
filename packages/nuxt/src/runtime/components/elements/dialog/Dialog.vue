<script setup lang="ts">
import type { NDialogProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { DialogRoot, type DialogRootEmits, DialogTrigger, useForwardPropsEmits } from 'radix-vue'
import { cn } from '../../../utils'
import DialogContent from './DialogContent.vue'
import DialogDescription from './DialogDescription.vue'
import DialogFooter from './DialogFooter.vue'
import DialogHeader from './DialogHeader.vue'
import DialogTitle from './DialogTitle.vue'

const props = defineProps<NDialogProps>()
const emits = defineEmits<DialogRootEmits>()

const delegatedProps = reactiveOmit(props, [
  'title',
  'description',
  'una',
  '_dialogClose',
  '_dialogContent',
  '_dialogDescription',
  '_dialogFooter',
  '_dialogHeader',
  '_dialogOverlay',
  '_dialogTitle',
])

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogRoot v-slot="{ open }" v-bind="forwarded">
    <DialogTrigger as-child>
      <slot name="trigger" :open />
    </DialogTrigger>

    <DialogContent
      v-bind="_dialogContent"
      :class="cn(_dialogContent?.class, una?.dialogContent)"
      :_dialog-overlay
      :una
    >
      <slot name="content">
        <!-- header -->
        <DialogHeader
          v-if="title || description || $slots.header || $slots.title || $slots.description"
          v-bind="_dialogHeader"
          :class="cn(_dialogHeader?.class, una?.dialogHeader)"
        >
          <slot name="header">
            <DialogTitle
              v-bind="_dialogTitle"
              :class="una?.dialogTitle"
            >
              <slot name="title">
                {{ title }}
              </slot>
            </DialogTitle>

            <DialogDescription
              v-bind="_dialogDescription"
              :class="cn(_dialogDescription?.class, una?.dialogDescription)"
            >
              <slot name="description">
                {{ description }}
              </slot>
            </DialogDescription>
          </slot>
        </DialogHeader>

        <!-- content -->
        <slot />

        <DialogFooter
          v-if="$slots.footer"
          v-bind="_dialogFooter"
          :class="cn(_dialogFooter?.class, una?.dialogFooter)"
        >
          <slot name="footer" />
        </DialogFooter>
      </slot>
    </DialogContent>
  </DialogRoot>
</template>
