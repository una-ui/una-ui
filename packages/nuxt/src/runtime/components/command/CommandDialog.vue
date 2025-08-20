<script setup lang="ts">
import type { DialogRootEmits } from 'reka-ui'
import type { NDialogProps } from '../../types'
import { useForwardPropsEmits } from 'reka-ui'
import Dialog from '../elements/dialog/Dialog.vue'
import DialogContent from '../elements/dialog/DialogContent.vue'
import CommandRoot from './CommandRoot.vue'

const props = defineProps<NDialogProps>()
const emits = defineEmits<DialogRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <Dialog v-bind="forwarded">
    <DialogContent class="overflow-hidden p-0 shadow-lg">
      <CommandRoot class="[&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group]]:px-2 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group-heading]]:text-muted [&_[cmdk-group-heading]]:font-medium">
        <slot />
      </CommandRoot>
    </DialogContent>
  </Dialog>
</template>
