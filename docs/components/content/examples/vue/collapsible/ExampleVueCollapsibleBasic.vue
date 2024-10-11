<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <NCollapsible
    v-model:open="isOpen"
    class="w-350px space-y-2"
  >
    <div class="flex items-center justify-between px-4 space-x-4">
      <h4 class="text-sm font-semibold">
        @peduarte starred 3 repositories
      </h4>
      <NCollapsibleTrigger as-child>
        <NButton btn="ghost-gray" square>
          <NIcon name="i-radix-icons-caret-sort" />
        </NButton>
      </NCollapsibleTrigger>
    </div>
    <div class="border rounded-md px-4 py-3 text-sm font-mono">
      @radix-ui/primitives
    </div>
    <NCollapsibleContent class="space-y-2">
      <div class="border rounded-md px-4 py-3 text-sm font-mono">
        @radix-ui/colors
      </div>
      <div class="border rounded-md px-4 py-3 text-sm font-mono">
        @stitches/react
      </div>
    </NCollapsibleContent>
  </NCollapsible>
</template>
