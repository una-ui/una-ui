<template>
  <NResizablePanelGroup
    id="group-1"
    direction="horizontal"
    class="mx-auto max-w-lg min-h-260px border rounded-lg"
  >
    <NResizablePanel id="group-1-panel-1" :default-size="30">
      <div class="h-full flex items-center justify-center p-6">
        <span class="font-semibold">Sidebar</span>
      </div>
    </NResizablePanel>
    <NResizableHandle id="group-1-handle" />
    <NResizablePanel id="group-1-panel-2" :default-size="70">
      <NResizablePanelGroup id="group-2" direction="vertical">
        <NResizablePanel id="group-2-panel-1" :default-size="20">
          <div class="h-full flex items-center justify-center p-4">
            <span class="font-semibold">Header</span>
          </div>
        </NResizablePanel>
        <NResizableHandle id="group-2-handle" />
        <NResizablePanel id="group-2-panel-2" :default-size="80">
          <div class="h-full flex items-center justify-center p-6">
            <span class="font-semibold">Content</span>
          </div>
        </NResizablePanel>
      </NResizablePanelGroup>
    </NResizablePanel>
  </NResizablePanelGroup>
</template>
