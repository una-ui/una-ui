<script setup lang="ts">
import type { NLabelProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { Label } from 'reka-ui'
import { cn } from '../../utils'

const props = defineProps<NLabelProps>()

const rootProps = reactiveOmit(props, ['label', 'class'])
</script>

<template>
  <Label
    data-slot="label"
    v-bind="rootProps"
    :class="
      cn(
        'label-base',
        props.class,
      )
    "
  >
    <slot>
      {{ label }}
    </slot>
  </Label>
</template>
