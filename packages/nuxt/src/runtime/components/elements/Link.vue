<script lang="ts">
import type { PropType } from 'vue'
import type { NLinkProps } from '../../types'
import { NuxtLink } from '#components'
import { useRoute } from '#imports'
import { diff, isEqual } from 'ohash/utils'
import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  props: {
    ...NuxtLink.props,
    // config
    label: {
      type: String as PropType<NLinkProps['label']>,
      default: undefined,
    },
    /** Force the link to be active independent of the current route. */
    active: {
      type: Boolean as PropType<NLinkProps['active']>,
      default: undefined,
    },
    exact: {
      type: Boolean as PropType<NLinkProps['exact']>,
      default: false,
    },
    exactQuery: {
      type: Boolean as PropType<NLinkProps['exactQuery']>,
      default: false,
    },
    exactHash: {
      type: Boolean as PropType<NLinkProps['exactHash']>,
      default: false,
    },
    disabled: {
      type: Boolean as PropType<NLinkProps['disabled']>,
      default: false,
    },
    // styling
    inactiveClass: {
      type: String as PropType<NLinkProps['inactiveClass']>,
      default: undefined,
    },

    // TODO: convert to sidebar preset
    navLinkActive: {
      type: String as PropType<NLinkProps['navLinkActive']>,
      default: undefined,
    },
    navLinkInactive: {
      type: String as PropType<NLinkProps['navLinkInactive']>,
      default: undefined,
    },
  },
  setup(props: any) {
    const route = useRoute()

    function resolveLinkClass(route: any, $route: any, { isActive, isExactActive }: { isActive: boolean, isExactActive: boolean }): string | null {
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

    function resolveNavLinkActive(route: any, $route: any, { isActive, isExactActive }: { isActive: boolean, isExactActive: boolean }): string | null {
      if (props.exactQuery && !isEqual(route.query, $route.query))
        return null

      if (props.exactHash && !isEqual(route.hash, $route.hash))
        return null

      if (props.exact && isExactActive)
        return props.navLinkActive

      if (!props.exact && isActive)
        return props.navLinkActive

      return null
    }

    function resolveNavLinkInactive(route: any, $route: any, { isActive, isExactActive }: { isActive: boolean, isExactActive: boolean }): string | null {
      if (props.exactQuery && !isEqual(route.query, $route.query))
        return props.navLinkInactive

      if (props.exactHash && !isEqual(route.hash, $route.hash))
        return props.navLinkInactive

      if ((!props.exact && isActive) || (props.exact && isExactActive))
        return null

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

    function isLinkActive({ route: linkRoute, isActive, isExactActive }: any) {
      if (props.active !== undefined) {
        return props.active
      }

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

    return {
      resolveLinkClass,
      resolveNavLinkActive,
      resolveNavLinkInactive,
      isLinkActive,
      label: props.label,
      disabled: props.disabled,
    }
  },
})
</script>

<template>
  <NuxtLink
    v-slot="{ route, href, target, rel, navigate, isActive, isExactActive, isExternal }"
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
        resolveLinkClass(route, $route, { isActive, isExactActive }),
      ]"
      :nav-link-active="resolveNavLinkActive(route, $route, { isActive, isExactActive })"
      :nav-link-inactive="resolveNavLinkInactive(route, $route, { isActive, isExactActive })"
      @click="(e) => !isExternal && navigate(e)"
    >
      <slot :active="isLinkActive({ route, isActive, isExactActive })">
        {{ label }}
      </slot>
    </a>
  </NuxtLink>
</template>
