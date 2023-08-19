<script setup lang="ts">
const { version } = useRuntimeConfig().public
</script>

<template>
  <div grid="~ cols-1 lg:cols-5" class="my-20 gap-10 lg:my-35">
    <!-- left section -->
    <div col="lg:span-3 span-1" class="flex flex-col items-center lg:items-start space-y-10">
      <NBadge badge="solid-gray">
        <NIcon name="i-heroicons-sparkles-solid" mr-1 text-sm text-primary />
        v{{ version }}
      </NBadge>

      <div flex="~ col" class="text-center space-y-5 lg:text-left">
        <h1 class="text-5xl font-bold !text-muted lg:text-7xl">
          An
          <span class="from-primary to-$c-brand-next bg-gradient-to-l bg-clip-text text-transparent">
            Atomic UI/UX
          </span>
          Technology
        </h1>

        <p class="text-xl text-$c-gray-500 lg:text-2xl">
          A technology that helps you build fast, modern, and accessible web applications with the power of Unocss Engine.
        </p>
      </div>

      <div flex class="gap-4">
        <NButton
          to="/guide/getting-started"
          btn="solid"
          class="rounded-full px-5.5 py-3 font-bold"
          label="Getting Started"
        />

        <NButton
          to="https://github.com/una-ui/una-ui"
          target="_blank"
          btn="solid-gray"
          class="rounded-full px-5.5 py-3 font-bold"
          label="View on Github"
        />
      </div>
    </div>

    <!-- right section -->
    <div col="span-1 lg:span-2" order="first lg:last" class="image-container relative grid mb-10 w-full place-items-center text-center lg:mb-0 lg:text-right">
      <div class="image-bg absolute z-5 h-40 w-40 lg:h-85 lg:w-85" />
      <div class="h-40 w-40 -mt-10% lg:h-75 lg:w-75">
        <LogoSvg />
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
  opacity: .7;
  transition: opacity 2s ease;
  background-image: linear-gradient(-60deg, rgb(var(--una-primary)) 30%, var(--c-brand-next));
  filter: blur(120px);
}
</style>
