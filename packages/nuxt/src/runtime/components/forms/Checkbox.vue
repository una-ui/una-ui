<script setup lang="ts">
import type { CheckboxRootEmits } from 'reka-ui'
import type { NCheckboxProps } from '../../types'
import { reactivePick } from '@vueuse/core'
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { cn, randomId } from '../../utils'
import Icon from '../elements/Icon.vue'
import Label from '../elements/Label.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NCheckboxProps>(), {
  forceMount: true,
  checkbox: 'primary',
  size: 'md',
})

const emits = defineEmits<CheckboxRootEmits>()

const rootProps = reactivePick(props, [
  'required',
  'disabled',
  'value',
  'modelValue',
  'defaultValue',
])

const forwarded = useForwardPropsEmits(rootProps, emits)

const id = computed(() => props.id ?? randomId('checkbox'))
</script>

<template>
  <div
    :class="cn(
      'checkbox-wrapper flex',
      una?.checkboxWrapper,
      reverse && 'checkbox-reverse',
    )"
  >
    <CheckboxRoot
      v-bind="{ ...forwarded, ...$attrs }"
      :id="id"
      v-slot="{ ...slotProps }"
      :class="
        cn(
          'peer checkbox',
          props.class,
        )"
      :size
      :checkbox
    >
      <CheckboxIndicator
        :force-mount
        :size
        :class="cn('checkbox-indicator', una?.checkboxIndicator)"
        v-bind="props._checkboxIndicator"
      >
        <slot name="icon">
          <Icon
            :name="slotProps.modelValue === 'indeterminate'
              ? props.una?.checkboxIndeterminateIcon ?? 'checkbox-indeterminate-icon'
              : slotProps.modelValue
                ? props.una?.checkboxCheckedIcon ?? 'checkbox-checked-icon'
                : props.una?.checkboxUncheckedIcon ?? 'checkbox-unchecked-icon'"
            :class="cn('checkbox-icon-base', una?.checkboxIconBase)"
          />
        </slot>
      </CheckboxIndicator>
    </CheckboxRoot>

    <Label
      v-if="$slots.default || label"
      :for="props.for || id"
      :class="cn('checkbox-label', una?.checkboxLabel)"
      v-bind="props._label"
    >
      <slot>
        {{ label }}
      </slot>
    </Label>
  </div>
</template>
