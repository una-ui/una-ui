<script setup lang="ts">
const cards = [
  {
    icon: 'i-lucide-users',
    title: 'Total Users',
    value: '1,234',
    description: '+12% from last month',
  },
  {
    icon: 'i-lucide-dollar-sign',
    title: 'Revenue',
    value: '$45.2k',
    description: '+8% from last month',
  },
  {
    icon: 'i-lucide-folder',
    title: 'Active Projects',
    value: '12',
    description: '2 completed this week',
  },
  {
    icon: 'i-lucide-check-circle',
    title: 'Tasks Done',
    value: '86%',
    description: '+4% from last week',
  },
]
</script>

<template>
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4">
    <NCard
      v-for="(card, index) in cards"
      :key="index"
      class="from-primary/5 bg-gradient-to-t shadow-xs"
    >
      <template #content>
        <div class="flex items-center gap-2">
          <NIcon :name="card.icon" class="text-2xl text-primary" />
          <h3 class="font-semibold">
            {{ card.title }}
          </h3>
        </div>
        <p class="mt-2 text-3xl font-bold">
          {{ card.value }}
        </p>
        <p class="mt-1 text-sm text-muted-foreground">
          {{ card.description }}
        </p>
      </template>
    </NCard>
  </div>
</template>
