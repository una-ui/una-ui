<template>
  <NAlertDialog
    title="Custom Size Alert Dialog"
    description="This alert dialog has a custom size."
    :una="{
      alertDialogContent: 'max-w-7xl',
    }"
  >
    <template #trigger>
      <NButton btn="outline-gray">
        Open Dialog
      </NButton>
    </template>
  </NAlertDialog>
</template>
