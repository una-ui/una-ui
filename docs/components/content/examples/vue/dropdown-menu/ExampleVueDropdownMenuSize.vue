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
    leading: 'i-lucide-credit-card',
  },
  {
    label: 'Settings',
    shortcut: '⌘S',
  },
  {
    label: 'Keyboard shortcuts',
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
      size="xs"
      menu-label="My Account"
      :_dropdown-menu-content="{
        class: 'w-52',
      }"
      label="Open XS"
    />

    <NDropdownMenu
      :items
      size="sm"
      menu-label="My Account"
      :_dropdown-menu-content="{
        class: 'w-52',
      }"
      label="Open SM/Default"
    />

    <NDropdownMenu
      :items
      size="md"
      menu-label="My Account"
      :_dropdown-menu-content="{
        class: 'w-52',
      }"
      label="Open MD"
    />

    <NDropdownMenu
      :items
      size="lg"
      menu-label="My Account"
      :_dropdown-menu-content="{
        class: 'w-52',
      }"
      label="Open LG"
    />
  </div>
</template>
