<script setup lang="ts">
import type { NToastActionProps } from '../../../types'
import { computed } from 'vue'
import { randomId } from '../../../utils'
import Button from '../../elements/Button.vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<NToastActionProps>()
const emits = defineEmits(['onAction'])

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <div>
    <slot>
      <Button
        v-bind="{ ...$attrs, ...delegatedProps }"
        :id="randomId('toast-action')"
        size="xs"
        :class="props.class"
        :una="{
          btnDefaultVariant: 'toast-default-variant',
          ...delegatedProps.una,
        }"
        @click="emits('onAction')"
      >
        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template>
      </Button>
    </slot>
  </div>
</template>
