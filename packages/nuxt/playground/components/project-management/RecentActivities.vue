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
  <div class="grid grid-cols-1 gap-3 lg:grid-cols-3 md:grid-cols-2">
    <NCard
      v-for="activity in activities"
      :key="activity.id"
      :una="{
        cardContent: 'p-3 flex gap-3',
      }"
      card="outline hover:soft"
      class="group relative cursor-pointer overflow-hidden transition"
    >
      <!-- Activity icon - positioned absolute to the right -->
      <NIcon
        :class="`absolute right-2 top-2 opacity-50 group-hover:opacity-100 text-xl
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
          avatar="soft"
          :src="`https://i.pravatar.cc/40?u=${activity.user}`"
          :alt="`${activity.user}`"
          :class="`ring-2
                    ${activity.type === 'Development' ? 'ring-info/50 group-hover:ring-info'
                    : activity.type === 'Feedback' ? 'ring-success/50 group-hover:ring-success'
                    : activity.type === 'Meeting' ? 'ring-warning/50 group-hover:ring-warning'
                    : activity.type === 'Bug' ? 'ring-error/50 group-hover:ring-error'
                    : activity.type === 'Feature' ? 'ring-success/50 group-hover:ring-success'
          : 'ring-info/50 group-hover:ring-info'}`"
        />
      </div>

      <!-- Middle: content -->
      <div class="min-w-0 flex-1">
        <div class="flex items-start justify-between">
          <div>
            <p class="font-semibold">
              {{ activity.title }}
            </p>
            <p class="text-muted-foreground line-clamp-1 text-sm">
              {{ activity.description }}
            </p>
          </div>
        </div>

        <!-- Footer with time and badge -->
        <div class="mt-2 flex items-center justify-between">
          <NBadge
            class="rounded-full px-2 py-0.5 text-xs"
            :badge="activity.type === 'Development' ? 'soft-info'
              : activity.type === 'Feedback' ? 'soft-success'
                : activity.type === 'Meeting' ? 'soft-warning'
                  : activity.type === 'Bug' ? 'soft-error'
                    : activity.type === 'Feature' ? 'soft-success'
                      : 'soft-info'"
          >
            {{ activity.type }}
          </NBadge>
          <span class="text-muted-foreground text-sm">{{ activity.time }}</span>
        </div>
      </div>
    </NCard>
  </div>
</template>
