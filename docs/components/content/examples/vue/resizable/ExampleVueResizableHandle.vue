<template>
  <NResizable
    id="group-1"
    direction="horizontal"
    class="mx-auto max-w-lg min-h-260px border rounded-lg"
  >
    <NResizablePanel id="group-1-panel-1" :default-size="30">
      <div class="h-full flex items-center justify-center p-6">
        <span class="font-semibold">1</span>
      </div>
    </NResizablePanel>
    <NResizableHandle id="group-1-handle" with-handle />
    <NResizablePanel id="group-1-panel-2" :default-size="70">
      <NResizable id="group-2" direction="vertical">
        <NResizablePanel id="group-2-panel-1" :default-size="20">
          <div class="h-full flex items-center justify-center p-4">
            <span class="font-semibold">2</span>
          </div>
        </NResizablePanel>
        <NResizableHandle id="group-2-handle" with-handle resizable-handle="solid-red" />
        <NResizablePanel id="group-2-panel-2" :default-size="80">
          <NResizable id="group-3" direction="horizontal">
            <NResizablePanel id="group-3-panel-1" :default-size="50">
              <div class="h-full flex items-center justify-center p-4">
                <span class="font-semibold">3</span>
              </div>
            </NResizablePanel>
            <NResizableHandle id="group-3-handle" with-handle icon="i-lucide-arrow-left-right" resizable-handle="solid-primary" />
            <NResizablePanel id="group-3-panel-2" :default-size="50">
              <div class="h-full flex items-center justify-center p-6">
                <span class="font-semibold">4</span>
              </div>
            </NResizablePanel>
          </NResizable>
        </NResizablePanel>
      </NResizable>
    </NResizablePanel>
  </NResizable>
</template>
