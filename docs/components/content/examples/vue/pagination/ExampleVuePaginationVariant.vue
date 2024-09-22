<template>
  <div class="flex flex-col">
    <NPagination
      :total="100"
      pagination-selected="solid-black"
      pagination-unselected="ghost-gray"
      show-edges
    />

    <NSeparator />

    <NPagination
      :total="100"
      pagination-selected="solid-primary"
      pagination-unselected="link-primary"
      show-edges
    />

    <NSeparator />

    <NPagination
      :total="100"
      pagination-selected="solid-pink"
      pagination-unselected="ghost-pink"
      pagination-ellipsis="text-pink"
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
