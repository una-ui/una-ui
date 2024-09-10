<template>
  <div class="h-28 flex items-center justify-around">
    <NTooltip
      content="The side is top"
      :_tooltip-content="{
        side: 'top',
      }"
    >
      <NButton btn="solid-white">
        Top
      </NButton>
    </NTooltip>
    <NTooltip
      content="The side is right"
      :_tooltip-content="{
        side: 'right',
      }"
    >
      <NButton btn="solid-white">
        Right
      </NButton>
    </NTooltip>
    <NTooltip
      content="The side is bottom"
      :_tooltip-content="{
        side: 'bottom',
      }"
    >
      <NButton btn="solid-white">
        Bottom
      </NButton>
    </NTooltip>
    <NTooltip
      content="The side is left"
      :_tooltip-content="{
        side: 'left',
      }"
    >
      <NButton btn="solid-white">
        Left
      </NButton>
    </NTooltip>
  </div>
</template>
