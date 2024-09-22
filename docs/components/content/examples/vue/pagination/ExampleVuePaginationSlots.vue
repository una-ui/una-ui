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
          :square="false"
          pagination-unselected="ghost-gray"
          pagination-selected="solid-white"
          :value="item.value"
          class="gap-0"
          leading="i-lucide-hash"
          :label="`${item.value}`"
          :page
          :una="{
            btnLeading: 'text-10px',
          }"
        />
      </template>

      <template #ellipsis>
        <NIcon
          name="i-lucide-chevrons-left-right-ellipsis"
          size="xs"
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
