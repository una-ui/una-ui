<script setup lang="ts">
</script>

<template>
  <NPopover>
    <NPopoverTrigger as-child>
      <NButton btn="solid-white">
        Open popover
      </NButton>
    </NPopoverTrigger>
    <NPopoverContent class="w-80 bg-muted">
      <div class="grid gap-4">
        <div class="space-y-2">
          <h4 class="font-medium leading-none">
            Dimensions
          </h4>
          <p class="text-muted-foreground text-sm">
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
    </NPopoverContent>
  </NPopover>
</template>
