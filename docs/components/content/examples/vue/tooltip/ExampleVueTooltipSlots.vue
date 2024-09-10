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
      Evan You
    </template>
  </NTooltip>
</template>
