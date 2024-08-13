<script setup lang="ts">
import { computed } from 'vue'
import type { NCardProps } from '../../../types/card'
import { cn } from '../../../utils'
import CardContent from './CardContent.vue'
import CardHeader from './CardHeader.vue'
import CardAbout from './CardAbout.vue'
import CardFooter from './CardFooter.vue'
import CardTitle from './CardTitle.vue'
import CardDescription from './CardDescription.vue'

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
      una?.card,
    )"
  >
    <slot name="root">
      <CardHeader
        v-bind="delegatedProps._cardHeader"
      >
        <slot name="header" />
      </CardHeader>

      <CardAbout
        v-if="$slots.about || title || description || $slots.title || $slots.description"
        v-bind="delegatedProps._cardAbout"
      >
        <slot name="about">
          <CardTitle
            v-if="$slots.title || title"
            v-bind="delegatedProps._cardTitle"
          >
            <slot name="title">
              {{ title }}
            </slot>
          </CardTitle>
          <CardDescription
            v-if="$slots.description || description"
            v-bind="delegatedProps._cardDescription"
          >
            <slot name="description">
              {{ description }}
            </slot>
          </CardDescription>
        </slot>
      </CardAbout>

      <CardContent
        v-if="$slots.default"
        v-bind="delegatedProps._cardContent"
      >
        <slot />
      </CardContent>

      <CardFooter
        v-if="$slots.footer"
        v-bind="delegatedProps._cardFooter"
      >
        <slot name="footer" />
      </CardFooter>
    </slot>
  </div>
</template>
