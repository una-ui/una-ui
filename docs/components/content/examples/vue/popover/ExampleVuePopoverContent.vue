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
        <NButton btn="outline-gray">
          Open popover
        </NButton>
      </template>

      <div>
        Content goes here
      </div>
    </NPopover>
  </div>
</template>
