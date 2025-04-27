<script setup lang="ts">
const users = [
  { id: '1', username: 'shadcn' },
  { id: '2', username: 'leerob' },
  { id: '3', username: 'evilrabbit' },
]
const selectedUser = ref()
</script>

<template>
  <NCombobox
    v-model="selectedUser"
    :items="users"
    by="username"
    :_combobox-input="{
      placeholder: 'Select user...',
    }"
    class="flex"
  >
    <template #trigger>
      <template v-if="selectedUser">
        <div class="flex items-center gap-2">
          <NAvatar
            :src="`https://github.com/${selectedUser.username}.png`"
            :alt="selectedUser.username"
            square="5"
          />
          {{ selectedUser.username }}
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
</template>
