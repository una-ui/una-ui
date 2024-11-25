<template>
  <div class="grid h-50 place-items-center">
    <NPopover
      :_popover-content="{
        align: 'center',
        class: 'w-80',
        side: 'right',
      }"
    >
      <template #trigger>
        <NButton btn="solid-white">
          Open popover
        </NButton>
      </template>

      <div>
        Content goes here
      </div>
    </NPopover>
  </div>
</template>
