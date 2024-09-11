<template>
  <div class="h-28 flex items-center justify-around">
    <NTooltip
      content="A tooltip content"
      :_tooltip-content="{
        side: 'top',
        align: 'start',
        sideOffset: 15,
      }"
    >
      <NButton btn="solid-white">
        Top
      </NButton>
    </NTooltip>

    <NTooltip
      content="A tooltip content"
      :_tooltip-content="{
        side: 'bottom',
        align: 'end',
        sideOffset: 20,
        alignOffset: 100,
      }"
    >
      <NButton btn="solid-white">
        Bottom
      </NButton>
    </NTooltip>

    <NTooltip
      content="A tooltip content"
      :_tooltip-content="{
        side: 'right',
        align: 'center',
      }"
    >
      <NButton btn="solid-white">
        Right
      </NButton>
    </NTooltip>
    <NTooltip
      content="A tooltip content"
      :_tooltip-content="{
        side: 'left',
        align: 'end',
      }"
    >
      <NButton btn="solid-white">
        Left
      </NButton>
    </NTooltip>
  </div>
</template>
