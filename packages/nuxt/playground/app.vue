<template>
  <div class="grid h-screen place-items-center">
    <div class="bg-primary-500 square-20" />

    <NThemeSwitcher />

    <NuxtLoadingIndicator color="repeating-linear-gradient(to right,var(--c-primary) 0%,var(--c-primary-active) 100%)" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <NToaster />
  </div>
</template>
