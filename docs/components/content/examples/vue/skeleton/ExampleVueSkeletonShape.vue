<template>
  <div class="space-y-4">
    <!-- News feed skeleton item -->
    <template v-for="i in 3" :key="i">
      <div class="flex items-start space-x-4">
        <NSkeleton
          rounded="full"
          class="h-10 w-10"
        />
        <div class="flex-1 space-y-2">
          <NSkeleton class="h-4 w-3/4" />
          <NSkeleton class="h-4 w-1/2" />
        </div>
      </div>
    </template>
  </div>
</template>
