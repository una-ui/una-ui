<template>
  <NAlertDialog
    title="Are you absolutely sure?"
    description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
    :_alert-dialog-cancel="{
      btn: 'solid-white',
      label: 'Nevermind',
      leading: 'i-lucide-corner-up-left',
      onClick: () => {
        console.log('cancel')
      },
    }"
    :_alert-dialog-action="{
      btn: 'soft-red',
      label: 'Delete',
      leading: 'i-lucide-trash',
      onClick: () => {
        console.log('action')
      },
    }"
  >
    <template #trigger>
      <NButton btn="outline-gray">
        Show Dialog
      </NButton>
    </template>
  </NAlertDialog>
</template>
