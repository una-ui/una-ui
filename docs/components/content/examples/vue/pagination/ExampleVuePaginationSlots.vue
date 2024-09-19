<template>
  <div flex items-start>
    <NPagination
      :total="100"
      :is-first-visible="false"
      :is-last-visible="false"
    >
      <template #pagination-prev>
        <NButton
          btn="ghost-gray"
          leading="i-lucide-chevron-left"
        >
          Previous
        </NButton>
      </template>

      <template #pagination-next>
        <NButton
          btn="ghost-gray"
          trailing="i-lucide-chevron-right"
        >
          Next
        </NButton>
      </template>
    </NPagination>
  </div>
</template>
