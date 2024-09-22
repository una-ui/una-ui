<template>
  <div class="flex items-start">
    <NPagination
      :total="100"
      :show-first="false"
      :show-last="false"
      show-edges
    >
      <template #prev>
        <NButton
          btn="ghost-gray"
          label="Previous"
          leading="i-lucide-chevron-left"
        />
      </template>

      <template #list-item="{ item, page }">
        <NPaginationListItem
          pagination-unselected="ghost-gray"
          pagination-selected="solid-white"
          :value="item.value"
          :page
        />
      </template>

      <template #next>
        <NButton
          btn="ghost-gray"
          label="Next"
          trailing="i-lucide-chevron-right"
        />
      </template>
    </NPagination>
  </div>
</template>
