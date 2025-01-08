<script lang="ts" setup>
import type { NFormItemProps } from '../../../types'
import { provide } from 'vue'
import { cn, randomId } from '../../../utils'
import { FORM_ITEM_INJECTION_KEY } from '../../../utils/injectionKeys'

const props = defineProps<NFormItemProps>()

const id = randomId('form')
provide(FORM_ITEM_INJECTION_KEY, id)
</script>

<template>
  <div
    :class="cn(
      'form-item',
      props.una?.formItem,
      props.class,
    )"
  >
    <slot />
  </div>
</template>
