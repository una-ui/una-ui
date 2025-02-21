<script setup lang="ts">
import type { NSwitchProps } from '../../types'
import { reactivePick } from '@vueuse/core'
import {
  SwitchRoot,
  type SwitchRootEmits,
  SwitchThumb,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '../../utils'
import NIcon from '../elements/Icon.vue'

const props = withDefaults(defineProps<NSwitchProps>(), {
  size: 'md',
  switchChecked: '~',
  switchUnchecked: '~',
})

const emit = defineEmits<SwitchRootEmits>()

const rootPropsEmits = useForwardPropsEmits(reactivePick(props, 'as', 'asChild', 'checked', 'defaultChecked', 'disabled', 'id', 'name', 'required', 'value'), emit)
</script>

<template>
  <SwitchRoot
    v-slot="{ checked }"
    v-bind="rootPropsEmits"
    :class="cn(
      'peer switch',
      una?.switch,
      checked
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
        'switch-thumb',
        una?.switchThumb,
        checked
          ? 'switch-thumb-checked'
          : 'switch-thumb-unchecked',
        checked
          ? una?.switchThumbChecked
          : una?.switchThumbUnchecked,
      )"
    >
      <slot v-if="!loading" name="icon" :checked>
        <NIcon
          :name="(checked ? checkedIcon : uncheckedIcon) || icon"
          :class="cn(
            'switch-icon',
            una?.switchIcon,
            checked
              ? ['switch-icon-checked', una?.switchIconChecked]
              : ['switch-icon-unchecked', una?.switchIconUnchecked],
          )"
        />
      </slot>
      <slot v-else name="loading-icon" :checked>
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
