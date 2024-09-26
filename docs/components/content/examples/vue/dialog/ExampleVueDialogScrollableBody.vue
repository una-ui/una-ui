<template>
  <NDialog
    title="Edit profile"
    description="Make changes to your profile here. Click save when you're done."
    :_dialog-content="{
      class: 'sm:max-w-lg grid-rows-[auto_minmax(0,1fr)_auto] p-0 max-h-90dvh',
    }"
    :_dialog-footer="{
      class: 'p-6 pt-0',
    }"
    :_dialog-header="{
      class: 'p-6 pb-0',
    }"
  >
    <template #trigger>
      <NButton>
        Open Dialog
      </NButton>
    </template>

    <div class="grid gap-4 overflow-y-auto px-6 py-4">
      <div class="h-[300dvh] flex flex-col justify-between">
        <p>
          This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
        </p>

        <p>This content should appear at the bottom after you scroll.</p>
      </div>
    </div>

    <template #footer>
      <NButton
        btn="solid"
        label="Save Changes"
      />
    </template>
  </NDialog>
</template>
