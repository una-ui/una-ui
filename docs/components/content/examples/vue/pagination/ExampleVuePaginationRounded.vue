<template>
  <div class="flex flex-col">
    <NPagination
      :total="100"
      pagination-selected="solid-white"
      pagination-unselected="ghost-gray"
      show-edges
      rounded="b-2xl"
    />

    <NSeparator />

    <NPagination
      :total="100"
      pagination-selected="solid-black"
      pagination-unselected="ghost-gray"
      show-edges
      rounded="full"
    />

    <NSeparator />

    <NPagination
      :total="100"
      pagination-selected="solid-orange"
      pagination-unselected="outline-white"
      pagination-ellipsis="text-orange"
      rounded="none"
      show-edges
    />

    <NSeparator />

    <NPagination
      :total="100"
      pagination-selected="solid-yellow"
      pagination-unselected="outline-white"
      pagination-ellipsis="text-yellow"
      show-edges
      rounded="t-full"
    />
  </div>
</template>
