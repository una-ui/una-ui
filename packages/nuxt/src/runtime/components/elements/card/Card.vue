<script setup lang="ts">
import { computed, useSlots } from 'vue'
import type { NCardProps } from '../../../types/card'
import CardContent from './CardContent.vue'
import CardHeader from './CardHeader.vue'
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

defineSlots<{
  default: () => any
  header: () => any
  footer: () => any
  title: () => any
  description: () => any
}>()

const slots = useSlots()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const cardVariants = ['soft', 'outline', 'border'] as const
const hasVariant = computed(() => cardVariants.some(cardVariant => props.card?.includes(cardVariant)))
const isBaseVariant = computed(() => props.card?.includes('~'))
</script>

<template>
  <div
    v-bind="{ ...$attrs, delegatedProps }"
    :card="card"
    class="card"
    :class="[
      !hasVariant && !isBaseVariant ? una?.cardDefaultVariant : '',
      una?.card,
      props.class,
    ]"
  >
    <CardHeader
      v-if="slots.header"
      v-bind="delegatedProps.cardHeader"
    >
      <slot name="header" />
    </CardHeader>
    <div class="card-body">
      <div class="flex flex-col gap-1">
        <CardTitle
          v-if="$slots.title || title" card="title"
          v-bind="delegatedProps.cardTitle"
          :size="props.size"
        >
          <slot name="title">
            <div>
              {{ title }}
            </div>
          </slot>
        </CardTitle>
        <CardDescription
          v-if="$slots.subtitle || description"
          card="description"
          v-bind="delegatedProps.cardSubtitle"
          :size="props.size"
        >
          <slot name="description">
            <div>
              {{ description }}
            </div>
          </slot>
        </CardDescription>
      </div>
      <CardContent
        v-if="slots.default"
        v-bind="delegatedProps.cardContent"
        :size="props.size"
      >
        <slot />
      </CardContent>
      <CardFooter
        v-if="slots.footer"
        v-bind="delegatedProps.cardFooter"
        :size="props.size"
      >
        <slot name="footer" />
      </CardFooter>
    </div>
  </div>
</template>
