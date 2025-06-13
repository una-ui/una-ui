<template>
  <div class="grid h-28 place-items-center">
    <NHoverCard>
      <template #trigger>
        <NAvatar src="https://github.com/vuejs.png" class="cursor-pointer" />
      </template>
      <template #content>
        <div class="flex justify-between space-x-4">
          <NAvatar src="https://github.com/vuejs.png" />
          <div class="space-y-1">
            <h4 class="text-sm font-semibold">
              @vuejs
            </h4>
            <p class="text-sm">
              Progressive JavaScript framework for building modern web interfaces.
            </p>
          </div>
        </div>
      </template>
    </NHoverCard>
  </div>
</template>
