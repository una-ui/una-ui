<script setup lang="ts">
const items = [
  {
    label: 'i-radix-icons-home',
    icon: true,
  },
  {
    label: 'Breadcrumb',
  },
  {
    children: [
      {
        label: 'Navigation',
      },
      {
        label: 'Test2',
        items: [
          {
            label: 'Test 2 nested',
          },
          {
            label: 'Test 2 nested disabled',
            disabled: true,
          },
        ],
      },
      {
        disabled: true,
        label: 'Test3',
        trailing: 'i-mi-enter',
      },
    ],
  },
  {
    leading: 'i-radix-icons-cube',
    label: 'Current Page',
  },
]

const items2 = [
  {
    label: 'Home',
  },
  {
    label: 'Navigation',
  },
  {
    label: 'Breadcrumb',
    disabled: true,
  },
  {
    label: 'Current Page',
  },
]
</script>

<template>
  <div class="flex flex-col gap-4">
    <NBreadcrumb
      :items
      :_dropdownMenu="{
        _dropdownMenuContent: {
          align: 'end',
          side: 'bottom',
        },
      }"
    />

    <NBreadcrumb
      :items="items2"
      breadcrumb-active="text-black"
      breadcrumb-inactive="text-muted"
    >
      <template #default="{ item, index, isActive }">
        <NBadge :badge="isActive ? 'primary' : 'soft-gray'" class="rounded-full">
          {{ index + 1 }}. {{ item.label }}
        </NBadge>
      </template>
      <template #separator>
        <NSeparator label="👉" class="w-14" />
      </template>
    </NBreadcrumb>

    <NBreadcrumb
      :items="items2"
      breadcrumb-active="text-black"
      breadcrumb-inactive="text-muted"
      separator="i-heroicons-slash-20-solid"
    />

    <!-- with custom ellipsis -->
    <NBreadcrumb
      :items
      ellipsis="i-gg-more-r"
    />
  </div>
</template>
