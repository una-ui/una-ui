<template>
  <div class="grid h-28 place-items-center">
    <NTooltip
      content="Hello from tooltip"
      :_tooltipRoot="{
        'onUpdate:open': (value: boolean) => {
          console.log('open', value)
        },
      }"
    >
      <NButton btn="solid-white">
        Hover me
      </NButton>
    </NTooltip>
  </div>
</template>
