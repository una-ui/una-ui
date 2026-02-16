<script setup lang="ts">
type Item = typeof items[number]

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

const selected = ref<string>()
const selectedItem = computed(() => items.find(item => item.name === selected.value))
</script>

<template>
  <div class="max-w-50">
    <NSelect
      v-model="selected"
      :items
      placeholder="Select Contributor"
      label="Vue Community"
      label-key="name"
      value-key="name"
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
        <div class="flex items-center gap-2">
          <img
            :src="(item as Item).avatar"
            :alt="(item as Item).name"
            class="rounded-full size-6"
          >
          <span>{{ (item as Item).name }}</span>
        </div>
      </template>

      <template #value>
        <div
          v-if="selectedItem"
          class="flex items-center gap-2"
        >
          <img
            :src="selectedItem.avatar"
            :alt="selectedItem.name"
            class="rounded-full size-6"
          >
          <span>{{ selectedItem.name }}</span>
        </div>
      </template>
    </NSelect>
  </div>
</template>
