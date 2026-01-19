<script setup lang="ts">
const users = [
  { id: '1', username: 'shadcn' },
  { id: '2', username: 'leerob' },
  { id: '3', username: 'evilrabbit' },
]
const selectedUser = ref<typeof users[number]>()
</script>

<template>
  <div class="flex">
    <NCombobox
      v-model="selectedUser"
      :items="users"
      by="id"
      :_combobox-input="{
        placeholder: 'Select user...',
      }"
    >
      <template #trigger="{ modelValue }">
        <template v-if="modelValue">
          <div class="flex items-center gap-2">
            <NAvatar
              :src="`https://github.com/${modelValue.username}.png`"
              :alt="modelValue.username"
              square="5"
            />
            {{ modelValue.username }}
          </div>
        </template>
        <template v-else>
          Select user...
        </template>
      </template>

      <template #label="{ item }">
        <NAvatar
          square="5"
          :src="`https://github.com/${item.username}.png`"
          :alt="item.username"
        />
        {{ item.username }}
      </template>

      <template #footer>
        <NComboboxSeparator />
        <NComboboxGroup>
          <NComboboxItem :value="null">
            <NIcon name="i-lucide-plus-circle" />
            Create user
          </NComboboxItem>
        </NComboboxGroup>
      </template>
    </NCombobox>
  </div>
</template>
