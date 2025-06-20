<template>
  <main class="flex flex-col gap-6 p-4">
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
          btn="outline-gray"
          leading="i-lucide-git-pull-request-create text-lg"
          label="30 Pull Request"
        />
        <NButton
          btn="outline-gray"
          leading="i-lucide-folder-git-2 text-lg"
          label="230 Issues"
        />
      </div>
    </div>

    <ProjectManagementCardMetrics />

    <ProjectManagementTableIssues />
  </main>
</template>
