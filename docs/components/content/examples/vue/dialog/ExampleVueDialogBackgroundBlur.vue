<template>
  <NDialog
    title="Blurring background"
    :una="{ dialogOverlay: 'backdrop-blur' }"
  >
    <template #trigger>
      <NButton btn="solid-warning" label="View" leading="i-mdi:alert" />
    </template>
    <div>
      The background of this dialog is blurred. This can be used to protect sensitive information or hide certain types of images.
    </div>
  </NDialog>
</template>
