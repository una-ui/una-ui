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
  },
  setup(props) {
    function resolveLinkClass(route: any, $route: any, { isActive, isExactActive }: { isActive: boolean; isExactActive: boolean }) {
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

    return {
      resolveLinkClass,
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
      @click="(e) => !isExternal && navigate(e)"
    >
      <slot v-bind="{ isActive: exact ? isExactActive : isActive }" />
    </a>
  </NuxtLink>
</template>
