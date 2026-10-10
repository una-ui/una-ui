<script lang="ts" setup>
import type { NBreadcrumbListProps } from '../../../types'
import { cn } from '../../../utils'

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
