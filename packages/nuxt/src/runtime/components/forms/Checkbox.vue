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
})

const emits = defineEmits<CheckboxRootEmits>()

const rootProps = reactivePick(props, [
  'required',
  'disabled',
  'value',
  'modelValue',
  'defaultValue',
  'id',
  'name',
  'required',
  'asChild',
  'as',
])

const forwarded = useForwardPropsEmits(rootProps, emits)

const id = computed(() => props.id ?? randomId('checkbox'))
</script>

<template>
  <div
    :class="cn(
      'checkbox-root',
      //    una?.checkboxRoot,
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
            :name="slotProps.modelValue || slotProps.state === 'indeterminate'
              ? props.una?.checkboxIndeterminateIcon ?? 'checkbox-indeterminate-icon'
              : slotProps.modelValue || slotProps.state
                ? props.una?.checkboxCheckedIcon ?? 'checkbox-checked-icon'
                : props.una?.checkboxUncheckedIcon ?? 'checkbox-unchecked-icon'"
            :class="cn('checkbox-icon-base', una?.checkboxIconBase)"
          />
        </slot>
      </CheckboxIndicator>
    </CheckboxRoot>

    <div
      :class="cn(
        'checkbox-container',
        una?.checkboxWrapper,
      )"
    >
      <Label
        v-if="$slots.default || label"
        :for="props.for || id"
        :class="cn('checkbox-label', una?.checkboxLabel)"
        v-bind="props._checkboxLabel"
      >
        <slot>
          {{ label }}
        </slot>
      </Label>

      <p
        v-if="description || $slots.description"
        :class="cn(
          'checkbox-description',
          una?.checkboxDescription,
        )"
      >
        <slot name="description">
          {{ description }}
        </slot>
      </p>
    </div>
  </div>
</template>
