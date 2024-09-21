<script setup lang="ts">
</script>

<template>
  <NPopover
    :_popover-content="{
      class: 'w-80',
      align: 'start',
      side: 'right',
    }"
    data-animate="fade spin zoom-85"
  >
    <template #trigger>
      <NButton btn="solid-white">
        Open popover
      </NButton>
    </template>

    <div class="grid gap-4">
      <div class="space-y-2">
        <h4 class="font-medium leading-none">
          Dimensions
        </h4>
        <p class="text-sm text-muted">
          Set the dimensions for the layer.
        </p>
      </div>
      <div class="grid gap-2">
        <div class="grid grid-cols-3 items-center gap-4">
          <NLabel for="width">
            Width
          </NLabel>
          <NInput
            id="width"
            model-value="100%"
            :una="{
              inputWrapper: 'col-span-2',
            }"
          />
        </div>
        <div class="grid grid-cols-3 items-center gap-4">
          <NLabel for="maxWidth">
            Max. width
          </NLabel>
          <NInput
            id="maxWidth"
            model-value="300px"
            :una="{
              inputWrapper: 'col-span-2',
            }"
          />
        </div>
        <div class="grid grid-cols-3 items-center gap-4">
          <NLabel for="height">
            Height
          </NLabel>
          <NInput
            id="height"
            type="text"
            :una="{
              inputWrapper: 'col-span-2',
            }"
          />
        </div>
        <div class="grid grid-cols-3 items-center gap-4">
          <NLabel for="maxHeight">
            Max. height
          </NLabel>
          <NInput
            id="maxHeight"
            :una="{
              inputWrapper: 'col-span-2',
            }"
          />
        </div>
      </div>
    </div>
  </NPopover>
</template>
