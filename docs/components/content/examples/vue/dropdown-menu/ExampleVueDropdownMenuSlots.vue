<template>
  <div class="h-50 flex items-center justify-around">
    <NDropdownMenu
      :_dropdown-menu-content="{
        class: 'w-60',
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
          <span class="text-accent font-semibold leading-5">Phojie Rengel</span>
          <span class="text-xs text-muted">phojrengel@gmail.com</span>
        </div>
      </template>

      <template #items>
        <NDropdownMenuGroup>
          <NDropdownMenuItem
            dropdown-menu-item="primary"
            label="Join or create a workspace"
            leading="i-lucide-plus"
          />

          <NDropdownMenuSeparator />

          <NDropdownMenuSub>
            <NDropdownMenuSubTrigger
              inset
              dropdown-menu-item="primary"
            >
              <span>Invite users</span>
            </NDropdownMenuSubTrigger>
            <NDropdownMenuPortal>
              <NDropdownMenuSubContent>
                <NDropdownMenuItem
                  dropdown-menu-item="primary"
                >
                  <span>Email</span>
                </NDropdownMenuItem>
                <NDropdownMenuItem
                  dropdown-menu-item="primary"
                >
                  <span>Message</span>
                </NDropdownMenuItem>
                <NDropdownMenuSeparator />
                <NDropdownMenuItem
                  dropdown-menu-item="primary"
                >
                  <span>More...</span>
                </NDropdownMenuItem>
              </NDropdownMenuSubContent>
            </NDropdownMenuPortal>
          </NDropdownMenuSub>
        </NDropdownMenuGroup>

        <NDropdownMenuSeparator />

        <NDropdownMenuGroup>
          <NDropdownMenuItem
            dropdown-menu-item="primary"
            label="Profile"
            leading="i-lucide-user-round"
            shortcut="⌘P"
          />
          <NDropdownMenuItem
            dropdown-menu-item="primary"
            label="Settings"
            leading="i-lucide-settings"
            shortcut="⌘S"
          />
        </NDropdownMenuGroup>

        <NDropdownMenuSeparator />

        <NDropdownMenuGroup>
          <NDropdownMenuItem
            dropdown-menu-item="primary"
            label="Logout"
            leading="i-lucide-log-out"
            shortcut="⌘L"
          />
        </NDropdownMenuGroup>
      </template>
    </NDropdownMenu>
  </div>
</template>
