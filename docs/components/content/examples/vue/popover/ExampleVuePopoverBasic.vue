<template>
  <div class="grid h-50 place-items-center">
    <NPopover
      :_popover-content="{
        align: 'center',
        side: 'bottom',
        class: 'w-80',
      }"
    >
      <template #trigger>
        <NButton btn="outline-gray">
          Open popover
        </NButton>
      </template>

      <div class="p-4">
        <h3 class="mb-2 font-medium">
          Popover Title
        </h3>
        <p class="text-sm text-muted-foreground">
          This is a basic example of a popover with content.
        </p>
      </div>
    </NPopover>
  </div>
</template>
