<template>
  <main class="flex flex-col gap-4 p-4">
    <!-- Header -->
    <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div class="flex flex-col">
        <h1 class="text-2xl font-bold">
          Dashboard
        </h1>
        <p class="text-sm text-muted-foreground">
          Welcome back to your dashboard overview.
        </p>
      </div>
      <div class="flex items-center gap-3">
        <NButton
          btn="solid-gray"
          leading="i-lucide-git-pull-request-create text-lg"
          label="30 Pull Request"
        />
        <NButton
          btn="solid-gray"
          leading="i-lucide-folder-git-2 text-lg"
          label="230 Issues"
        />
      </div>
    </div>

    <ProjectManagementCardMetrics />

    <div class="grid grid-cols-1 gap-4 xl:grid-cols-6">
      <!-- Project Issues Table Section -->
      <NCard
        title="Project Issues"
        description="Track and manage ongoing project issues"
        :una="{
          cardHeader: 'p-4',
          cardContent: 'p-0 pb-4',
        }"
        class="col-span-6 self-start rounded-lg xl:col-span-4"
      >
        <ProjectManagementTableIssues />
      </NCard>

      <!-- Recent Activities Section -->
      <NCard
        title="Recent Activities"
        description="Stay updated with the latest activities"
        :una="{
          cardHeader: 'p-4',
          cardContent: 'p-0',
        }"
        class="col-span-6 self-start rounded-lg xl:col-span-2"
      >
        <ProjectManagementRecentActivities />
      </NCard>
    </div>
  </main>
</template>
