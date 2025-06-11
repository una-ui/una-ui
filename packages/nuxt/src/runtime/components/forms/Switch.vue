<script setup lang="ts">
import type { SwitchRootEmits } from 'reka-ui'
import type { NSwitchProps } from '../../types'
import { reactivePick } from '@vueuse/core'
import {
  SwitchRoot,
  SwitchThumb,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '../../utils'
import NIcon from '../elements/Icon.vue'

const props = withDefaults(defineProps<NSwitchProps>(), {
  size: 'md',
  switchChecked: 'primary',
  switchUnchecked: 'gray',
})

const emit = defineEmits<SwitchRootEmits>()

const rootPropsEmits = useForwardPropsEmits(reactivePick(props, 'as', 'asChild', 'modelValue', 'defaultValue', 'disabled', 'id', 'name', 'required', 'value'), emit)
</script>

<template>
  <SwitchRoot
    v-slot="{ modelValue }"
    v-bind="rootPropsEmits"
    :class="cn(
      'peer switch',
      una?.switch,
      modelValue
        ? una?.switchChecked
        : una?.switchUnchecked,
    )"
    :disabled="disabled || loading"
    :switch-checked
    :switch-unchecked
    :size
  >
    <SwitchThumb
      :class="cn(
        'peer switch-thumb',
        una?.switchThumb,
        modelValue
          ? 'switch-thumb-checked'
          : 'switch-thumb-unchecked',
        modelValue
          ? una?.switchThumbChecked
          : una?.switchThumbUnchecked,
      )"
    >
      <slot v-if="!loading" name="icon" :model-value>
        <NIcon
          :name="(modelValue ? checkedIcon : uncheckedIcon) || icon"
          :class="cn(
            'switch-icon',
            una?.switchIcon,
            modelValue
              ? ['switch-icon-checked', una?.switchIconChecked]
              : ['switch-icon-unchecked', una?.switchIconUnchecked],
          )"
        />
      </slot>
      <slot v-else name="loading-icon" :model-value>
        <NIcon
          :class="cn(
            'switch-icon switch-loading-icon',
            una?.switchLoading,
          )"
          :name="una?.switchLoadingIconName || 'switch-loading-icon-name'"
        />
      </slot>
    </SwitchThumb>
  </SwitchRoot>
</template>
