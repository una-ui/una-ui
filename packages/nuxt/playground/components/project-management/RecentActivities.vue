<script setup lang="ts">
const activities = [
  {
    id: 1,
    user: 'felix',
    icon: 'i-lucide-git-commit',
    title: 'Felix pushed 3 commits',
    description: 'feat(ui): improve dashboard responsiveness and add new charts',
    time: '2m ago',
    type: 'Development',
  },
  {
    id: 2,
    user: 'sarah',
    icon: 'i-lucide-message-circle',
    title: 'Sarah left a detailed review',
    description: '"Great improvements on the authentication flow, especially..."',
    time: '1h ago',
    type: 'Feedback',
  },
  {
    id: 3,
    user: 'team',
    icon: 'i-lucide-users',
    title: 'Design team meeting scheduled',
    description: 'Weekly sync - UI Component Library Review',
    time: '3h ago',
    type: 'Meeting',
  },
  {
    id: 4,
    user: 'john',
    icon: 'i-lucide-bug',
    title: 'John reported a critical bug',
    description: 'Fixed authentication token expiration issue',
    time: '4h ago',
    type: 'Bug',
  },
  {
    id: 5,
    user: 'emma',
    icon: 'i-lucide-sparkles',
    title: 'Emma proposed new feature',
    description: 'Add dark mode support across all components',
    time: '5h ago',
    type: 'Feature',
  },
]
</script>

<template>
  <div class="grid grid-cols-1">
    <NCard
      v-for="activity in activities"
      :key="activity.id"
      :una="{
        cardContent: 'py-4 px-4 flex gap-3',
      }"
      card="~ hover:soft"
      class="group relative cursor-pointer overflow-hidden border-t rounded-0 transition"
    >
      <!-- Activity icon - positioned absolute to the right -->
      <NIcon
        :class="`absolute right-3 top-3 opacity-50 group-hover:opacity-100 text-xl
                  ${activity.type === 'Development' ? 'text-info'
                  : activity.type === 'Feedback' ? 'text-success'
                  : activity.type === 'Meeting' ? 'text-warning'
                  : activity.type === 'Bug' ? 'text-error'
                  : activity.type === 'Feature' ? 'text-success'
        : 'text-info'}`"
        :name="activity.icon"
      />

      <!-- Left side: avatar -->
      <div class="flex-shrink-0">
        <NAvatar
          :avatar="activity.type === 'Development' ? 'outline-info'
            : activity.type === 'Feedback' ? 'outline-success'
              : activity.type === 'Meeting' ? 'outline-warning'
                : activity.type === 'Bug' ? 'outline-error'
                  : activity.type === 'Feature' ? 'outline-success'
                    : 'outline-info'"
          class="group-hover:border-2"
          :src="`https://i.pravatar.cc/40?u=${activity.user}`"
          :alt="`${activity.user}`"
        />
      </div>

      <!-- Middle: content -->
      <div class="min-w-0 flex-1">
        <div class="flex flex-col">
          <p class="text-md">
            {{ activity.title }}
          </p>
          <p class="mt-1 text-sm text-muted">
            {{ activity.description }}
          </p>
        </div>

        <!-- Footer with time and badge -->
        <div class="mt-3 flex items-center justify-between">
          <NBadge
            class="rounded-full px-2.5 py-0.5 text-xs"
            :badge="activity.type === 'Development' ? 'soft-info'
              : activity.type === 'Feedback' ? 'soft-success'
                : activity.type === 'Meeting' ? 'soft-warning'
                  : activity.type === 'Bug' ? 'soft-error'
                    : activity.type === 'Feature' ? 'soft-success'
                      : 'soft-info'"
          >
            {{ activity.type }}
          </NBadge>
          <span class="text-sm text-muted">{{ activity.time }}</span>
        </div>
      </div>
    </NCard>
  </div>
</template>
