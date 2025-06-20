<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const { version } = useRuntimeConfig().public

const source = ref('npm i @una-ui/nuxt')
const { copy, copied } = useClipboard({ source })
</script>

<template>
  <div grid="~ cols-1 lg:cols-5" class="my-10 gap-x-30 gap-y-5 lg:my-30 md:my-20 sm:my-15">
    <!-- left section -->
    <div col="lg:span-3 span-1" class="flex flex-col items-center gap-y-3 lg:items-start sm:gap-y-8 lg:px-0 sm:px-25">
      <NButton
        to="https://github.com/una-ui/una-ui/releases"
        target="blank"
        btn="soft-gray"
        size="xs"
        rounded="lg"
      >
        <NIcon name="i-heroicons-sparkles-solid" mr-1 text-sm text-primary />
        v{{ version }}
      </NButton>

      <div flex="~ col" class="text-center space-y-1 lg:text-left lg:space-y-2">
        <h1 class="text-5xl font-bold lg:text-7xl">
          <span class="from-$c-brand-next to-primary bg-gradient-to-r bg-clip-text text-transparent">
            Una UI
          </span>
        </h1>
        <h2 class="text-4xl text-accent-foreground font-bold lg:text-6xl">
          The Atomic UI Framework
        </h2>
        <p class="text-md text-muted-foreground md:text-2xl">
          Build fast, modern, and lightweight components powered by the Unocss Engine.
        </p>
      </div>

      <div flex="~ wrap" class="justify-center gap-4 md:mt-4 lg:justify-start">
        <NButton
          to="/getting-started/introduction"
          btn="solid"
          class="font-bold"
          rounded="full"
          p="5 sm:5.5"
          label="Getting Started"
        />
        <NButton
          to="/components/accordion"
          btn="solid-gray"
          class="font-bold"
          rounded="full"
          p="5 sm:5.5"
          label="View Components"
        />
        <NButton
          btn="solid-gray"
          class="font-bold"
          p="5 sm:5.5"
          rounded="full"
          :class="{ 'text-$c-brand-next': copied }"
          :label="source"
          :trailing="!copied ? 'i-heroicons-clipboard-document' : 'i-heroicons-check'"
          @click="copy(source)"
        />
      </div>
    </div>

    <!-- right section -->
    <div col="span-1 lg:span-2" order="first lg:last" class="image-container relative grid w-full place-items-center text-center lg:text-right">
      <div
        class="image-bg absolute z-5 rotate-0 square-50 lg:square-85"
      />
      <div
        class="image-bg absolute z-5 rotate-45 square-50 lg:square-85"
      />
      <div
        class="square-50 -mt-10% lg:square-85"
      >
        <CommonLogo />
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
  opacity: 0.5;
  transition: opacity 2s ease;
  background-image: linear-gradient(-80deg, oklch(var(--una-primary) / 0.5) 40%, var(--c-brand-next));
  filter: blur(120px);
}
</style>
