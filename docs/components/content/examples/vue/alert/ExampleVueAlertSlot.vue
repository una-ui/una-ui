<template>
  <div flex="~ col" space-y-4>
    <NAlert alert="border-error" icon>
      <template #title>
        There were 2 errors with your submission
      </template>
      <template #description>
        <ul role="list" class="list-disc pl-5 space-y-1">
          <li>The team name must be a string.</li>
          <li>The team name must be at least 1 characters.</li>
        </ul>
      </template>
    </NAlert>

    <NAlert alert="soft-success" icon>
      <template #title>
        Payment completed
      </template>
      <template #description>
        <div class="text-sm text-success-700 dark:text-success-200">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
        </div>
        <div class="mt-4">
          <div class="flex -mx-2 -my-1.5">
            <NButton leading="i-heroicons-document-text-20-solid" btn="ghost-success" class="px-2 text-success-800 dark:text-success-100">
              View receipt
            </NButton>
            <NButton btn="ghost-success" class="px-2 text-success-800 dark:text-success-100">
              Dismiss
            </NButton>
          </div>
        </div>
      </template>
    </NAlert>
  </div>
</template>
