<template>
  <NAlertDialog
    title="Custom Animation Alert Dialog"
    description="This alert dialog has a custom animation."
    :una="{
      alertDialogOverlay: 'data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out animate-duration-250',
      alertDialogContent: 'data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out animate-duration-250',
    }"
  >
    <template #trigger>
      <NButton btn="solid-gray">
        Open Dialog
      </NButton>
    </template>
  </NAlertDialog>
</template>
