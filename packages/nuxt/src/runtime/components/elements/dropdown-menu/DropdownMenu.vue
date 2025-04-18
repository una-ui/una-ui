<script setup lang="ts">
import type { DropdownMenuContentEmits, DropdownMenuRootEmits } from 'reka-ui'
import type { NDropdownMenuProps } from '../../../types'
import { createReusableTemplate, reactivePick } from '@vueuse/core'
import { DropdownMenuPortal, useForwardPropsEmits } from 'reka-ui'
import { omitProps } from '../../../utils'
import DropdownMenuContent from './DropdownMenuContent.vue'
import DropdownMenuGroup from './DropdownMenuGroup.vue'
import DropdownMenuItem from './DropdownMenuItem.vue'
import DropdownMenuLabel from './DropdownMenuLabel.vue'
import DropdownMenuRoot from './DropdownMenuRoot.vue'
import DropdownMenuSeparator from './DropdownMenuSeparator.vue'
import DropdownMenuSub from './DropdownMenuSub.vue'
import DropdownMenuSubContent from './DropdownMenuSubContent.vue'
import DropdownMenuSubTrigger from './DropdownMenuSubTrigger.vue'
import DropdownMenuTrigger from './DropdownMenuTrigger.vue'

const props = defineProps<NDropdownMenuProps>()
const emits = defineEmits<DropdownMenuRootEmits & DropdownMenuContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)

const [DefineMenuSub, ReuseMenuSub] = createReusableTemplate<NDropdownMenuProps>()
</script>

<template>
  <DropdownMenuRoot
    v-bind="reactivePick(forwarded, ['defaultOpen', 'open', 'modal', 'dir'])"
  >
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
        '_dropdownMenuTrigger',
        '_dropdownMenuSubTrigger',
        '_dropdownMenuSubContent',
      ])"
    >
      <slot />
    </DropdownMenuTrigger>

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
            :una
            v-bind="forwarded._dropdownMenuLabel"
          >
            <slot name="menu-label">
              {{ menuLabel }}
            </slot>
          </DropdownMenuLabel>
          <DropdownMenuSeparator
            :una
            v-bind="forwarded._dropdownMenuSeparator"
          />
        </template>

        <slot name="group" :items>
          <DropdownMenuGroup
            :una
            v-bind="forwarded._dropdownMenuGroup"
          >
            <slot name="items" :items>
              <template
                v-for="item in items"
                :key="item.label"
              >
                <slot
                  v-if="!item.items && item.label"
                  :name="`item-${item.label}`"
                >
                  <DropdownMenuItem
                    :size
                    :inset
                    :dropdown-menu-item
                    :una
                    :_dropdown-menu-shortcut
                    v-bind="{ ...item, ...forwarded._dropdownMenuItem, ...item._dropdownMenuItem }"
                  />
                </slot>

                <DropdownMenuSeparator
                  v-else-if="!item.label && !item.items"
                  :una
                  v-bind="{ ...forwarded._dropdownMenuSeparator, ...item._dropdownMenuSeparator }"
                />

                <ReuseMenuSub
                  v-else
                  v-bind="item"
                />
              </template>
            </slot>
          </DropdownMenuGroup>
        </slot>
      </slot>
    </DropdownMenuContent>
  </DropdownMenuRoot>

  <DefineMenuSub
    v-slot="subProps"
    as="div"
  >
    <template
      v-if="subProps.menuLabel"
    >
      <DropdownMenuLabel
        :size
        :inset
        :una
        v-bind="{ ...forwarded._dropdownMenuLabel, ...subProps._dropdownMenuLabel }"
      >
        {{ subProps.menuLabel }}
      </DropdownMenuLabel>
      <DropdownMenuSeparator
        :una
        v-bind="{ ...forwarded._dropdownMenuSeparator, ...subProps._dropdownMenuSeparator }"
      />
    </template>

    <DropdownMenuGroup
      :una
      v-bind="{ ...forwarded._dropdownMenuGroup, ...subProps._dropdownMenuGroup }"
    >
      <DropdownMenuSub>
        <DropdownMenuSubTrigger
          :size
          :inset
          :una
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
            :una
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
                :_dropdown-menu-shortcut
                :una
                v-bind="{ ...subItem, ...forwarded._dropdownMenuItem, ...subItem._dropdownMenuItem }"
              >
                {{ subItem.label }}
              </DropdownMenuItem>

              <DropdownMenuSeparator
                v-else-if="!subItem.label && !subItem.items"
                :una
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
  </DefineMenuSub>
</template>
