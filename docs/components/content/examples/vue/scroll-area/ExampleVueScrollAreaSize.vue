<script setup lang="ts">
// Create consistent content for all size examples
const contentItems = Array.from({ length: 15 }).map(
  (_, i) => `Item ${i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
)

// Different sizes to demonstrate with custom labels
const sizes = [
  { size: '10px', label: '10 Pixel' },
  { size: 'sm', label: 'Small' },
  { size: '0.75cm', label: '0.75 cm' },
]
</script>

<template>
  <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 sm:grid-cols-2">
    <div v-for="item in sizes" :key="item.size" class="flex flex-col items-center">
      <h5 class="mb-2 text-sm font-medium">
        size="{{ item.size }}"
      </h5>
      <NScrollArea
        type="always"
        :size="item.size"
        class="h-52 w-full border rounded-md"
      >
        <div class="p-4">
          <h4 class="mb-4 text-sm font-medium leading-none">
            {{ item.label }}
          </h4>
          <div v-for="(text, index) in contentItems" :key="index" class="mb-2">
            <div class="text-sm">
              {{ text }}
            </div>
            <NSeparator v-if="index !== contentItems.length - 1" class="my-2" />
          </div>
        </div>
      </NScrollArea>
    </div>
  </div>
</template>
