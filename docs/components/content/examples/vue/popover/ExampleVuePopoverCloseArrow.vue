<template>
  <div class="grid h-50 place-items-center">
    <NPopover
      show-close
      arrow
      :_popover-content="{
        align: 'center',
        class: 'w-80',
        side: 'bottom',
      }"
    >
      <template #trigger>
        <NButton btn="solid-white">
          Open popover
        </NButton>
      </template>

      <div class="pr-4">
        <h4 class="mb-1 font-medium leading-none">
          Dimensions
        </h4>
        <p class="text-sm text-muted">
          Set the dimensions for the layer.
        </p>
        <div class="grid mt-3 gap-2">
          <div class="grid grid-cols-3 items-center gap-4">
            <NLabel for="width">
              Width
            </NLabel>
            <NInput id="width" model-value="100%" class="col-span-2" />
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <NLabel for="height">
              Height
            </NLabel>
            <NInput id="height" model-value="25px" class="col-span-2" />
          </div>
        </div>
      </div>
    </NPopover>
  </div>
</template>
