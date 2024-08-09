<template>
  <div icon>
    <h3 class="dark:drop-shadow-[0_0_0.1mm_rgb(var(--c-primary)) hidden text-base font-bold drop-shadow-lg sm:block">
      Una <span class="text-lg text-primary-active">UI</span>
    </h3>
    <div>
      <div class="text-sm">
        <p> Atomic UI Framework powered by the UNOCSS engine. It provides components and presets for creating stunning user interfaces with ease.</p>
      </div>
      <NDivider />
      <div class="mt-4">
        <div flex="~ items-center">
          <NButton btn="soft" @click="navigateTo('/getting-started')">
            Introduction
          </NButton>
          <NDivider direction="vertical" class="h-5" />
          <div flex="~ items-center" gap-3>
            <NBadge>ui</NBadge>
            <NBadge>divider</NBadge>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
