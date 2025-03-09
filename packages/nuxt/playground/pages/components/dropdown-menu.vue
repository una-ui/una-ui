<script setup lang="ts">
const items = [
  {
    label: 'Profile',
    shortcut: '⌘+T',
  },
  {
    label: 'Billing',
    shortcut: '⌘+B',
  },
  {
    label: 'Invite users',
    items: [
      {
        label: 'Email',
        shortcut: '⌘+E',
      },
      {
        label: 'Message',
        shortcut: '⌘+M',
      },
      {
        // if you want to ad separator between items, just don't provide label and items
      },
      {
        label: 'More',
        items: [
          {
            label: 'Slack',
            shortcut: '⌘+S',
          },
          {
            label: 'Discord',
            shortcut: '⌘+D',
          },
          {
            label: 'More',
            items: [
              {
                label: 'Telegram',
                shortcut: '⌘+T',
              },
              {
                label: 'WhatsApp',
                shortcut: '⌘+W',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'API',
    disabled: true,
  },
  {},
  {
    label: 'Settings',
    shortcut: '⇧⌘+S',
  },
  {
    label: 'Logout',
    shortcut: '⇧⌘+L',
  },
]

/**
 * @name NDropdownMenu
 *
 * @todo
 *
 * - [x] Add dropdown menu functionality
 * - [x] Add dropdown menu triggers
 * - [ ] Automatically add shortcut magickeys
 * - [x] Add dropdown menu items
 *
 *
 */
</script>

<template>
  <NDropdownMenu
    :items
    menu-label="Menu"
    :_dropdown-menu-content="{
      class: 'w-52',
      side: 'right',
      align: 'start',
    }"
    label="Open"
  />
</template>
