<template>
  <div class="flex items-center justify-around gap-4">
    <div class="w-full overflow-hidden rounded-lg sm:w-300px">
      <NAspectRatio
        :ratio="16 / 9"
        class="rounded-lg"
      >
        <div class="h-full flex items-center justify-center">
          <span class="fw600">16 / 9</span>
        </div>
      </NAspectRatio>
    </div>
    <div class="w-full overflow-hidden rounded-lg sm:w-300px">
      <NAspectRatio
        :ratio="16 / 9"
        aspect-ratio="outline-primary"
        class="rounded-lg"
      >
        <div class="h-full flex items-center justify-center">
          <span class="fw600">16 / 9</span>
        </div>
      </NAspectRatio>
    </div>
    <div class="w-full overflow-hidden rounded-lg sm:w-300px">
      <NAspectRatio
        :ratio="16 / 9"
        aspect-ratio="soft-green"
        class="rounded-lg"
      >
        <div class="h-full flex items-center justify-center">
          <span class="text-green fw600">16 / 9</span>
        </div>
      </NAspectRatio>
    </div>
  </div>
</template>
