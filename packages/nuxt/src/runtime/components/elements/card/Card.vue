<script setup lang="ts">
import type { NCardProps } from '../../../types/card'
import { reactiveOmit } from '@vueuse/core'
import { cn } from '../../../utils'
import CardAction from './CardAction.vue'
import CardContent from './CardContent.vue'
import CardDescription from './CardDescription.vue'
import CardFooter from './CardFooter.vue'
import CardHeader from './CardHeader.vue'
import CardTitle from './CardTitle.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NCardProps>(), {
  card: 'outline-gray',
})
const delegatedProps = reactiveOmit(props, ['class'])
</script>

<template>
  <div
    v-bind="{ ...$attrs, delegatedProps }"
    :card="card"
    :class="cn(
      'card',
      props.class,
    )"
  >
    <slot>
      <CardHeader
        v-if="$slots.header || $slots.title || $slots.description || title || description"
        v-bind="delegatedProps._cardHeader"
        :una
      >
        <slot name="header">
          <CardTitle
            v-if="$slots.title || title"
            v-bind="delegatedProps._cardTitle"
            :una
          >
            <slot name="title">
              {{ title }}
            </slot>
          </CardTitle>

          <CardDescription
            v-if="$slots.description || description"
            v-bind="delegatedProps._cardDescription"
            :una
          >
            <slot name="description">
              {{ description }}
            </slot>
          </CardDescription>

          <CardAction
            v-if="$slots.action"
            v-bind="delegatedProps._cardAction"
            :una
          >
            <slot name="action" />
          </CardAction>
        </slot>
      </CardHeader>

      <CardContent
        v-if="$slots.content"
        v-bind="delegatedProps._cardContent"
        :una
      >
        <slot name="content" />
      </CardContent>

      <CardFooter
        v-if="$slots.footer"
        v-bind="delegatedProps._cardFooter"
        :una
      >
        <slot name="footer" />
      </CardFooter>
    </slot>
  </div>
</template>
