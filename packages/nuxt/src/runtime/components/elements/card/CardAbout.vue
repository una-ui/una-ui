<script setup lang="ts">
import type { NCardAboutProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NCardAboutProps>()
</script>

<template>
  <div
    :class="cn(
      'card-about',
      props.class,
      props.una?.cardAbout,
    )"
  >
    <slot />
  </div>
</template>
