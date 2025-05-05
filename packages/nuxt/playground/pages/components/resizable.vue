<template>
  <div class="w-full flex flex-col gap-6">
    <NResizablePanelGroup
      direction="horizontal"
      class="max-w-md border rounded-lg md:min-w-[450px]"
    >
      <NResizablePanel :default-size="50">
        <div class="h-[200px] flex items-center justify-center p-6">
          <span class="font-semibold">One</span>
        </div>
      </NResizablePanel>
      <NResizableHandle resizable-handle="solid-black" />
      <NResizablePanel :default-size="50">
        <NResizablePanelGroup direction="vertical">
          <NResizablePanel :default-size="25">
            <div class="h-full flex items-center justify-center p-6">
              <span class="font-semibold">Two</span>
            </div>
          </NResizablePanel>
          <NResizableHandle />
          <NResizablePanel :default-size="75">
            <div class="h-full flex items-center justify-center p-6">
              <span class="font-semibold">Three</span>
            </div>
          </NResizablePanel>
        </NResizablePanelGroup>
      </NResizablePanel>
    </NResizablePanelGroup>

    <NResizablePanelGroup direction="horizontal" class="max-w-md min-h-[200px] border rounded-lg md:min-w-[450px]">
      <NResizablePanel :default-size="25">
        <div class="h-full flex items-center justify-center p-6">
          <span class="font-semibold">Sidebar</span>
        </div>
      </NResizablePanel>
      <NResizableHandle icon />
      <NResizablePanel :default-size="75">
        <div class="h-full flex items-center justify-center p-6">
          <span class="font-semibold">Content</span>
        </div>
      </NResizablePanel>
    </NResizablePanelGroup>

    <NResizablePanelGroup
      direction="vertical"
      class="max-w-md min-h-[200px] border rounded-lg md:min-w-[450px]"
    >
      <NResizablePanel :default-size="25">
        <div class="h-full flex items-center justify-center p-6">
          <span class="font-semibold">Header</span>
        </div>
      </NResizablePanel>
      <NResizableHandle />
      <NResizablePanel :default-size="75">
        <div class="h-full flex items-center justify-center p-6">
          <span class="font-semibold">Content</span>
        </div>
      </NResizablePanel>
    </NResizablePanelGroup>
  </div>
</template>
