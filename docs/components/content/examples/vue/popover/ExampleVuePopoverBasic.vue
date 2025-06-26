<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

function togglePopover() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <NPopover
    :open="isOpen"
    align="center"
    side="bottom"
    :avoid-collisions="true"
    sticky="always"
    :trap-focus="true"
  >
    <template #trigger>
      <NButton
        btn="text-gray"
        icon
        rounded="full"
        square
        label="i-lucide-info"
        @click="togglePopover"
      />
    </template>

    <div class="p-4">
      <h3 class="mb-2 font-medium">
        Popover Title
      </h3>
      <p class="text-sm text-muted-foreground">
        This is a more detailed example of a popover with advanced features like collision avoidance and sticky behavior.
      </p>
    </div>
  </NPopover>
</template>

<style scoped>
/* Add any additional styles here */
</style>
