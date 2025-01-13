<script setup lang="ts">
const items = [
  {
    label: 'Components',
    to: '/components/accordion',
  },
  {
    label: 'Alert',
    to: '/components/alert',
  },
  {
    label: 'Ellipsis',
    children: [
      {
        label: 'Badge',
        to: '/components/badge',
      },
      {
        label: 'Avatar Components',
        items: [
          {
            label: 'Avatar',
            to: '/components/avatar',
          },
          {
            label: 'Avatar Group',
            to: '/components/avatar-group',
          },
        ],
      },
      {
        disabled: true,
        label: 'Smth magical 📃',
      },
    ],
  },
  {
    label: 'Breadcrumb',
    to: '/components/breadcrumb',
  },
]
</script>

<template>
  <NBreadcrumb
    :items="items"
  >
    <template #dropdown="{ item }">
      <NDropdownMenu
        :items="item.children"
        :_dropdown-menu-item="{
          class: 'text-xs',
        }"
        :_dropdown-menu-sub-trigger="{
          class: 'text-xs',
        }"
      >
        <NBreadcrumbEllipsis />
      </NDropdownMenu>
    </template>
    <template #default="{ item, index, isActive }">
      <NBadge :badge="isActive ? 'primary' : 'soft-gray'" class="rounded-full">
        {{ index + 1 }}. {{ item.label }}
      </NBadge>
    </template>
    <template #separator>
      <NSeparator label="👉" class="w-14" />
    </template>
  </NBreadcrumb>
</template>
