<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const { version } = useRuntimeConfig().public

const source = ref('npm i @una-ui/nuxt')
const { copy, copied } = useClipboard({ source })
</script>

<template>
  <div grid="~ cols-1 lg:cols-5" class="my-15 gap-x-30 gap-y-5 lg:my-30 md:my-20 sm:my-15">
    <!-- left section -->
    <div col="lg:span-3 span-1" class="flex flex-col items-center gap-y-6 lg:items-start lg:px-0 sm:px-25">
      <NButton
        to="https://github.com/una-ui/una-ui/releases"
        target="blank"
        btn="soft-gray"
        size="10px sm:xs"
        rounded="lg"
      >
        <NIcon name="i-heroicons-sparkles-solid" mr-1 text-sm text-primary />
        v{{ version }}
      </NButton>

      <div flex="~ col" class="text-center space-y-2 lg:text-left">
        <h1 class="text-5xl font-bold lg:text-7xl">
          <span class="from-$c-brand-next to-primary bg-gradient-to-r bg-clip-text text-transparent">
            Una UI
          </span>
        </h1>
        <h2 class="text-4xl text-accent font-bold lg:text-6xl">
          The Atomic UI Framework
        </h2>
        <p class="text-xl text-muted md:text-2xl">
          Experience the power of Unocss Engine, enabling the creation of fast, modern, and lightweight components with ease.
        </p>
      </div>

      <div flex="~ wrap" class="mt-4 justify-center gap-4 lg:justify-start">
        <NButton
          to="/getting-started"
          btn="solid"
          class="p-5.5 font-bold"
          rounded="full"
          label="Getting Started"
        />
        <NButton
          to="/components/accordion"
          btn="solid-gray"
          class="p-5.5 font-bold"
          rounded="full"
          label="View Components"
        />
        <NButton
          btn="solid-gray"
          class="p-5.5 font-bold"
          rounded="full"
          :class="{ 'text-primary-active': copied }"
          :label="source"
          :trailing="!copied ? 'i-heroicons-clipboard-document' : 'i-heroicons-check'"
          @click="copy(source)"
        />
      </div>
    </div>

    <!-- right section -->
    <div col="span-1 lg:span-2" order="first lg:last" class="image-container relative grid w-full place-items-center text-center lg:text-right">
      <div
        square="50 lg:85"
        class="image-bg absolute z-5 rotate-0"
      />
      <div
        square="50 lg:85"
        class="image-bg absolute z-5 rotate-45"
      />
      <div
        square="50 lg:85"
        class="-mt-10%"
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
  opacity: .5;
  transition: opacity 2s ease;
  background-image: linear-gradient(-80deg, rgb(var(--una-primary)) 30%, var(--c-brand-next));
  filter: blur(120px);
}
</style>
