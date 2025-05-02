<template>
  <NResizable
    id="group"
    direction="horizontal"
    class="mx-auto max-w-lg min-h-260px border rounded-lg"
  >
    <NResizablePanel id="group-panel-1" v-slot="{ isCollapsed }" :collapsed-size="6" :min-size="20" :collapsible="true" :default-size="30">
      <div class="h-full flex flex-col gap-4" :class="[isCollapsed ? 'px-1 py-1.5' : 'p-1.5']">
        <div class="w-full flex items-center gap-2">
          <NSkeleton class="h-5 min-w-5.5 w-6" rounded="sm" />
          <div v-show="!isCollapsed" class="w-full flex flex-col gap-1">
            <NSkeleton class="h-2 w-full" rounded="sm" />
            <NSkeleton class="h-1.5 w-60%" rounded="sm" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <NSkeleton v-for="i in 3" :key="i" rounded="sm" class="h-5 w-full" />
        </div>
        <NSkeleton class="mt-auto h-5 w-full" rounded="sm" />
      </div>
    </NResizablePanel>
    <NResizableHandle id="group-handle" with-handle />
    <NResizablePanel id="group-panel-2" :default-size="70" :min-size="60">
      <div class="h-full flex items-center justify-center p-6">
        <span class="font-semibold">Main</span>
      </div>
    </NResizablePanel>
  </NResizable>
</template>
