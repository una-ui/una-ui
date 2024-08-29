<script setup lang="ts">
</script>

<template>
  <div class="h-50 flex items-center justify-around">
    <NDropdownMenu
      dropdown-menu-item="primary"
      :_dropdown-menu-content="{
        class: 'w-52',
        align: 'start',
      }"
    >
      <template #trigger>
        <NDropdownMenuTrigger
          dropdown-menu="data-[state=closed]:soft-gray data-[state=open]:solid-gray"
          class="rounded-full p-2"
        >
          <NAvatar
            src="/images/avatar.png"
          />
        </NDropdownMenuTrigger>
      </template>

      <template #menu-label>
        <div class="flex flex-col items-start">
          <span class="text-accent font-semibold leading-5"> Phojie Rengel </span>
          <span class="text-xs text-muted">phojrengel@gmail.com</span>
        </div>
      </template>

      <template #items>
        <NDropdownMenuGroup>
          <NDropdownMenuItem
            label="Profile"
            leading="i-lucide-user-round"
            shortcut="⌘P"
            :una="{
              btnLeading: 'opacity-60 text-1.1em',
            }"
          />
          <NDropdownMenuItem
            label="Settings"
            leading="i-lucide-settings opacity-60"
            shortcut="⌘S"
            :una="{
              btnLeading: 'opacity-60 text-1.1em',
            }"
          />
          <NDropdownMenuItem
            label="Logout"
            leading="i-lucide-log-out opacity-60"
            shortcut="⌘L"
            :una="{
              btnLeading: 'opacity-60 text-1.1em',
            }"
          />
        </NDropdownMenuGroup>
      </template>
    </NDropdownMenu>
  </div>
</template>
