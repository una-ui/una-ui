<template>
  <div grid grid-cols-2 items-end gap-8>
    <div flex="~ col" gap-2>
      <h5 class="mb-2">
        Rectangle
      </h5>
      <div flex="~ items-end" gap-2>
        <NSkeleton class="h-3 w-8" />
        <NSkeleton class="h-4 w-8" />
        <NSkeleton class="h-8 w-8" />
        <NSkeleton class="h-12 w-9" />
        <NSkeleton class="h-16 w-10" />
      </div>
    </div>
    <div flex="~ col" gap-2>
      <h5 class="mb-2">
        Circle
      </h5>
      <div flex="~ items-end" gap-2>
        <NSkeleton shape="circle" class="h-8 w-8" />
        <NSkeleton shape="circle" class="h-10 w-10" />
        <NSkeleton shape="circle" class="h-12 w-12" />
        <NSkeleton shape="circle" class="h-14 w-14" />
      </div>
    </div>
  </div>
</template>
