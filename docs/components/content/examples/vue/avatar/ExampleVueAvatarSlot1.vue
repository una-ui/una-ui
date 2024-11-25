<template>
  <div class="flex items-center gap-4">
    <NAvatar avatar="solid-primary" class="rounded-md">
      <template #fallback>
        <span class="text-white font-extrabold">PR</span>
      </template>
    </NAvatar>

    <NAvatar avatar="soft-primary">
      <template #fallback>
        <NIcon name="i-heroicons-envelope-20-solid" />
      </template>
    </NAvatar>
  </div>
</template>
