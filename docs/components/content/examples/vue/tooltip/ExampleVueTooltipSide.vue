<template>
  <div class="h-28 flex items-center justify-around">
    <NTooltip
      label="Top"
      :_tooltip-content="{
        side: 'top',
      }"
    >
      The side is top
    </NTooltip>
    <NTooltip
      label="Right"
      :_tooltip-content="{
        side: 'right',
      }"
    >
      The side is right
    </NTooltip>
    <NTooltip
      label="Bottom"
      :_tooltip-content="{
        side: 'bottom',
      }"
    >
      The side is bottom
    </NTooltip>
    <NTooltip
      label="Left"
      :_tooltip-content="{
        side: 'left',
      }"
    >
      The side is left
    </NTooltip>
  </div>
</template>
