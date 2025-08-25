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
    <DialogContent class="command-dialog">
      <CommandRoot>
        <slot />
      </CommandRoot>
    </DialogContent>
  </Dialog>
</template>
