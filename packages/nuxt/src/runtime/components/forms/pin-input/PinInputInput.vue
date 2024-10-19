<script setup lang="ts">
import type { NPinInputInputProps } from '../../../../runtime/types'
import { reactiveOmit } from '@vueuse/core'
import { PinInputInput } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../../runtime/utils'

const props = withDefaults(defineProps<NPinInputInputProps>(), {
  withSeparator: false,
  una: () => ({
    pinInputInputDefault: 'pin-input-default-variant',
  }),
})

const delegatedProps = reactiveOmit(props, 'class')

const pinInputVariants = ['outline', 'solid'] as const
const hasVariant = computed(() => pinInputVariants.some(pinInputVariant => props.pinInput?.includes(pinInputVariant)))
const isBaseVariant = computed(() => props.pinInput?.includes('~'))
</script>

<template>
  <PinInputInput
    v-bind="delegatedProps"
    :pin-input
    :class="cn(
      'pin-input-input',
      props.class,
      withSeparator ? '!rounded-md border first:!rounded-md last:!rounded-md' : '',
      !hasVariant && !isBaseVariant ? una?.pinInputInputDefault : '',
      una?.pinInputInput,
    )"
  />
</template>
