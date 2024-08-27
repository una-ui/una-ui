<script setup lang="ts">
const items = [
  {
    label: 'Profile',
    shortcut: '⌘+T',
  },
  {
    label: 'Billing',
  },
  {
    label: 'Invite users',
    items: [
      {
        label: 'Email',
      },
      {
        label: 'Message',
      },
      {
        label: 'More',
        items: [
          {
            label: 'Slack',
            leading: 'i-check',
          },
          {
            label: 'Discord',
          },
          {
            label: 'More',
            items: [
              {
                label: 'Slack',
              },
              {
                label: 'Discord',
              },
              {
                label: 'Telegram',
              },
            ],
          },
        ],
      },
    ],
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
 */
</script>

<template>
  <NDropdownMenu
    :items
    label="Open"
  />
</template>
