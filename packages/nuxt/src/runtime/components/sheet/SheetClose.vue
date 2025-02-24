<script setup lang="ts">
import type { NSheetCloseProps } from '../../types'
import { DialogClose } from 'reka-ui'

const props = defineProps<NSheetCloseProps>()
</script>

<template>
  <DialogClose v-bind="props">
    <slot />
  </DialogClose>
</template>
