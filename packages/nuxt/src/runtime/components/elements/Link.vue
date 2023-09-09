<script setup lang="ts">
// import type { NLinkProps } from '../../types'

// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
// @ts-ignore tsconfig
import { NuxtLink } from '#components'

interface NLinkProps {
  exact?: boolean
  exactQuery?: boolean
  exactHash?: boolean
  activeClass?: string
  inactiveClass?: string
}

const props = withDefaults(defineProps<NLinkProps>(), {
  ...NuxtLink.props,
})

function resolveLinkClass(route: any, $route: any, { isActive, isExactActive }: { isActive: boolean; isExactActive: boolean }) {
  if (props.exactQuery && route.query.toLowerCase() !== $route.query.toLowerCase())
    return props.inactiveClass

  if (props.exactHash && route.hash !== $route.hash)
    return props.inactiveClass

  if (props.exact && isExactActive)
    return props.activeClass

  if (!props.exact && isActive)
    return props.activeClass

  return props.inactiveClass
}
</script>

<template>
  <NuxtLink
    v-slot="{ route, href, target, rel, navigate, isActive, isExactActive, isExternal }"
    v-bind="props"
    class="link"
    custom
  >
    <a
      v-bind="$attrs"
      :href="href"
      :rel="rel"
      class="link"
      :target="target"
      :class="resolveLinkClass(route, $route, { isActive, isExactActive })"
      @click="(e) => !isExternal && navigate(e)"
    >
      <slot v-bind="{ isActive: exact ? isExactActive : isActive }" />
    </a>
  </NuxtLink>
</template>
