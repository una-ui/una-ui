<template>
  <div class="flex flex-col gap-4">
    <NPagination
      :total="100"
      pagination-selected="solid-gray"
      pagination-unselected="ghost-gray"
      show-edges
    />

    <NSeparator />

    <NPagination
      :total="100"
      pagination-selected="solid-pink"
      pagination-unselected="outline-pink"
      pagination-ellipsis="text-pink"
      show-edges
      rounded
    />

    <NSeparator />

    <NPagination
      :total="100"
      pagination-selected="solid-blue"
      pagination-unselected="outline-blue"
      show-edges
    />
  </div>
</template>
