<template>
  <div class="grid h-28 place-items-center">
    <NTooltip
      :_tooltip-content="{
        side: 'right',
      }"
    >
      <template #trigger>
        <NTooltipTrigger
          class="rounded-full p-1"
        >
          <NAvatar
            src="https://avatars.githubusercontent.com/u/499550?v=4"
          />
        </NTooltipTrigger>
      </template>
      <template #default>
        Evan You
      </template>
    </NTooltip>
  </div>
</template>
