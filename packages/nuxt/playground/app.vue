<template>
  <div>
    <NuxtLoadingIndicator color="repeating-linear-gradient(to right,var(--c-primary) 0%,var(--c-primary-active) 100%)" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <NToaster />
  </div>
</template>
