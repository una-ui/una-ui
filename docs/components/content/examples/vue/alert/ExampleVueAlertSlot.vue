<template>
  <div flex="~ col" space-y-4>
    <NAlert alert="outline-info" icon>
      <template #title>
        <div class="flex-1 md:flex md:justify-between space-y-3 md:space-y-0">
          <p class="text-brand">
            Discover the latest software update: version 0.1.0-beta, packed with exciting new features and improvements.
          </p>
          <NButton btn="text-info" to="#" class="p-0 md:ml-4">
            Details

            <template #trailing>
              <NIcon name="i-heroicons-arrow-right-20-solid" aria-hidden="true" class="animate-pulse hover:animate-none" />
            </template>
          </NButton>
        </div>
      </template>
    </NAlert>

    <NAlert alert="soft-error" icon>
      <template #title>
        There were some errors with your submission
      </template>
      <template #description>
        <ul role="list" class="list-disc pl-5 space-y-1">
          <li>The team name must be a string.</li>
          <li>The team name must be at least 1 characters.</li>
        </ul>
      </template>
    </NAlert>

    <NAlert alert="border-success" icon>
      <template #title>
        Payment completed
      </template>
      <template #description>
        <div class="text-sm text-success-700 dark:text-success-200">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
        </div>
        <div class="mt-4">
          <div class="flex -mx-2.5 -my-1.5">
            <NButton leading="i-heroicons-document-text-20-solid" btn="ghost-success" class="text-success-800 dark:text-success-100">
              View receipt
            </NButton>
            <NButton btn="ghost-success" class="text-success-800 dark:text-success-100">
              Dismiss
            </NButton>
          </div>
        </div>
      </template>
    </NAlert>
  </div>
</template>
