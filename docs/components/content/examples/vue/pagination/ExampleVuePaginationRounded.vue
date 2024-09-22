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
      pagination-selected="solid-pink"
      pagination-unselected="outline-pink"
      pagination-ellipsis="text-pink"
      show-edges
      rounded="full"
    />

    <NSeparator />

    <NPagination
      :total="100"
      rounded="b-full"
      pagination-selected="solid-indigo"
      pagination-unselected="text-white"
      pagination-ellipsis="text-white"
      show-edges
    />
  </div>
</template>
