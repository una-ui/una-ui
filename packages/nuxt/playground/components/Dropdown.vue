<script setup lang="ts">
/**
 * @name NDropdownMenu
 *
 * @todo
 *
 * - [ ] Add dropdown menu functionality
 * - [ ] Add dropdown menu triggers
 */
</script>

<template>
  <NDropdownMenu>
    <NDropdownMenuTrigger>Open</NDropdownMenuTrigger>
    <NDropdownMenuContent>
      <NDropdownMenuLabel>My Account</NDropdownMenuLabel>
      <NDropdownMenuSeparator />
      <NDropdownMenuItem>Profile</NDropdownMenuItem>
      <NDropdownMenuItem>Billing</NDropdownMenuItem>
      <NDropdownMenuItem>Team</NDropdownMenuItem>
      <NDropdownMenuSub>
        <NDropdownMenuSubTrigger>More Tools</NDropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <NDropdownMenuSubContent>
            <NDropdownMenuSub>
              <NDropdownMenuSubTrigger>More</NDropdownMenuSubTrigger>
              <NDropdownMenuSubContent>
                <NDropdownMenuItem>Slack</NDropdownMenuItem>
                <NDropdownMenuItem>Discord</NDropdownMenuItem>
                <NDropdownMenuItem>Telegram</NDropdownMenuItem>
              </NDropdownMenuSubContent>
            </NDropdownMenuSub>
            <NDropdownMenuItem>API</NDropdownMenuItem>
            <NDropdownMenuItem>Plugins</NDropdownMenuItem>
          </NDropdownMenuSubContent>
        </DropdownMenuPortal>
      </NDropdownMenuSub>
      <NDropdownMenuSeparator />
      <NDropdownMenuItem>Subscription</NDropdownMenuItem>
    </NDropdownMenuContent>
  </NDropdownMenu>
</template>
