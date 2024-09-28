<script setup lang="ts">
import type { NSwitchProps } from '../../types'
import {
  SwitchRoot,
  type SwitchRootEmits,
  SwitchThumb,
  useForwardPropsEmits,
} from 'radix-vue'
import { cn } from '../../utils'

const props = defineProps<NSwitchProps>()

const emit = defineEmits<SwitchRootEmits>()

const forwarded = useForwardPropsEmits(props, emit)
</script>

<template>
  <SwitchRoot
    v-slot="{ checked }"
    v-bind="forwarded"
    class="switch data-[disabled]:switch-disabled"
    :class="outset ? 'switch-outset' : 'switch-inset'"
    :switch="props.switch"
    :disabled="disabled || loading"
  >
    <div
      :class="cn(
        'switch-track',
        outset
          ? 'switch-track-outset'
          : 'switch-track-inset',
        una?.switchTrack,
        checked
          ? cn('switch-track-on', una?.switchTrackOn)
          : cn('switch-track-off', una?.switchTrackOff),
      )"
    >
      <SwitchThumb
        aria-hidden="true"
        switch="thumb"
        :class="[
          una?.switchThumb,
          checked
            ? cn('switch-thumb-on', una?.switchThumbOn)
            : cn('switch-thumb-off', una?.switchThumbOff),
          outset
            ? 'switch-thumb-outset'
            : 'switch-thumb-inset',
        ]"
      >
        <slot v-if="!loading" name="icon" :checked :on="checked">
          <NIcon
            switch="icon-base"
            :name="(checked ? onIcon : offIcon) || icon"
            :class="cn(
              una?.switchIconBase,
              checked
                ? ['switch-icon-on', una?.switchIconOn]
                : ['switch-icon-off', una?.switchIconOff],
            )"
          />
        </slot>
        <slot v-else name="loading-icon" :checked :on="checked">
          <NIcon
            switch="icon-base loading"
            :class="una?.switchLoading"
            :name="una?.switchLoadingIcon ?? 'switch-loading-icon'"
          />
        </slot>
      </SwitchThumb>
    </div>
  </SwitchRoot>
</template>
