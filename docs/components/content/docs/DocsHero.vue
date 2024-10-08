<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const { version } = useRuntimeConfig().public

const source = ref('npm i @una-ui/nuxt')
const { copy, copied } = useClipboard({ source })
</script>

<template>
  <div grid="~ cols-1 lg:cols-5" class="my-15 gap-x-30 gap-y-5 lg:my-35 md:my-20 sm:my-15">
    <!-- left section -->
    <div col="lg:span-3 span-1" class="flex flex-col items-center lg:items-start space-y-10 lg:px-0 sm:px-25">
      <NButton
        to="https://github.com/una-ui/una-ui/releases"
        target="blank"
        btn="soft-gray"
        size="xs"
        rounded-lg
      >
        <NIcon name="i-heroicons-sparkles-solid" mr-1 text-sm text-primary />
        v{{ version }}
      </NButton>

      <div flex="~ col" class="text-center space-y-2 lg:text-left">
        <h1 class="text-6xl font-bold lg:text-7xl">
          <span class="from-$c-brand-next to-primary bg-gradient-to-r bg-clip-text text-transparent">
            Una UI
          </span>
        </h1>
        <h2 class="text-5xl text-muted-foreground font-bold lg:text-6xl">
          The Atomic UI Framework for Nuxt
        </h2>
        <p class="pt-5 text-xl text-$c-gray-500 lg:text-2xl">
          A technology that helps you build fast, modern, and lightweight web applications with the power of Unocss Engine.
        </p>
      </div>

      <div flex="~ wrap" class="justify-center gap-4 lg:justify-start">
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
    <div col="span-1 lg:span-2" order="first lg:last" class="image-container relative grid mb-10 w-full place-items-center text-center lg:mb-0 lg:text-right">
      <div class="image-bg absolute z-5 h-50 w-50 rotate-0 lg:h-85 lg:w-85" />
      <div class="image-bg absolute z-5 h-50 w-50 rotate-45 lg:h-85 lg:w-85" />
      <div class="h-50 w-50 -mt-10% lg:h-85 lg:w-85">
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
  opacity: .5;
  transition: opacity 2s ease;
  background-image: linear-gradient(-80deg, rgb(var(--una-primary)) 30%, var(--c-brand-next));
  filter: blur(120px);
}
</style>
