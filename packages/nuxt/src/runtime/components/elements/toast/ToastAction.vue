<script setup lang="ts">
import type { NToastActionProps } from '../../../types'
import { computed } from 'vue'
import { randomId } from '../../../utils'

const props = defineProps<NToastActionProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <NButton
    v-bind="delegatedProps"
    :id="randomId('toast-action')"
    size="xs"
    :class="props.class"
    :una="{
      btnDefaultVariant: 'toast-default-variant',
      ...delegatedProps.una,
    }"
  >
    <slot />
  </NButton>
</template>
