<template>
  <NDialog
    title="Edit profile"
    description="Make changes to your profile here. Click save when you're done."
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
