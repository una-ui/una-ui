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
  <main class="flex flex-col gap-4 p-4">
    <!-- Header -->
    <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div class="flex flex-col">
        <h1 class="text-2xl font-bold">
          Dashboard
        </h1>
        <p class="text-muted-foreground text-sm">
          Welcome back to your dashboard overview.
        </p>
      </div>
      <div class="flex items-center gap-3">
        <NButton
          btn="solid-white"
          leading="i-lucide-git-pull-request"
          label="Pull Request"
        />
        <NButton
          btn="solid-white"
          leading="i-lucide-git-pull-request-create"
          label="Issues"
        />
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2">
      <!-- Overview Card -->
      <div class="bg-card border rounded-lg p-4">
        <div class="flex items-center gap-2">
          <div class="i-lucide-users text-2xl text-primary" />
          <h3 class="font-semibold">
            Total Users
          </h3>
        </div>
        <p class="mt-2 text-3xl font-bold">
          1,234
        </p>
        <p class="text-muted-foreground mt-1 text-sm">
          +12% from last month
        </p>
      </div>

      <!-- Revenue Card -->
      <div class="bg-card border rounded-lg p-4">
        <div class="flex items-center gap-2">
          <div class="i-lucide-dollar-sign text-2xl text-primary" />
          <h3 class="font-semibold">
            Revenue
          </h3>
        </div>
        <p class="mt-2 text-3xl font-bold">
          $45.2k
        </p>
        <p class="text-muted-foreground mt-1 text-sm">
          +8% from last month
        </p>
      </div>

      <!-- Active Projects -->
      <div class="bg-card border rounded-lg p-4">
        <div class="flex items-center gap-2">
          <div class="i-lucide-folder text-2xl text-primary" />
          <h3 class="font-semibold">
            Active Projects
          </h3>
        </div>
        <p class="mt-2 text-3xl font-bold">
          12
        </p>
        <p class="text-muted-foreground mt-1 text-sm">
          2 completed this week
        </p>
      </div>

      <!-- Tasks Card -->
      <div class="bg-card border rounded-lg p-4">
        <div class="flex items-center gap-2">
          <div class="i-lucide-check-circle text-2xl text-primary" />
          <h3 class="font-semibold">
            Tasks Done
          </h3>
        </div>
        <p class="mt-2 text-3xl font-bold">
          86%
        </p>
        <p class="text-muted-foreground mt-1 text-sm">
          +4% from last week
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 lg:grid-cols-6">
      <!-- Table Users -->
      <div class="col-span-1 lg:col-span-4">
        <TableUsers />
      </div>

      <!-- Recent Activity -->
      <NCard
        title="Recent Activity"
        :una="{
          cardHeader: 'p-4',
          cardContent: 'p-4 pt-0 space-y-4',
        }"
        description="Stay updated with the latest activities"
        class="col-span-1 h-fit rounded-lg lg:col-span-2"
      >
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
      </NCard>
    </div>
  </main>
</template>
