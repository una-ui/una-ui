<template>
  <NAlertDialog
    title="Prevent Close Alert Dialog"
    description="This is alert dialog prevents closing using escape key."
    prevent-close
  >
    <template #trigger>
      <NButton btn="solid-gray">
        Open Dialog
      </NButton>
    </template>
  </NAlertDialog>
</template>
