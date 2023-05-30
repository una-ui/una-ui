<template>
  <div class="rounded-md bg-blue-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <div class="h-5 w-5 text-blue-400 i-carbon-information-filled" aria-hidden="true" />
      </div>
      <div class="ml-3 flex-1 md:flex md:justify-between">
        <p class="text-sm text-blue-700">
          <slot />
        </p>
      </div>
    </div>
  </div>
</template>
