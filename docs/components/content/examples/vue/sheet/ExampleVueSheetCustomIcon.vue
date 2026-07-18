<template>
  <div>
    <NSheet
      sheet="right"
      title="Custom Icon"
      description="This sheet uses a custom close icon"
      :_sheet-close="{
        label: 'i-lucide-arrow-right-from-line',
        btn: 'solid-black',
      }"
    >
      <template #trigger>
        <NButton btn="outline-gray">
          Custom Icon
        </NButton>
      </template>

      <template #body>
        <div class="grid gap-4 p-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <NSkeleton class="h-4 w-[60px] justify-self-end" />
            <NSkeleton class="col-span-3 h-10" />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <NSkeleton class="h-4 w-[80px] justify-self-end" />
            <NSkeleton class="col-span-3 h-10" />
          </div>
        </div>
      </template>

      <template #footer>
        <NSheetClose>
          <NButton type="submit" label="Save changes" />
        </NSheetClose>
      </template>
    </NSheet>
  </div>
</template>
