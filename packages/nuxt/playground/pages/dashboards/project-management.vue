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
          leading="i-lucide-git-pull-request-create"
          label="30 Pull Request"
        />
        <NButton
          btn="solid-white"
          leading="i-lucide-folder-git-2"
          label="230 Issues"
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

    <!-- Issues and Activity Section - Better separated with proper layout -->
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-4">
      <!-- Project Issues Table Section -->
      <NCard
        title="Project Issues"
        description="Track and manage ongoing project issues"
        :una="{
          cardHeader: 'p-4',
          cardContent: 'p-0 pb-4',
        }"
        class="col-span-full rounded-lg lg:col-span-3"
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
        class="col-span-full rounded-lg lg:col-span-1"
      >
        <ProjectManagementRecentActivities />
      </NCard>
    </div>
  </main>
</template>
