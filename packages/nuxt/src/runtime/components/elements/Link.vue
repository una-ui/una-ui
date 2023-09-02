<script lang="ts">
import { defineComponent } from 'vue'

// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
// @ts-ignore tsconfig
import { NuxtLink } from '#components'

export default defineComponent({
  inheritAttrs: false,
  props: {
    ...NuxtLink.props,
    type: {
      type: String,
      default: 'button',
    },
    inactiveClass: {
      type: String,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: null,
    },
    exact: {
      type: Boolean,
      default: false,
    },
    exactQuery: {
      type: Boolean,
      default: false,
    },
    exactHash: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
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

    return {
      resolveLinkClass,
    }
  },
})
</script>

<template>
  <button v-if="!to" v-bind="$attrs" :class="inactiveClass">
    <slot />
  </button>
  <NuxtLink
    v-else
    v-slot="{ route, href, target, rel, navigate, isActive, isExactActive, isExternal }"
    v-bind="$props"
    custom
  >
    <a
      v-bind="$attrs"
      :href="!disabled ? href : undefined"
      :aria-disabled="disabled ? 'true' : undefined"
      :role="disabled ? 'link' : undefined"
      :rel="rel"
      :target="target"
      :class="resolveLinkClass(route, $route, { isActive, isExactActive })"
      @click="(e) => !isExternal && navigate(e)"
    >
      <slot v-bind="{ isActive: exact ? isExactActive : isActive }" />
    </a>
  </NuxtLink>
</template>
