<script setup lang="ts">
import type { CheckboxRootEmits } from 'radix-vue'
import type { NCheckboxProps } from '../../types'
import { reactivePick } from '@vueuse/core'
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'radix-vue'
import { computed } from 'vue'
import { cn, randomId } from '../../utils'
import Icon from '../elements/Icon.vue'
import Label from '../elements/Label.vue'

const props = withDefaults(defineProps<NCheckboxProps>(), {
  forceMount: true,
})
const emits = defineEmits<CheckboxRootEmits>()

const delegatedProps = reactivePick(props, [
  'checked',
  'defaultChecked',
  'disabled',
  'id',
  'name',
  'required',
  'value',
  'size',
])

const forwarded = useForwardPropsEmits(delegatedProps, emits)

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
      v-bind="forwarded"
      :id="id"
      :class="
        cn(
          'peer checkbox',
          props.class,
        )"
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
            :name="props.checked === 'indeterminate'
              ? props.una?.checkboxIndeterminateIcon ?? 'checkbox-indeterminate-icon'
              : props.checked
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
