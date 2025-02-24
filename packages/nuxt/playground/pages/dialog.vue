<template>
  <NDialog
    title="Edit profile"
    prevent-close
    description="Make changes to your profile here. Click save when you're done."
    :una="{
      dialogOverlay: 'data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out animate-duration-250!',
      dialogContent: 'data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out animate-duration-250!',
    }"
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
