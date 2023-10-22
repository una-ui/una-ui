<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { isEqual } from 'ohash'
import type { NLinkProps } from '../../types'

// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
// @ts-ignore tsconfig
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
    navLinkActive: {
      type: String as PropType<NLinkProps['navLinkActive']>,
      default: undefined,
    },
    navLinkInactive: {
      type: String as PropType<NLinkProps['navLinkInactive']>,
      default: undefined,
    },
  },
  setup(props) {
    function resolveLinkClass(route: any, $route: any, { isActive, isExactActive }: { isActive: boolean; isExactActive: boolean }) {
      if (props.exactQuery && !isEqual(route.query, $route.query))
        return props.inactiveClass

      if (!props.exact && isActive)
        return props.activeClass

      return props.inactiveClass
    }

    function resolveNavLinkActive(route: any, $route: any, { isActive, isExactActive }: { isActive: boolean; isExactActive: boolean }) {
      if (!props.exact && isActive)
        return props.navLinkActive
    }

    function resolveNavLinkInactive(route: any, $route: any, { isActive, isExactActive }: { isActive: boolean; isExactActive: boolean }) {
      if (props.exactQuery && !isEqual(route.query, $route.query))
        return props.inactiveClass

      return props.inactiveClass
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
      :nav-link-active="resolveNavLinkActive(route, $route, { isActive, isExactActive })"
      :nav-link-inactive="resolveNavLinkInactive(route, $route, { isActive, isExactActive })"
      @click="(e) => !isExternal && navigate(e)"
    >
      <slot v-bind="{ isActive: exact ? isExactActive : isActive }" />
    </a>
  </NuxtLink>
</template>
