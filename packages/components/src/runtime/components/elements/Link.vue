<script setup lang="ts">
import type { RouterLink as _RouterLink, RouteLocationResolvedGeneric } from 'vue-router'
import type { NLinkProps } from '../../types'
import { diff, isEqual } from 'ohash/utils'
import { useRoute } from 'vue-router'
import { useUnaAppConfig } from '../../composables/useUnaAppConfig'

const props = withDefaults(defineProps<NLinkProps>(), {
  noRel: undefined,
  prefetch: undefined,
  noPrefetch: undefined,
  replace: undefined,
  default: undefined,
  external: undefined,
  custom: undefined,
})
const $route = useRoute()
const { RouterLink } = useUnaAppConfig().components

type RouterLinkSlot = NonNullable<InstanceType<typeof _RouterLink>['$slots']['default']>
type RouterLinkSlotProps = Parameters<RouterLinkSlot>[0]

function resolveLinkClass(route: RouteLocationResolvedGeneric, { isActive, isExactActive }: { isActive: boolean, isExactActive: boolean }): string | undefined {
  if (props.active === true) {
    return props.activeClass
  }

  if (props.active === false) {
    return props.inactiveClass
  }

  if (props.exactQuery && !isEqual(route.query, $route.query))
    return props.inactiveClass

  if (props.exactHash && !isEqual(route.hash, $route.hash))
    return props.inactiveClass

  if (props.exact && isExactActive)
    return props.exactActiveClass

  if (!props.exact && isActive)
    return props.activeClass

  return props.inactiveClass
}

function resolveNavLinkActive(route: RouteLocationResolvedGeneric, { isActive, isExactActive }: { isActive: boolean, isExactActive: boolean }): string | undefined {
  if (props.exactQuery && !isEqual(route.query, $route.query))
    return undefined

  if (props.exactHash && !isEqual(route.hash, $route.hash))
    return undefined

  if (props.exact && isExactActive)
    return props.navLinkActive

  if (!props.exact && isActive)
    return props.navLinkActive

  return undefined
}

function resolveNavLinkInactive(route: RouteLocationResolvedGeneric, { isActive, isExactActive }: { isActive: boolean, isExactActive: boolean }): string | undefined {
  if (props.exactQuery && !isEqual(route.query, $route.query))
    return props.navLinkInactive

  if (props.exactHash && !isEqual(route.hash, $route.hash))
    return props.navLinkInactive

  if ((!props.exact && isActive) || (props.exact && isExactActive))
    return undefined

  return props.navLinkInactive
}

function isPartiallyEqual(item1: any, item2: any) {
  const diffedKeys = diff(item1, item2).reduce((filtered: Set<string>, q: any) => {
    if (q.type === 'added') {
      filtered.add(q.key)
    }
    return filtered
  }, new Set<string>())

  const item1Filtered = Object.fromEntries(Object.entries(item1).filter(([key]) => !diffedKeys.has(key)))
  const item2Filtered = Object.fromEntries(Object.entries(item2).filter(([key]) => !diffedKeys.has(key)))

  return isEqual(item1Filtered, item2Filtered)
}

function isLinkActive({ route, isActive, isExactActive }: { route: RouteLocationResolvedGeneric, isActive: boolean, isExactActive: boolean }) {
  if (props.active !== undefined) {
    return props.active
  }

  if (props.exactQuery === 'partial') {
    if (!isPartiallyEqual(route.query, $route.query))
      return false
  }
  else if (props.exactQuery === true) {
    if (!isEqual(route.query, $route.query))
      return false
  }

  if (props.exactHash && route.hash !== $route.hash) {
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
  <component
    :is="RouterLink"
    v-slot="{ route, href, navigate, isActive, isExactActive }: RouterLinkSlotProps"
    v-bind="$props"
    custom
  >
    <a
      v-bind="$attrs"
      :href="disabled ? undefined : href"
      :rel="rel ?? undefined"
      :aria-disabled="disabled ? 'true' : undefined"
      :target="target ?? undefined"
      :class="[
        { '_link-disabled': disabled },
        resolveLinkClass(route, { isActive, isExactActive }),
      ]"
      :nav-link-active="resolveNavLinkActive(route, { isActive, isExactActive })"
      :nav-link-inactive="resolveNavLinkInactive(route, { isActive, isExactActive })"
      @click="(e) => !external && navigate(e)"
    >
      <slot :active="isLinkActive({ route, isActive, isExactActive })">
        {{ label }}
      </slot>
    </a>
  </component>
</template>
