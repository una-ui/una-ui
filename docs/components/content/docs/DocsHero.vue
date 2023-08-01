<script setup lang="ts">
const { version } = useRuntimeConfig().public
</script>

<template>
  <div grid="~ cols-1 lg:cols-5" class="my-15 gap-10 lg:my-20">
    <!-- left section -->
    <div col="lg:span-3 span-1" space="y-8" class="flex flex-col items-center lg:items-start">
      <div>
        <span btn="~ base" class="rounded-lg bg-muted text-xs font-medium ring ring-gray/10">
          <NIcon name="i-heroicons-sparkles-solid" mr-1 text-sm text-primary />
          v{{ version }}
        </span>
      </div>
      <div flex="~ col" space-y-4 class="text-center lg:text-left">
        <div class="text-6xl font-bold lg:text-7xl">
          An
          <span class="from-primary to-$nv-c-brand-next bg-gradient-to-l bg-clip-text text-transparent">
            Atomic UI/UX
          </span>
          Technology
        </div>

        <div class="text-2xl font-medium text-$c-gray-500 lg:text-3xl">
          Presets · Components · Theming system
        </div>
      </div>

      <div class="text-center text-lg font-medium text-$c-gray-500 lg:w-5/6 lg:text-left lg:text-xl">
        NexveltUI is a technology that helps you build fast, modern, and accessible web applications.
      </div>

      <div grid="~ sm:cols-3 cols-2" class="gap-4">
        <div
          col="span-2 sm:span-1"
          class="mx-auto"
          grow="0"
        >
          <NButton
            to="/guide/getting-started"
            btn="solid"
            class="rounded-full px-5.5 py-3 font-bold"
            label="Getting Started"
          />
        </div>

        <NButton
          to="#"
          btn="solid-gray"
          class="rounded-full px-5.5 py-3 font-bold"
          label="Playground"
        />

        <NButton
          to="https://github.com/nexvelt/ui"
          target="_blank"
          btn="solid-gray"
          class="rounded-full px-5.5 py-3 font-bold"
          label="View on Github"
        />
      </div>
    </div>

    <!-- right section -->
    <div col="span-1 lg:span-2" order="first lg:last" class="image-container relative grid mb-20 w-full place-items-center text-center lg:mb-0 lg:text-right">
      <div class="image-bg absolute z-5 h-40 w-50 lg:h-85 lg:w-85" />
      <div class="h-40 w-40 -mt-10% lg:h-75 lg:w-75">
        <img src="/una-ui.svg" alt="Una UI logo">
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-container:hover {
  .image-bg {
    opacity: 0.1;
  }
}
.image-bg {
  opacity: .8;
  transition: opacity 2s ease;
  background-image: linear-gradient(-45deg, rgb(var(--c-primary)), 30%, var(--nv-c-brand-next));
  filter: blur(120px);
}
</style>
