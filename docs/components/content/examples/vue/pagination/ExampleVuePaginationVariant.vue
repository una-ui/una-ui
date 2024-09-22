<template>
  <div class="flex flex-col">
    <NPagination
      :total="100"
      pagination-selected="solid-white"
      pagination-unselected="ghost-gray"
      show-edges
    />

    <NSeparator />

    <NPagination
      :total="100"
      pagination-selected="solid-black"
      pagination-unselected="ghost-gray"
      show-edges
    />

    <NSeparator />

    <NPagination
      :total="100"
      pagination-selected="solid-green"
      pagination-unselected="outline-green"
      pagination-ellipsis="text-green"
      show-edges
    />

    <NSeparator />

    <NPagination
      :total="100"
      pagination-selected="solid-indigo"
      pagination-unselected="soft-indigo"
      pagination-ellipsis="text-indigo"
      show-edges
    />
  </div>
</template>
