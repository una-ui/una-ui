<script setup lang="ts">
import type { NTableExpandButtonProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Button from '../../elements/Button.vue'

const props = withDefaults(defineProps<NTableExpandButtonProps>(), {
  btn: 'ghost-gray',
  size: 'xs',
  icon: true,
  square: true,
})

const emit = defineEmits<{
  change: [row: any]
}>()

const delegatedProps = reactiveOmit(props, ['class', 'row', 'una', 'label', 'ariaLabel'])

const isExpanded = computed(() => props.row.getIsExpanded())

function onClick() {
  props.row.toggleExpanded()
  emit('change', props.row)
}
</script>

<template>
  <Button
    v-bind="delegatedProps"
    :aria-label="props.ariaLabel ?? (isExpanded ? 'Collapse row' : 'Expand row')"
    :label="props.label ?? props.una?.tableExpandIcon ?? 'table-expand-icon'"
    :data-expanded="isExpanded"
    :class="cn(
      'table-expand-button',
      props.una?.tableExpandButton,
      props.class,
    )"
    :una="{
      ...props.una,
      btnIconLabel: cn(
        'table-expand-icon-base',
        isExpanded ? '-rotate-180' : 'rotate-0',
        props.una?.tableExpandIconBase,
        props.una?.btnIconLabel,
      ),
    }"
    @click="onClick"
  />
</template>
