<script setup lang="ts">
import type { NAvatarAvatarFallbackProps } from '../../../types'
import { AvatarFallback } from 'reka-ui'
import { cn, omitProps } from '../../../utils'
import Icon from '../Icon.vue'

const props = withDefaults(defineProps<NAvatarAvatarFallbackProps>(), {
  as: 'span',
})
</script>

<template>
  <AvatarFallback
    as-child
  >
    <component
      :is="as"
      v-bind="omitProps(props, ['label', 'una', 'icon'])"
      :class="cn(
        'avatar-fallback',
        una?.avatarFallback,
        props.class,
      )"
    >
      <slot>
        <span
          v-if="label && !icon"
          :class="cn(
            'avatar-label',
            una?.avatarLabel,
          )"
        >
          {{ label }}
        </span>
        <Icon
          v-else-if="icon"
          :class="cn(
            'avatar-icon',
            una?.avatarIcon,
          )"
          :name="label"
        />
      </slot>
    </component>
  </AvatarFallback>
</template>
