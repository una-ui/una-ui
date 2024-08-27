<script setup lang="ts">
import type { DropdownMenuContentEmits, DropdownMenuRootEmits } from 'radix-vue'
import { DropdownMenuPortal, useForwardPropsEmits } from 'radix-vue'
import { createReusableTemplate } from '@vueuse/core'
import { pickProps } from '../../../utils'
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
import DropdownMenuShortcut from './DropdownMenuShortcut.vue'

const props = defineProps<NDropdownMenuProps>()
const emits = defineEmits<DropdownMenuRootEmits & DropdownMenuContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)

const [DefineMenuSub, ReuseMenuSub] = createReusableTemplate<NDropdownMenuProps>()
</script>

<template>
  <DropdownMenuRoot
    v-bind="pickProps(forwarded, ['defaultOpen', 'open', 'modal', 'dir'])"
  >
    <DropdownMenuTrigger
      v-bind="{ ...forwarded, ...forwarded._dropdownMenuTrigger }"
    />

    <DropdownMenuContent
      v-bind="forwarded._dropdownMenuContent"
    >
      <template
        v-if="menuLabel"
      >
        <DropdownMenuLabel
          v-bind="forwarded._dropdownMenuLabel"
        >
          {{ menuLabel }}
        </DropdownMenuLabel>
        <DropdownMenuSeparator
          v-bind="forwarded._dropdownMenuSeparator"
        />
      </template>

      <DropdownMenuGroup
        v-bind="forwarded._dropdownMenuGroup"
      >
        <template
          v-for="item in items"
          :key="item.label"
        >
          <DropdownMenuItem
            v-if="!item.items"
            v-bind="{ ...forwarded._dropdownMenuItem, ...item._dropdownMenuItem }"
          >
            {{ item.label }}

            <DropdownMenuShortcut
              v-if="item.shortcut"
              v-bind="{ ...forwarded._dropdownMenuShortcut, ...item._dropdownMenuShortcut }"
            >
              {{ item.shortcut }}
            </DropdownMenuShortcut>
          </DropdownMenuItem>

          <ReuseMenuSub
            v-else
            v-bind="item"
          />
        </template>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenuRoot>

  <DefineMenuSub
    v-slot="subProps"
  >
    <div>
      <template
        v-if="subProps.menuLabel"
      >
        <DropdownMenuLabel
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
            v-bind="{ ...forwarded._dropdownMenuSubTrigger, ...subProps._dropdownMenuSubTrigger }"
          >
            {{ subProps.label }}
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
                  v-if="!subItem.items"
                >
                  {{ subItem.label }}
                </DropdownMenuItem>

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
