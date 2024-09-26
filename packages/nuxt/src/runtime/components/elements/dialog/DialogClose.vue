<script setup lang="ts">
import type { NDialogCloseProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { DialogClose } from 'radix-vue'
import { cn } from '../../../utils'
import Button from '../Button.vue'

const props = withDefaults(defineProps<NDialogCloseProps>(), {
  btn: 'text-muted',
  square: true,
  icon: true,
  label: 'i-close',
})

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <DialogClose
    as-child
  >
    <slot>
      <Button
        tabindex="-1"
        v-bind="delegatedProps"
        :class="cn('dialog-close', props.class)"
      >
        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template>
      </Button>
    </slot>
  </DialogClose>
</template>
