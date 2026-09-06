<script setup lang="ts">
const notifications = [
  { id: 1, title: 'New message', description: 'You have a new message from Sarah', time: '2 min ago', read: false },
  { id: 2, title: 'Meeting reminder', description: 'Team meeting in 30 minutes', time: '10 min ago', read: false },
  { id: 3, title: 'Task completed', description: 'Project X has been marked as complete', time: '1 hour ago', read: true },
  { id: 4, title: 'New sign-up', description: 'New user registered: John Doe', time: '3 hours ago', read: true },
  { id: 5, title: 'System update', description: 'System will be updated at midnight', time: '5 hours ago', read: true },
]

const comments = [
  { id: 1, author: 'Sarah Johnson', text: 'Great progress on the project!', time: '2 hours ago' },
  { id: 2, author: 'Michael Chen', text: 'I think we should reconsider the approach for the homepage.', time: '3 hours ago' },
  { id: 3, author: 'Emily Rodriguez', text: 'The new design looks amazing!', time: '5 hours ago' },
  { id: 4, author: 'David Kim', text: 'When is the next release scheduled?', time: '1 day ago' },
  { id: 5, author: 'Alex Turner', text: 'I found a small bug in the navigation menu when testing on mobile.', time: '2 days ago' },
]

const tasks = [
  { id: 1, title: 'Update documentation', completed: false, priority: 'High' },
  { id: 2, title: 'Fix navigation bug', completed: true, priority: 'Critical' },
  { id: 3, title: 'Review pull requests', completed: false, priority: 'Medium' },
  { id: 4, title: 'Prepare for release', completed: false, priority: 'High' },
  { id: 5, title: 'Team meeting notes', completed: true, priority: 'Low' },
]

const events = [
  { id: 1, title: 'Team Meeting', date: 'Today, 2:00 PM', location: 'Conference Room A' },
  { id: 2, title: 'Product Launch', date: 'Tomorrow, 10:00 AM', location: 'Main Hall' },
  { id: 3, title: 'Client Presentation', date: 'Jan 15, 3:30 PM', location: 'Meeting Room B' },
  { id: 4, title: 'Workshop', date: 'Jan 20, 9:00 AM', location: 'Training Center' },
  { id: 5, title: 'Company Retreat', date: 'Feb 5-7', location: 'Mountain Resort' },
]
</script>

<template>
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-2">
    <!-- Primary - Notifications -->
    <div class="flex flex-col items-center">
      <h5 class="mb-2 text-sm font-medium">
        scroll-area="primary"
      </h5>
      <NScrollArea
        type="always"
        scroll-area="primary"
        class="h-64 w-full border rounded-md"
      >
        <div class="p-4">
          <h4 class="mb-4 text-sm font-medium leading-none">
            Notifications
          </h4>
          <div v-for="item in notifications" :key="item.id" class="mb-3">
            <div class="flex items-start">
              <div class="flex-1">
                <h5 class="font-medium">
                  {{ item.title }}
                </h5>
                <p class="text-sm opacity-80">
                  {{ item.description }}
                </p>
                <span class="text-xs opacity-60">{{ item.time }}</span>
              </div>
              <div class="mt-1 h-2 w-2 rounded-full" :class="item.read ? 'bg-gray-300' : 'bg-primary'" />
            </div>
            <NSeparator v-if="item.id !== notifications[notifications.length - 1].id" class="my-3" />
          </div>
        </div>
      </NScrollArea>
    </div>

    <!-- Secondary - Comments -->
    <div class="flex flex-col items-center">
      <h5 class="mb-2 text-sm font-medium">
        scroll-area="pink"
      </h5>
      <NScrollArea
        type="always"
        scroll-area="pink"
        class="h-64 w-full border rounded-md"
      >
        <div class="p-4">
          <h4 class="mb-4 text-sm font-medium leading-none">
            Comments
          </h4>
          <div v-for="comment in comments" :key="comment.id" class="mb-3">
            <div>
              <h5 class="font-medium">
                {{ comment.author }}
              </h5>
              <p class="text-sm">
                {{ comment.text }}
              </p>
              <span class="text-xs opacity-60">{{ comment.time }}</span>
            </div>
            <NSeparator v-if="comment.id !== comments[comments.length - 1].id" class="my-3" />
          </div>
        </div>
      </NScrollArea>
    </div>

    <!-- lime - Tasks -->
    <div class="flex flex-col items-center">
      <h5 class="mb-2 text-sm font-medium">
        scroll-area="lime"
      </h5>
      <NScrollArea
        type="always"
        scroll-area="lime"
        class="h-64 w-full border rounded-md"
      >
        <div class="p-4">
          <h4 class="mb-4 text-sm font-medium leading-none">
            Tasks
          </h4>
          <div v-for="task in tasks" :key="task.id" class="mb-3">
            <div class="flex items-center">
              <NCheckbox
                class="mr-2"
                :model-value="task.completed"
              />

              <div class="flex-1">
                <p class="text-sm" :class="task.completed ? 'line-through opacity-70' : ''">
                  {{ task.title }}
                </p>
                <span
                  class="text-xs"
                  :class="task.priority === 'Critical' ? 'text-error' : task.priority === 'High' ? 'text-warning' : 'text-muted-foreground'"
                >
                  {{ task.priority }}
                </span>
              </div>
            </div>
            <NSeparator v-if="task.id !== tasks[tasks.length - 1].id" class="my-3" />
          </div>
        </div>
      </NScrollArea>
    </div>

    <!-- Orange - Events -->
    <div class="flex flex-col items-center">
      <h5 class="mb-2 text-sm font-medium">
        scroll-area="orange"
      </h5>
      <NScrollArea
        type="always"
        scroll-area="orange"
        class="h-64 w-full border rounded-md"
      >
        <div class="p-4">
          <h4 class="mb-4 text-sm font-medium leading-none">
            Events
          </h4>
          <div v-for="event in events" :key="event.id" class="mb-3">
            <div>
              <h5 class="font-medium">
                {{ event.title }}
              </h5>
              <div class="flex items-center text-sm space-x-2">
                <span>📅 {{ event.date }}</span>
                <span>•</span>
                <span>📍 {{ event.location }}</span>
              </div>
            </div>
            <NSeparator v-if="event.id !== events[events.length - 1].id" class="my-3" />
          </div>
        </div>
      </NScrollArea>
    </div>
  </div>
</template>
