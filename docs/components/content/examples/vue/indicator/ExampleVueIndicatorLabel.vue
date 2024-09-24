<template>
  <div class="flex items-center gap-x-6">
    <NIndicator indicator="solid-red" label="1">
      <NButton label="i-heroicons-bell group-active:i-heroicons-bell-solid" size="lg" icon btn="soft-gray" square class="group rounded-full" />
    </NIndicator>

    <NIndicator indicator="solid-primary" label="New">
      <NButton label="i-heroicons-envelope group-active:i-heroicons-envelope-solid" size="xl" icon btn="text-gray" group class="group rounded-full p-1.5" />
    </NIndicator>

    <NIndicator indicator="solid-info" label="1 message">
      <NAvatar src="https://avatars.githubusercontent.com/u/33350692?v=4" alt="Phojie Rengel" />
    </NIndicator>
  </div>
</template>
