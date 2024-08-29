<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev, PaginationRoot } from 'radix-vue'
</script>

<template>
  <PaginationRoot
    :total="100"
    :sibling-count="1"
    show-edges
    :default-page="2"
  >
    <PaginationList
      v-slot="{ items }"
      class="flex items-center gap-1 text-white"
    >
      <PaginationFirst class="h-9 w-9 flex items-center justify-center rounded disabled:opacity-50 focus-within:outline-1 focus-within:outline-offset-1 focus-within:outline">
        <Icon icon="radix-icons:double-arrow-left" />
      </PaginationFirst>
      <PaginationPrev class="mr-4 h-9 w-9 flex items-center justify-center rounded disabled:opacity-50 focus-within:outline-1 focus-within:outline-offset-1 focus-within:outline">
        <Icon icon="radix-icons:chevron-left" />
      </PaginationPrev>
      <template v-for="(page, index) in items">
        <PaginationListItem
          v-if="page.type === 'page'"
          :key="index"
          class="data-[selected]:text-blackA11 h-9 w-9 border rounded transition data-[selected]:bg-white hover:bg-white/10 focus-within:outline-1 focus-within:outline-offset-1 focus-within:outline"
          :value="page.value"
        >
          {{ page.value }}
        </PaginationListItem>
        <PaginationEllipsis
          v-else
          :key="page.type"
          :index="index"
          class="h-9 w-9 flex items-center justify-center"
        >
          &#8230;
        </PaginationEllipsis>
      </template>
      <PaginationNext class="ml-4 h-9 w-9 flex items-center justify-center rounded disabled:opacity-50 focus-within:outline-1 focus-within:outline-offset-1 focus-within:outline">
        <Icon icon="radix-icons:chevron-right" />
      </PaginationNext>
      <PaginationLast class="h-9 w-9 flex items-center justify-center rounded disabled:opacity-50 focus-within:outline-1 focus-within:outline-offset-1 focus-within:outline">
        <Icon icon="radix-icons:double-arrow-right" />
      </PaginationLast>
    </PaginationList>
  </PaginationRoot>
</template>
