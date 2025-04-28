<template>
  <NResizable
    direction="horizontal"
    class="max-h-300px max-w-md border rounded-lg"
  >
    <NResizablePanel :default-size="30">
      <div class="h-full flex items-center justify-center p-6">
        <span class="font-semibold">Sidebar</span>
      </div>
    </NResizablePanel>
    <NResizableHandle with-handle />
    <NResizablePanel :default-size="70">
      <NResizable direction="vertical">
        <NResizablePanel :default-size="20">
          <div class="h-full flex items-center justify-center p-4">
            <span class="font-semibold">Header</span>
          </div>
        </NResizablePanel>
        <NResizableHandle />
        <NResizablePanel :default-size="80">
          <div class="h-full flex items-center justify-center p-6">
            <span class="font-semibold">Content</span>
          </div>
        </NResizablePanel>
      </NResizable>
    </NResizablePanel>
  </NResizable>
</template>
