<script lang="ts" setup>
import type { NBreadcrumbRootProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NBreadcrumbRootProps>()
</script>

<template>
  <nav
    aria-label="breadcrumb"
    :class="cn(
      props.class,
      props.una?.breadcrumbRoot,
    )"
  >
    <slot />
  </nav>
</template>
