<template>
  <NDialog
    title="Modal Title"
    description="Here is modal with overlay scroll"
    scrollable
  >
    <template #trigger>
      <NButton btn="outline-gray">
        Open Dialog
      </NButton>
    </template>

    <div class="grid h-300 gap-4 py-4">
      <p>
        This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in the modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport, scrolling will move the modal as needed.
      </p>
    </div>
  </NDialog>
</template>
