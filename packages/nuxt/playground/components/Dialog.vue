<template>
  <NDialog
    dialog="fade fast"
    title="Hello" description="Hello, world!"
  >
    <template #trigger>
      <NButton btn="solid-white" label="Open Dialog" />
    </template>
    <div class="grid gap-2">
      <NSkeleton class="h-10" />
      <NSkeleton class="h-30" />
      <NSkeleton class="h-30" />
    </div>
  </NDialog>
</template>
