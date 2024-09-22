<template>
  <div
    class="grid w-full place-items-center"
  >
    <NCard class="sm:w-100">
      <template #header>
        <div h-40>
          <img
            src="https://images.unsplash.com/photo-1700527736181-67795948c0b1?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Card image"
            class="h-full w-full object-cover"
          >
        </div>
      </template>

      <template #title>
        <div class="flex items-center justify-between">
          Advanced Card
          <NButton
            size="sm"
            icon
            class="rounded-full"
            btn="ghost-gray"
            square
            label="i-heroicons-ellipsis-vertical"
          />
        </div>
      </template>

      <template #description>
        This example shows how you can use named templates for customization

        <div class="mt-2 flex items-center space-x-2">
          <NBadge
            label="New"
            badge="soft-success"
          />

          <NBadge
            label="Beta"
          />
        </div>
      </template>

      <!-- content -->
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <NIcon name="i-heroicons-user-circle-solid" />
          <span>John Doe</span>
        </div>
        <div class="flex items-baseline gap-2">
          <NIcon name="i-heroicons-map-pin-solid" />
          <span>San Francisco, CA</span>
        </div>
        <div class="flex items-center gap-2">
          <NIcon name="i-heroicons-calendar-solid" />
          <span>Joined on 2021-01-01</span>
        </div>
      </div>

      <template #footer>
        <div class="w-full flex flex-col">
          <div mt-2 w-full gap-4 flex="~ justify-between items-center">
            <NButton
              size="md"
              btn="ghost-warning"
              class="-mx-2"
            >
              Explore
            </NButton>
            <NButton
              size="md"
              icon
              label="i-heroicons-chevron-down-solid"
              btn="text-gray"
              class="rounded-full"
            />
          </div>
        </div>
      </template>
    </NCard>
  </div>
</template>
