<script setup lang="ts">
const [DefineTextTemplate, ReuseTextTemplate] = createReusableTemplate()
const [DefineImgTemplate, ReuseImgTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTextTemplate v-slot="{ aspectRatio, textClass }">
    <div class="w-full overflow-hidden rounded-lg sm:w-[300px]">
      <NAspectRatio :ratio="16 / 9" :aspect-ratio class="rounded-lg">
        <div class="h-full flex items-center justify-center fw600" :class="textClass">
          16 / 9
        </div>
      </NAspectRatio>
    </div>
  </DefineTextTemplate>

  <DefineImgTemplate v-slot="{ $slots, aspectRatio, ratio }">
    <div class="w-full overflow-hidden rounded-lg sm:w-[300px]">
      <NAspectRatio :ratio :aspect-ratio class="rounded-lg">
        <component :is="$slots.default" />
      </NAspectRatio>
    </div>
  </DefineImgTemplate>

  <div class="space-y-10">
    <div class="flex items-center justify-center space-x-4">
      <ReuseTextTemplate />
      <ReuseTextTemplate text-class="text-primary" aspect-ratio="outline-orange" />
      <ReuseTextTemplate aspect-ratio="soft-green" text-class="text-green" />
    </div>
    <div class="flex items-center justify-center space-x-4">
      <ReuseImgTemplate :ratio="16 / 9">
        <img
          class="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1498855926480-d98e83099315?w=300&dpr=2&q=80"
          alt="Landscape photograph by Tobias Tullius"
        >
      </ReuseImgTemplate>
      <ReuseImgTemplate :ratio="16 / 9">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          class="h-full w-full rounded-md object-cover"
        >
      </ReuseImgTemplate>
      <ReuseImgTemplate :ratio="16 / 9" aspect-ratio="outline-primary">
        <img
          src="https://img.freepik.com/free-photo/abstract-wavy-background_23-2150534017.jpg?semt=ais_hybrid"
          alt="Abstract image"
          class="h-full w-full rounded-md object-cover"
        >
      </ReuseImgTemplate>
    </div>
  </div>
</template>
