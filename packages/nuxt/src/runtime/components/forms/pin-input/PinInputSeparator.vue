<script setup lang="ts">
import type { NPinInputSeparatorProps } from '../../../types'
import { cn } from '../../../utils'
import Icon from '../../elements/Icon.vue'

const props = withDefaults(defineProps<NPinInputSeparatorProps>(), {
  size: 'sm',
})
</script>

<template>
  <div
    :class="cn(
      props.class,
      props.una?.pinInputSeparator,
    )"
    :size
  >
    <slot>
      <Icon
        :name="icon"
        :class="props.una?.pinInputSeparatorIcon"
      />
    </slot>
  </div>
</template>
