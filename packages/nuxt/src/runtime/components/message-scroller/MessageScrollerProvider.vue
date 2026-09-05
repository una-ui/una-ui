<script setup lang="ts">
import type { NMessageScrollerProviderProps } from '../../types'
import { provideMessageScroller } from './useMessageScroller'

const props = defineProps<NMessageScrollerProviderProps>()

provideMessageScroller(props)
</script>

<template>
  <slot />
</template>
