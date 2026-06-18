<template>
  <NAlertDialog
    title="Prevent Close Alert Dialog"
    description="This is alert dialog prevents closing using escape key."
    dismissible
  >
    <template #trigger>
      <NButton btn="outline-gray">
        Open Dialog
      </NButton>
    </template>
  </NAlertDialog>
</template>
