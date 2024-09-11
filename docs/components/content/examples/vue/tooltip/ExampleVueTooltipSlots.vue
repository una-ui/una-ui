<template>
  <NTooltip
    :_tooltip-content="{
      side: 'right',
    }"
  >
    <template #default>
      <NTooltipTrigger
        class="rounded-full p-1"
      >
        <NAvatar
          src="https://avatars.githubusercontent.com/u/499550?v=4"
        />
      </NTooltipTrigger>
    </template>

    <template #content>
      <div class="flex items-center gap-2">
        <NAvatar
          src="https://avatars.githubusercontent.com/u/499550?v=4"
        />
        <div class="flex flex-col">
          <span class="text-sm font-medium">Evan You</span>
          <span class="text-xs text-gray-500">evan@vuejs.org</span>
        </div>
      </div>
    </template>
  </NTooltip>
</template>
