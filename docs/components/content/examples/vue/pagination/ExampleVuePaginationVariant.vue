<template>
  <div class="flex flex-col">
    <NPagination
      :total="100"
      pagination-selected="solid-gray"
      pagination-unselected="ghost-gray"
      show-edges
    />

    <NSeparator />

    <NPagination
      :total="100"
      pagination-selected="solid-orange"
      pagination-unselected="outline-orange"
      pagination-ellipsis="outline-orange"
      show-edges
    />
  </div>
</template>
