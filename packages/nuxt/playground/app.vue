<script setup lang="ts">
import Forms from './components/Forms.vue'
</script>

<template>
  <div class="h-screen w-screen flex flex-col items-center justify-center gap-12 !bg-base">
    <div>
      <h1 class="text-4xl font-bold">
        UnaUI
      </h1>
      <p class="text-lg">
        This is a playground for testing UnaUI features.
      </p>

      <div class="mt-2">
        <NThemeSwitcher />
      </div>

      <div class="my-20 border rounded p-10">
        <Forms />
      </div>
    </div>
  </div>
</template>
