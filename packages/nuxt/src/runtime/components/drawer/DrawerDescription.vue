<script lang="ts" setup>
import type { DrawerDescriptionProps } from 'vaul-vue'
import type { HtmlHTMLAttributes } from 'vue'
import { DrawerDescription } from 'vaul-vue'
import { computed } from 'vue'
import { cn } from '../../utils'

const props = defineProps<DrawerDescriptionProps & { class?: HtmlHTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <DrawerDescription
    data-slot="drawer-description"
    v-bind="delegatedProps"
    :class="cn('text-muted text-sm', props.class)"
  >
    <slot />
  </DrawerDescription>
</template>
