<script setup lang="ts" generic="T extends U[], U extends NNavigationMenuItemProps">
import type { NavigationMenuRootEmits } from 'reka-ui'
import type { NNavigationMenuItemProps, NNavigationMenuProps } from '../../types'
import { createReusableTemplate, reactiveOmit } from '@vueuse/core'
import { NavigationMenuRoot, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils'
import NavigationMenuContent from './NavigationMenuContent.vue'
import NavigationMenuContentItem from './NavigationMenuContentItem.vue'
import NavigationMenuIndicator from './NavigationMenuIndicator.vue'
import NavigationMenuItem from './NavigationMenuItem.vue'
import NavigationMenuLink from './NavigationMenuLink.vue'
import NavigationMenuList from './NavigationMenuList.vue'
import NavigationMenuTrigger from './NavigationMenuTrigger.vue'
import NavigationMenuViewport from './NavigationMenuViewport.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NNavigationMenuProps<T>>(), {
  orientation: 'horizontal',
  unmountOnHide: true,
})
const emits = defineEmits<NavigationMenuRootEmits>()

const rootProps = reactiveOmit(props, ['navigationMenu', 'navigationMenuLink', 'una', 'items'])
const forwarded = useForwardPropsEmits(rootProps, emits)

const [DefineLinkTemplate, ReuseLinkTemplate] = createReusableTemplate()
</script>

<template>
  <NavigationMenuRoot
    v-slot="{ modelValue }"
    v-bind="forwarded"
    :class="cn(
      'navigation-menu',
      props.una?.navigationMenu,
      props.class,
    )"
  >
    <slot>
      <DefineLinkTemplate v-slot="{ link, isList }">
        <component
          :is="isList ? NavigationMenuContentItem : NavigationMenuLink"
          :size
          :una
          :disabled="link.disabled"
          v-bind="{ ...link, ...props._navigationMenuLink }"
        />
      </DefineLinkTemplate>

      <NavigationMenuList
        v-bind="props._navigationMenuList"
        :una
        :orientation
      >
        <slot name="list" :items="items">
          <template
            v-for="item, idx in items"
            :key="item"
          >
            <NavigationMenuItem
              v-if="item.children && item.children?.length > 0"
              v-bind="props._navigationMenuItem"
              :value="item.value"
              :una
            >
              <slot :name="item.slot || 'item'" :item="item" :active="item.active">
                <NavigationMenuTrigger
                  :size
                  :una
                  :navigation-menu="item?._navigationMenuTrigger?.navigationMenu ?? item.navigationMenu ?? navigationMenu"
                  :disabled="item?._navigationMenuTrigger?.disabled ?? item.disabled ?? disabled"
                  v-bind="{ ...(item as Partial<U>), ...props._navigationMenuTrigger, ...item?._navigationMenuTrigger }"
                >
                  <slot name="trigger" :model-value :item="item" :index="idx" />
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  v-bind="props._navigationMenuContent"
                  :una
                >
                  <slot :name="item.slot ? `${item.slot}-content` : 'item-content'" :children="item.children" :item="item">
                    <ul class="navigation-menu-content-list">
                      <ReuseLinkTemplate
                        v-for="(child, childIndex) in item.children"
                        :key="childIndex"
                        :link="child"
                        :is-list="true"
                        :navigation-menu-link
                      />
                    </ul>
                  </slot>
                </NavigationMenuContent>
              </slot>
            </NavigationMenuItem>
            <NavigationMenuItem
              v-else
              v-bind="props._navigationMenuItem"
              :value="item.value"
              :una
            >
              <slot :name="item.slot || 'item'" :item="item">
                <ReuseLinkTemplate
                  :link="item"
                  :is-list="false"
                  :navigation-menu="item.navigationMenu ?? navigationMenu"
                />
              </slot>
            </NavigationMenuItem>
          </template>
        </slot>
        <NavigationMenuIndicator
          v-if="indicator"
          :una
        />
      </NavigationMenuList>
    </slot>

    <slot name="viewport">
      <NavigationMenuViewport
        v-bind="props._navigationMenuViewport"
        :orientation="props.orientation"
      />
    </slot>
  </NavigationMenuRoot>
</template>
