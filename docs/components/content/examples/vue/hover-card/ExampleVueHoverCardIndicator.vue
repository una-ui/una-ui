<template>
  <div class="grid h-28 place-items-center">
    <NHoverCard arrow>
      <template #trigger>
        <NButton btn="link-black">
          @una-ui
        </NButton>
      </template>
      <template #content>
        <div class="flex justify-between space-x-4">
          <NAvatar
            src="https://github.com/una-ui.png"
            label="UNA"
            avatar="~"
          />
          <div class="space-y-1">
            <h4 class="text-sm font-semibold">
              @una-ui
            </h4>
            <p class="text-sm">
              An atomic UI Framework powered by the UnoCSS engine
            </p>
          </div>
        </div>
      </template>
    </NHoverCard>
  </div>
</template>
