<script setup lang="ts">
import type { NComboboxTriggerProps } from '../../types'
import { ComboboxTrigger, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils'
import Button from '../elements/Button.vue'
import Icon from '../elements/Icon.vue'

const props = withDefaults(defineProps<NComboboxTriggerProps>(), {
  btn: 'solid-white',
  trailing: 'i-lucide-chevrons-up-down',
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <ComboboxTrigger
    as-child
  >
    <Button
      v-bind="forwarded"
      data-slot="combobox-trigger"
      :class="cn('w-full justify-between', props.class)"
      tabindex="0"
    >
      <slot />

      <template #trailing>
        <Icon name="i-lucide-chevrons-up-down" class="ml-2 shrink-0 opacity-50" />
      </template>
    </Button>
  </ComboboxTrigger>
</template>
