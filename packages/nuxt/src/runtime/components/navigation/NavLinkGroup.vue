<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import type { NNavLinkProps } from '../../types'
import NNavLink from './NavLink.vue'

interface NNavLinkGroupLink extends NNavLinkProps {
  children?: NNavLinkProps[]
  defaultOpen?: boolean
}

interface NVerticalNav {
  links: NNavLinkGroupLink[]
}

const props = defineProps<NVerticalNav>()
</script>

<template>
  <div class="w-60 flex flex-col border-2 border-base rounded-md border-dashed p-2 space-y-1">
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
        v-slot="{ open }" :default-open="link.defaultOpen" as="div"
      >
        <DisclosureButton
          as="div"
        >
          <NNavLink
            :una="{
              btnTrailing: `h-5 w-5 ${open ? 'rotate-90' : ''}`,
            }"
            trailing="i-heroicons-chevron-right-20-solid"
            v-bind="link"
          />
        </DisclosureButton>

        <div v-show="open">
          <DisclosurePanel
            as="ul"
            class="mt-1 px-2 space-y-1"
            static
          >
            <li v-for="subLink in link.children" :key="subLink.label">
              <NNavLink
                v-bind="subLink"
                class="pl-8"
                :una="{
                  btnLabel: 'font-normal',
                }"
              />
            </li>
          </DisclosurePanel>
        </div>
      </Disclosure>
    </template>
  </div>
</template>
