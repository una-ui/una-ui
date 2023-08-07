<template>
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
</template>
