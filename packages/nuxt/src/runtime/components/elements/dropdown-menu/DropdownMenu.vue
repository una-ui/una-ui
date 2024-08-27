<script setup lang="ts">
import type { DropdownMenuRootEmits } from 'radix-vue'
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
const emits = defineEmits<DropdownMenuRootEmits>()
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
      class="w-52"
    >
      <template
        v-if="menuLabel"
      >
        <DropdownMenuLabel>
          {{ menuLabel }}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
      </template>

      <DropdownMenuGroup>
        <template
          v-for="item in items"
          :key="item.label"
        >
          <DropdownMenuItem v-if="!item.items">
            {{ item.label }}

            <DropdownMenuShortcut
              v-if="item.shortcut"
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
    v-slot="{ menuLabel, label, items }"
  >
    <template
      v-if="menuLabel"
    >
      <DropdownMenuLabel>
        {{ menuLabel }}
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
    </template>

    <DropdownMenuGroup>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          {{ label }}
        </DropdownMenuSubTrigger>

        <DropdownMenuPortal>
          <DropdownMenuSubContent>
            <template
              v-for="subItem in items"
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
  </DefineMenuSub>
</template>
