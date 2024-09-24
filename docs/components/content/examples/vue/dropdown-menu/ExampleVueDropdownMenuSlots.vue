<template>
  <div>
    <NDropdownMenu
      :modal="false"
      :_dropdown-menu-content="{
        class: 'w-60',
        align: 'start',
        side: 'right',
      }"
    >
      <template #trigger>
        <NDropdownMenuTrigger
          dropdown-menu="data-[state=closed]:soft-gray data-[state=open]:solid-gray"
          class="rounded-full p-1"
        >
          <NAvatar
            src="https://avatars.githubusercontent.com/u/499550?v=4"
          />
        </NDropdownMenuTrigger>
      </template>

      <template #menu-label>
        <div class="flex flex-col items-start">
          <span class="text-accent font-semibold leading-5">Evan You</span>
          <span class="text-xs text-muted">evan@vuejs.org</span>
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
