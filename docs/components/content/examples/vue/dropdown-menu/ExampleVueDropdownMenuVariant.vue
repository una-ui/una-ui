<script setup lang="ts">
const items = [
  {
    label: 'Profile',
    shortcut: '⇧⌘P',
    onclick: () => {
      // eslint-disable-next-line no-alert
      alert('Profile clicked')
    },
  },
  {
    label: 'Billing',
    shortcut: '⌘B',
  },
  {
    label: 'Settings',
    shortcut: '⌘S',
  },
  {
    label: 'Shortcuts',
    shortcut: '⌘K',
  },
  {}, // to add a separator between items (label or items should be null).
  {
    label: 'Teams',
  },
  {
    label: 'Invite users',
    items: [
      {
        label: 'Email',
        shortcut: '⌘E',
      },
      {
        label: 'Message',
        shortcut: '⌘M',
      },
      {},
      {
        label: 'More',
        items: [
          {
            label: 'Slack',
            shortcut: '⌘S',
          },
          {
            label: 'Discord',
            shortcut: '⌘D',
          },
          {},
          {
            label: 'More',
            items: [
              {
                label: 'Telegram',
                shortcut: '⌘T',
              },
              {
                label: 'WhatsApp',
                shortcut: '⌘W',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'New team',
    shortcut: '⌘T',
  },
  {},
  {
    label: 'GitHub',
    items: [
      {
        label: 'Personal',
        shortcut: '⌘P',
      },
      {
        label: 'Organization',
        shortcut: '⌘O',
      },
    ],
  },
  {
    label: 'Support',
  },
  {
    label: 'API',
    disabled: true,
  },
  {},
  {
    label: 'Logout',
    shortcut: '⇧⌘Q',
  },
]
</script>

<template>
  <div class="h-50 flex items-center justify-around">
    <NDropdownMenu
      :items
      dropdown-menu="ghost-pink"
      dropdown-menu-item="pink"
      menu-label="My Account"
      :_dropdown-menu-content="{
        class: 'w-52',
      }"
      label="Open"
    />

    <NDropdownMenu
      :items
      dropdown-menu="outline-gray"
      dropdown-menu-item="gray"
      menu-label="My Account"
      :_dropdown-menu-content="{
        class: 'w-52',
      }"
      label="Open"
    />

    <NDropdownMenu
      :items
      dropdown-menu="solid-primary"
      dropdown-menu-item="primary"
      menu-label="My Account"
      :_dropdown-menu-content="{
        class: 'w-52',
      }"
      label="Open"
    />
  </div>
</template>
