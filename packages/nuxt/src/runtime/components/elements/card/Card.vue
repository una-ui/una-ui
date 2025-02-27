<script setup lang="ts">
import type { NCardProps } from '../../../types/card'
import { computed } from 'vue'
import { cn } from '../../../utils'
import CardContent from './CardContent.vue'
import CardDescription from './CardDescription.vue'
import CardFooter from './CardFooter.vue'
import CardHeader from './CardHeader.vue'
import CardTitle from './CardTitle.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NCardProps>(), {
  una: () => ({
    cardDefaultVariant: 'card-default-variant',
  }),
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const cardVariants = ['soft', 'outline'] as const
const hasVariant = computed(() => cardVariants.some(cardVariant => props.card?.includes(cardVariant)))
const isBaseVariant = computed(() => props.card?.includes('~'))
</script>

<template>
  <div
    v-bind="{ ...$attrs, delegatedProps }"
    :card="card"
    :class="cn(
      'card',
      !hasVariant && !isBaseVariant ? una?.cardDefaultVariant : '',
      props.class,
    )"
  >
    <slot name="root">
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
        </slot>
      </CardHeader>

      <CardContent
        v-if="$slots.default"
        v-bind="delegatedProps._cardContent"
        :una
      >
        <slot />
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
