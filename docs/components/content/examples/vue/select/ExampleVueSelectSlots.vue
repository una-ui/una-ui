<script setup lang="ts">
const items = [
  {
    name: 'Evan You',
    avatar: 'https://avatars.githubusercontent.com/u/499550?v=4',
  },
  {
    name: 'Anthony Fu',
    avatar: 'https://avatars.githubusercontent.com/u/11247099?v=4',
  },
  {
    name: 'Daniel Roe',
    avatar: 'https://avatars.githubusercontent.com/u/28706372?v=4',
  },
]
const selected = ref(items[0])
</script>

<template>
  <div class="max-w-50">
    <NSelect
      v-model="selected"
      :items
      placeholder="Select Contributor"
      label="Vue Community"
      :_select-trigger="{
        una: {
          selectTriggerTrailingIcon: 'i-lucide-chevrons-up-down',
        },
      }"
    >
      <template #label="{ label }">
        <div class="flex flex-col space-y-0.5">
          <span class="text-primary">{{ label }}</span>
          <span class="text-xs text-muted">Mini example list of contributors</span>
        </div>
      </template>

      <template #item="{ item }">
        <div class="flex items-center space-x-2">
          <img
            :src="item.avatar"
            :alt="item.name"
            class="h-6 w-6 rounded-full"
          >
          <span>{{ item.name }}</span>
        </div>
      </template>

      <template #value>
        <div class="flex items-center space-x-2">
          <img
            :src="selected?.avatar"
            :alt="selected?.name"
            class="h-6 w-6 rounded-full"
          >
          <span>{{ selected?.name }}</span>
        </div>
      </template>
    </NSelect>
  </div>
</template>
