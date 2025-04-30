<template>
  <div class="grid grid-cols-2 gap-2">
    <!-- Default -->
    <NAlertDialog
      title="Default Alert Dialog"
      description="This is a default alert dialog."
    >
      <template #trigger>
        <NButton btn="outline">
          Default
        </NButton>
      </template>
    </NAlertDialog>

    <!-- Custom Animation -->
    <NAlertDialog
      title="Custom Animation Alert Dialog"
      description="This alert dialog has a custom animation."
      :una="{
        alertDialogOverlay: 'data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out animate-duration-250',
        alertDialogContent: 'data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out animate-duration-250',
      }"
    >
      <template #trigger>
        <NButton btn="outline">
          Custom Animation
        </NButton>
      </template>
    </NAlertDialog>

    <!-- Custom Size -->
    <NAlertDialog
      title="Custom Size Alert Dialog"
      description="This alert dialog has a custom size."
      :una="{
        alertDialogContent: 'max-w-7xl',
      }"
    >
      <template #trigger>
        <NButton btn="outline">
          Custom Size
        </NButton>
      </template>
    </NAlertDialog>

    <!-- Prevent Close -->
    <NAlertDialog
      title="Prevent Close Alert Dialog"
      description="This is alert dialog prevents closing using escape key."
      prevent-close
    >
      <template #trigger>
        <NButton btn="outline">
          Prevent Close
        </NButton>
      </template>
    </NAlertDialog>
  </div>
</template>
