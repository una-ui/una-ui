<template>
  <NAlertDialog
    title="Are you absolutely sure?"
    description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
    @action="() => {
      console.log('action')
    }"
    @cancel="() => {
      console.log('cancel')
    }"
  >
    <template #trigger>
      <NButton btn="solid-gray">
        Show Dialog
      </NButton>
    </template>
  </NAlertDialog>
</template>
