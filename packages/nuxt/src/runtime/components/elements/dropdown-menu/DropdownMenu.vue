<script setup lang="ts">
import type { DropdownMenuContentEmits, DropdownMenuRootEmits } from 'radix-vue'
import { DropdownMenuPortal, useForwardPropsEmits } from 'radix-vue'
import { createReusableTemplate } from '@vueuse/core'
import { omitProps, pickProps } from '../../../utils'
import type { NDropdownMenuProps } from '../../../types'
import DropdownMenuContent from './DropdownMenuContent.vue'
import DropdownMenuRoot from './DropdownMenuRoot.vue'
import DropdownMenuTrigger from './DropdownMenuTrigger.vue'
import DropdownMenuLabel from './DropdownMenuLabel.vue'
import DropdownMenuSeparator from './DropdownMenuSeparator.vue'
import DropdownMenuItem from './DropdownMenuItem.vue'
import DropdownMenuGroup from './DropdownMenuGroup.vue'
import DropdownMenuSub from './DropdownMenuSub.vue'
import DropdownMenuSubTrigger from './DropdownMenuSubTrigger.vue'
import DropdownMenuSubContent from './DropdownMenuSubContent.vue'

const props = defineProps<NDropdownMenuProps>()
const emits = defineEmits<DropdownMenuRootEmits & DropdownMenuContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)

const [DefineMenuSub, ReuseMenuSub] = createReusableTemplate<NDropdownMenuProps>()
</script>

<template>
  <DropdownMenuRoot
    v-bind="pickProps(forwarded, ['defaultOpen', 'open', 'modal', 'dir'])"
  >
    <slot>
      <slot name="trigger">
        <DropdownMenuTrigger
          v-bind="omitProps({ ...forwarded, ...forwarded._dropdownMenuTrigger }, [
            'dropdownMenuItem',
            'items',
            'menuLabel',

            '_dropdownMenuItem',
            '_dropdownMenuContent',
            '_dropdownMenuLabel',
            '_dropdownMenuSeparator',
            '_dropdownMenuGroup',
            '_dropdownMenuSub',
            '_dropdownMenuSubTrigger',
            '_dropdownMenuSubContent',
          ])"
        />
      </slot>

      <DropdownMenuContent
        v-bind="forwarded._dropdownMenuContent"
      >
        <slot name="content">
          <template
            v-if="menuLabel || $slots['menu-label']"
          >
            <DropdownMenuLabel
              :size
              :inset
              v-bind="forwarded._dropdownMenuLabel"
            >
              <slot name="menu-label">
                {{ menuLabel }}
              </slot>
            </DropdownMenuLabel>
            <DropdownMenuSeparator
              v-bind="forwarded._dropdownMenuSeparator"
            />
          </template>

          <slot name="items" :items>
            <DropdownMenuGroup
              v-bind="forwarded._dropdownMenuGroup"
            >
              <template
                v-for="item in items"
                :key="item.label"
              >
                <slot :name="`item-${item.label}`" />
                <DropdownMenuItem
                  v-if="!item.items && item.label"
                  :size
                  :inset
                  :dropdown-menu-item
                  v-bind="{ ...item, ...forwarded._dropdownMenuItem, ...item._dropdownMenuItem }"
                />

                <DropdownMenuSeparator
                  v-else-if="!item.label && !item.items"
                  v-bind="{ ...forwarded._dropdownMenuSeparator, ...item._dropdownMenuSeparator }"
                />

                <ReuseMenuSub
                  v-else
                  v-bind="item"
                />
              </template>
            </DropdownMenuGroup>
          </slot>
        </slot>
      </DropdownMenuContent>
    </slot>
  </DropdownMenuRoot>

  <DefineMenuSub
    v-slot="subProps"
  >
    <div>
      <template
        v-if="subProps.menuLabel"
      >
        <DropdownMenuLabel
          :size
          :inset
          v-bind="{ ...forwarded._dropdownMenuLabel, ...subProps._dropdownMenuLabel }"
        >
          {{ subProps.menuLabel }}
        </DropdownMenuLabel>
        <DropdownMenuSeparator
          v-bind="{ ...forwarded._dropdownMenuSeparator, ...subProps._dropdownMenuSeparator }"
        />
      </template>

      <DropdownMenuGroup
        v-bind="{ ...forwarded._dropdownMenuGroup, ...subProps._dropdownMenuGroup }"
      >
        <DropdownMenuSub
          v-bind="{ ...forwarded._dropdownMenuSub, ...subProps._dropdownMenuSub }"
        >
          <DropdownMenuSubTrigger
            :size
            :inset
            :dropdown-menu-item
            v-bind="omitProps({
              ...subProps,
              ...forwarded._dropdownMenuSubTrigger,
              ...subProps._dropdownMenuSubTrigger,
            }, ['$slots'])"
          >
            <slot name="sub-trigger" :label="subProps.label" />
          </DropdownMenuSubTrigger>

          <DropdownMenuPortal>
            <DropdownMenuSubContent
              v-bind="subProps._dropdownMenuSubContent"
            >
              <template
                v-for="subItem in subProps.items"
                :key="subItem.label"
              >
                <DropdownMenuItem
                  v-if="!subItem.items && subItem.label"
                  :size
                  :inset
                  :dropdown-menu-item
                  v-bind="{ ...subItem, ...forwarded._dropdownMenuItem, ...subItem._dropdownMenuItem }"
                >
                  {{ subItem.label }}
                </DropdownMenuItem>

                <DropdownMenuSeparator
                  v-else-if="!subItem.label && !subItem.items"
                  v-bind="{ ...forwarded._dropdownMenuSeparator, ...subItem._dropdownMenuSeparator }"
                />

                <ReuseMenuSub
                  v-else
                  v-bind="subItem"
                />
              </template>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuGroup>
    </div>
  </DefineMenuSub>
</template>
