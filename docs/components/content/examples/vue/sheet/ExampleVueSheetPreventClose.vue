<template>
  <div>
    <NSheet
      sheet="bottom"
      prevent-close
      title="Prevent close"
      description="This sheet cannot be closed by clicking outside of it"
    >
      <template #trigger>
        <NButton btn="outline-gray">
          Prevent close
        </NButton>
      </template>

      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <NSkeleton class="h-4 w-[60px] justify-self-end" />
          <NSkeleton class="col-span-3 h-10" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <NSkeleton class="h-4 w-[80px] justify-self-end" />
          <NSkeleton class="col-span-3 h-10" />
        </div>
      </div>

      <template #footer>
        <NSheetClose>
          <NButton type="submit" label="Save changes" />
        </NSheetClose>
      </template>
    </NSheet>
  </div>
</template>
