<script setup lang="ts" generic="T extends U[], U extends NNavigationMenuItemProps">
import type { NavigationMenuContentEmits, NavigationMenuRootEmits } from 'reka-ui'
import type { NNavigationMenuItemProps, NNavigationMenuProps } from '../../types'
import { createReusableTemplate, reactiveOmit } from '@vueuse/core'
import { useForwardPropsEmits } from 'reka-ui'
import NavigationMenuContent from './NavigationMenuContent.vue'
import NavigationMenuContentItem from './NavigationMenuContentItem.vue'
import NavigationMenuIndicator from './NavigationMenuIndicator.vue'
import NavigationMenuItem from './NavigationMenuItem.vue'
import NavigationMenuLink from './NavigationMenuLink.vue'
import NavigationMenuList from './NavigationMenuList.vue'
import NavigationMenuRoot from './NavigationMenuRoot.vue'
import NavigationMenuTrigger from './NavigationMenuTrigger.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NNavigationMenuProps<T>>(), {
  orientation: 'horizontal',
  unmountOnHide: true,
})
const emits = defineEmits<NavigationMenuRootEmits & NavigationMenuContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)

const rootProps = reactiveOmit(forwarded.value as Partial<NNavigationMenuProps<T>>, [
  'items',
  'size',
  'navigationMenu',
  'navigationMenuLink',
])

const [DefineLinkTemplate, ReuseLinkTemplate] = createReusableTemplate()
</script>

<template>
  <DefineLinkTemplate v-slot="{ link, isList }">
    <component
      :is="isList ? NavigationMenuContentItem : NavigationMenuLink"
      :size
      :una
      :disabled="link.disabled"
      v-bind="{ ...link, ...forwarded._navigationMenuLink }"
    />
  </DefineLinkTemplate>

  <NavigationMenuRoot
    v-slot="{ modelValue }"
    v-bind="{ ...rootProps, ...forwarded._navigationMenuRoot, _navigationMenuViewport, ...$attrs }"
  >
    <slot>
      <NavigationMenuList
        v-bind="forwarded._navigationMenuList"
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
              v-bind="forwarded._navigationMenuItem"
              :value="item.value"
              :una
            >
              <slot :name="item.slot || 'item'" :item="item" :active="item.active">
                <NavigationMenuTrigger
                  :size
                  :una
                  :navigation-menu="item?._navigationMenuTrigger?.navigationMenu ?? item.navigationMenu ?? navigationMenu"
                  :disabled="item?._navigationMenuTrigger?.disabled ?? item.disabled ?? disabled"
                  v-bind="{ ...(item as Partial<U>), ...forwarded._navigationMenuTrigger, ...item?._navigationMenuTrigger }"
                >
                  <slot name="trigger" :model-value :item="item" :index="idx" />
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  v-bind="forwarded._navigationMenuContent"
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
              v-bind="forwarded._navigationMenuItem"
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
  </NavigationMenuRoot>
</template>
