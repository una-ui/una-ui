<template>
  <div class="flex items-start">
    <NPagination
      :total="100"
      :show-first="false"
      :show-last="false"
      show-edges
      rounded="none"
      :_pagination-list="{
        class: 'gap-0 divide-x divide-base border-1 border-base',
        rounded: 'r-full l-full',
      }"
      :_pagination-prev="{
        icon: false,
        square: false,
        paginationUnselected: 'ghost-white',
        label: 'Previous',
        leading: 'i-lucide-arrow-left',
      }"
      :_pagination-list-item="{
        paginationUnselected: 'ghost-white',
        paginationSelected: 'solid-black',
      }"
      :_pagination-next="{
        icon: false,
        square: false,
        paginationUnselected: 'ghost-white',
        label: 'Next',
        trailing: 'i-lucide-arrow-right',
      }"
    />
  </div>
</template>
