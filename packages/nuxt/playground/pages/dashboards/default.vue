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
          leading="i-lucide-users"
          label="Organization"
        />
        <NButton
          btn="solid-white"
          leading="i-lucide-receipt-pound-sterling"
          label="Invoice"
        />
        <NButton
          label="Download"
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
          cardTitle: 'text-lg',
        }"
        description="What's happening around you"
        class="col-span-1 lg:col-span-2"
      >
        <div class="space-y-4">
          <div class="bg-card flex items-center gap-4 border rounded-lg p-3">
            <div class="i-lucide-git-commit text-xl text-primary" />
            <div>
              <p class="font-medium">
                New commit pushed
              </p>
              <p class="text-muted-foreground text-sm">
                feat: add dashboard components
              </p>
            </div>
            <span class="text-muted-foreground ml-auto text-sm">2m ago</span>
          </div>
          <div class="bg-card flex items-center gap-4 border rounded-lg p-3">
            <div class="i-lucide-message-circle text-xl text-primary" />
            <div>
              <p class="font-medium">
                New comment
              </p>
              <p class="text-muted-foreground text-sm">
                on "Getting Started" guide
              </p>
            </div>
            <span class="text-muted-foreground ml-auto text-sm">1h ago</span>
          </div>
          <div class="bg-card flex items-center gap-4 border rounded-lg p-3">
            <div class="i-lucide-user-plus text-xl text-primary" />
            <div>
              <p class="font-medium">
                New team member
              </p>
              <p class="text-muted-foreground text-sm">
                John Doe joined Design team
              </p>
            </div>
            <span class="text-muted-foreground ml-auto text-sm">2h ago</span>
          </div>
        </div>
      </NCard>
    </div>
  </main>
</template>
