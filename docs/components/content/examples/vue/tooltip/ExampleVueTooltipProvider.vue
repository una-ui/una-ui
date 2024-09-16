<template>
  <div class="grid h-28 place-items-center">
    <NTooltip
      content="Hello from tooltip"
      :_tooltip-provider="{
        delayDuration: 0,
        disableClosingTrigger: true,
        disableHoverableContent: true,
      }"
    >
      <NButton btn="solid-white">
        No delay tooltip
      </NButton>
    </NTooltip>
  </div>
</template>
