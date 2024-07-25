<template>
  <div class="w-250px">
    <div class="flex items-end space-x-2">
      <NSkeleton
        rounded="b-full"
        class="h-15 w-15"
      />

      <div class="space-y-2">
        <NSkeleton
          skeleton="primary"
          rounded="t-full"
          class="h-15 w-15"
        />
        <NSkeleton
          rounded="l-full"
          class="h-15 w-15"
        />
      </div>
    </div>
  </div>
</template>
