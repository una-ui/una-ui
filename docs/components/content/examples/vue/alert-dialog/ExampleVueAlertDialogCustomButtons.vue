<template>
  <NAlertDialog
    title="Are you absolutely sure?"
    description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
    :_alert-dialog-cancel="{
      btn: 'solid-white',
      label: 'Return',
      leading: 'i-lucide-arrow-left',
      onClick: () => {
        console.log('cancel')
      },
    }"
    :_alert-dialog-action="{
      btn: 'soft-red',
      label: 'Continue',
      leading: 'i-lucide-trash',
      onClick: () => {
        console.log('action')
      },
    }"
  >
    <template #trigger>
      <NButton btn="solid-gray">
        Show Dialog
      </NButton>
    </template>
  </NAlertDialog>
</template>
