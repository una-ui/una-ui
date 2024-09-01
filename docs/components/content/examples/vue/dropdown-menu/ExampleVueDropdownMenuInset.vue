<script setup lang="ts">
const items = [
  {
    label: 'Profile',
    shortcut: '⇧⌘P',
    onclick: () => {
      // eslint-disable-next-line no-alert
      alert('Profile clicked')
    },
    leading: 'i-lucide-user',
  },
  {
    label: 'Billing',
    shortcut: '⌘B',
    leading: 'i-lucide-banknote',
  },
  {
    label: 'Settings',
    shortcut: '⌘S',
    leading: 'i-lucide-settings',
  },
  {
    label: 'Keyboard shortcuts',
    shortcut: '⌘K',
    leading: 'i-lucide-keyboard',
  },
  {}, // to add a separator between items (label or items should be null).
  {
    label: 'Teams',
    leading: 'i-lucide-users',
  },
  {
    label: 'Invite users',
    leading: 'i-lucide-plus',
    items: [
      {
        label: 'Email',
        shortcut: '⌘E',
        leading: 'i-lucide-mail',
      },
      {
        label: 'Message',
        shortcut: '⌘M',
        leading: 'i-lucide-message-circle',
      },
      {},
      {
        label: 'More',
        leading: 'i-lucide-more-horizontal',
        items: [
          {
            label: 'Slack',
            shortcut: '⌘S',
            leading: 'i-logos-slack-icon',
          },
          {
            label: 'Discord',
            shortcut: '⌘D',
            leading: 'i-logos-discord-icon',
          },
          {
            label: 'Telegram',
            shortcut: '⌘T',
            leading: 'i-logos-telegram',
          },
          {
            label: 'WhatsApp',
            shortcut: '⌘W',
            leading: 'i-logos-whatsapp-icon',
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
  <div class="grid h-50 place-items-center">
    <NDropdownMenu
      :items
      menu-label="My Account"
      :_dropdown-menu-content="{
        class: 'w-60',
      }"
      inset
      label="Open"
    />
  </div>
</template>
