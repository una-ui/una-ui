<template>
  <div flex items-start>
    <NPagination
      :total="100"
      :show-first="false"
      :show-last="false"
      :_pagination-prev="{
        icon: false,
        btn: 'ghost-gray !rectangle',
        label: 'Previous',
        leading: 'i-lucide-chevron-left',
      }"
    >
      <!-- <template #pagination-prev>
        <NButton
          btn="ghost-gray"
          leading="i-lucide-chevron-left"
        >
          Previous
        </NButton>
      </template> -->

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
