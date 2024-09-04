<script>
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { isEqual } from 'ohash'
import type { NLinkProps } from '../../types'

// @ts-expect-error tsconfig
import { NuxtLink } from '#components'

export default defineComponent({
  inheritAttrs: false,
  props: {
    ...NuxtLink.props,
    // config
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

    // styling
    inactiveClass: {
      type: String as PropType<NLinkProps['inactiveClass']>,
      default: undefined,
    },

    // preset
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
    function resolveLinkClass(route: any, $route: any, { isActive, isExactActive }: { isActive: boolean, isExactActive: boolean }) {
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

    function resolveNavLinkActive(route: any, $route: any, { isActive, isExactActive }: { isActive: boolean, isExactActive: boolean }) {
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

    function resolveNavLinkInactive(route: any, $route: any, { isActive, isExactActive }: { isActive: boolean, isExactActive: boolean }) {
      if (props.exactQuery && !isEqual(route.query, $route.query))
        return props.navLinkInactive

      if (props.exactHash && !isEqual(route.hash, $route.hash))
        return props.navLinkInactive

      if ((!props.exact && isActive) || (props.exact && isExactActive))
        return null

      return props.navLinkInactive
    }

    return {
      resolveLinkClass,
      resolveNavLinkActive,
      resolveNavLinkInactive,
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
      :href="href"
      :rel="rel"
      :target="target"
      :class="resolveLinkClass(route, $route, { isActive, isExactActive })"
      :nav-link-active="resolveNavLinkActive(route, $route, { isActive, isExactActive })"
      :nav-link-inactive="resolveNavLinkInactive(route, $route, { isActive, isExactActive })"
      @click="(e) => !isExternal && navigate(e)"
    >
      <slot v-bind="{ isActive: props.exact ? isExactActive : isActive }" />
    </a>
  </NuxtLink>
</template>
