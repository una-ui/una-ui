<script setup lang="ts">
import { useMagicKeys } from '@vueuse/core'

import { ref, watch } from 'vue'

const open = ref(false)

const { Meta_J, Ctrl_J } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === 'j' && (e.metaKey || e.ctrlKey))
      e.preventDefault()
  },
})

watch([Meta_J, Ctrl_J], (v) => {
  if (v[0] || v[1])
    handleOpenChange()
})

function handleOpenChange() {
  open.value = !open.value
}

const items = [
  {
    value: 'Calendar',
    label: 'Calendar',
    icon: 'i-ph-calendar',
  },
  {
    value: 'Search Emoji',
    label: 'Search Emoji',
    icon: 'i-lucide-smile',
    shortcut: 'P',
  },
  {
    value: 'Calculator',
    label: 'Calculator',
    icon: 'i-ph-calculator',
  },
]
</script>

<template>
  <div>
    <p class="text-muted-foreground text-sm">
      Press
      <kbd
        class="text-muted-foreground pointer-events-none h-5 inline-flex select-none items-center gap-1 border rounded bg-muted px-1.5 text-[10px] font-medium font-mono opacity-100"
      >
        <span class="text-xs">⌘</span>J
      </kbd>
    </p>
    <NCommandDialog v-model:open="open">
      <NCommandInput placeholder="" />
      <NCommandList>
        <NCommandEmpty>No results found.</NCommandEmpty>
        <NCommandGroup heading="Suggestions">
          <NCommandItem value="calendar">
            Calendar
          </NCommandItem>
          <NCommandItem value="search-emoji">
            Search Emoji
          </NCommandItem>
          <NCommandItem value="calculator">
            Calculator
          </NCommandItem>
        </NCommandGroup>
        <NCommandSeparator />
        <NCommandGroup heading="Settings">
          <NCommandItem value="profile">
            Profile
          </NCommandItem>
          <NCommandItem value="billing">
            Billing
          </NCommandItem>
          <NCommandItem value="settings">
            Settings
          </NCommandItem>
        </NCommandGroup>
      </NCommandList>
    </NCommandDialog>
  </div>

  <NCommandRoot class="max-w-[450px] border rounded-lg shadow-md">
    <NCommandInput placeholder="Type a command or search..." />
    <NCommandList>
      <NCommandEmpty>No results found.</NCommandEmpty>
      <NCommandGroup heading="Suggestions">
        <NCommandItem value="Calendar">
          <NIcon name="i-ph-calendar" class="mr-2 h-4 w-4" />
          <span>Calendar</span>
        </NCommandItem>
        <NCommandItem value="Search Emoji">
          <NIcon name="i-lucide-smile" class="mr-2 h-4 w-4" />
          <span>Search Emoji</span>
        </NCommandItem>
        <NCommandItem value="Calculator">
          <NIcon name="i-ph-calculator" class="mr-2 h-4 w-4" />
          <span>Calculator</span>
        </NCommandItem>
      </NCommandGroup>
      <NCommandSeparator />
      <NCommandGroup heading="Settings">
        <NCommandItem value="Profile">
          <NIcon name="i-ph-user" class="mr-2 h-4 w-4" />
          <span>Profile</span>
          <NCommandShortcut>⌘P</NCommandShortcut>
        </NCommandItem>
        <NCommandItem value="Billing">
          <NIcon name="i-ph-credit-card" class="mr-2 h-4 w-4" />

          <span>Billing</span>
          <NCommandShortcut>⌘B</NCommandShortcut>
        </NCommandItem>
        <NCommandItem value="Settings">
          <NIcon name="i-ph-gear" class="mr-2 h-4 w-4" />
          <span>Settings</span>
          <NCommandShortcut>⌘S</NCommandShortcut>
        </NCommandItem>
      </NCommandGroup>
    </NCommandList>
  </NCommandRoot>

  <NCommandRoot :items />
</template>
