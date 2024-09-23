<template>
  <NDialog
    title="Example dialog"
    description="This is an example dialog."
  >
    <template #trigger>
      <NButton btn="solid-gray">
        Open Dialog
      </NButton>
    </template>

    <div class="grid">
      <p>Hello, dialog!</p>
      <p>Click outside to close.</p>
    </div>
  </NDialog>
</template>
