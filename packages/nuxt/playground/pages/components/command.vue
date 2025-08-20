<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useMagicKeys, whenever } from '@vueuse/core'
import { ComboboxContent, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxLabel, ComboboxRoot, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogRoot, DialogTitle, DialogTrigger, VisuallyHidden } from 'reka-ui'
import { ref } from 'vue'

const open = ref(false)

const commandMenuItems = ref([
  {
    group: 'Navigation',
    items: [
      { id: 1, name: 'Dashboard', icon: 'i-lucide-layout-dashboard' },
      { id: 2, name: 'Projects', icon: 'i-lucide-folder' },
      { id: 3, name: 'Tasks', icon: 'i-lucide-check-square' },
    ],
  },
  {
    group: 'Settings',
    items: [
      { id: 4, name: 'Profile', icon: 'i-lucide-user' },
      { id: 5, name: 'Preferences', icon: 'i-lucide-sliders-horizontal' },
      { id: 6, name: 'Security', icon: 'i-lucide-shield' },
    ],
  },
  {
    group: 'Actions',
    items: [
      { id: 7, name: 'Create New', icon: 'i-lucide-plus-circle' },
      { id: 8, name: 'Search', icon: 'i-lucide-search' },
      { id: 9, name: 'Logout', icon: 'i-lucide-log-out' },
    ],
  },
])

const { meta_j } = useMagicKeys()
whenever(meta_j, (n) => {
  if (n)
    open.value = true
})

function handleSelect(ev: CustomEvent) {
  ev.preventDefault()
  open.value = false

  console.log('Selected: ', ev.detail.value)
}
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger class="border-muted-foreground/30 inline-flex items-center border rounded-lg bg-muted px-3 py-2 text-sm dark:text-white">
      <span class="mr-4 inline-flex">Open with</span>
      <span class="inline-flex text-xs">
        <kbd>⌘ J</kbd>
      </span>
    </DialogTrigger>

    <DialogPortal>
      <DialogOverlay class="fixed inset-0 z-30 bg-background/80" />
      <DialogContent
        class="border-muted-foreground/30 bg-card fixed left-[50%] top-[15%] z-[100] max-h-[85vh] max-w-[24rem] w-[90vw] translate-x-[-50%] overflow-hidden border rounded-xl text-sm focus:outline-none"
      >
        <VisuallyHidden>
          <DialogTitle>Command Menu</DialogTitle>
          <DialogDescription>Search for command</DialogDescription>
        </VisuallyHidden>

        <ComboboxRoot :open="true">
          <ComboboxInput
            placeholder="Search..."
            class="placeholder-muted-foreground w-full bg-transparent px-4 py-3 outline-none"
            @keydown.enter.prevent
          />

          <ComboboxContent
            class="border-muted-foreground/30 max-h-[20rem] overflow-y-auto border-t p-2"
            @escape-key-down="open = false"
          >
            <ComboboxEmpty class="text-muted-foreground p-4 text-center">
              No results
            </ComboboxEmpty>

            <ComboboxGroup
              v-for="{ group, items } in commandMenuItems"
              :key="group"
            >
              <ComboboxLabel class="text-muted-foreground mb-3 mt-3 px-4 font-semibold">
                {{ group }}
              </ComboboxLabel>
              <ComboboxItem
                v-for="item in items"
                :key="item.id"
                :value="item"
                class="w-full inline-flex cursor-default items-center gap-4 rounded-md px-4 py-2 data-[highlighted]:bg-muted"
                @select="handleSelect"
              >
                <Icon :icon="item.icon" />
                <span>{{ item.name }}</span>
              </ComboboxItem>
            </ComboboxGroup>
          </ComboboxContent>
        </ComboboxRoot>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
