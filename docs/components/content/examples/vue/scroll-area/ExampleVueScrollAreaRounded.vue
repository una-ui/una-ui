<script setup lang="ts">
const notifications = [
  { id: 1, title: 'New Feature', message: 'Scroll area component now supports custom rounded corners', time: '10 minutes ago' },
  { id: 2, title: 'Documentation', message: 'Updated examples for better visual representation', time: '45 minutes ago' },
  { id: 3, title: 'Bug Fix', message: 'Fixed overflow issues in mobile view', time: '2 hours ago' },
  { id: 4, title: 'Performance', message: 'Improved scrolling performance on all devices', time: '5 hours ago' },
  { id: 5, title: 'New Feature', message: 'Added multiple color options for scrollbars', time: '1 day ago' },
  { id: 6, title: 'Update', message: 'Core library upgraded to latest version', time: '1 day ago' },
  { id: 7, title: 'Documentation', message: 'Added new examples for customization', time: '2 days ago' },
  { id: 8, title: 'Bug Fix', message: 'Resolved styling conflicts with other components', time: '3 days ago' },
  { id: 9, title: 'Accessibility', message: 'Improved keyboard navigation support', time: '4 days ago' },
  { id: 10, title: 'Performance', message: 'Reduced bundle size by 15%', time: '1 week ago' },
]
</script>

<template>
  <div class="grid w-full place-items-center">
    <NScrollArea
      rounded="0"
      class="h-72 w-80 border rounded-md"
    >
      <div class="p-4">
        <h4 class="mb-4 text-sm font-medium leading-none">
          Notifications
        </h4>
        <div v-for="notification in notifications" :key="notification.id">
          <div class="text-sm">
            <div class="font-medium">
              {{ notification.title }}
            </div>
            <div class="text-xs opacity-80">
              {{ notification.message }}
            </div>
            <div class="mt-1 text-xs opacity-60">
              {{ notification.time }}
            </div>
          </div>
          <NSeparator v-if="notification.id !== notifications.length" class="my-2" />
        </div>
      </div>
    </NScrollArea>
  </div>
</template>
