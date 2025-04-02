<template>
  <div class="flex flex-col gap-4">
    <h3 class="text-lg font-semibold">
      Variant Examples
    </h3>
    <div class="grid grid-cols-2 gap-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-6 sm:gap-4">
      <!-- Soft Gray (Default) -->
      <NAspectRatio
        :ratio="16 / 9"
      >
        <div class="h-full flex flex-col items-center justify-center p-2 sm:p-4">
          <NIcon name="i-ph-image" class="opacity-60 square-6 sm:square-8" />
          <p class="mt-1 text-xs sm:mt-2 sm:text-sm">
            Default Variant
          </p>
        </div>
      </NAspectRatio>

      <!-- Soft Primary -->
      <NAspectRatio
        :ratio="16 / 9"
        aspect-ratio="soft-primary"
      >
        <div class="h-full flex flex-col items-center justify-center p-2 sm:p-4">
          <NIcon name="i-ph-image-square" class="opacity-60 square-6 sm:square-8" />
          <p class="mt-1 text-xs sm:mt-2 sm:text-sm">
            Primary Color
          </p>
        </div>
      </NAspectRatio>

      <!-- Soft Orange -->
      <NAspectRatio
        :ratio="16 / 9"
        aspect-ratio="soft-orange"
      >
        <div class="h-full flex flex-col items-center justify-center p-2 sm:p-4">
          <NIcon name="i-ph-fire" class="opacity-60 square-6 sm:square-8" />
          <p class="mt-1 text-xs sm:mt-2 sm:text-sm">
            Orange Color
          </p>
        </div>
      </NAspectRatio>

      <!-- Soft Success -->
      <NAspectRatio
        :ratio="16 / 9"
        aspect-ratio="soft-success"
      >
        <div class="h-full flex flex-col items-center justify-center p-2 sm:p-4">
          <NIcon name="i-ph-check-circle" class="opacity-60 square-6 sm:square-8" />
          <p class="mt-1 text-xs sm:mt-2 sm:text-sm">
            Success Color
          </p>
        </div>
      </NAspectRatio>

      <!-- Outline Primary -->
      <NAspectRatio
        :ratio="16 / 9"
        aspect-ratio="outline-primary"
      >
        <div class="h-full flex flex-col items-center justify-center p-2 sm:p-4">
          <NIcon name="i-ph-selection" class="opacity-60 square-6 sm:square-8" />
          <p class="mt-1 text-xs sm:mt-2 sm:text-sm">
            Primary Outline
          </p>
        </div>
      </NAspectRatio>

      <!-- Outline Danger -->
      <NAspectRatio
        :ratio="16 / 9"
        aspect-ratio="outline-error"
      >
        <div class="h-full flex flex-col items-center justify-center p-2 sm:p-4">
          <NIcon name="i-ph-warning" class="opacity-60 square-6 sm:square-8" />
          <p class="mt-1 text-xs sm:mt-2 sm:text-sm">
            Danger Outline
          </p>
        </div>
      </NAspectRatio>

      <!-- 4:3 Ratio Example -->
      <NAspectRatio
        :ratio="4 / 3"
        aspect-ratio="soft-blue"
      >
        <div class="h-full flex flex-col items-center justify-center p-2 sm:p-4">
          <NIcon name="i-ph-monitor" class="opacity-60 square-6 sm:square-8" />
          <p class="mt-1 text-xs sm:mt-2 sm:text-sm">
            Different Ratio
          </p>
        </div>
      </NAspectRatio>

      <!-- Unstyled -->
      <NAspectRatio
        :ratio="16 / 9"
        aspect-ratio="~"
        class="border border-gray-300 border-dashed dark:border-gray-700"
      >
        <div class="h-full flex flex-col items-center justify-center p-2 sm:p-4">
          <NIcon name="i-ph-code" class="opacity-60 square-6 sm:square-8" />
          <p class="mt-1 text-xs sm:mt-2 sm:text-sm">
            Custom Styling
          </p>
        </div>
      </NAspectRatio>
    </div>
  </div>
</template>
