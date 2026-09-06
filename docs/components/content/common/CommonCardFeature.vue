<script setup lang="ts">
import type { NButtonProps } from '../../../../packages/nuxt/src/runtime/types'

withDefaults(defineProps<{
  icon: string
  title: string
  description: string
  action?: NButtonProps
}>(), {})
</script>

<template>
  <CommonCardSpotlight>
    <SmartIcon
      :size="28"
      :name="icon"
    />
    <div>
      <h3 class="text-accent-foreground font-bold group-hover:text-$c-brand-light">
        {{ title }}
      </h3>

      <p class="mt-2 text-muted-foreground">
        {{ description }}
      </p>
    </div>

    <div v-if="action">
      <NButton
        v-bind="action"
      />
    </div>
  </CommonCardSpotlight>
</template>
