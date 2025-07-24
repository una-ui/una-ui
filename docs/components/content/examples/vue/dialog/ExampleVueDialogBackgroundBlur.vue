<template>
  <NDialog
    title="Blurring background"
    :una="{ dialogOverlay: 'backdrop-blur' }"
  >
    <template #trigger>
      <NButton btn="outline-gray" label="Open Dialog" />
    </template>

    <template #body>
      <div>
        The background of this dialog is blurred. This can be used to protect sensitive information or hide certain types of images.
      </div>
    </template>
  </NDialog>
</template>
