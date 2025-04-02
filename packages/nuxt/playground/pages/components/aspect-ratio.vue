<template>
  <div class="h-full w-full flex flex-wrap items-center justify-center gap-4">
    <div class="w-full overflow-hidden rounded-lg sm:w-300px">
      <NAspectRatio :ratio="16 / 9" class="rounded-lg">
        <div class="h-full flex items-center justify-center fw600">
          16 / 9
        </div>
      </NAspectRatio>
    </div>
    <div class="w-full overflow-hidden rounded-lg sm:w-300px">
      <NAspectRatio :ratio="16 / 9" class="rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          class="h-full w-full rounded-md object-cover"
        >
      </NAspectRatio>
    </div>
    <div class="w-full overflow-hidden rounded-lg sm:w-300px">
      <NAspectRatio :ratio="16 / 9" aspect-ratio="soft-green" class="rounded-lg">
        <img
          class="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1498855926480-d98e83099315?w=300&dpr=2&q=80"
          alt="Landscape photograph by Tobias Tullius"
        >
      </NAspectRatio>
    </div>
  </div>
</template>
