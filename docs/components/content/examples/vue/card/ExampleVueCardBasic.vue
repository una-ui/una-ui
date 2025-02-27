<script setup lang="ts">
const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago',
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago',
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago',
  },
]
</script>

<template>
  <div class="grid w-full place-items-center">
    <NCard
      title="Notifications"
      description="You have 3 unread messages."
      class="max-w-380px"
      :_card-content="{
        class: 'grid gap-4',
      }"
    >
      <div class="flex items-center border rounded-md p-4 space-x-4">
        <NIcon name="i-lucide-bell" square="6" />
        <div class="flex-1 space-y-1">
          <p class="text-sm font-medium leading-none">
            Push Notifications
          </p>
          <p class="text-muted-foreground text-sm">
            Send notifications to device.
          </p>
        </div>
        <NSwitch />
      </div>
      <div>
        <div
          v-for="(notification, index) in notifications" :key="index"
          class="grid grid-cols-[25px_minmax(0,1fr)] mb-4 items-start pb-4 last:mb-0 last:pb-0"
        >
          <span class="h-2 w-2 flex translate-y-1 rounded-full bg-sky-500" />
          <div class="space-y-1">
            <p class="text-sm font-medium leading-none">
              {{ notification.title }}
            </p>
            <p class="text-muted-foreground text-sm">
              {{ notification.description }}
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="mt-2 w-full flex justify-end gap-4">
          <NButton
            leading="i-lucide-check"
            label="Mark all as read"
            class="w-full"
          />
        </div>
      </template>
    </NCard>
  </div>
</template>
