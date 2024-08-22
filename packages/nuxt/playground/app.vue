<template>
  <div class="h-screen w-screen !bg-base">
    <div class="h-full w-full flex flex-col items-center justify-center gap-4">
      <ColorMode />

      <Breadcrumb />

      <NThemeSwitcher />
    </div>

    <NuxtPage />
  </div>
</template>
