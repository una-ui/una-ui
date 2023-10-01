<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import type { NVerticalNav } from '../../types'
import { omitProps } from '../../utils'
import NNavLink from './NavLink.vue'

const props = defineProps<NVerticalNav>()
</script>

<template>
  <div class="nav-link-group">
    <template
      v-for="link in props.links"
      :key="link.label"
    >
      <NNavLink
        v-if="!link.children"
        v-bind="link"
      />

      <Disclosure
        v-else
        v-slot="{ open }"
        :default-open="link.defaultOpen"
        as="div"
      >
        <DisclosureButton
          as="div"
          :disabled="link.disabled"
        >
          <NNavLink
            :una="{
              btnTrailing: `h-5 w-5 ${open ? 'rotate-90' : ''}`,
              btn: 'w-full',
            }"
            trailing="i-heroicons-chevron-right-20-solid"
            v-bind="omitProps(link, ['children'])"
          />
        </DisclosureButton>

        <div v-show="open">
          <DisclosurePanel
            as="ul"
            nav-link-group="panel"
            static
          >
            <li v-for="subLink in link.children" :key="subLink.label">
              <NNavLink
                v-bind="subLink"
                :una="{
                  btnLabel: 'font-normal',
                  btn: 'w-full pl-8',
                }"
              />
            </li>
          </DisclosurePanel>
        </div>
      </Disclosure>
    </template>
  </div>
</template>
