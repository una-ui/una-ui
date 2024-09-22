<template>
  <div class="flex items-start">
    <NPagination
      :total="100"
      :show-first="false"
      :show-last="false"
      :_pagination-prev="{
        icon: false,
        paginationUnselected: 'ghost-error rectangle',
        label: 'Previous',
        leading: 'i-lucide-arrow-left',
      }"
      :_pagination-next="{
        icon: false,
        paginationUnselected: 'ghost-success rectangle',
        label: 'Next',
        trailing: 'i-lucide-arrow-right',
      }"
      :_pagination-list-item="{
        rounded: 'none',
        paginationUnselected: 'text-gray',
        paginationSelected: 'solid-black',
      }"
    />
  </div>
</template>
