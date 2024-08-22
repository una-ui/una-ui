<script lang="ts" setup>
import { cn } from '../../../utils'
import type { NBreadcrumbListProps } from '../../../types'

const props = defineProps<NBreadcrumbListProps>()
</script>

<template>
  <ol
    :class="cn(
      'breadcrumb-list',
      props.class,
      props.una?.breadcrumbList,
    )"
  >
    <slot />
  </ol>
</template>
