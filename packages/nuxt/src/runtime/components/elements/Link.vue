<script setup lang="ts">
import type { NLinkProps } from '../../types'
import { NuxtLink } from '#components'
import { useRoute } from '#imports'
import { isEqual } from 'ohash/utils'
import { computed } from 'vue'
import { isPartiallyEqual } from '../../utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NLinkProps>(), {
  exact: false,
  exactQuery: false,
  exactHash: false,
  disabled: false,
  ariaCurrentValue: 'page',
})

const route = useRoute()

/**
 * Filters out custom props and passes only NuxtLink-compatible props
 * Avoids prefetch/noPrefetch conflict by only passing when explicitly true
 */
const nuxtLinkProps = computed(() => {
  const result: Record<string, any> = {
    to: props.to,
  }

  // Explicitly whitelist NuxtLink props to pass through
  const nuxtLinkKeys = [
    'href',
    'replace',
    'activeClass',
    'exactActiveClass',
    'ariaCurrentValue',
    'external',
    'target',
    'rel',
    'noRel',
    'prefetchedClass',
    'custom',
    'prefetchOn',
    'trailingSlash',
  ] as const

  nuxtLinkKeys.forEach((key) => {
    const value = props[key as keyof typeof props]
    if (value !== undefined) {
      result[key] = value
    }
  })

  // Only pass prefetch/noPrefetch if explicitly set to true (avoids conflict warning)
  if (props.prefetch === true) {
    result.prefetch = true
  }
  if (props.noPrefetch === true) {
    result.noPrefetch = true
  }

  return result
})

/**
 * Resolves the link class based on active state, exact matching, and custom query/hash checks
 */
function resolveLinkClass(linkRoute: any, $route: any, { isActive, isExactActive }: { isActive: boolean, isExactActive: boolean }): string | null | undefined {
  // Force active state if explicitly set
  if (props.active === true) {
    return props.activeClass
  }

  // Check for query/hash mismatch
  if (props.exactQuery && !isEqual(linkRoute.query, $route.query))
    return props.inactiveClass

  if (props.exactHash && !isEqual(linkRoute.hash, $route.hash))
    return props.inactiveClass

  // Exact mode: must match exactly
  if (props.exact) {
    return isExactActive ? props.exactActiveClass : props.inactiveClass
  }

  // Normal mode: partial match is sufficient
  return isActive ? props.activeClass : props.inactiveClass
}

/**
 * Resolves nav-link-active attribute for parent element styling
 */
function resolveNavLinkActive(linkRoute: any, $route: any, { isActive, isExactActive }: { isActive: boolean, isExactActive: boolean }): string | null | undefined {
  if (props.exactQuery && !isEqual(linkRoute.query, $route.query))
    return null

  if (props.exactHash && !isEqual(linkRoute.hash, $route.hash))
    return null

  if (props.exact && isExactActive)
    return props.navLinkActive

  if (!props.exact && isActive)
    return props.navLinkActive

  return null
}

/**
 * Resolves nav-link-inactive attribute for parent element styling
 */
function resolveNavLinkInactive(linkRoute: any, $route: any, { isActive, isExactActive }: { isActive: boolean, isExactActive: boolean }): string | null | undefined {
  if (props.exactQuery && !isEqual(linkRoute.query, $route.query))
    return props.navLinkInactive

  if (props.exactHash && !isEqual(linkRoute.hash, $route.hash))
    return props.navLinkInactive

  if ((!props.exact && isActive) || (props.exact && isExactActive))
    return null

  return props.navLinkInactive
}

/**
 * Determines if link is active for slot prop, supporting partial query matching
 */
function isLinkActive({ route: linkRoute, isActive, isExactActive }: any): boolean {
  if (props.active !== undefined) {
    return props.active
  }

  // Support partial query matching
  if (props.exactQuery === 'partial') {
    if (!isPartiallyEqual(linkRoute.query, route.query))
      return false
  }
  else if (props.exactQuery === true) {
    if (!isEqual(linkRoute.query, route.query))
      return false
  }

  if (props.exactHash && linkRoute.hash !== route.hash) {
    return false
  }

  if (props.exact && isExactActive) {
    return true
  }

  if (!props.exact && isActive) {
    return true
  }

  return false
}
</script>

<template>
  <NuxtLink
    v-slot="{ route: linkRoute, href, target, rel, navigate, isActive, isExactActive, isExternal }: any"
    v-bind="nuxtLinkProps"
    custom
  >
    <a
      v-bind="{
        ...$attrs,
        ...(exact && isExactActive ? { 'aria-current': ariaCurrentValue } : {}),
      }"
      :href="disabled ? undefined : href"
      :rel
      :aria-disabled="disabled ? 'true' : undefined"
      :target
      :class="[
        { '_link-disabled': disabled },
        resolveLinkClass(linkRoute, route, { isActive, isExactActive }),
      ]"
      :nav-link-active="resolveNavLinkActive(linkRoute, route, { isActive, isExactActive })"
      :nav-link-inactive="resolveNavLinkInactive(linkRoute, route, { isActive, isExactActive })"
      @click="(e: MouseEvent) => !isExternal && !disabled && navigate(e)"
    >
      <slot :active="isLinkActive({ route: linkRoute, isActive, isExactActive })">
        {{ label }}
      </slot>
    </a>
  </NuxtLink>
</template>
